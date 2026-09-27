"use client";

import { usePathname } from "@/lib/navigation";
import { useEffect, useRef, useState } from "react";
import { LoadingMark } from "@/components/brand/LoadingMark";

const MIN_VISIBLE_MS = 520;
const MAX_VISIBLE_MS = 8000;

export function RouteLoading() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const pathnameRef = useRef(pathname);
  const targetPath = useRef<string | null>(null);
  const shownAt = useRef(0);
  const hideTimer = useRef<number | null>(null);
  const failTimer = useRef<number | null>(null);

  useEffect(() => {
    pathnameRef.current = pathname;
  }, [pathname]);

  useEffect(() => {
    function clearHide() {
      if (hideTimer.current !== null) {
        window.clearTimeout(hideTimer.current);
        hideTimer.current = null;
      }
    }

    function clearFail() {
      if (failTimer.current !== null) {
        window.clearTimeout(failTimer.current);
        failTimer.current = null;
      }
    }

    function begin(nextPath: string) {
      if (nextPath === pathnameRef.current && targetPath.current === null) return;
      targetPath.current = nextPath;
      shownAt.current = Date.now();
      setVisible(true);
      clearHide();
      clearFail();
      failTimer.current = window.setTimeout(() => {
        targetPath.current = null;
        setVisible(false);
        failTimer.current = null;
      }, MAX_VISIBLE_MS);
    }

    function onClick(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;

      begin(url.pathname);
    }

    function onPopState() {
      const nextPath = window.location.pathname;
      if (nextPath === pathnameRef.current) return;
      begin(nextPath);
    }

    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPopState);

    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPopState);
      clearHide();
      clearFail();
    };
  }, []);

  useEffect(() => {
    if (!targetPath.current || pathname !== targetPath.current) return;

    const wait = Math.max(0, MIN_VISIBLE_MS - (Date.now() - shownAt.current));
    hideTimer.current = window.setTimeout(() => {
      targetPath.current = null;
      setVisible(false);
      hideTimer.current = null;
      if (failTimer.current !== null) {
        window.clearTimeout(failTimer.current);
        failTimer.current = null;
      }
    }, wait);

    return () => {
      if (hideTimer.current !== null) {
        window.clearTimeout(hideTimer.current);
        hideTimer.current = null;
      }
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 top-16 z-40 flex items-center justify-center bg-paper lg:top-[4.5rem]">
      <LoadingMark />
    </div>
  );
}
