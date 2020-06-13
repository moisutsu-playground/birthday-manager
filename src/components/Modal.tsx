import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

type Props = Readonly<{
  isShowing: boolean;
  hide: () => void;
}>;

const Component: React.FCX<Props> = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <div>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <p>Hello, I'm a modal.</p>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

const StyledComponent = styled(Component)`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 0.5;
  }

  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
  }

  .modal {
    z-index: 100;
    background: white;
    position: relative;
    margin: 1.75rem auto;
    border-radius: 3px;
    max-width: 500px;
    padding: 2rem;
  }

  .modal-header {
    display: flex;
    justify-content: flex-end;
  }

  .modal-close-button {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    opacity: 0.3;
    cursor: pointer;
    border: none;
  }
`;

export default StyledComponent;

// ちなみに一番上のdivはdisplay:hiden;とかにして子要素をdisplay:auto;とかにすれば、操作を邪魔しなくなると思う
