import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import NewNotePage from "../NewNote/index";
import AuthPage from "../Auth/index";
import NotesPage from "../NotesPage/index";
import Navbar from "../../components/Navbar";
import "./index.css";

const App = () => {
  const [user, setUser] = useState(getUser());

  const logOutUser = (user) => {
    setUser(user);
  };

  const signInUser = (userData) => {
    setUser(userData);
  };
  return (
    <main className="App">
      {user ? (
        <>
          <Navbar user={user} setUser={logOutUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/notes" element={<NotesPage user={user} />} />
            {/* <Route path="/notes/new" element={<NewNotePage user={user} />} /> */}
          </Routes>
        </>
      ) : (
        <AuthPage setUser={signInUser} />
      )}
    </main>
  );
};

export default App;
