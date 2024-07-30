import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../../redux/postsSlice';
import { createPost } from '../../services/postService';
import './Post.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = await createPost({ title, content, category });
      dispatch(addPost(newPost));
      navigate('/');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="create-post-container">
      <form onSubmit={handleSubmit} className="create-post-form">
        <h2>Create a New Post</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select a category</option>
          <option value="relationships">Relationships</option>
          <option value="career">Career</option>
          <option value="education">Education</option>
          <option value="health">Health</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;