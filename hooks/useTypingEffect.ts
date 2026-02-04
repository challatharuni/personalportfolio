import { useState, useEffect } from "react";

export function useTypingEffect(
  texts: string[],
  typingSpeed: number = 100,
  deletingSpeed: number = 50,
  pauseDuration: number = 2000
) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const currentText = texts[currentIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        return;
      }

      const deleteTimer = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
      return () => clearTimeout(deleteTimer);
    }

    if (displayText === currentText) {
      setIsPaused(true);
      return;
    }

    const typeTimer = setTimeout(() => {
      setDisplayText(currentText.slice(0, displayText.length + 1));
    }, typingSpeed);

    return () => clearTimeout(typeTimer);
  }, [displayText, currentIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}
