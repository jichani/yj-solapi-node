// src/App.js
import React, { useState } from "react";
import Swal from "sweetalert2";
import { ShowAlert, ShowConfirm, ShowLoading } from "./AlertUtils";
import "./App.css"; // 스타일은 기존 index.css에서 App.css로 가져옵니다.

function App() {
  const [userName, setUserName] = useState("임지찬");
  const [userTel, setUserTel] = useState("01086727571");
  const [text, setText] = useState("문의해주셔서 감사합니다!");
  const [btnUrl, setBtnUrl] = useState("www.naver.com");
  const [isSending, setIsSending] = useState(false);

  const sendNotification = async () => {
    if (isSending) return;

    // 필수 입력값 확인
    if (!userName) return ShowAlert("info", "알림", "이름을 입력해 주세요.");
    if (!userTel) return ShowAlert("info", "알림", "전화번호를 입력해 주세요.");
    if (!text) return ShowAlert("info", "알림", "메시지 내용을 입력해 주세요.");
    if (!btnUrl) return ShowAlert("info", "알림", "URL을 입력해 주세요.");

    try {
      setIsSending(true);
      ShowLoading("발송 중...");

      const data = { name: userName, tel: userTel, text, btn_url: btnUrl };

      const response = await fetch("http://localhost:8080/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const result = await response.json();
      ShowAlert("success", "성공", "메시지가 성공적으로 전송되었습니다.");
    } catch (error) {
      console.error("Error:", error);
      ShowAlert("error", "실패", "메시지 전송에 실패했습니다.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="container">
      <h1>카카오 알림톡 발송</h1>
      <div className="input-group">
        <label htmlFor="userName">이름</label>
        <input
          id="userName"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="userTel">전화번호</label>
        <input
          id="userTel"
          type="tel"
          value={userTel}
          onChange={(e) => setUserTel(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="text">내용</label>
        <input
          id="text"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="btnUrl">버튼 URL</label>
        <input
          id="btnUrl"
          type="text"
          value={btnUrl}
          onChange={(e) => setBtnUrl(e.target.value)}
        />
      </div>
      <button onClick={sendNotification}>알림톡 발송</button>
    </div>
  );
}

export default App;
