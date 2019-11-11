import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import { fetchTodoOperation } from "../../modules/todo/operations";
import FetchTodo from ".";
import { RootState, RootActionTypes } from "../../modules";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, null, RootActionTypes>
) => {
  return {
    onClick: () => {
      dispatch(fetchTodoOperation());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchTodo);
