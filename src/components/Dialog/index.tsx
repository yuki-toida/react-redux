import React from "react";

import { AButton, MModalDialog } from "movo_ui";

type Props = {
  isOpen: boolean;
  text: string;
  onClose: () => void;
};

const Dialog: React.FC<Props> = props => {
  return (
    <MModalDialog
      title={props.text}
      open={props.isOpen}
      onClose={() => {}}
      rightActions={AButton}
    >
      <div>
        <AButton onClick={props.onClose}>Close</AButton>
      </div>
    </MModalDialog>
  );
};

export default Dialog;
