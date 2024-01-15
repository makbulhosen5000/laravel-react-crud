import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user,handleDelete}) => {

    return (
       <>
        <tr>
            <td className="py-2 px-4 border-b">{user?.id}</td>
            <td className="py-2 px-4 border-b">{user?.name}</td>
            <td className="py-2 px-4 border-b">{user?.email}</td>
            <td className="py-2 px-4 border-b">
            <Link to={`/user-update/${user.id}`}><button  className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button></Link>
            <button onClick={()=>handleDelete(user.id)}  className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>
            <button className="bg-green-500 text-white px-2 py-1 rounded ml-2">View</button>
            </td>
        </tr>
       </>
    );
};

export default User;