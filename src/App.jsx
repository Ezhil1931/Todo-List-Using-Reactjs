import React from 'react';
import './App.css';
import Content from './Content';
import Head from './head';
import Footer from './Footer';

import { useState } from 'react';
import Additem from './Additem';
import Search from './Search';
import { useEffect } from 'react';
import request from './Request';


function App() {


    const [item, setitem] = useState(JSON.parse(localStorage.getItem('todolist')))

    const [newitem, setnewitem] = useState('')
    const [search, setsearch] = useState('')

    



    const additem=(all)=>{
        
        
        const ids = item.length ? item[item.length - 1].id + 1 : 1;

        const addnewitem = { id: ids, checked: false, item: all }
        const listitem = [...item, addnewitem]
        setitem(listitem);
        localStorage.setItem("todolist",JSON.stringify(listitem))
  


    }
    const handlesubmit = (e) => {

        e.preventDefault();

        if (!newitem) return;
        setnewitem('');
        additem(newitem);

    }



    let length = item.length;
    const handlecheck = async(id) => {

        const listitem = item.map((items) =>
            items.id === id ? { ...items, checked: !items.checked } : items
        )
        setitem(listitem)
        localStorage.setItem("todolist",JSON.stringify(listitem))
        

    }



    const handledelete = async(id) => {
        const listitem = item.filter((items) => items.id !== id)

        setitem(listitem)
        localStorage.setItem("todolist",JSON.stringify(listitem))

    }



    return (

        <div className='container'>

            <Head
                title='Todolist'


            />
            <Additem
                newitem={newitem}
                setnewitem={setnewitem}
                handlesubmit={handlesubmit}

            />
            <Search
                search={search}
                setsearch={setsearch}

            />
            <main>
 <Content

                item={item.filter((item)=>(item.item).includes(search))}
                setitem={setitem}
                 handlecheck={handlecheck}
                handledelete={handledelete}
                count={length}

            />
            </main>
            <Footer
               count={length}
            />
            

        </div>

    )
}



export default App;
