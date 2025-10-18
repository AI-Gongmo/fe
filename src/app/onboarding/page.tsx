'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Spacer, Chip, Button } from '@heroui/react';
import OnboardingSlider from '@/app/onboarding/components/OnboardingSlider';

export default function OnboardingPage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleStart = () => {
    router.push('/main');
  };

  const onboardingData = [
    {
      text: '이해하기 어려운 문서,\n이제 걱정은 끝났어요!',
      img: '/imgs/onboardingImg1.svg',
      subTitle: '계약서, 보험 안내문, 병원 서류…\n어려운 한글 대신, 쉽고 정확한 설명으로 바로 이해하세요'
    },
    {
      text: 'AI가 문서를 읽고,\n요약하고, 설명해줄거에요',
      img: '/imgs/onboardingImg2.svg',
      subTitle: '사진 한 장이면 충분해요.\nAI가 문서를 자동으로 인식하고, 쉽고 간단하게 정리해드려요'
    },
    {
      text: '내 언어로,\n내 상황에 맞게',
      img: '/imgs/onboardingImg3.svg',
      subTitle: '문서를 자동 번역하고 읽어줍니다\n문화적 차이도 함께 설명해요'
    },
    {
      text: '안전하고 믿을 수 있는\nAI문서 도우미',
      img: '/imgs/onboardingImg4.svg',
      subTitle: '개인정보는 철저히 보호되고,\n모든 문서는 기기 내에서 안전하게 처리됩니다'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="h-30 w-full relative">
        <div className="absolute top-[75px] left-1/2 transform -translate-x-1/2">
          <Image
            src="/imgs/Logo2.svg"
            alt="Readify Logo"
            width={110}
            height={30}
            priority
          />
        </div>
      </header>

      <Spacer y={14} />

      {/* Title */}
      <div className="px-4">
        <h1
          className="text-center whitespace-pre-line text-2xl"
          style={{
            fontFamily: 'Pretendard',
            fontWeight: 800,
            color: '#2C2C2C'
          }}
        >
          {onboardingData[currentSlide].text}
        </h1>
      </div>

      {/* Onboarding Slider - 고정된 높이 */}
      <div className="h-[400px] overflow-hidden">
        <OnboardingSlider
          slides={onboardingData}
          currentSlide={currentSlide}
          onSlideChange={setCurrentSlide}
        />
      </div>

      {/* Fixed Bottom Section */}
      <div className="flex flex-col px-4 pb-9">
        {/* SubTitle - 고정된 높이 */}
        <div className="min-h-[48px] flex items-center justify-center mb-4">
          <span className='text-sm text-center whitespace-pre-line text-gray-500'>
            {onboardingData[currentSlide].subTitle}
          </span>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mb-10">
          {onboardingData.map((_, index) => (
            <Chip
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="w-2 h-2 min-w-2 min-h-2 p-0 cursor-pointer transition-colors"
              radius="full"
              style={{
                backgroundColor: currentSlide === index ? 'hsl(var(--heroui-primary))' : '#D9D9D9'
              }}
              aria-label={`슬라이드 ${index + 1}로 이동`}
            />
          ))}
        </div>

        {/* Button */}
        <Button
          color={currentSlide === 3 ? 'primary' : 'default'}
          size='lg'
          className="w-full"
          onPress={handleStart}
        >
          시작하기
        </Button>
      </div>
    </div>
  );
}
