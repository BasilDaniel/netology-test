import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import React, { ReactText } from "react";
import { IUserWithKey } from "../models/user";

interface IComponentProps {
  data: IUserWithKey[];
  columns:ColumnsType<IUserWithKey>
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
    const { data, columns } = this.props;
    const { selectedRowKeys, selectedUsersNames } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };
    
    return (
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        footer={() => selectedUsersNames.length ? `Пользователи: ${selectedUsersNames.reduce((acc, value) => `${acc}, ${value}`)}`: 'Пользователи:'}
        pagination={false}
        size="small"
        bordered
      />
    );
  }

  onSelectChange = (selectedRowKeys: ReactText[]) => {
    const { data } = this.props;
    const selectedUsersNames = selectedRowKeys.map(item => data.find(user => user.id === item)?.firstName)
    this.setState({ selectedRowKeys, selectedUsersNames });
  };
}

export default UsersTable;
