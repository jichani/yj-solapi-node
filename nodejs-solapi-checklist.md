# Node.js Solapi 실습 체크리스트

## 1. 환경 설정 체크
- [ ] Node.js 설치 확인
  ```bash
  node --version  # 출력: v14.x 이상
  ```
- [ ] NPM 설치 확인
  ```bash
  npm --version  # 출력: 6.x 이상
  ```
- [ ] VS Code 설치 확인
- [ ] Git Bash 설치 확인

## 2. 프로젝트 초기 설정
- [ ] 프로젝트 폴더 생성 및 이동
  ```bash
  mkdir yj-solapi-node
  cd yj-solapi-node
  ```
- [ ] package.json 생성
  ```bash
  npm init -y
  ```
- [ ] 필수 패키지 설치 확인
  ```bash
  npm i express nodemon morgan cors dotenv solapi
  ```
  ⚠️ 설치 중 에러 발생 시:
  - node_modules 삭제 후 재설치
  - npm cache clean --force
  
## 3. 프로젝트 구조 설정
- [ ] 필수 폴더 생성
  ```bash
  mkdir routes public
  ```
- [ ] 기본 파일 생성
  - [ ] routes/server.js
  - [ ] routes/solapiRoutes.js
  - [ ] .env
  - [ ] .gitignore

## 4. 서버 설정 확인
- [ ] package.json scripts 설정
  ```json
  "scripts": {
    "start": "node routes/server.js",
    "dev": "nodemon routes/server.js"
  }
  ```
- [ ] 서버 실행 테스트
  ```bash
  npm run dev
  ```
- [ ] localhost 접속 확인
  - http://localhost:8080 접속
  - "Hello YJ-student!" 메시지 확인

## 5. Solapi 설정
- [ ] .env 파일 설정
  - [ ] PORT
  - [ ] API_KEY
  - [ ] API_SECRET
  - [ ] SOLAPI_PFID
  - [ ] SOLAPI_TEMPLATE_ID
  - [ ] SOLAPI_PHONE

## 6. API 테스트
- [ ] 알림톡 발송 테스트
  - [ ] 테스트용 전화번호 준비
  - [ ] API 요청 성공 확인
  - [ ] 실제 알림톡 수신 확인

## 7. 에러 체크포인트
- [ ] CORS 에러 발생 여부
- [ ] API 키 인증 에러
- [ ] 템플릿 ID 매칭 확인
- [ ] 발신번호 등록 확인

## 8. 보안 체크포인트
- [ ] .env 파일 .gitignore 등록
- [ ] node_modules .gitignore 등록
- [ ] API 키 노출 여부 확인

## 9. 최종 확인사항
- [ ] 서버 정상 구동
- [ ] API 응답 정상
- [ ] 로그 정상 출력
- [ ] 환경변수 정상 로드
- [ ] Git 커밋 완료

## 문제 해결 팁
1. 서버 실행 안 될 때
   - 포트 충돌 확인
   - 프로세스 강제 종료: `npx kill-port 8080`

2. 패키지 설치 문제
   ```bash
   npm cache clean --force
   rm -rf node_modules
   npm install
   ```

3. nodemon 감지 안 될 때
   ```bash
   npm install nodemon -g
   ```
