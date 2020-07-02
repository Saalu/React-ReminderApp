import React from 'react'

function TodoItem({title,onEdit, onDelete}) {
    return (
        <div className='container'>
           <ul >
               <li className='row'>
                    <span className='col-6 '>{title}</span>
                   <a className='col-6  '>
                   <span onClick={onEdit} ><i className='fas fa-pen fa-1x m-3 text-success'></i></span>
                   <span onClick={onDelete} ><i className='fas fa-trash text-danger' ></i></span>
                   </a>
            </li>
            </ul>
        
        </div>
    )
}

export default TodoItem
