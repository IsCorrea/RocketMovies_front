import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: rgba(255, 133, 155, 0.05);

  border-radius: 16px;

  padding: 32px;
  margin-bottom: 24px;

  --lh: 24px;
  line-height: var(--lh);

  > h1 {
    text-align: left;
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.GRAY_300};
    font-weight: 700;
  }

  > div {
    text-align: left;
    margin-top: 8px;
    color: ${({theme}) => theme.COLORS.PINK}
  }

  > p {
    --max-lines: 2;
    position: relative;
    max-height: calc(var(--lh) * var(--max-lines));
    overflow: hidden;
    padding-right: 1rem;

    margin: 15px 0;
    color: ${({theme}) => theme.COLORS.GRAY_700};
    text-align: justify;
    font-size: 16px;

    &::before {
      position: absolute;
      content: "...";
      bottom: 0;
      right: 0;
    }

    &::after {
      content: "";
      position: absolute;
      inset-inline-end: 0; /* "right" */
      width: 1rem;
      height: 1rem;
      background: white;
    }
  }

  > footer {
    width: 100%;
    display: flex;
  }
` 