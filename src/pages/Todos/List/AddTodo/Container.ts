import { connect } from "react-redux";
import { Action, Dispatch } from "redux";

import { addTodo } from "../../../../modules/todo/actions";
import AddTodo from ".";

// store.getState()を受け取り、PresentationalComponent(tsx)のPropに渡す関数
const mapStateToProps = () => {
  return {};
};

// store.dispatchを受け取り、PresentationalComponent(tsx)のPropsに渡す関数
// 要するに、PresentationalComponentのコールバック関数を定義する関数
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
