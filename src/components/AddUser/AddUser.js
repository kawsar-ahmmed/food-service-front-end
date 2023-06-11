import React from 'react';

const AddUser = () => {
    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email }
        console.log(user)
        fetch('http://localhost:5001/user', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success', data)
                alert('User Added Successfully ')
                event.target.reset();
            })
    }
    return (
        <div className='container mx-auto'>
            <form onSubmit={handleAddUser} className='text-center flex flex-col w-96 m-auto '>
                <input className=' bg-slate-200 py-3 px-4 rounded my-2' type="text" name='name' placeholder='Name' />
                <input className=' bg-slate-200 py-3 px-4 rounded my-2' type=" email" name="email" placeholder="Email" />
                <button className=' bg-orange-600 text-white h-12 mt-4 rounded'>Add user</button>
            </form>
        </div>
    );
};

export default AddUser;