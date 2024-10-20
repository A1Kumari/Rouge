import React from 'react';
import './styles/ProfileSection.css'; // Make sure this path is correct
import userProfile1 from '../../img/GirlUser.svg'; // Update with your profile image path
import userProfile2 from '../../img/BoyUser.svg';

const ProfileSection = ({ userName }) => {
    return (
        <div className="profile-container">
            {/* Left Section - Text and Button */}
            <div className="col-md-6">
                <div className="text-center">
                    <h1 className="display-4">{userName}</h1>
                    <p className="lead">Welcome back! Here's your profile overview.</p>
                    <button className="btn-logout">Logout</button>
                </div>
            </div>

            {/* Right Section - Floating Images */}
            <div className="col-md-6">
                <div className="image-container">
                    <img src={userProfile1} alt="Profile" className="profile-img profile-img-top-left" />
                    <img src={userProfile2} alt="Profile" className="profile-img profile-img-center" />
                    <img src={userProfile1} alt="Profile" className="profile-img profile-img-bottom-right" />
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;
