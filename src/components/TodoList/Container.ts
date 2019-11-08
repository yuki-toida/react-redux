import { connect } from "react-redux";
import { Action, Dispatch } from "redux";

import { toggleTodo } from "../../modules/todo/actions";
import { RootState } from "../../modules";
import TodoList from ".";

const mapStateToProps = (state: RootState) => {
  return {
    todos: state.todo.todos
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
