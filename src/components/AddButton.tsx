import React from "react";
import styled from "styled-components";

import Modal from "src/components/Modal";
import useModal from "src/hooks/useModal";

import { PeopleInfo } from "src/types";

type Props = Readonly<{
  addPeopleInfo: (info: PeopleInfo) => void;
}>;

const Component: React.FCX<Props> = ({ addPeopleInfo }) => {
  const { isShowing, toggle } = useModal();
  return (
    <button onClick={toggle} className="button-default">
      <Modal isShowing={isShowing} hide={toggle} />
      追加
    </button>
  );
};

const StyledComponent = styled(Component)`
  button {
    font-size: 0.9rem;
    font-weight: 700;
    border: none;
    border-radius: 3px;
    padding: 0.3rem 1rem;
    margin-left: 0.5rem;
  }

  .button-default {
    background: #247ba0;
    color: #fff;
  }
`;

export default StyledComponent;
