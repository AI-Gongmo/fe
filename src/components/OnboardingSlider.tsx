'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardBody } from '@heroui/react';
import { motion } from 'framer-motion';

interface OnboardingSlide {
  text: string;
  img: string;
}

interface OnboardingSliderProps {
  slides: OnboardingSlide[];
  currentSlide: number;
  onSlideChange: (index: number) => void;
}

export default function OnboardingSlider({
  slides,
  currentSlide,
  onSlideChange
}: OnboardingSliderProps) {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < slides.length - 1) {
      onSlideChange(currentSlide + 1);
    }

    if (isRightSwipe && currentSlide > 0) {
      onSlideChange(currentSlide - 1);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div
      className="relative w-full h-full flex justify-center items-center"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Card className="border-none shadow-none bg-transparent w-full h-full">
        <CardBody className="p-0 h-full">
          <div className="relative w-full h-full overflow-hidden flex justify-center items-center">
            {/* 첫 번째 슬라이드일 때 로고 애니메이션 */}
            {currentSlide === 0 && (
              <>
                {/* Logo1 - 왼쪽으로 이동 (131px에서) */}
                <motion.div
                  className="absolute z-0"
                  style={{ top: '131px' }}
                  animate={{
                    x: ['100vw', '-100%']
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  <Image
                    src="/imgs/Logo1.svg"
                    alt="Logo 1 Animation"
                    width={287}
                    height={83}
                    className="object-contain"
                  />
                </motion.div>

                {/* Logo2 - 오른쪽으로 이동 (224px에서) */}
                <motion.div
                  className="absolute z-0"
                  style={{ top: '224px' }}
                  animate={{
                    x: ['-100%', '100vw']
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  <Image
                    src="/imgs/Logo2.svg"
                    alt="Logo 2 Animation"
                    width={295}
                    height={77}
                    className="object-contain"
                  />
                </motion.div>
              </>
            )}

            {/* 슬라이드 이미지 */}
            <div className="relative z-10 w-full h-full flex justify-center items-center">
              <Image
                src={slides[currentSlide].img}
                alt={`Onboarding ${currentSlide + 1}`}
                width={500}
                height={500}
                className="max-w-full max-h-full object-contain"
                priority
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
