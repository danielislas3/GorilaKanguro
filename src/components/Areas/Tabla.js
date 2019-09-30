import React from 'react'
import { Table,Tabs,Modal, Input, Button, Popconfirm, Form } from 'antd';
import { AppContextConsumer } from '../Context/AppContext';


const EditableContext = React.createContext();

//context
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
      key,
      ...restProps
    } = this.props;
    return (
    
      <td {...restProps}>
        {editable ? (<EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>) : (children)}
      </td>
    );
  }
}

export default class Tabla extends React.Component {
  static contextType = AppContextConsumer

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      confirmLoading: false,

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
          preKgExtra:'1',
        },
      ], 
      columns: [
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
        }
      ],
      count: 2,
      sub: 100,
      newNameTarifa: ""
    };
  }
 // MODAL
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleInput = e => {
    this.setState({ newNameTarifa: e.target.value });
  };
  handleOk = () => {
    this.setState({
      ModalText: `El nombre de la nueva tarifa es : ${this.state.newNameTarifa}`,
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 500);
    //Añadir columna
    this.handleAddColumn()
    this.state.newNameTarifa=''
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

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
      preKgExtra:'2',
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
      sub:sub+8.4,      
    });
  };

  // Event to add new column
  handleAddColumn = () => {
    const { columns } = this.state;
    const newColumns = 
      [
        {
          title: this.state.newNameTarifa,
          dataIndex:  this.state.newNameTarifa,
          editable: true,
          children: [
            {
              title: 'Subtotal (Prov)',
              dataIndex: 'sub',
              editable: true,
            },
            {
              title: 'Precio/Kg extra (Prov)',
              dataIndex: 'preKgExtra',
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
            },
          ]
        }
      ]

    this.setState({
      columns: [...columns, ...newColumns]
    });
    //this.context.toggleTarifas(...newColumns)
  }

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

  handleEditable = (col) => {
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
  }

  render() {
    console.log("context")
    console.log(this.context)

    const { dataSource,visible, confirmLoading  } = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };

    
    const columns = this.state.columns.map((col,i) => {
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
          <span>tabla</span>
        <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
          Nuevo peso
        </Button>
        <Button type="primary" onClick={this.showModal}  style={{ marginBottom: 16 }}>
          Nueva tarifa
        </Button>
        <Modal
          title="Nueva Tarifa"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <Input
            placeholder="Nombre de tarifa"
            style={{ marginLeft: 20, width: 200 }}
            onChange={this.handleInput}
            value={this.state.newNameTarifa}
          />
          <br/>
         {this.state.newNameTarifa.length>0? <p>El nombre de la nueva tarifa es: {this.state.newNameTarifa}</p>: <p></p>}
        </Modal>


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

