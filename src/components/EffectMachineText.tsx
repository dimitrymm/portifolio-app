/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';

interface EffectProps {
  text: string;
  hideCursor?: boolean;
  delay?: number;
}

export default function EffectMachineText({
  text: initialText,
  hideCursor,
  delay = 200,
}: EffectProps) {
  const [text, setText] = useState<string>('');
  const [showCursor, setShowCursor] = useState<boolean>(false);

  const writeOnScreen = (text: string, i = 0) => {
    if (i < text.length) {
      setShowCursor(true);
      setText(text.slice(0, i + 1));
      setTimeout(() => writeOnScreen(text, i + 1), 100);
    } else if (i >= text.length && hideCursor) {
      setShowCursor(false);
    }
  };

  useEffect(() => {
    setTimeout(() => writeOnScreen(initialText), delay);
  }, [initialText, delay]);
  return (
    <div>
      {text}
      {showCursor && (
        <span className="animate-animar-cursor text-3xl md:text-2xl ml-1 font-medium">
          |
        </span>
      )}
    </div>
  );
}
