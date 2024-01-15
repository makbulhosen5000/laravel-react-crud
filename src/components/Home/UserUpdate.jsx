import React from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const UserUpdate = () => {
      
      const loadedUser = useLoaderData();
      const userUpdateHandler = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        //const password = form.password.value;
        const updatedUser = {name,email};
        console.log(updatedUser);
      
            fetch(`http://127.0.0.1:8000/api/users/${loadedUser.id}`,{
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedUser),
        })

        .then(res=>res.json())
        .then(data=>console.log(data))
        toast('User Update Successfully');
   }

    return (
        <div className="container mx-auto mt-8">
            <Link to="/"><button className="bg-green-600 text-white px-2 py-1 rounded ">All Users </button></Link>
            <form onSubmit={userUpdateHandler}  className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
                <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md" defaultValue={loadedUser?.name} />
                </div>
                <div className="mb-4">
                <label  className="block text-gray-600 text-sm font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md" defaultValue={loadedUser?.email} />
                </div>
                {/* <div className="mb-4">
                <label  className="block text-gray-600 text-sm font-medium mb-2">Password</label>
                <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-md" defaultValue={loadedUser?.password} />
                </div> */}
                <div className="flex items-center justify-between">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Update</button>
                
                </div>
            </form>
</div>

    );
};

export default UserUpdate;