import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IApplicationState } from "../redux/rootReducer";
import { UserActions } from "../redux/user/user.actions";

class MainPage extends React.PureComponent<UsersProps> {
  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }
  render() {
    return <div>hello</div>;
  }
}
const mapStateToProps = (state: IApplicationState) => ({
  users: state.users
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  getUsers: () => {
    dispatch(UserActions.getUsers());
  }
});

export type UsersProps = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
