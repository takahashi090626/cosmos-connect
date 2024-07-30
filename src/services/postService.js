import { collection, addDoc, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const getPosts = async () => {
  try {
    const postsCollection = collection(db, 'posts');
    const postsSnapshot = await getDocs(postsCollection);
    return postsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const createPost = async (postData) => {
  try {
    const docRef = await addDoc(collection(db, 'posts'), postData);
    return { id: docRef.id, ...postData };
  } catch (error) {
    console.error('Error adding post:', error);
    throw error;
  }
};

export const getPostById = async (id) => {
  try {
    const postDoc = await getDoc(doc(db, 'posts', id));
    if (postDoc.exists()) {
      return { id: postDoc.id, ...postDoc.data() };
    } else {
      throw new Error('Post not found');
    }
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
};