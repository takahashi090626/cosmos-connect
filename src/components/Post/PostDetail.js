import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../../services/postService';
import './Post.css';

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await getPostById(id);
        setPost(fetchedPost);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="post-detail-container">
      <h2>{post.title}</h2>
      <p className="post-category">{post.category}</p>
      <p className="post-content">{post.content}</p>
      {/* Add comments and likes functionality here */}
    </div>
  );
};

export default PostDetail;