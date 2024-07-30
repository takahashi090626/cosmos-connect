import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './redux/postsSlice';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import StarMap from './components/StarMap/StarMap';
import CreatePost from './components/Post/CreatePost';
import PostDetail from './components/Post/PostDetail';
import Navbar from './components/Navigation/Navbar';
import UserProfile from './components/User/UserProfile';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchPosts());
    }
  }, [dispatch, isAuthenticated]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
          <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/" />} />
          <Route path="/" element={isAuthenticated ? <StarMap posts={posts} /> : <Navigate to="/login" />} />
          <Route path="/create-post" element={isAuthenticated ? <CreatePost /> : <Navigate to="/login" />} />
          <Route path="/post/:id" element={isAuthenticated ? <PostDetail /> : <Navigate to="/login" />} />
          <Route path="/profile" element={isAuthenticated ? <UserProfile /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
