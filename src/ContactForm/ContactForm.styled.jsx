import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 2px solid #605f5f;
  padding: 20px;
`;

export const Label = styled.label`
  display: contents;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  max-width: 130px;
  max-height: 5px;
  padding: 5px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  height: 15px;
  width: 62px;
  font-size: 8px;
  cursor: pointer;

  &:active {
    background-color: #4972fa;
    border-radius: 2px;
    border: none;
  }
`;

