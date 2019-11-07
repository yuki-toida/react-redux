import { connect } from "react-redux";
import { Action, Dispatch } from "redux";

import { toggleTodo } from "../../modules/todos/actions";
import { RootState } from "../../modules";
import TodoList from ".";

const mapStateToProps = (state: RootState) => {
  return {
    todos: state.todos.todos
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    toggleTodo: (id: number) => {
      dispatch(toggleTodo({ id: id }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
