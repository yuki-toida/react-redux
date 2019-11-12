import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import { findTodoOperation } from "modules/pages/todos/list/operations";
import FindTodo from ".";
import { RootState, RootActionTypes } from "modules";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, null, RootActionTypes>
) => {
  return {
    onClick: () => {
      dispatch(findTodoOperation());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindTodo);
