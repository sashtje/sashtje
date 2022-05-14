import { css } from "@emotion/react";

export const override = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  animation: fadeOut 1s 1s;
  animation-fill-mode: forwards;
`;
