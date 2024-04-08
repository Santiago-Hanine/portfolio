import { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import { HeaderItems } from './HeaderItems';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(true);
  let [previousScrollPosition, setPreviousScrollPosition] = useState(0);
  let [currentScrollPosition, setCurrentScrollPosition] = useState(0);


  useEffect(() => {
    window.addEventListener('scroll', function (e) {
      setCurrentScrollPosition(window.scrollY)
      //Subtract the two and conclude
      if (previousScrollPosition - currentScrollPosition < 0) {
        setScrolled(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setScrolled(true);
      }

      // Update the previous value
      setPreviousScrollPosition(currentScrollPosition)
    });
  }, [currentScrollPosition]);

  isOpen && (document.body.style.overflow = 'hidden');
  !isOpen && (document.body.style.overflow = 'auto');

  return (
    <div
      className={`lg:hidden w-screen fixed top-0 z-10 h-20 transition-all duration-500 transform ${
        scrolled ? "bg-gray-500 animate-menuAppear" : "animate-menuDisappear"
      }`}
    >
      <h2 className={`${scrolled ? "" : "hidden"} text-xl tracking-wider font-kanit absolute left-9 top-7`}>Santiago Hanine</h2>
      <FiMenu className={`${scrolled ? "" : "hidden"} text-black absolute right-8 top-4 h-12 w-12 z-50`} onClick={() => setIsOpen(!isOpen)} />

      {isOpen && (
        <div className="bg-gray-500">
          <div
            className={`absolute transfrom top-[40px] mt-4 right-0 pr-10 p-2 w-full ${
              isOpen ? "block h-screen" : "hidden"
            } text-right bg-gray-500 z-10`}
          >
            {HeaderItems().map((item) => (
              <div className="w-full" key={item.name}>
                <a
                  onClick={() => setIsOpen(!isOpen)}
                  className={`text-black ${scrolled ? "text-black" : "text-white"} font-kanit text-4xl md:text-2xl flex flex-col my-5 text-right`}
                  href={item.link}
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
