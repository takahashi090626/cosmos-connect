import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const updateUserProfile = async (userId, profileData) => {
  try {
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);
    
    if (userDoc.exists()) {
      await setDoc(userRef, profileData, { merge: true });
    } else {
      // ドキュメントが存在しない場合は新規作成
      await setDoc(userRef, { ...profileData, createdAt: new Date().toISOString() });
    }
    
    const updatedUser = await getDoc(userRef);
    return { id: updatedUser.id, ...updatedUser.data() };
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};