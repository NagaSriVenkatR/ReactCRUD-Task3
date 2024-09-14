import React from 'react'
import { FaUserEdit } from "react-icons/fa";
import { TiUserDelete } from "react-icons/ti";
const Formtable = ({users}) => {
  return (
    <div className='row justify-content-center align-items-center'>
      <table className='table col-md-6'>
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
              <td>
                <FaUserEdit
                  className="text-success"
                  // onClick={() => handleEdit(user)}
                />
                <TiUserDelete
                  className="text-danger"
                  // onClick={() => handleDelete(user.email)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Formtable
