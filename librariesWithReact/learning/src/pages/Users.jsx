import axios from 'axios'
import React, { use, useEffect, useState } from 'react'

export default function Users() {
    const [users, setUsers] = useState([]);

    const fecthUsers =async ()=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users") 
        console.log(response);
        setUsers(response.data);

    };
    useEffect(() => {
        fecthUsers();
    }, [])
    




  return (
    <div>
        {
            users?.map((user, index)=>(
                <div>
                    <p>{user.name} </p>
                    <p>{user.email} </p>
                    <p>{user.address.street} </p>
                </div>
            ))
        }
    </div>
  )
}
