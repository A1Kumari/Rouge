import React from 'react';
import ImageEditor from '../components/ImageEditor';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UserHistoryComponent from '../components/UserHistoryComponent';
import './styles/AcneDetectionPage.css'; // Import the CSS file

const AcneDetectionPage = () => {
    return (
        <>
            <Navbar />
            <div className="container py-5">
                <h2 className="text-center mb-4">Find out the acne on your skin</h2>
                <div className="row content-section">
                    <div className="para-content">
                      <p>Discover how our acne detection works and how we handle the analysis to provide you with the best skin care advice. Just upload your image on the right and let our system analyze your skin.</p>
                    </div>  
                    <div className="col-md-6 image-editor-section">
                        <ImageEditor />
                    </div>
                </div>
                {/* Display the user history table below the image editor on smaller screens */}
                <div className="user-history-section mt-5">
                    <UserHistoryComponent />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AcneDetectionPage;
