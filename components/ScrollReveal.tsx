import React, { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  triggerOnce?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 60,
  className = "",
  triggerOnce = true,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const initialState: gsap.TweenVars = { opacity: 0 };
    const finalState: gsap.TweenVars = {
      opacity: 1,
      duration,
      delay,
      ease: "power3.out",
    };

    switch (direction) {
      case "up":
        initialState.y = distance;
        finalState.y = 0;
        break;
      case "down":
        initialState.y = -distance;
        finalState.y = 0;
        break;
      case "left":
        initialState.x = distance;
        finalState.x = 0;
        break;
      case "right":
        initialState.x = -distance;
        finalState.x = 0;
        break;
      case "scale":
        initialState.scale = 0.8;
        finalState.scale = 1;
        finalState.ease = "back.out(1.7)";
        break;
      case "fade":
        break;
    }

    gsap.set(element, initialState);

    const animation = gsap.to(element, finalState);

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      end: "bottom 15%",
      toggleActions: triggerOnce
        ? "play none none none"
        : "play none none reverse",
      animation: animation,
    });

    return () => {
      animation.kill();
      scrollTriggerInstance.kill();
    };
  }, [direction, delay, duration, distance, triggerOnce]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
