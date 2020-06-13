import React from "react";
import styled from "styled-components";

const Component: React.FCX = () => (
  <footer>Copyright © 2020 moisutsu All Rights Reserved.</footer>
);

const StyledComponent = styled(Component)`
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 10vh;
`;

export default StyledComponent;
