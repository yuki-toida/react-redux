import { connect } from "react-redux";
import { Action, Dispatch } from "redux";

import { initTodo } from "../../modules/todo/actions";
import InitTodo from ".";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onClick: () => {
      dispatch(initTodo([]));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InitTodo);
