# 알림톡 발송 시스템 📱

## 빠른 시작

### 1. 프로젝트 생성
```bash
mkdir yj-solapi-node
cd yj-solapi-node
```

### 2. 초기 설정
```bash
npm init -y
```

### 3. 필요한 패키지 설치
```bash
npm i express nodemon morgan cors dotenv solapi
```

### 4. 폴더 생성
```bash
mkdir routes public
```

### 5. .gitignore 설정
`.gitignore` 파일 생성 후 아래 내용 복사/붙여넣기:
```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

### 6. 환경변수 설정
`.env` 파일 생성 후 아래 내용 입력:
```bash
PORT=8080
API_KEY="여기에_API_KEY_입력"
API_SECRET="여기에_API_SECRET_입력"
SOLAPI_PFID="여기에_PFID_입력"
SOLAPI_TEMPLATE_ID="여기에_템플릿ID_입력"
SOLAPI_PHONE="여기에_발신번호_입력"
```

### 7. 서버 실행
```bash
npm run dev
```

## API 테스트
POST 요청 예시:
```bash
curl -X POST http://localhost:8080/api/send-message \
-H "Content-Type: application/json" \
-d '{
    "name": "홍길동",
    "text": "테스트 메시지",
    "tel": "01012341234",
    "btn_url": "https://example.com"
}'
```

## 문제해결
### 포트 충돌 시
```bash
npx kill-port 8080
```

### 패키지 설치 오류 시
```bash
npm cache clean --force
rm -rf node_modules
npm install
```

## ⚠️ 주의사항
- `.env` 파일은 절대 GitHub에 업로드하지 마세요!
- `.gitignore`에 node_modules와 .env가 잘 포함되어 있는지 확인하세요.
- 커밋하기 전에 항상 `.gitignore`가 적용되었는지 확인하세요.
