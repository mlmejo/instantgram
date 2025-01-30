import { useEffect, useState } from 'react';

export default function MobileMockup() {
  const screenshots = [
    'screenshot1-2x.png',
    'screenshot2-2x.png',
    'screenshot3-2x.png',
    'screenshot4-2x.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === screenshots.length - 1) {
          return 1;
        }

        return prev + 1;
      });
    }, 3000);

    return () => clearTimeout(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mb-3 mr-8 hidden h-[581.146px] w-full basis-[380.32px] self-center bg-[url(/home-phones-2x.png)] bg-[length:468.32px_634.15px] [background-position-x:-3rem] lg:block">
      <div className="relative left-[112px] top-[27px]">
        {screenshots.map((screenshot, index) => (
          <img
            key={index}
            src={`/screenshots/${screenshot}`}
            alt=""
            className={
              `absolute left-0 top-0 h-[538.84px] w-[250px] overflow-clip align-baseline ` +
              (currentIndex === index
                ? 'animate-fade visible'
                : 'invisible opacity-0')
            }
          />
        ))}
      </div>
    </div>
  );
}
