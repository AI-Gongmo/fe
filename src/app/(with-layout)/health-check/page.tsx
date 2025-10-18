'use client';

import { useState } from 'react';
import { Bottom } from '@/components/Bottom';

export default function HealthCheckPage() {
  const [visible, setVisible] = useState(true);

  const handleSmallButtonClick = () => {
    console.log('Small button clicked');
    alert('작은 버튼 클릭!');
  };

  const handleLargeButtonClick = () => {
    console.log('Large button clicked');
    alert('큰 버튼 클릭!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">건강확인서</h1>
        <p className="mb-4">Bottom 컴포넌트 테스트</p>

        <button
          onClick={() => setVisible(!visible)}
          className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
        >
          {visible ? 'Bottom 숨기기' : 'Bottom 보이기'}
        </button>
      </div>

      <Bottom
        visible={visible}
        smallButtonText="건너뛰기"
        largeButtonText="다음"
        onSmallButtonClick={handleSmallButtonClick}
        onLargeButtonClick={handleLargeButtonClick}
        smallButtonColor="default"
        largeButtonColor="primary"
      />
    </div>
  );
}
