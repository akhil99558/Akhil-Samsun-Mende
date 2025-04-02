
import React, { useState, useEffect, useCallback } from 'react';

interface TypewriterEffectProps {
  texts: string[];
  typingSpeed?: number;
  erasingSpeed?: number;
  pauseTime?: number;
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  texts,
  typingSpeed = 100,
  erasingSpeed = 50,
  pauseTime = 1500,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const typeText = useCallback(() => {
    const currentText = texts[currentIndex];
    
    if (isTyping) {
      if (displayText.length < currentText.length) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      } else {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsTyping(false);
        }, pauseTime);
      }
    } else {
      if (displayText.length > 0) {
        setDisplayText(displayText.substring(0, displayText.length - 1));
      } else {
        setIsTyping(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }
  }, [displayText, currentIndex, isTyping, isPaused, texts, pauseTime]);

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setTimeout(
      typeText, 
      isTyping ? typingSpeed : erasingSpeed
    );
    
    return () => clearTimeout(timer);
  }, [displayText, isTyping, isPaused, typeText, typingSpeed, erasingSpeed]);

  return (
    <span className="inline">
      {displayText}
      <span className="typing-cursor" aria-hidden="true"></span>
    </span>
  );
};

export default TypewriterEffect;
