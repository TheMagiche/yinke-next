//@ts-nocheck
"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { feature } from "topojson-client";
import {
  geoEqualEarth,
  geoPath,
  geoCentroid,
  geoGraticule10,
} from "d3-geo";
import geoData from "@/src/assets/data/countries-110m.json";

const WIDTH = 800;
const HEIGHT = 620;

// Frame the African continent (lon -26..60, lat -40..38) in the viewport.
const projection = geoEqualEarth()
  .center([17, -1])
  .fitSize([WIDTH, HEIGHT], {
    type: "Polygon",
    coordinates: [
      [
        [-26, 38],
        [60, 38],
        [60, -40],
        [-26, -40],
        [-26, 38],
      ],
    ],
  });

const pathGen = geoPath(projection);

const HIGHLIGHTED = [
  { name: "Kenya", key: "kenya" },
  { name: "Uganda", key: "uganda" },
  { name: "Nigeria", key: "nigeria" },
  { name: "Egypt", key: "egypt" },
  { name: "Angola", key: "angola" },
];

const highlightedNames = new Set(HIGHLIGHTED.map((c) => c.name));
const keyByName = new Map(HIGHLIGHTED.map((c) => [c.name, c.key]));

export const MAP_DEFAULT_COUNTRY = HIGHLIGHTED[0].name;
export const MAP_COUNTRIES = HIGHLIGHTED.map((c) => c.name);
export const mapFlagUrl = (name: string) =>
  `/flags/${keyByName.get(name)}-flag.png`;

const countries = (
  feature(geoData as any, (geoData as any).objects.countries) as any
)
  .features.filter((f: any) => {
    const [lon, lat] = geoCentroid(f);
    return lon >= -26 && lon <= 60 && lat >= -40 && lat <= 38;
  })
  .map((f: any) => {
    const centroid = projection(geoCentroid(f)) as [number, number];
    return {
      name: f.properties.name as string,
      d: pathGen(f) as string,
      centroid,
    };
  });

const graticulePath = pathGen(geoGraticule10()) as string;
const spherePath = pathGen({ type: "Sphere" } as any) as string;

type AfricaMapProps = {
  active: string;
  onActiveChange: (name: string) => void;
};

export default function AfricaMap({ active, onActiveChange }: AfricaMapProps) {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState<string | null>(null);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const select = (name: string) => {
    onActiveChange(name);
    setHovered(name);
  };

  const clear = () => {
    onActiveChange(MAP_DEFAULT_COUNTRY);
    setHovered(null);
  };

  const handleWrapperLeave = () => {
    clear();
    setCursor(null);
  };

  const hoveredKey = hovered ? keyByName.get(hovered) : undefined;

  return (
    <div className="africa-map">
      <div
        className="africa-map-wrapper"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleWrapperLeave}
      >
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          role="img"
          aria-label={t("home.mapTitle")}
        >
          <path className="map-graticule" d={graticulePath} />
          <path className="map-sphere" d={spherePath} />
          {countries.map((c) => {
            const isHighlighted = highlightedNames.has(c.name);
            return (
              <path
                key={c.name}
                d={c.d}
                className={`map-country${isHighlighted ? " highlighted" : ""}${
                  active === c.name ? " active" : ""
                }`}
                onMouseEnter={
                  isHighlighted ? () => select(c.name) : undefined
                }
                onMouseLeave={isHighlighted ? clear : undefined}
              />
            );
          })}
          {countries
            .filter((c) => highlightedNames.has(c.name))
            .map((c) => (
              <circle
                key={`dot-${c.name}`}
                className={`map-dot${active === c.name ? " active" : ""}`}
                cx={c.centroid[0]}
                cy={c.centroid[1]}
                r={active === c.name ? 6 : 4}
              />
            ))}
        </svg>
        {hovered && cursor && hoveredKey && (
          <div className="map-tooltip" style={{ left: cursor.x, top: cursor.y }}>
            {t(`countries.${hoveredKey}`)}
          </div>
        )}
      </div>
      <div className="map-legend">
        {HIGHLIGHTED.map((c) => (
          <span
            key={c.key}
            className={`chip${active === c.name ? " active" : ""}`}
            onMouseEnter={() => onActiveChange(c.name)}
            onMouseLeave={clear}
          >
            {t(`countries.${c.key}`)}
          </span>
        ))}
      </div>
    </div>
  );
}
