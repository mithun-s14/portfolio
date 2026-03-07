import Magnet from './Magnet';

export default function Navbar() {
  return (
    /* mix-blend-difference makes white text invert on dark + light sections */
    <div className="absolute top-0 z-20 box-border flex w-full items-center p-4 font-light text-white mix-blend-difference lg:p-8">
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
  );
}
