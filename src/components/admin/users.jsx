import { useState } from "react";
import { Trash2 } from "lucide-react";
import "animate.css";

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
    },
    {
      id: 2,
      name: "Alice Smith",
      email: "alice@gmail.com",
    },
  ]);

  const removeUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="flex flex-col gap-6">
      {/* ================= HEADER ================= */}
      <h2 className="text-2xl font-bold animate__animated animate__fadeInDown">
        Users
      </h2>

      {/* ================= TABLE ================= */}
      <div className="bg-white p-6 rounded-xl shadow animate__animated animate__fadeInUp">
        <div className="flex flex-col gap-4">
          {users.map((user, index) => (
            <div
              key={user.id}
              className="flex justify-between items-center border-b pb-3 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div>
                <h3 className="font-medium">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>

              <button
                onClick={() => {
                  console.log(user); // ✅ required
                  removeUser(user.id);
                }}
                className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
