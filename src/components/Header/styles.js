import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  min-width: 630px;
  max-width: 1113px;
  height: 116px;

  border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_500};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px;
  margin: 0 auto;
`

export const Profile = styled.div`
  min-width: 198px;
  height: 68px;

  display: flex;
  align-items: center;
  gap: 9px;

  color: ${({theme}) => theme.COLORS.GRAY_300};

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: 10px;

    button {
      color: ${({theme}) => theme.COLORS.GRAY_700};
      font-weight: 400;
    }
  }
`

export const Brand = styled.div`
  margin-right: 10px;
  
  > h1 {
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.PINK};
  }
`