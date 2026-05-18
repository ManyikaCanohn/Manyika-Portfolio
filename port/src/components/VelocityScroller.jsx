import { useRef, useEffect } from "react";

export default function VelocityScroller({ children }) {
  const containerRef = useRef(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocity = useRef(0);
  const animation = useRef(null);

  const friction = 0.92;

  const onMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;

    cancelAnimationFrame(animation.current);
  };

  const onMouseLeave = () => {
    isDown.current = false;
    startMomentum();
  };

  const onMouseUp = () => {
    isDown.current = false;
    startMomentum();
  };

  const onMouseMove = (e) => {
    if (!isDown.current) return;

    e.preventDefault();

    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX.current;

    const prevScroll = containerRef.current.scrollLeft;
    containerRef.current.scrollLeft = scrollLeft.current - walk;

    velocity.current = containerRef.current.scrollLeft - prevScroll;
  };

  const startMomentum = () => {
    const step = () => {
      if (!containerRef.current) return;

      containerRef.current.scrollLeft += velocity.current;

      velocity.current *= friction;

      if (Math.abs(velocity.current) > 0.5) {
        animation.current = requestAnimationFrame(step);
      }
    };

    animation.current = requestAnimationFrame(step);
  };

  return (
    <div
      ref={containerRef}
      className="
        flex gap-6
        overflow-x-scroll
        scrollbar-hide
        cursor-grab
        active:cursor-grabbing
        select-none
        px-10
      "
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {children}
    </div>
  );
}