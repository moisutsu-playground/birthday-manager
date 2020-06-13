import React from "react";
import styled from "styled-components";

import RemoveButton from "src/components/RemoveButton";

type Props = Readonly<{
  id: string;
  name: string;
  date: string;
  removePeopleInfo: (id: string) => void;
}>;

const Component: React.FCX<Props> = ({ name, date, id, removePeopleInfo }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{date}</p>
      <RemoveButton id={id} removePeopleInfo={removePeopleInfo} />
    </li>
  );
};

const StyledComponent = styled(Component)``;

export default StyledComponent;
