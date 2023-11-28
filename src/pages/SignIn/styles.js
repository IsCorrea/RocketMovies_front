import styled from "styled-components";
import backgroundImg from "../../assets/movieTheater.png"

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 160px 0 134px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-size: 48px;
    color: ${({theme}) => theme.COLORS.PINK};
  }

  > p {
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_500};
  }

  > h2 {
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.GRAY_300};
    margin: 48px 0 40px;
  }

  > a {
    color: ${({theme}) => theme.COLORS.PINK};
    align-self: center;
    margin-top: 42px;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  filter: brightness(30%);
`