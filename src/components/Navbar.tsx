'use client';

import Magnet from './Magnet';
import BubbleMenu from './BubbleMenu';

const menuItems = [
  {
    label: 'about',
    href: '#about',
    ariaLabel: 'About',
    rotation: -8,
    hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' },
  },
  {
    label: 'work',
    href: '#work',
    ariaLabel: 'Work',
    rotation: 8,
    hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' },
  },
  {
    label: 'projects',
    href: '#projects',
    ariaLabel: 'Projects',
    rotation: 8,
    hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' },
  },
  {
    label: 'skills',
    href: '#skills',
    ariaLabel: 'Skills',
    rotation: 8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' },
  },
  {
    label: 'contact',
    href: '#footer',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' },
  },
];

export default function Navbar() {
  return (
    <>
      {/* Desktop nav — mix-blend-difference makes white text invert on dark + light sections */}
      <div className="absolute top-0 z-20 box-border hidden w-full items-center p-4 font-light text-white mix-blend-difference lg:flex lg:p-8">
        {/* Logo */}
        <div className="flex lg:pr-56">
          <a
            className="group z-10 flex cursor-pointer items-center space-x-2"
            href="#"
          >
            {/* Rotating © */}
            <div className="transition-transform duration-500 group-hover:rotate-[360deg]">
              ©
            </div>
            {/* Animated name reveal */}
            <div className="nav-overflow">
              <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-full">
                coded by
              </div>
              <div className="px-1 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-[62px]">
                Mithun
              </div>
              <div className="translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-[62px]">
                Sivapathasundram
              </div>
            </div>
          </a>
        </div>

        {/* Nav links */}
        <div className="flex flex-1 items-center justify-between font-semibold">
          <Magnet padding={40} magnetStrength={3}>
            <a className="block p-3" href="#about">About</a>
          </Magnet>
          <Magnet padding={40} magnetStrength={3}>
            <a className="block p-3" href="#work">Work</a>
          </Magnet>
          <Magnet padding={40} magnetStrength={3}>
            <a className="block p-3" href="#projects">Projects</a>
          </Magnet>
          <Magnet padding={40} magnetStrength={3}>
            <a className="block p-3" href="#skills">Skills</a>
          </Magnet>
          <Magnet padding={40} magnetStrength={3}>
            <a className="block p-3" href="#footer">Contact</a>
          </Magnet>
        </div>
      </div>

      {/* Mobile / tablet nav — hamburger bubble menu */}
      <div className="lg:hidden">
        <BubbleMenu
          logo={
            <a href="#" className="flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-[#111]">
              <span>©</span>
              <span>Mithun</span>
            </a>
          }
          items={menuItems}
          menuAriaLabel="Toggle navigation"
          menuBg="#ffffff"
          menuContentColor="#111111"
          useFixedPosition
          animationEase="back.out(1.5)"
          animationDuration={0.5}
          staggerDelay={0.12}
        />
      </div>
    </>
  );
}
