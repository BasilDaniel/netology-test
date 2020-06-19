import { Col, Row } from "antd";
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
    const data = collection.items.map(item => ({ ...item, key: item.id }));
    const columns = [
      {
        title: "Имя",
        dataIndex: "firstName"
      },
      {
        title: "Фамилия",
        dataIndex: "lastName"
      },
      {
        title: "Возраст",
        dataIndex: "age"
      }
    ];

    return (
      <Row justify="center">
        <Col xs={24} sm={22}>
          <UsersTable data={data} columns={columns} />
        </Col>
      </Row>
    );
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
