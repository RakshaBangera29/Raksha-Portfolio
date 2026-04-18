import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const getSectionTop = (id: string) => {
      const element = document.getElementById(id);
      if (!element) return Number.POSITIVE_INFINITY;
      return element.getBoundingClientRect().top + window.scrollY;
    };

    const updateActiveSection = () => {
      const navOffset = 140;
      const currentPosition = window.scrollY + navOffset;
      const pageBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 8;
      let currentId = "";

      if (pageBottom) {
        setActiveId(sectionIds[sectionIds.length - 1] ?? currentId);
        return;
      }

      for (const id of sectionIds) {
        if (getSectionTop(id) <= currentPosition) {
          currentId = id;
        } else {
          break;
        }
      }

      setActiveId(currentId);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sectionIds]);

  return activeId;
}
