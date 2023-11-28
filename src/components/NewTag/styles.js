import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.BACKGROUND_500};
  border: ${({ theme, $isnew }) => $isnew ? `1px dashed ${theme.COLORS.GRAY_700}` : 'none'};

  border-radius: 8px;
  padding-right: 16px;
  
  > button {
    border: none;
    background: none;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    width: 100%;
    height: 56px;

    padding: 16px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_700};
    }
  }

`;