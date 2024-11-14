import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-around;
  padding: 5px;
  border-bottom: 1px solid #ccc;
`;

export const Button = styled.button`
  cursor: pointer;
  height: 15px;
  width: 38px;
  font-size: 8px;

  &:active {
    background-color: #4972fa;
    border-radius: 2px;
    border: none;
  }
`;