import React from "react";
import { Table, Tabs, Input, Button, Popconfirm, Form } from "antd";
import { AppContextConsumer } from "../Context/AppContext.js";
import Precio from "../../model/Peso.js";
const { TabPane } = Tabs;
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
    editing: false
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
              message: `${title} is required.`
            }
          ],
          initialValue: record[dataIndex]
        })(
          <Input
            type="number"
            min={this.count}
            ref={node => (this.input = node)}
            onPressEnter={this.save}
            onBlur={this.save}
          />
        )}
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
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
}

export default class TablaAnidada extends React.Component {
  static contextType = AppContextConsumer;

  constructor(props, context) {
    super(props, context);

    this.state = {
      dataProvs: props,
      dataSource: this.context.state.coberturas[this.props.index.indexCobertura]
        .tarifas[this.props.index.indexTarifa].precios,
      columns: this.props.columns,
      count: 2,
      sub: 94.85
    };
  }

  sendData = () => {
    this.setState({
      dataSource: this.context.state.coberturas[this.props.index.indexCobertura]
        .tarifas[this.props.index.indexTarifa].precios
    });
    console.log(this.context.state)
  };

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };

  handleAdd =  () => {

    const { count, dataSource, sub } = this.state;
    const { indexCobertura, indexTarifa } = this.props.index;
    const newData = new Precio(
      count,
      `${count}.01 `,
      `${Number(count) + 1}`,
      `${sub + 8.4}`, "2"
    );

    // const newData = {
    //   key: count,
    //   desde: `${count}.01 `,
    //   hasta: `${Number(count) + 1}`,
    //   sub: `${sub + 8.4}`,
    //   preKgExtra: "2"
    // };

    //instanciando precios
    this.context.addPeso(indexCobertura, indexTarifa, newData);
    
    this.context.coutCobertura(count,indexCobertura);

    //*Esto es lo que hace que se duplique el primer peso agragado*/
    
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
      subK: sub + 8.4
    });
    this.sendData()

  };

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];

    newData.splice(index, 1, {
      ...item,
      ...row
    });

    //aqui mando los datos editados de los nuevos precios al contexto
    this.context.editPesos(newData, this.props.index);

    this.sendData()
    //cuando termine la funcion de arriba cmento la de abajo
    //this.setState({ dataSource: newData });
  };

  handleEditable = col => {
    return {
      ...col,
      onCell: record => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: this.handleSave
      })
    };
  };
  
  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell
      }
    };

    const columns = this.state.columns.map(col => {
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
          handleSave: this.handleSave
        })
      };
    });
    // console.log('this.state.dataSource');
    console.log("****datacontext-> **state.dataSource*");
    console.log(this.state.dataSource);
    localStorage.setItem('coberturas',JSON.stringify(this.context.state.coberturas))
    return (
      <div>
        <Button
          onClick={this.handleAdd}
          type="primary"
          style={{ marginBottom: 16 }}
        >
          Nuevo peso
        </Button>

        <Button
          onClick={this.sendData}
          type="primary"
          style={{ marginBottom: 16 }}
        >
          Guardar datos
        </Button>

        <Table
          components={components}
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    );
  }
}
