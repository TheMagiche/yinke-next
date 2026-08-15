"use client";

import React from "react";

/** Layered polygonal paper folds — decorative origami plane for noir surfaces. */
export default function OrigamiFolds({
  variant = "hero",
}: {
  variant?: "hero" | "panel" | "footer";
}) {
  if (variant === "footer") {
    return (
      <div className="origami-folds footer-folds" aria-hidden>
        <span className="fold f1" />
        <span className="fold f2" />
        <span className="fold f3" />
      </div>
    );
  }

  if (variant === "panel") {
    return (
      <div className="origami-folds panel-folds" aria-hidden>
        <span className="fold f1" />
        <span className="fold f2" />
      </div>
    );
  }

  return (
    <div className="origami-folds hero-folds" aria-hidden>
      <span className="fold f1" />
      <span className="fold f2" />
      <span className="fold f3" />
      <span className="fold f4" />
      <span className="fold f5" />
      <span className="crease c1" />
      <span className="crease c2" />
    </div>
  );
}
