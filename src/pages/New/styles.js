import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px 85px auto;
  grid-template-areas:
  "header"
  "button"
  "content";

  > button {
    width: 100%;
    grid-area: button;
    max-width: 1140px;
    margin: 0 auto;
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 24px;
  }

  > main {
    width: 100%;
    grid-area: content;
    overflow-y: auto;
    max-width: 1140px;
    margin: 0 auto 60px;
    padding: 0 24px;

    scrollbar-color: ${({theme}) => theme.COLORS.PINK} #e0e0e0;
    scrollbar-gutter: stable;

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({theme}) => theme.COLORS.PINK};
    }

    h1 {
      font-size: 36px;
      color: ${({theme}) => theme.COLORS.GRAY_300};
      font-weight: 500;
      margin-bottom: 32px;
    }

    h2 {
      font-size: 20px;
      font-weight: 400;
      color: ${({theme}) => theme.COLORS.GRAY_700};
      margin-bottom: 24px;
    }

    #tags-wrapper {
      padding: 16px;

      background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
      border-radius: 8px;

      display: flex;
      gap: 24px;
      flex-wrap: wrap;
    }

    button:first-child {
      background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
      color: ${({theme}) => theme.COLORS.PINK};
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    
    input[type=number] {
      -moz-appearance: textfield;
    }

  }
`

export const Content = styled.div`
  > div {
    display: flex;
    gap: 40px;
  }
`