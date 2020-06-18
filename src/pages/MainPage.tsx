import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Spiner } from "../common/components/Spiner";
import UsersTable from "../components/UsersTable";
import { IApplicationState } from "../redux/rootReducer";
import { UserActions } from "../redux/user/user.actions";
import { userSelectors } from "../redux/user/user.selectors";

class MainPage extends React.PureComponent<UsersProps> {
  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }
  render() {
    const { users } = this.props;
    const { collection, loading } = users;

    if (loading) {
      return <Spiner align="center" size="large" />;
    }
    if (!collection) {
      return null;
    }

    return <UsersTable collection={collection} />;
  }
}
const mapStateToProps = (state: IApplicationState) => ({
  users: userSelectors.getUsers(state)
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
