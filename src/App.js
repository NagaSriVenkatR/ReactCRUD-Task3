
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.css';
import Form from './components/Form';
import Formtable from './components/Formtable';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/form"
            element={
              <Form
                users={users}
                setUsers={setUsers}
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
              />
            }
          />
          <Route
            path="/users"
            element={
              <Formtable
                users={users}
                setUsers={setUsers}
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
              />
            }
          />
          <Route path="/" element={<Navigate to="/form" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
