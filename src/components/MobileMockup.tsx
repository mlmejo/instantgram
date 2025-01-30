import { useEffect, useState } from 'react';

export default function MobileMockup() {
  // Use an array to hold the preview images to display
  // on the mobile mockup.
  const screenshots = [
    'screenshot1-2x.png',
    'screenshot2-2x.png',
    'screenshot3-2x.png',
    'screenshot4-2x.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // The logic of the presentation is as follows:
  // During component mount, create an interval which
  // changes the current index state to show a different
  // image.
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
        {/*
          Mapping all the images is needed in order to create transitions.
          As changing the `src` of the image will not allow us to do transitions.
        */}
        {screenshots.map((screenshot, index) => (
          <img
            key={index}
            src={`/screenshots/${screenshot}`}
            alt=""
            // The important part is to hide the non-active images.
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
