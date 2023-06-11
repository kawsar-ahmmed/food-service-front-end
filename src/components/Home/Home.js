import React, { useEffect, useState } from 'react';
import './Home.css'

const Home = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5001/user`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    console.log(user)
    const handleDelete = id => {
        const process = window.confirm(`Do you want to ser delete?`)
        console.log(id)
        const url = `http://localhost:5001/user/${id}`
        console.log(url)
        fetch(url, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log('deleted', user)
        })


    }
    return (
        <div>
            <div className="user-full grid gap-4 grid-cols-2 container mx-auto">
                {
                    user.map(item =>
                        <div key={item._id}  className=' border border-orange-300 rounded p-4'>
                            <h1>{item.name}</h1>
                            <p>{item.email}</p>
                            <button onClick={()=>handleDelete(item._id)} className=' py-2 px-6 bg-red-400 text-white rounded my-3 mr-2'>Delete user</button>

                            <button className=' py-2 px-6 bg-green-600 text-white rounded'>Update user</button>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Home;