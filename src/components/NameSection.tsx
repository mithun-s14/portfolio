'use client';

import { useState, useEffect } from 'react';
import TextPressure from './TextPressure';
import { ArrowDownRight } from './icons';

export default function NameSection() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY < 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/*
        paddingTop clears the absolute navbar.
        The container fills the viewport and centers the name block.
        scale={false} + overflow:hidden lets each row use vw-based heights
        that exactly match the uppercase cap height (≈ 0.72 × fontSize),
        keeping the two names flush with no gap.
      */}
      <section
        className="flex flex-col justify-center overflow-x-hidden"
        style={{ minHeight: '100vh', paddingTop: '80px', paddingBottom: '60px' }}
      >
        {/* "MITHUN" — fontSize = vw/3, container matches full em height */}
        <div style={{ height: 'calc(100vw / 3)', width: '100%' }}>
          <TextPressure
            text="Mithun"
            flex={true}
            weight={true}
            width={true}
            italic={false}
            scale={false}
            textColor="#000000"
            minFontSize={48}
          />
        </div>
        {/* "SIVAPATHASUNDRAM" — fontSize = vw/8, container matches full em height */}
        <div style={{ height: 'calc(100vw / 8)', width: '100%', minHeight: '40px' }}>
          <TextPressure
            text="Sivapathasundram"
            flex={true}
            weight={true}
            width={true}
            italic={false}
            scale={false}
            textColor="#000000"
            minFontSize={24}
          />
        </div>
      </section>
    </>
  );
}
