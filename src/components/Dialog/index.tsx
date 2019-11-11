import React, { useEffect } from "react";
import Modal from "react-modal";
import { CustomStyles } from "./styled";

type Props = {
  isOpen: boolean;
  text: string;
  onClose: () => void;
};

const Dialog: React.FC<Props> = props => {
  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  return (
    <Modal isOpen={props.isOpen} style={CustomStyles}>
      {props.text}
      <div>
        <button onClick={props.onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default Dialog;
