import React, { Component } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import './index.css'

import {v4 as uuid} from "uuid"; 


export class App extends Component {

  state = {
    items:[],
    item:'',
    id:uuid(),
    editItem:false,
    isEmpty:false
  }

  onChange = (e)=> {
    this.setState({item: e.target.value, isEmpty:false})
  }

  onSubmit = (e)=> {
    e.preventDefault()

    const newItem = {
      id: this.state.id,
      title: this.state.item
    }

    const updatedItems = [...this.state.items, newItem]

   if(newItem.title === ''){
    console.log('please enter value')
    this.setState({isEmpty:true})
   }else{
    this.setState({
      items:updatedItems,
      item:'',
      id:uuid(),
      editItem:false
    })

   }
  }

  onEdit = (id)=> {
    const filteredList = this.state.items.filter(item => item.id !==id)

    const selectedItem = this.state.items.find(item => item.id === id)
    
    console.log(selectedItem)

    this.setState({
      items:filteredList,
      item:selectedItem.title,
      editItem:true,
      id:id,
    })
  }
  onDelete = (id)=> {
    const filteredList = this.state.items.filter(item => item.id !==id)

        console.log(filteredList)
    this.setState({
      items:filteredList
    })

  }

   onClearList = ()=> {
        this.setState({items: []})
  }
 
  render() {
    const {item, items, editItem, isEmpty} = this.state
    return (
      <div className='App'>
        <h1>Reminder App</h1>
       <TodoInput
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        item={item}
        editItem={editItem}
        isEmpty={isEmpty}
       />
       <TodoList
        items={items}
        onClearList={this.onClearList}
        onEdit={this.onEdit}
        onDelete={this.onDelete}
       />
      </div>
    )
  }
}

export default App
