/*
	Installed from https://reactbits.dev/ts/tailwind/
*/

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

interface InfiniteScrollItem {
  content: React.ReactNode;
}

interface InfiniteScrollProps {
  width?: string;
  maxHeight?: string;
  negativeMargin?: string;
  items?: InfiniteScrollItem[];
  itemMinHeight?: number;
  isTilted?: boolean;
  tiltDirection?: "left" | "right";
  autoplay?: boolean;
  autoplaySpeed?: number;
  autoplayDirection?: "right" | "left";
  pauseOnHover?: boolean;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  // width = "30rem",
  // maxHeight = "100%",
  negativeMargin = "-0.5em",
  items = [],
  // itemMinHeight = 100,
  isTilted = false,
  tiltDirection = "left",
  autoplay = false,
  autoplaySpeed = 0.5,
  autoplayDirection = "left",
  pauseOnHover = false,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getTiltTransform = (): string => {
    if (!isTilted) return "none";
    return tiltDirection === "left"
      ? "rotateX(20deg) rotateZ(-20deg) skewX(20deg)"
      : "rotateX(20deg) rotateZ(20deg) skewX(-20deg)";
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (items.length === 0) return;

    const divItems = gsap.utils.toArray<HTMLDivElement>(container.children);
    if (!divItems.length) return;

    const firstItem = divItems[0];
    const itemStyle = getComputedStyle(firstItem);

    const itemWidth = firstItem.offsetWidth;
    const itemMarginRight = parseFloat(itemStyle.marginRight) || 0;
    const totalItemWidth = itemWidth + itemMarginRight;
    const totalWidth  =
      itemWidth * items.length + itemMarginRight * (items.length + 1);

    // const containerWidth = (containerRef.current?.offsetWidth) as number
    const nexT = totalWidth + totalItemWidth + itemMarginRight
    const wrapFn = gsap.utils.wrap(-(totalWidth + totalItemWidth) , nexT );

    divItems.forEach((child, i) => {
      const x = i * totalItemWidth;
      gsap.set(child, { x });
    });

    const observer = Observer.create({
      target: container,
      type: "wheel,touch,pointer",
      preventDefault: true,
      onPress: ({ target }) => {
        (target as HTMLElement).style.cursor = "grabbing";
      },
      onRelease: ({ target }) => {
        (target as HTMLElement).style.cursor = "grab";
      },
      onChange: ({ deltaY, isDragging, event }) => {
        const d = event.type === "wheel" ? -deltaY : deltaY;
        const distance = isDragging ? d * 5 : d * 10;
        divItems.forEach((child) => {
          gsap.to(child, {
            duration: 10,
            ease: "expo.out",
            x: `+=${distance}`,
            modifiers: {
              x: gsap.utils.unitize(wrapFn),
            },
          });
        });
      },
    });

    let rafId: number;
    if (autoplay) {
      const directionFactor = autoplayDirection === "right" ? 1 : -1;
      const speedPerFrame = autoplaySpeed * directionFactor;

      const tick = () => {
        divItems.forEach((child) => {
          gsap.set(child, {
            x: `+=${speedPerFrame}`,
            modifiers: {
              x: gsap.utils.unitize(wrapFn),
            },
          });
        });
        rafId = requestAnimationFrame(tick);
      };

      rafId = requestAnimationFrame(tick);

      if (pauseOnHover) {
        const stopTicker = () => rafId && cancelAnimationFrame(rafId);
        const startTicker = () => {
          rafId = requestAnimationFrame(tick);
        };

        container.addEventListener("mouseenter", stopTicker);
        container.addEventListener("mouseleave", startTicker);

        return () => {
          observer.kill();
          stopTicker();
          container.removeEventListener("mouseenter", stopTicker);
          container.removeEventListener("mouseleave", startTicker);
        };
      } else {
        return () => {
          observer.kill();
          rafId && cancelAnimationFrame(rafId);
        };
      }
    }

    return () => {
      observer.kill();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [
    items,
    autoplay,
    autoplaySpeed,
    autoplayDirection,
    pauseOnHover,
    isTilted,
    tiltDirection,
    negativeMargin,
  ]);

  return (
    <>
      <div className={`infinite-scroll-wrapper w-full max-w-full`} ref={wrapperRef}>
        <div
          className="infinite-scroll-container w-[100%] flex"
          ref={containerRef}
          style={{
            transform: getTiltTransform(),
          }}
        >
          {items.map((item, i) => (
            <div className={`infinite-scroll-item h-fit w-fit`} key={i}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfiniteScroll;
