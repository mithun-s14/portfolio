'use client';

import { useState, useEffect } from 'react';
import MetaBalls from './MetaBalls';

export default function Hero() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, '0');
      const m = now.getMinutes().toString().padStart(2, '0');
      setTime(`${h}:${m}`);
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero-enter relative flex min-h-screen flex-col items-center justify-between bg-foreground p-6 pt-32 text-white sm:justify-center">
      <div className="w-full bg-foreground pt-[150px] sm:max-w-[1800px]">
        {/* Profile avatar + headline + MetaBalls */}
        <div className="relative flex items-start justify-between sm:mx-[100px]">
          <div className="flex flex-col gap-6">
            <h2 className="ml-3 text-xl font-medium sm:text-[5vh]">
              Let&apos;s work together!
            </h2>

            {/* Email pill */}
            <div className="flex gap-5">
              <a href="mailto:mithunsivapathasundram@gmail.com">
                <button
                  className="hover-fill group relative flex cursor-pointer items-center justify-center rounded-full border border-gray-500 px-4 py-[0.9rem] text-sm font-medium text-white"
                  style={{ overflow: 'hidden' }}
                >
                  <span className="hf-text transition-colors group-hover:text-foreground">
                    mithunsivapathasundram@gmail.com
                  </span>
                  <span className="hf-layer bg-background" />
                </button>
              </a>
            </div>
          </div>

          {/* MetaBalls aligned to the right */}
          <div className="hidden sm:block" style={{ width: '380px', height: '300px', marginTop: '-80px' }}>
            <MetaBalls
              color="#ffffff"
              cursorBallColor="#ffffff"
              speed={0.3}
              ballCount={15}
              animationSize={25}
              enableMouseInteraction={true}
              enableTransparency={true}
            />
          </div>
        </div>

        {/* Info row: bio | version/timezone | socials */}
        <div className="mt-20 flex flex-col justify-between p-5 sm:mx-[100px] sm:mt-48 sm:flex-row" style={{ marginTop: '220px' }}>
          <p className="mb-5 max-w-xs text-base leading-relaxed">
            Full-stack developer | Interested in ML | 2026 new grad |
            Passionate about building software that makes an impact.
          </p>

          <div className="flex items-end gap-4">
            <span className="flex flex-col gap-3">
              <h3 className="m-0 cursor-default p-1 text-base font-light text-gray-500">
                Version
              </h3>
              <p className="relative m-0 cursor-pointer p-1">
                2026 &copy; Edition
              </p>
            </span>
            <span className="flex flex-col gap-3">
              <h3 className="m-0 cursor-default p-1 text-base font-light text-gray-500">
                Timezone
              </h3>
              <p className="relative m-0 cursor-pointer p-1">
                {time} EST (GMT&#8209;5)
              </p>
            </span>
          </div>

          <div className="flex items-end gap-4">
            <span className="flex flex-col gap-3">
              <h3 className="m-0 cursor-default p-1 text-base font-light text-gray-500">
                Socials
              </h3>
              <a
                className="relative m-0 cursor-pointer p-1"
                target="_blank"
                href="https://github.com/mithun-s14"
              >
                GitHub
              </a>
            </span>
            <span className="flex flex-col gap-3">
              <a
                className="relative m-0 cursor-pointer p-1"
                target="_blank"
                href="https://www.linkedin.com/in/mithun-sivapathasundram/"
              >
                LinkedIn
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
