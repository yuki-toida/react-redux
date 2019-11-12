import { connect } from "react-redux";
import { Action, Dispatch } from "redux";

import { addTodo } from "modules/pages/todos/list/actions";
import AddTodo from ".";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onSubmit: (title: string) => {
      dispatch(addTodo({ title: title }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
