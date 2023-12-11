import React, { useState } from 'react'


function Newapp() {


    const userinfo = [

        {
            idname: 'Arivu',
            jop: "Marketing",
            age: 28

        },
        {
            idname: 'Udahaya',
            jop: "Master",
            age: 27
        },
        {
            idname: 'Sanjai',
            jop: "Content Creator",
            age: 22
        },
        {
            idname: 'Vicky',
            jop: "Lab tester",
            age: 25
        },
        {
            idname: 'Siranjeevi',
            jop: "Plumber",
            age: 26
        }





    ]
    const [userdata, newuserdata] = useState([]);


    const nameclick = (info) => {

        const data1 = info.map((info) => info.idname)

        newuserdata(data1)
    }
    const jopclick = (info) => {

        const data1 = info.map((info) => info.jop)

        newuserdata(data1)
    }


    const ageclick = (info) => {

        const data1 = info.map((info) => info.age)

        newuserdata(data1)
    }







    return (
        <div>
            <div><br></br>
                <button onClick={() => nameclick(userinfo)}>User</button>
                <button onClick={() => jopclick(userinfo)}>Comment</button>
                <button onClick={() => ageclick(userinfo)}>Post</button>
            </div>

            <ul>
                {userdata.map((name2) => (

                    <li>
                        <label>{name2}</label>


                    </li>

                ))}
            </ul>


        </div>
    )
}

export default Newapp