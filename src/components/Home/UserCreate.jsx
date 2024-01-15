import react from 'react';
import { Link } from 'react-router-dom';
import { toast } from "react-hot-toast";

const UserCreate = () => {


      // create user function
      const userFormHandler = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {name,email,password};
      
            fetch(`http://localhost:8000/api/users`,{
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
        })

        .then(res=>res.json())
        .then(data=>console.log(data))
        toast("User Create Successfully")
   }

    return (
        <div className="container mx-auto mt-8">
            <Link to="/"><button className="bg-green-600 text-white px-2 py-1 rounded ">View User</button></Link>
            <form onSubmit={userFormHandler}  className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
                <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md" placeholder="John Doe" />
                </div>
                <div className="mb-4">
                <label  className="block text-gray-600 text-sm font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md" placeholder="john@example.com" />
                </div>
                <div className="mb-4">
                <label  className="block text-gray-600 text-sm font-medium mb-2">Password</label>
                <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-md" placeholder="********" />
                </div>
                <div className="flex items-center justify-between">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
                
                </div>
            </form>
</div>

    );
};

export default UserCreate;