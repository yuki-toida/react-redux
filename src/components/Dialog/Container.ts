import { connect } from "react-redux";
import { Action, Dispatch } from "redux";

import { RootState } from "../../modules";
import { closeDialog } from "../../modules/dialog/actions";

import Dialog from ".";

const mapStateToProps = (state: RootState) => {
  return {
    isOpen: state.dialog.isOpen,
    text: state.dialog.text
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onClose: () => {
      dispatch(closeDialog());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialog);
