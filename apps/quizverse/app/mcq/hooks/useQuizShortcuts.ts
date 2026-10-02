import { useEffect, useRef } from "react";

interface ShortcutHandlers {
  onSelectIndex: (optionIndex: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  onToggleFlag: () => void;
}

/** Keyboard shortcuts: 1-4 / A-D pick an option, ←/→ navigate, F flags. */
export function useQuizShortcuts(handlers: ShortcutHandlers) {
  const ref = useRef(handlers);
  useEffect(() => {
    ref.current = handlers;
  });

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const key = event.key.toLowerCase();
      const h = ref.current;

      if (/^[1-4]$/.test(key)) h.onSelectIndex(Number(key) - 1);
      else if (/^[a-d]$/.test(key)) h.onSelectIndex(key.charCodeAt(0) - 97);
      else if (key === "arrowleft") h.onPrevious();
      else if (key === "arrowright") h.onNext();
      else if (key === "f") h.onToggleFlag();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
}
