import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import { RootState, RootActionTypes } from "modules";
import { getTodoOperation } from "modules/pages/todos/edit/operations";
import TodosEdit from ".";

const mapStateToProps = (state: RootState) => {
  return {
    todo: state.todos.todosEdit.todo
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, null, RootActionTypes>
) => {
  return {
    getTodo: (id: number) => {
      dispatch(getTodoOperation(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosEdit);
