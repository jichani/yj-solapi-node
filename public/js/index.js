document.addEventListener("DOMContentLoaded", function () {
  ShowAlert("info", "알림", "환영합니다.");
});

const $userName = document.getElementById("userName");
const $userTel = document.getElementById("userTel");
const $text = document.getElementById("text");
const $btn_url = document.getElementById("btn_url");
let isSending = false; // 전송 상태를 나타내는 플래그 변수

/**
 * 알림톡 발송 메서드
 */
function sendNotification() {
  // 다중 클릭 방지: 이미 전송 중이면 함수 종료
  if (isSending) {
    return;
  }

  // 입력된 사용자 정보와 메시지를 가져옴
  const userName = $userName.value;
  const userTel = $userTel.value;
  const text = $text.value;
  const btn_url = $btn_url.value;

  // 필수 입력값 확인
  if (!userName) {
    ShowAlert("info", "알림", "이름을 입력해 주세요.");
    return;
  }
  if (!userTel) {
    ShowAlert("info", "알림", "전화번호를 입력해 주세요.");
    return;
  }
  if (!text) {
    ShowAlert("info", "알림", "메시지 내용을 입력해 주세요.");
    return;
  }
  if (!btn_url) {
    ShowAlert("info", "알림", "URL을 입력해 주세요.");
    return;
  }

  try {
    // 전송 중 상태로 설정
    isSending = true;

    ShowLoading("발송 중...");

    // 서버로 전송할 데이터
    const data = {
      name: userName,
      tel: userTel,
      text: text,
      btn_url: btn_url,
    };

    fetch("http://localhost:8080/api/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        console.log("Success:", data);
        ShowAlert("success", "성공", "메시지가 성공적으로 전송되었습니다.");
      })
      .catch(error => {
        console.error("Error:", error);
        ShowAlert("error", "실패", "메시지 전송에 실패했습니다.");
      });
  } catch (error) {
    console.error("Catch Error:", error);
    ShowAlert("error", "오류", "예기치 않은 오류가 발생했습니다.");
  } finally {
    // 전송 완료 후 상태 초기화
    isSending = false;
    console.log("End of sendNotification function");
  }
}
