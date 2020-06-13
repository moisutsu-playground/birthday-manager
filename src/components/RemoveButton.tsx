import React from "react";
import styled from "styled-components";

type Props = Readonly<{
  id: string;
  removePeopleInfo: (id: string) => void;
}>;

const Component: React.FCX<Props> = ({ removePeopleInfo, id }) => {
  return (
    <button
      onClick={() => {
        removePeopleInfo(id);
      }}
    >
      削除
    </button>
  );
};

const StyledComponent = styled(Component)``;

export default StyledComponent;
