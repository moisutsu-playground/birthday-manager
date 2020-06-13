import React from "react";
import styled from "styled-components";

const Component: React.FCX = () => {
  return (
    <header>
      <h1>Birthday-Manager</h1>
    </header>
  );
};

const StyledComponent = styled(Component)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export default StyledComponent;
