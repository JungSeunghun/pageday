"use client"

import { useRef, MouseEvent, WheelEvent } from 'react';

import Header from './_components/header/header';
import PopularBooks from './_components/popularBooks/popularBooks';
import PopularPosts from './_components/popularPosts/popularPosts';
import styles from './page.module.css';

export default function Record() {
  const containerRef = useRef<HTMLDivElement>(null);
  const velocity = useRef<number>(0);
  const lastY = useRef<number | null>(null);
  const animationFrameId = useRef<number | null>(null);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (container) {
      container.dataset.isDragging = 'true';
      container.dataset.startY = String(e.pageY - container.offsetTop);
      container.dataset.scrollTop = String(container.scrollTop);
      velocity.current = 0;
      lastY.current = e.pageY;
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (container && container.dataset.isDragging === 'true') {
      e.preventDefault();
      const startY = Number(container.dataset.startY);
      const scrollTop = Number(container.dataset.scrollTop);
      const y = e.pageY - container.offsetTop;
      const walk = (startY - y);
      container.scrollTop = scrollTop + walk;
      if (lastY.current !== null) {
        velocity.current = lastY.current - y;
      }
      lastY.current = e.pageY;
    }
  };

  const handleMouseUp = () => {
    const container = containerRef.current;
    if (container) {
      container.dataset.isDragging = 'false';
      if (velocity.current !== 0) {
        startDeceleration();
      }
    }
  };

  const handleMouseLeave = () => {
    const container = containerRef.current;
    if (container && container.dataset.isDragging === 'true') {
      container.dataset.isDragging = 'false';
      if (velocity.current !== 0) {
        startDeceleration();
      }
    }
  };

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (container) {
      velocity.current += e.deltaY * 0.2;
      if (animationFrameId.current === null) {
        startDeceleration();
      }
    }
  };

  const startDeceleration = () => {
    const container = containerRef.current;
    if (!container) return;

    const step = () => {
      container.scrollTop += velocity.current;
      velocity.current *= 0.95;

      if (Math.abs(velocity.current) > 0.5) {
        animationFrameId.current = requestAnimationFrame(step);
      } else {
        velocity.current = 0;
        animationFrameId.current = null;
      }
    };

    if (animationFrameId.current !== null) {
      cancelAnimationFrame(animationFrameId.current);
    }
    animationFrameId.current = requestAnimationFrame(step);
  };

  return (
    <div
      className={`${styles.container} ${styles.scrollable}`}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onWheel={handleWheel}
    >
      <Header />
      <PopularBooks />
      <PopularPosts />
    </div>
  );
};
