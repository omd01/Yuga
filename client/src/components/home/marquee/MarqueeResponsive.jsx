import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../../../styles/hero/Marquee.css'; // Ensure this path is correct

const MarqueeResponsive = ({ cards }) => {
  const carouselRefLeft = useRef(null);
  const carouselRefRight = useRef(null);

  useEffect(() => {
    const carouselLeft = carouselRefLeft.current;
    const carouselRight = carouselRefRight.current;
    const cardSize = 130; // Width of each card (130px square)
    const gap = 16; // Space between cards
    const totalWidth = (cardSize + gap) * cards.length; // Total width of the carousel

    // Function to reset position
    const resetPosition = (element) => {
      gsap.set(element, { x: 0 });
    };

    // Create an infinite loop for the top row (moving left)
    gsap.fromTo(
      carouselLeft.children,
      { x: 0 },
      {
        x: `-${totalWidth}px`,
        ease: 'none',
        duration: 10,
        repeat: -1,
        stagger: 0, // Ensures all children move together
        onRepeat: () => resetPosition(carouselLeft.children),
      }
    );

    // Create an infinite loop for the bottom row (moving right)
    gsap.fromTo(
      carouselRight.children,
      { x: `-${totalWidth}px` },
      {
        x: 0,
        ease: 'none',
        duration: 10,
        repeat: -1,
        stagger: 0, // Ensures all children move together
        onRepeat: () => resetPosition(carouselRight.children),
      }
    );
  }, [cards]);

  return (
    <div className="flex items-center justify-center min-h-screen overflow-x-hidden ">
      <div className="relative min-h-screen h-[calc(130px*2+2px)] space-y-10">
        {/* Marquee Scrolling Left */}
        <div
          className="absolute top-0 left-0 flex flex-row"
          style={{ height: '130px', width: '100%' }}
          ref={carouselRefLeft}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-[#E9E8E4] rounded-3xl"
              style={{ width: '130px', height: '130px', marginRight: '16px' }}
            >
              <img src={card.logo} alt={`Card ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
          {/* Duplicate cards to ensure seamless scrolling */}
          {cards.map((card, index) => (
            <div
              key={index + cards.length}
              className="flex-shrink-0 bg-[#E9E8E4] rounded-3xl"
              style={{ width: '130px', height: '130px', marginRight: '16px' }}
            >
              <img src={card.logo} alt={`Card ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Marquee Scrolling Right */}
        <div
          className="absolute top-[130px] left-0 flex flex-row"
          style={{ height: '130px', width: '100%' }}
          ref={carouselRefRight}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-[#E9E8E4] rounded-3xl"
              style={{ width: '130px', height: '130px', marginRight: '16px' }}
            >
              <img src={card.logo} alt={`Card ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
          {/* Duplicate cards to ensure seamless scrolling */}
          {cards.map((card, index) => (
            <div
              key={index + cards.length}
              className="flex-shrink-0 bg-[#E9E8E4] rounded-3xl"
              style={{ width: '130px', height: '130px', marginRight: '16px' }}
            >
              <img src={card.logo} alt={`Card ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeResponsive;
