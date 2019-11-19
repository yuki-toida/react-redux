import React from "react";

import { AButton, MModalDialog } from "movo-ui";

type Props = {
  isOpen: boolean;
  text: string;
  onClose: () => void;
};

const Dialog: React.FC<Props> = ({ text, isOpen, onClose }) => {
  return (
    <MModalDialog
      title={text}
      open={isOpen}
      onClose={onClose}
      rightActions={<AButton />}
    />
  );
};

export default Dialog;
