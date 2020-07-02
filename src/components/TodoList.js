import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props ) {
    const {item, items, onClearList, onEdit, onDelete} = props
  return (
    <div className='container'>
      <h4>TodoList</h4>
        {
            items.map(item =>(
               <TodoItem  
               key={item.id}
              title={ item.title}
              onEdit={()=>onEdit(item.id)}
              onDelete={()=>onDelete(item.id)}
               />

            ))
        }
      <button className='btn btn-danger btn-block' onClick={onClearList} >Clear List</button>
    </div>
  )
}

export default TodoList
