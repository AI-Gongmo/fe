# 프로젝트 개발 가이드라인

## 기술 스택

### 프레임워크
- **Next.js**: 필수 사용
  - React 기반 풀스택 프레임워크
  - App Router 사용

### UI/스타일링
- **Hero UI**: 필수 사용
  - 모든 컴포넌트는 Hero UI 라이브러리 활용
  - 일관된 디자인 시스템 유지

### 반응형 디자인
- **모바일 우선(Mobile First)** 접근
- **지원 디바이스**:
  - 모바일 (Mobile)
  - 태블릿 (Tablet)
  - 데스크톱 (Desktop)
- **반응형 구현**: 필수
  - Tailwind CSS breakpoints 활용
  - Hero UI의 반응형 props 활용

## 개발 원칙

1. 모든 페이지와 컴포넌트는 반응형으로 개발
2. Hero UI 컴포넌트를 최대한 활용
3. Next.js App Router 구조 준수
4. 성능 최적화 고려 (이미지, 폰트 등)
