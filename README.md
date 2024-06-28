# 1️⃣ 1주차 프로젝트 세팅 & 컴포넌트 - React 입문
## 🚀 1단계 - 프로젝트 세팅
### 📄 기능 목록
- [x] CRA 기반 TypeScript 프로젝트 생성
- [x] 절대 경로 설정
- [x] prettier 설치 및 룰 설정
- [x] eslint 설치 및 eslint-config-airbnb 룰 설정
- [x] lint-staged, husky 설치 및 자동화 설정
- [x] emotion 스타일 라이브러리 설치
- [x] reset css 적용
- [x] .gitignore 추가
- [x] 불필요한 코드 및 파일 정리
- [x] 폴더 구조 생성

## 🚀 2단계 - Storybook을 사용하여 재사용 가능한 컴포넌트 구현
### 📄 기능 목록
- [x] Stroybook 설치
- [x] Button 컴포넌트 구현
  - [x] theme props에 따른 버튼 컬러와 디자인이 다르게 구현
  - [x] size props에 따른 버튼의 크기를 다르게 구현(value가 responsive인 경우 미디어 쿼리에 따라 사이즈가 다르게 구현)
  - [x] Button 기본 속성들을 모두 사용할 수 있게 Storybook 구현
- [x] Input 컴포넌트 구현
  - [x] disabled props에 따른 비활성화 및 디자인 구현
  - [x] invalid props에 따른 값이 잘못되었음을 디자인하도록 구현
  - [x] size props에 따라 버튼의 크기를 다르게 구현(value가 responsive인 경우 미디어 쿼리에 따라 사이즈가 다르게 구현)
  - [x] Input 기본 속성들을 모두 사용할 수 있게 구현
- [] Image 컴포넌트 구현
  - [] ratio props에 따른 이미지 비율을 설정할 수 있도록 구현(value가 number로 16/9로 넘겨진 경우 16:9비율로 보여짐, square을 설정한 경우 정사각형으로 보여짐)
  - [] raduis props에 따른 모서리를 둥글게 구현(value가 number인 경우 number만큼 모서리가 둥글게 적용, circle인 경우 원형으로 보여짐)
  - [] Img 기본 속성들을 모두 사용할 수 있게 구현