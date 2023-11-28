import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;

  background-color: ${({theme}) => theme.COLORS.PINK};
  color: ${({theme}) => theme.COLORS.BACKGROUND_300};

  border: none;
  border-radius: 10px;

  margin-top: 30px;
  padding: 0 16px;

  font-weight: 500px;

  &:disabled {
    filter: brightness(80%);
  }
`