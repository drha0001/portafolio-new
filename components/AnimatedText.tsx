import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  cursor?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 2,
  cursor = false
}) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const tl = gsap.timeline({ delay });

    tl.to(textRef.current, {
      duration,
      text: {
        value: text,
        delimiter: ""
      },
      ease: "none"
    });

    if (cursor) {
      tl.to(textRef.current, {
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        css: { "border-right": "2px solid transparent" }
      }, 0);
    }

    return () => {
      tl.kill();
    };
  }, [text, delay, duration, cursor]);

  return (
    <span
      ref={textRef}
      className={`${className} ${cursor ? 'border-r-2 border-purple-400' : ''}`}
    />
  );
};

export default AnimatedText;
