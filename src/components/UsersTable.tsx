import { Table } from "antd";
import React, { ReactText } from "react";
import { IUsersCollection } from "../models/user";

interface IComponentProps {
  collection: IUsersCollection;
}

interface IComponentState {
  selectedRowKeys: ReactText[];
  selectedUsersNames: (string | undefined)[];
}

class UsersTable extends React.Component<IComponentProps, IComponentState> {
    constructor(props:IComponentProps){
        super(props)
        this.state = { selectedRowKeys: [], selectedUsersNames: [] }
    }
  render() {
    const { collection } = this.props;
    const { selectedRowKeys, selectedUsersNames } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };
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
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={collection.items}
        footer={() => selectedUsersNames.length ? selectedUsersNames.reduce((acc, value) => `${acc}, ${value}` ): null}
        pagination={false}
        size="small"
        bordered
      />
    );
  }

  onSelectChange = (selectedRowKeys: ReactText[]) => {
    const { collection } = this.props;
    const selectedUsersNames = selectedRowKeys.map(item => collection.items.find(user => user.id === item)?.firstName)
    debugger;
    this.setState({ selectedRowKeys, selectedUsersNames });
  };
}

export default UsersTable;
