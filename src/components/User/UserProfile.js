import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserProfile } from '../../services/userService';
import { setUser } from '../../redux/authSlice';
import './UserProfile.css';

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [spaceshipColor, setSpaceshipColor] = useState(user?.spaceshipColor || '#ffffff');
  const [spaceshipName, setSpaceshipName] = useState(user?.spaceshipName || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await updateUserProfile(user.uid, { spaceshipColor, spaceshipName });
      dispatch(setUser(updatedUser));
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    }
  };

  return (
    <div className="user-profile-container">
      <form onSubmit={handleSubmit} className="user-profile-form">
        <h2>Customize Your Spaceship</h2>
        <div className="form-group">
          <label htmlFor="spaceshipName">Spaceship Name:</label>
          <input
            type="text"
            id="spaceshipName"
            value={spaceshipName}
            onChange={(e) => setSpaceshipName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="spaceshipColor">Spaceship Color:</label>
          <input
            type="color"
            id="spaceshipColor"
            value={spaceshipColor}
            onChange={(e) => setSpaceshipColor(e.target.value)}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
      <div className="spaceship-preview" style={{ backgroundColor: spaceshipColor }}>
        <span>{spaceshipName || 'Your Spaceship'}</span>
      </div>
    </div>
  );
};

export default UserProfile;