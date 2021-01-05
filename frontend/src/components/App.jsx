import React from 'react';
import Axios from 'axios';
import Display from './Display.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      groceries: [],
      item: '',
      qty: 0
    }
    this.itemHandle = this.itemHandle.bind(this);
    this.qtyHandle = this.qtyHandle.bind(this);
    this.getGrocery = this.getGrocery.bind(this);
    this.postGrocery = this.postGrocery.bind(this);
  }
  componentDidMount() {
    this.getGrocery();
  }

  itemHandle(e) {
    this.setState({
      item: e.target.value
    })
  }

  qtyHandle(e) {
    this.setState({
      qty: e.target.value
    })
  }

  getGrocery() {
    Axios.get('/api/groceries')
      .then(data => {
        this.setState({groceries: data.data})
      })
      .catch(err => {
        console.error(err);
      })
  }

  postGrocery(e) {
    e.preventDefault();
    Axios.post('/api/groceries', {
      item: this.state.item,
      qty: Number(this.state.qty)
    })
    .then(() => this.getGrocery())
    .catch((err) => console.error(err))
  }

  deleteGrocery(id) {
    Axios.delete(`/api/groceries/_${id}`)
    .then(() => {this.getGrocery()})
    .catch((err) => {console.log(err)})
  }

  render() {
    return (
      <div>
        <h1>Grocery List</h1>
        <label>Item:
          <input onChange={this.itemHandle}/>
        </label>
        <label>Quantity:
          <input onChange={this.qtyHandle} />
        </label>
        <button onClick={this.postGrocery}>Add Item</button>
        <Display items={this.state.groceries} deletion={this.deleteGrocery} />
      </div>
    )
  }
}

export default App;