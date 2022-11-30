import { styled } from "@mui/material/styles";

export default styled("main")`
  height: 100vh;
  overflow: hidden auto;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  &::after {
    content: "";
    width: 0px;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }

  .login__container {
    width: 100%;
    position: relative;
    display: inline-block;
    vertical-align: middle;
  }
`;
