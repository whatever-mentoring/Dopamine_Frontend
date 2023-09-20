import styled from 'styled-components';

const StyledMission = styled.div`
  padding-top: 48px;
  .level {
    margin: 24px 0 6px 16px;
    width: fit-content;
    padding: 5px 8px;
    font-size: var(--text-s);
    border-radius: 20px;
    color: var(--white);
    background: var(--primary-400);
  }

  .challenge-title {
    display: block;
    margin: 0 0 30px 16px;
    font-size: var(--title-s);
    color: var(--gray-900);
  }

  /* 미션인증 글씨 스타일 */
  .ms-txt {
    font-size: 24px;
    font-weight: bold;
  }

  /* 미션 페이지 이미지 업로드 스타일 */
  input[type='file'] {
    display: none; /* 파일 업로드 인풋 숨김 */
  }

  .error-message {
    color: red; /* 에러 메시지 텍스트 색상 설정 */
  }

  .ms-box2 {
    margin-top: 26px;
    height: 167px;
    padding: 16px;
    background-color: #ededed;
    font-size: var(--text-s);
    color: var(--gray-400);
  }

  .note1 {
    font-weight: var(--font-bold);
    margin-bottom: 2px;
  }

  /* 이번 미션 제목 스타일 */
  .mission-feedback-title {
    font-weight: var(--font-bold);
    font-size: var(--text-l);
    margin-bottom: 16px; /* 제목과 textarea 간격 조절 */
  }

  .mission-feedback-title2 {
    font-weight: var(--font-bold);
    font-size: var(--text-l);
    display: flex;
    padding: 0 16px;
  }

  /* "(선택)" 부분 스타일 */
  .optional-text {
    color: var(--gray-400);
    font-weight: var(--font-medium); /* 폰트 굵기 일반으로 설정 */
  }

  .mission-feedback-title2 > button {
    color: var(--gray-400);
    font-weight: var(--font-medium); /* 폰트 굵기 일반으로 설정 */
    margin-left: auto;
  }

  /* 미션페이지 첫 번째 박스 */
  .img-wrap {
    overflow-x: hidden;
    margin-bottom: 32px;
  }
  .txt-wrap {
    padding: 0 16px;
  }

  textarea {
    display: block;
    width: 100%; /* 가로 폭을 100%로 설정하여 부모 요소에 맞춤 */
    height: 80px; /* 텍스트 영역의 높이 설정 */
    margin-top: 16px; /* 상단 여백 추가 */
    resize: none; /* 사용자의 크기 조절 비활성화 */
    padding: 12px;
    font-size: var(--text-s);
    color: var(--gray-900);
    background: var(--gray-100);
    border-radius: 10px;
  }

  textarea::placeholder {
    color: var(--gray-400);
  }

  textarea:focus {
    outline: none;
    border: 1px solid var(--primary-500);
    padding: 11px;
  }

  /* 글자수 제한 색깔표시 */
  .character-count {
    margin-top: 12px; /* 상단 여백 추가 (선택사항) */
    text-align: right; /* 텍스트를 오른쪽으로 정렬 */
    font-size: var(--text-s);
    color: var(--gray-400); /* 100의 숫자를 그레이로 유지 */
  }
  .character-count > span {
    color: var(--primary-500);
  }

  .image-preview {
    margin-top: 16px;
    padding: 0 16px;

    div {
      display: flex;
      flex-shrink: 0;
    }
  }
  .swiper-item {
    position: relative;
    img {
      aspect-ratio: 1/1;
      object-fit: cover;
    }

    button {
      position: absolute;
      top: 4px;
      right: 0;
      width: 24px;
      height: 24px;
    }
  }

  /* 챌린지 제목 입력 상자 스타일 */
  .challenge-title-input {
    margin: 20px 20px; /* 적절한 여백 설정 */
  }

  .challenge-title-input input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
  }
`;

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: min(100%, 430px);
  padding: 6px 16px 4px;
  background-color: #fff;
`;
export { StyledFooter };
export default StyledMission;
