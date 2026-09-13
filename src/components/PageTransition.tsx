"use client";

import { ViewTransition } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function PageTransition({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isInitialRender = useRef(true);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    setShowLoader(true);
    const timeout = window.setTimeout(() => setShowLoader(false), 1050);

    return () => window.clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <ViewTransition
        key={pathname}
        enter="page-enter"
        exit="page-exit"
        default="none"
      >
        <div className="page-transition-content">{children}</div>
      </ViewTransition>
      {showLoader && (
        <div className="page-transition-loader" aria-hidden="true">
          <Image src="/crop-logo.png" alt="" width={64} height={64} />
        </div>
      )}
    </>
  );
}