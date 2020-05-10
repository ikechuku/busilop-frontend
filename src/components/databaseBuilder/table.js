import React, { useContext } from 'react'
import './style.css'
import nodeStoreContext from '../../stores/nodeStore'
import Button from '@material-ui/core/Button';
import axios from 'axios'
import { observer } from 'mobx-react-lite';

// const storeComponent = observer(() => {
//   const store = useContext(nodeStoreContext)
//   return (
//     <div></div>
//   );
// })



var table = [];
table.push({ index: 1, value: "id" });
table.push({ index: 2, value: "Name" });
table.push({ index: 3, value: "Email" });
table.push({ index: 4, value: "Phone Number" });

class TodoList extends React.Component {
  render() {
    var items = this.props.items.map((item, index) => {
      return (
        <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
      );
    });
    return (
      <ul className="list-group">{items}</ul>
    );
  }
}

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  onClickClose() {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  }
  onClickDone() {
    var index = parseInt(this.props.index);
    this.props.markTodoDone(index);
  }
  render() {
    var todoClass = this.props.item.done ? "done" : "undone";
    return (
      <li className="list-group-item">
        <div id="item" className={todoClass}>
          {/* <span className="glyphicon glyphicon-ok icon" onClick={this.onClickDone}></span> */}
          {this.props.item.value}
          <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
        </div>
      </li>
    );
  }
}

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.refs.itemName.focus();
  }
  onSubmit(event) {
    event.preventDefault();
    var newItemValue = this.refs.itemName.value;
    if (newItemValue) {
      this.props.addItem({ newItemValue });
      this.refs.form.reset();
    }
  }
  render() {
    return (
      <form ref="form" onSubmit={this.onSubmit} className="form-inline">
        <input type="text" ref="itemName" className="form-control" placeholder="add new fields..." />
        <Button variant="contained" color="primary" type="submit">+</Button>

        {/* <button type="submit" className="btn btn-default"></button> */}
      </form>
    )
  }
}

const TodoHeader = () => {
  const store = useContext(nodeStoreContext)
  return (
    <h3 className="title">Database builder</h3>
  );
}

const PostButton = () => {
  const store = useContext(nodeStoreContext)
  let setTable = async () => { store.setTables(table) };
  let data = store.all
  return (
    <Button
      onClick={() => {
        setTable().then(
          console.log(data)
        )
        .then(

          axios.post('http://localhost:5000/form', { data })
        )

        //   .then(console.log(data)
        //   )
      }}
      variant="contained"
      color="primary">
      Create Tables
    </Button>
  );
}
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = { table: table };
  }
  addItem(todoItem) {
    table.push({
      index: table.length + 1,
      value: todoItem.newItemValue,
    });
    this.setState({ table: table });
  }
  removeItem(itemIndex) {
    table.splice(itemIndex, 1);
    this.setState({ table: table });
  }
  markTodoDone(itemIndex) {
    var todo = table[itemIndex];
    table.splice(itemIndex, 1);

    todo.done = !todo.done;
    todo.done ? table.push(todo) : table.unshift(todo);
    this.setState({ table: table });
  }
  render() {
    return (
      <div className="todoForm">
        <TodoHeader />
        <TodoForm addItem={this.addItem} />
        <TodoList items={table} removeItem={this.removeItem} markTodoDone={this.markTodoDone} />
        <PostButton />
      </div>
    )
  }
}

export default TodoApp
