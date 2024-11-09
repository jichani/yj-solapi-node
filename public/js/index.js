function sendNotification() {
  document.getElementById("result-message").innerHTML = "발송 중 입니다"; // 결과 메시지 출력

  const name = document.getElementById("name").value;
  const tel = document.getElementById("tel").value;
  const text = document.getElementById("text").value;
  const btn_url = document.getElementById("btn_url").value;

  // 데이터를 서버로 보내는 구성
  const data = {
    name,
    tel,
    text,
    btn_url,
  };

  fetch("http://localhost:8080/api/send-message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      console.log("Success:", data);
      document.getElementById("result-message").innerHTML = data.message; // 결과 메시지 출력
    })
    .catch(error => {
      console.error("Error:", error);
      document.getElementById("result-message").innerHTML = "에러: " + error.message; // 에러 메시지 출력
    });
}
