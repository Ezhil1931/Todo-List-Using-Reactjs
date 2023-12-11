import React from 'react'




function Listitem({ item, handlecheck, handledelete }) {



    return <ol className='list'>


        {item.map ((items) => (


<li className='listitem' >
            <input type='checkbox' checked={items.checked}
                onClick={() => handlecheck(items.id)}
            id="check"
            />
          
            <label
            id="label"

                style={items.checked ? { textDecoration: "line-through",} : null}
                onClick={() => handlecheck(items.id)}
            >{items.item}</label>
            
            <button tabIndex="0"

                    id="remove"
                onClick={() => handledelete(items.id)}
            >Del</button>
        </li>

        ))}

    </ol>


}
export default Listitem;