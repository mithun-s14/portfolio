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
      <section
        className="flex flex-col justify-center overflow-x-hidden"
        style={{ minHeight: '100vh', paddingTop: '80px', paddingBottom: '60px' }}
      >
        {/* "MITHUN" — fontSize = vw/3, container matches full em height. */}
        <div style={{ height: 'max(48px, calc(100vw / 3))', width: '100%' }}>
          <TextPressure
            text="Mithun"
            fontFamily="Big Shoulders"
            fontUrl=""
            flex={true}
            weight={true}
            width={false}
            italic={false}
            scale={false}
            textColor="#000000"
            minFontSize={48}
          />
        </div>
        {/* "SIVAPATHASUNDRAM" — fontSize = vw/8, container matches full em height. */}
        <div style={{ height: 'max(24px, calc(100vw / 8))', width: '100%' }}>
          <TextPressure
            text="Sivapathasundram"
            fontFamily="Big Shoulders"
            fontUrl=""
            flex={true}
            weight={true}
            width={false}
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
