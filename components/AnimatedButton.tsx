import { useRef, type ReactNode, type MouseEvent } from "react";
import { gsap } from "gsap";

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  type?: "button" | "submit";
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  disabled = false,
  type = "button",
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  const baseClasses =
    "relative overflow-hidden font-semibold transition-all duration-300 rounded-full inline-flex items-center justify-center";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/25",
    secondary:
      "bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700",
    ghost:
      "bg-transparent border-2 border-slate-600 text-slate-300 hover:border-purple-500 hover:text-white",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const handleMouseEnter = () => {
    if (disabled || !buttonRef.current) return;
    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (disabled || !buttonRef.current) return;
    gsap.to(buttonRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const ripple = rippleRef.current;
    const button = buttonRef.current;
    if (disabled || !ripple || !button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.set(ripple, { x: x - 10, y: y - 10, scale: 0, opacity: 0.6 });
    gsap.to(ripple, {
      scale: 4,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });
    gsap.to(button, {
      scale: 0.95,
      duration: 0.1,
      ease: "power2.out",
      yoyo: true,
      repeat: 1,
    });

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${
        sizeClasses[size]
      } ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <div
        ref={rippleRef}
        className="absolute w-5 h-5 bg-white rounded-full pointer-events-none"
        style={{ transform: "scale(0)", opacity: 0 }}
      />
      {children}
    </button>
  );
};

export default AnimatedButton;
