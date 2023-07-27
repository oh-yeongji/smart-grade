import styled from '@emotion/styled';

export const TableArea = styled.div`
  width: 100%;
  table {
    width: 100%;
    border-top: 2px solid #1363df;
    text-align: center;
    border-collapse: collapse;
    thead {
      height: 54px;
      background-color: #dff6ff;
    }
    tbody {
      tr {
        height: 50px;
      }
    }
    th,
    td {
      border: 1px solid #dae8ff;
    }
    &.notice {
      th,
      td {
        border: 1px solid var(--main-border-color);
      }
    }
  }
`;
export const SearchArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  height: 96px;
  margin: 72px 0;
  background-color: #d9d9d9;
  .search-option {
    height: 32px;
  }
  button {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const LectureContainer = styled.div`
  width: 100%;
`;

export const NoData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 180px;
  color: gray;
  p {
    margin-top: 20px;
    font-size: 80px;
  }
`;

// 공통 모달
export const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: rgba(0, 23, 60, 0.7);
  .modal-box {
    width: ${({ modalSize }) => (modalSize === 'small' ? '720px' : '1136px')};
    min-width: ${({ modalSize }) => (modalSize === 'small' ? '480px' : '800px')};
    height: ${({ modalSize }) => (modalSize === 'small' ? '480px' : '72%')};
    background-color: #fff;
    padding-top: 1rem;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    .modal-title-small {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 24px;
      font-weight: 700;

      padding: 2px 32px 16px 32px;
      border-bottom: 1px solid #dae8ff;
      button {
        font-size: 24px;
        border: none;
        background-color: transparent;
        cursor: pointer;
      }
    }
    .modal-title {
      font-size: 32px;
      text-align: center;
      line-height: 2.5;
      padding-bottom: 1rem;
    }
  }
`;

// 공통 버튼
const pageBtn = `
  padding: 8px 18px;
  border-radius: 5px; 
  color: #7e7e7e;
  font-size: 16px;
`;
const tableBtn = `
  margin: 0 4px;
  padding: 4px 8px;
  border-radius: 3px; 
  color: #fff;
  font-size: 12px;
`;
const modalBtn = `
  margin: 2px 8px;
  padding: 6px 24px;
  border-radius: 10px; 
  color: #7e7e7e;
  font-size: 18px;
`;
export const CommonBtn = styled.button`
  display: ${({ onClick }) => (onClick ? 'block' : 'none')};
  ${({ btnType }) => (btnType === 'page' ? pageBtn : btnType === 'modal' ? modalBtn : tableBtn)};
  background-color: ${({ color }) =>
    color === 'gray'
      ? '#C0C3C6'
      : color === 'blue'
      ? 'var(--primary-color)'
      : color === 'red'
      ? 'var(--negative-color)'
      : '#dff6ff'};

  border: none;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
`;
const btnContainer = `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30px;
`;
const btnBox = `
  display: inline-block;
`;
export const CommonBtnArea = styled.div`
  ${({ btnType }) => (btnType === 'page' ? btnContainer : btnBox)};
`;
