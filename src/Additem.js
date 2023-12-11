import React from 'react'
import { useRef } from 'react'

function Additem({ newitem, setnewitem, handlesubmit }) {


    const inputref = useRef()



    return (
        <form className='addform' onSubmit={handlesubmit}>
            <label htmlFor='additem'>AddItem</label>
            <br></br><input
                id="additem"
                type='text'
                required
                ref={inputref}
                value={newitem}
                onChange={(e) => setnewitem(e.target.value)}
            />
            <button
               id="btn"
                type='submit'

                onClick={() => inputref.current.focus()}

            >+</button>

        </form>

    )




}

export default Additem