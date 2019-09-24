import React from 'react'
import { Table,Tabs, Input, Button, Popconfirm, Form } from 'antd';
import ReactDOM from 'react-dom';
const { TabPane } = Tabs;
const EditableContext = React.createContext();


function callback(key) {
  console.log(key);
}


//hook
const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    editing: false,
  };

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  save = e => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  renderCell = form => {
    this.form = form;
    const { children, dataIndex, record, title } = this.props;
    const { editing } = this.state;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`,
            },
          ],
          initialValue: record[dataIndex],
        })(<Input type="number" min={this.count} ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={this.toggleEdit}
      >
        {children}
      </div>
    );
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (<EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>) : (children)}
      </td>
    );
  }
}

export default class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: 'KG Desde',
        dataIndex: 'desde',
        width: '20%',
        editable: true,
      },
      {
        title: 'KG Hasta',
        dataIndex: 'hasta',
        editable: true,
      },
      {
        title: 'Subtotal',
        dataIndex: 'sub',
        editable: true,
      },
      {
        title: 'Precio/Kg extra',
        dataIndex: 'preKgExtra',
        editable: true,
      }
      // {
      //   title: 'operation',
      //   dataIndex: 'operation',
      //   render: (text, record) =>
      //     this.state.dataSource.length >= 1 ? (
      //       <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
      //         <a>Delete</a>
      //       </Popconfirm>
      //     ) : null,
      // },
    ];

    this.state = {
      dataSource: [
        {
          key: '0',
          desde: '0',
          hasta: '1',
          sub: '86.81',
          preKgExtra:'0',
        },
        {
          key: '1',
          desde: '1.01',
          hasta: '2',
          sub: '94.85',
          preKgExtra:'0',
        },
      ],
      count: 2,
      sub:94.85,

    };
  }

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };

  handleAdd = () => {
    const { count, dataSource,sub } = this.state;
    
    const newData = {
      key: count,
      desde: `${count}.01 `,
      hasta: `${Number(count)+1}`,
      sub: `${sub+8.4}`,
      preKgExtra:'0',
      
      editableKgExtra:count>5? true: false
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
      sub:sub+8.4,
      
      // editableKgExtra: this.state.count>5? true: false
      
    });
  };
  handleAddRight = () => {
    const { count, dataSource,sub } = this.state;
    
    const newData = {
      key: count,
      desde: `${count}.01 `,
      hasta: `${Number(count)+1}`,
      sub: `${sub+8.4}`,
      preKgExtra:'0',
      
      editableKgExtra:count>5? true: false
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
      sub:sub+8.4,
      
      // editableKgExtra: this.state.count>5? true: false
      
    });
  };

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
          Nuevo peso
        </Button>
        <Button onClick={callback(23)} type="primary" style={{ marginBottom: 16 }}>
          Nueva Tarifa
        </Button>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    );
  }
}

