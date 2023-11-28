import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 630px;
  margin-top: 8px;

  display: flex;
  align-items: center;

  border-radius: 10px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};

  > input {
    height: 56px;
    width: 100%;
    
    padding: 24px;
    background-color: transparent;
    border: 0;


    color: ${({theme}) => theme.COLORS.GRAY_300};

    &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_700};
    }
  }

  > svg {
    margin: 0 -10px 0 16px;
    color: ${({theme}) => theme.COLORS.GRAY_700};
  }
`