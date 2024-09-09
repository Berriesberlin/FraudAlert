import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RealStories from './components/RealStories';
import Volunteer from './components/Volunteer';
import Workshop from './components/Workshop';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Post from './components/Post';
import useNode from './hooks/useNode';

const comments = {
  id: 1,
  items: [],
};
export const AuthContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [commentsData, setCommentsData] = useState(comments);
  const { insertNode, editNode, deleteNode } = useNode();

  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
  };

  const handleEditNode = (folderId, value) => {
    const finalStructure = editNode(commentsData, folderId, value);
    setCommentsData(finalStructure);
  };

  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId);
    const temp = { ...finalStructure };
    setCommentsData(temp);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser){
      setUser(JSON.parse(storedUser));
    }
  },[]);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData))
  };

  // Function to handle logout
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  let component
  switch(window.location.pathname){
    case "/":
      component = <Home />
      break
    case "/post":
      component = <Post />
      break
    case "/real-stories":
      component = (
        <RealStories
          commentsData={commentsData}
          handleInsertNode={handleInsertNode}
          handleEditNode={handleEditNode}
          handleDeleteNode={handleDeleteNode}
        />
      );
      break;
    case "/workshop":
      component = <Workshop/>
      break
    case "/volunteer":
      component = <Volunteer/>
      break
    case "/about":
      component = <AboutUs/>
      break
    case "/login":
      component = <Login/> 
      break
    case "/signup":
      component = <SignUp/>
  }

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      <div>
        <Navbar />
        {component }
        <Footer />
    </div>
    </AuthContext.Provider>
  );
}

export default App;