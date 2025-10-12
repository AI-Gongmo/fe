# Readify 라우팅 구조

Next.js App Router를 사용한 폴더 기반 라우팅 구조입니다.

## 라우트 목록

| 경로 | 파일 위치 | 설명 |
|------|-----------|------|
| `/` | [src/app/page.tsx](src/app/page.tsx) | 홈 페이지 |
| `/onboarding` | [src/app/onboarding/page.tsx](src/app/onboarding/page.tsx) | 온보딩 |
| `/main` | [src/app/main/page.tsx](src/app/main/page.tsx) | 메인페이지 |
| `/contract` | [src/app/contract/page.tsx](src/app/contract/page.tsx) | 일계약서 |
| `/health-check` | [src/app/health-check/page.tsx](src/app/health-check/page.tsx) | 건강확인서 |
| `/loading` | [src/app/loading/page.tsx](src/app/loading/page.tsx) | 파일 로딩중 |
| `/life-info` | [src/app/life-info/page.tsx](src/app/life-info/page.tsx) | 생활정보 |
| `/child-notifier` | [src/app/child-notifier/page.tsx](src/app/child-notifier/page.tsx) | 아이 알리미 |
| `/recent-files` | [src/app/recent-files/page.tsx](src/app/recent-files/page.tsx) | 최근 파일 보기 |

## 폴더 구조

```
src/app/
├── layout.tsx              # 루트 레이아웃
├── page.tsx                # 홈 페이지 (/)
├── providers.tsx           # Provider 설정
├── globals.css             # 글로벌 스타일
├── onboarding/
│   └── page.tsx            # 온보딩 페이지
├── main/
│   └── page.tsx            # 메인 페이지
├── contract/
│   └── page.tsx            # 일계약서 페이지
├── health-check/
│   └── page.tsx            # 건강확인서 페이지
├── loading/
│   └── page.tsx            # 파일 로딩 페이지
├── life-info/
│   └── page.tsx            # 생활정보 페이지
├── child-notifier/
│   └── page.tsx            # 아이 알리미 페이지
└── recent-files/
    └── page.tsx            # 최근 파일 보기 페이지
```

## 추가 권장 폴더 구조

각 페이지별로 컴포넌트가 필요한 경우 아래와 같이 구성할 수 있습니다:

```
src/app/contract/
├── page.tsx                # 페이지 컴포넌트
├── layout.tsx              # (선택) 계약서 전용 레이아웃
└── components/             # (선택) 페이지 전용 컴포넌트
    ├── ContractForm.tsx
    └── ContractPreview.tsx
```

## 공통 컴포넌트 (추후 추가 권장)

```
src/
├── components/             # 공통 컴포넌트
│   ├── ui/                 # UI 컴포넌트
│   ├── layout/             # 레이아웃 컴포넌트
│   └── shared/             # 공유 컴포넌트
├── lib/                    # 유틸리티 함수
├── hooks/                  # 커스텀 훅
└── types/                  # TypeScript 타입 정의
```
