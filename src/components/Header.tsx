'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@heroui/react';
import { ChevronLeft } from 'lucide-react';

export default function Header() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <header className="h-[126px] w-full relative flex flex-col">
      {/* 뒤로가기 버튼 - 왼쪽에서 30px */}
      <div className="absolute left-[30px] top-[67px] -translate-y-1/2">
        <Button
          isIconOnly
          variant="light"
          onPress={handleBack}
          className="w-[30px] h-[30px] min-w-[30px] min-h-[30px] p-0"
          aria-label="뒤로가기"
        >
          <ChevronLeft className="w-[30px] h-[30px]" style={{ color: 'hsl(var(--heroui-primary))' }} />
        </Button>
      </div>

      {/* 로고 - 중앙, 위에서 67px */}
      <div className="absolute left-1/2 top-[67px] -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/imgs/Logo1.svg"
          alt="Readify Logo"
          width={105}
          height={30}
          priority
        />
      </div>
    </header>
  );
}
