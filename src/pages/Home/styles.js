import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px 132px auto;
  grid-template-areas:
  "header"
  "title"
  "content"
  ;

  h1 {
    font-weight: 400;
  }

  > div {
    grid-area: title;
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
  }

  > main {
    grid-area: content;
    overflow-y: scroll;
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
  }
`

export const Content = styled.div`
  max-width: 1140px;
`

export const Button = styled.button`
  width: 207px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;

  background-color: ${({theme}) => theme.COLORS.PINK};
  color: ${({theme}) => theme.COLORS.BACKGROUND_300};

  border: none;
  border-radius: 10px;

`