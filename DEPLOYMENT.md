# GitHub Pages 배포 가이드

이 문서는 MetaQLab 웹사이트를 GitHub Pages를 통해 배포하는 방법을 설명합니다.

## 📋 사전 준비사항

1. GitHub 계정이 있어야 합니다
2. Git이 로컬에 설치되어 있어야 합니다

## 🚀 배포 단계

### 1단계: GitHub 저장소 생성

1. GitHub에 로그인
2. "New repository" 클릭
3. Repository name: `metaqlab` (또는 원하는 이름)
4. Description: `천연물소재 분석 및 표준화 연구실 홈페이지`
5. Public으로 설정
6. "Create repository" 클릭

### 2단계: 로컬 파일 업로드

```bash
# 저장소 클론 (GitHub에서 제공하는 명령어 사용)
git clone https://github.com/[사용자명]/metaqlab.git
cd metaqlab

# MetaQLab Home 폴더의 모든 파일을 복사
# (Windows의 경우 파일 탐색기에서 복사-붙여넣기)

# Git에 파일 추가
git add .
git commit -m "Initial commit: MetaQLab website"
git push origin main
```

### 3단계: GitHub Pages 설정

1. GitHub 저장소 페이지에서 **Settings** 탭 클릭
2. 왼쪽 메뉴에서 **Pages** 클릭
3. **Source** 섹션에서:
   - "Deploy from a branch" 선택
   - Branch를 "main" (또는 "master") 선택
   - Folder를 "/ (root)" 선택
4. **Save** 클릭

### 4단계: 배포 확인

- 몇 분 후에 `https://[사용자명].github.io/[저장소명]`에서 사이트 접속 가능
- 예: `https://johndoe.github.io/metaqlab`

## 🔧 추가 설정

### 커스텀 도메인 사용 (선택사항)

1. 도메인을 구매 (예: `metaqlab.com`)
2. 도메인 설정에서 GitHub Pages IP로 연결
3. GitHub Pages 설정에서 Custom domain 추가

### 자동 배포 설정

- 이미 `.github/workflows/deploy.yml` 파일이 포함되어 있어 자동 배포됩니다
- 코드를 푸시할 때마다 자동으로 사이트가 업데이트됩니다

## 📝 파일 구조 확인

배포 후 다음 파일들이 모두 업로드되었는지 확인하세요:

```
├── index.html
├── styles.css
├── script.js
├── ICNPR2024.jpg
├── homephoto.jpg
├── README.md
├── .gitignore
├── LICENSE
└── .github/workflows/deploy.yml
```

## 🐛 문제 해결

### 사이트가 표시되지 않는 경우
1. GitHub Pages 설정에서 Source가 올바르게 설정되었는지 확인
2. 파일이 올바른 브랜치에 업로드되었는지 확인
3. 몇 분 더 기다린 후 다시 시도

### 이미지가 표시되지 않는 경우
1. 이미지 파일 경로가 올바른지 확인
2. 파일명에 특수문자가 없는지 확인
3. 파일이 Git에 제대로 업로드되었는지 확인

## 📞 지원

문제가 발생하면 GitHub Issues를 통해 문의하거나 README.md의 연락처를 이용하세요.

---

**© 2024 천연물소재 분석 및 표준화 연구실 - MetaQLab**
