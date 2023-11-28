import styled from "styled-components";

export const Container = styled.span`
  font-size: 12px;
  padding: 5px 16px;
  margin-right: 8px;

  border-radius: 8px;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_100};
  color: ${({theme}) => theme.COLORS.GRAY_300};
`