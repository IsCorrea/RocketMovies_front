import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    width: 100%;
    height: 144px;

    background-color: rgba(255, 133, 155, 0.05);

    display: flex;
    align-items: center;
    padding: 0 124px;

    button {
      color: ${({ theme }) => theme.COLORS.PINK};
      display: flex;
      gap: 8px;
    }
  }
`

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  > div:nth-child(4){
    margin-top: 24px;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -123px auto 64px;

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    padding: 14px;

    position: absolute;
    bottom: 0;
    right: 10px;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_100};      
    }
  }
`