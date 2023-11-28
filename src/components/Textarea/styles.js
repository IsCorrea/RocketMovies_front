import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

  margin: 40px 0px;
  padding: 24px;

  border-radius: 10px;
  border: none;
  resize: none;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};
  
  color: ${({theme}) => theme.COLORS.GRAY_300};

  &::placeholder {
    color: ${({theme}) => theme.COLORS.GRAY_700};
  }

`