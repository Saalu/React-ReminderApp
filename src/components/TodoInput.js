import React from 'react'

function TodoInput(props) {
   const {item, onChange, onSubmit, editItem, isEmpty} = props
    return (
    
            <div className="card card-body my-3">
                <form onSubmit={onSubmit}>
                <div className="row">
                   <div className="input-group">
                   <div className="input-group-prepend">
                   <div className="input-group-text ">
                   <i className={
                      editItem?
                      'fas fa-book  text-success input-group-prepend'
                      :
                      'fas fa-book  text-primary input-group-prepend'
                   }></i>
                   </div>
                   </div>

                      <input className={(isEmpty? 'form-control is-invalid' : 'form-control')}  type="text" id='add'
                      value={item}
                      onChange={onChange}
                      />
                      <div className="invalid-feedback">Please enter something</div>
                     <label htmlFor="add"></label>
                   </div>
                   <button  className={editItem ? 'btn btn-success btn-block mt-4' :'btn btn-primary btn-block mt-4'} >Add Item</button>
                </div>
               </form>
              
            </div>
        
    )
}

export default TodoInput
