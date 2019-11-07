import { connect } from "react-redux";
import { Action, Dispatch } from "redux";

import { addTodo } from "../../modules/todos/actions";
import AddTodo from ".";

// reduxのStoreからPropsへ
const mapStateToProps = () => {
  return {};
};

// reduxのActionをDispatch
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onSubmit: (text: string) => {
      dispatch(addTodo({ text }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
