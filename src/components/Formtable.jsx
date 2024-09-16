import React, { useEffect } from 'react'
import { FaUserEdit } from "react-icons/fa";
import { TiUserDelete } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
const Formtable = ({ users, setUsers, setSelectedUser }) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(savedUsers);
  }, [setUsers]);

  const handleEdit = (user) => {
    setSelectedUser(user);
    navigate("/form");
  };

  const handleDelete = (email) => {
    const updatedUsers = users.filter((user) => user.email !== email);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center mt-5">
        <div className="col-md-8">
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>S.No</th>
                <th>FullName</th>
                <th>Email</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.fullName}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td className=' fs-5'>
                    <FaUserEdit
                      className="text-success me-3"
                      onClick={() => handleEdit(user)}
                    />
                    <TiUserDelete
                      className="delete"
                      onClick={() => handleDelete(user.email)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Formtable
