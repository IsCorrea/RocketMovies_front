import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
  "header"
  "content"
  ;

  > main {
    grid-area: content;
    overflow-y: scroll;
    max-width: 1113px;
    margin: 40px auto;
    padding: 0 24px;
    text-align: justify;

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
  }
`

export const Content = styled.div`
  svg {
      color: ${({theme}) => theme.COLORS.PINK};
  }

  > * {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  > div.title-wrapper {
    gap: 19px;
    margin: 24px 0;

    h1 {
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }

  > div.details-wrapper {

    img {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 2px solid ${({theme}) => theme.COLORS.BACKGROUND_300};
    }
  }

  > div.tags-wrapper {
    margin: 40px 0;
  }
    
`
