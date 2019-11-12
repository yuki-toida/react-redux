import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import {
  toggleTodo,
  deleteTodo
} from "../../../modules/pages/todos/list/actions";
import { findTodoOperation } from "../../../modules/pages/todos/list/operations";
import { RootState, RootActionTypes } from "../../../modules";
import TodosList from ".";

const mapStateToProps = (state: RootState) => {
  return {
    todos: state.todos.todosList.todos
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, null, RootActionTypes>
) => {
  return {
    findTodo: () => {
      dispatch(findTodoOperation());
    },
    toggleTodo: (id: number) => {
      dispatch(toggleTodo({ id: id }));
    },
    deleteTodo: (id: number) => {
      dispatch(deleteTodo({ id: id }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosList);
