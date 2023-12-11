import React from 'react'

function Todo({items,handlecheck,handledelete}) {
  

return(
<li>
<input type='checkbox' checked={items.checked}
    onClick={() => handlecheck(items.id)}

/>
<label

    style={items.checked ? { textDecoration: "line-through", color: "red" } : null}
    onClick={() => handlecheck(items.id)}
>{items.item}</label>
<button tabIndex="0"


    onClick={() => handledelete(items.id)}
>Delete3</button>
</li>
)
}

export default Todo