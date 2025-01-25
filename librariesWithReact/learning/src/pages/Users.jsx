import axios from "axios";
import React, { use, useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  const fecthUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response);
    setUsers(response.data);
  };
  useEffect(() => {
    fecthUsers();
  }, []);

  return (
    <div className="bg-[#a5fff6] pb-12">
        <div className="py-24">
            <p className="text-center text-[#297580]  text-6xl">Members Information</p>
        </div>
      <div className="w-10/12 mx-auto grid grid-cols-3 gap-8">
        {users?.map((user, index) => (
          <div className="rounded-lg p-6 shadow-lg space-y-4 bg-[#01e2ff]">
            <div className="flex justify-center">
            <img
              className="rounded-full h-32 w-32"
              src="https://i.etsystatic.com/25501281/r/il/83adf7/3165986542/il_1140xN.3165986542_g4w6.jpg"
              alt="person"
            />
            </div>
            <div className="space-y-6">
              <div className="space-y-2  text-center">
                <p>{user.name} </p>
                <p>Username : {user.username} </p>
                <p>Email : {user.email} </p>
              </div>
              <p className="text-center">
                {user.company.bs}, {user.company.catchphrase}{" "}
                {user.company.name}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
