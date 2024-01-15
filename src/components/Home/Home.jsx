import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import User from '../User/User';
import Swal from "sweetalert2";

const Home = () => {
    const [search,setSearch] = useState('');
    const [users,setUsers] = useState([]);

   // fetch user from server
    const url = `http://localhost:8000/api/users`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[]);

  

   // delete user function
   const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("delete");
        fetch(`url/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
  

            Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
            const remaining = users.filter(user=>user.id !== id);
            setUsers(remaining);
      }
    });
  };




    return (
        <div className="container mx-auto mt-8">
            <div className='flex justify-between gap-4 mb-3'>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearch(e.target.value)}
                    className="px-4 py-2 border border-gray-600 rounded-l-lg focus:outline-none focus:ring focus:border-blue-300"
                />
                <Link to="/user-create"><button className="bg-green-600 text-white px-2 py-1 rounded"> + User Create</button></Link>
            </div>
            <table className="min-w-full border border-gray-300 text-center">
                <thead>
                <tr>
                    <th className="py-2 px-4 bg-gray-200 border-b">ID</th>
                    <th className="py-2 px-4 bg-gray-200 border-b">Name</th>
                    <th className="py-2 px-4 bg-gray-200 border-b">Email</th>
                    <th className="py-2 px-4 bg-gray-200 border-b">Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.filter((user) => {
                      return search?.toLowerCase() === ""
                        ? user
                        : user?.name?.toLowerCase().includes(search);
                    })
                    .map((user) => (
                      <User key={user.id} user={user}
                      handleDelete={handleDelete}
                        />
                    ))}
              </tbody>
            </table>
</div>

    );
};

export default Home;