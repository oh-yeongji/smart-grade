import styled from '@emotion/styled';

const CreateUserLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
`;

const TopLayout = styled.div`
  display: flex;
  justify-content: space-between;
  > div.top-left {
    display: flex;
    gap: 40px;
  }
`;

const ImageUpload = styled.div`
  width: 300px;
  aspect-ratio: 3 / 4;
  border: 1px dashed var(--black);
  border-radius: 15px;
`;

const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 10px;
  > span {
    color: var(--negative-color);
    &:last-of-type {
      padding-top: 5px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  padding: 0 40px;
  height: 40px;
  background: var(--primary-color);
  color: var(--white);
  &:last-of-type {
    background: var(--negative-color);
  }
`;

const FormTable = styled.div`
  width: 100%;
  padding-top: 40px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: ${({ col }) => (col === 2 ? '1fr 2fr 1fr 2fr' : '1fr 5fr')};
  &:last-of-type {
    > div {
      &:nth-of-type(odd) {
        background: var(--primary-color);
        border-bottom: none;
      }
      &:nth-of-type(even) {
        background: var(--form-table-bg-color);
        border-bottom: none;
      }
    }
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    text-align: center;
    height: 50px;
    &:nth-of-type(odd) {
      font-weight: bold;
      color: var(--white);
      background: var(--primary-color);
      border-bottom: 2px solid var(--form-table-odd-border-color);
    }
    &:nth-of-type(even) {
      background: var(--form-table-bg-color);
      border-bottom: 2px solid var(--form-table-even-border-color);
    }
    > input {
      height: 100%;
      width: 100%;
      border: none;
      font-size: 16px;
      padding: 10px;
      text-align: center;
      background: transparent;
    }
  }
`;

export {
  CreateUserLayout,
  TopLayout,
  ImageUpload,
  NoticeContainer,
  ButtonContainer,
  Button,
  FormTable,
  Row,
};