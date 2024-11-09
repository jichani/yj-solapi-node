/**
 * Sweetalert2 유틸리티 함수 모음
 * 기본 아이콘 타입: success, error, warning, info, question
 */

/**
 * 기본 알림창을 표시하는 함수
 * @param {string} icon - 알림창 아이콘 (success | error | warning | info | question)
 * @param {string} title - 알림창 제목
 * @param {string} html - 알림창 내용 (HTML 지원)
 * @param {boolean} useTimer - 자동 종료 타이머 사용 여부 (기본값: true)
 * @returns {Promise} Swal.fire()의 Promise 객체
 * @example
 * // 기본 사용
 * ShowAlert("info", "알림", "개발 중입니다.");
 *
 * // Promise 처리
 * ShowAlert("success", "완료", "저장되었습니다.").then(() => {
 *     console.log("알림창이 닫혔습니다.");
 *     location.reload(); // 새로고침
 * });
 */
function ShowAlert(icon, title, html, useTimer = true) {
  const options = {
    icon,
    title,
    html,
    confirmButtonText: "확인",
    customClass: {
      confirmButton: "swal2-confirm",
    },
  };

  if (useTimer) {
    options.timer = 2000; // 2초 후 자동 종료
  }

  return Swal.fire(options);
}

/**
 * 확인/취소 선택창을 표시하는 함수
 * @param {string} icon - 알림창 아이콘 (success|error|warning|info|question)
 * @param {string} title - 알림창 제목
 * @param {string} html - 알림창 내용 (HTML 지원)
 * @returns {Promise} Swal.fire()의 Promise 객체
 * @example
 * ShowConfirm("warning", "삭제 확인", "정말 삭제하시겠습니까?").then((result) => {
 *     // 사용자가 '확인'을 클릭한 경우의 처리
 *     if (result.isConfirmed) {
 *         console.log("삭제되었습니다.");
 *     }
 * });
 */
function ShowConfirm(icon, title, html) {
  return Swal.fire({
    icon,
    title,
    html,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "확인",
    cancelButtonText: "취소",
  });
}

/**
 * 로딩 화면을 표시하는 함수
 * @param {string} title - 로딩창 제목
 * @param {string} html - 로딩창 내용 (HTML 지원)
 * @note 로딩창을 닫으려면 Swal.close()를 호출해야 합니다.
 * @example
 * // 로딩창 표시
 * ShowLoading("처리 중...");
 * ShowLoading("알림", "잠시만 기다려주세요.");
 */
function ShowLoading(title, html = "") {
  Swal.fire({
    title,
    html,
    allowEscapeKey: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
    customClass: {
      confirmButton: "swal2-customLoading",
    },
  });
}
