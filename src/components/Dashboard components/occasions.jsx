import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import CameraTry from '../cameraTry.jsx'; // Camera try-on component
import MakeupList from '../makeupList.jsx'; // MakeupList component
import './styles/occasion.css'; // Custom styles

const OccasionSection = () => {
    const [occasions, setOccasions] = useState([]);
    const [selectedOccasion, setSelectedOccasion] = useState(null);
    const [makeupStyles, setMakeupStyles] = useState([]);

    // Fetch occasions data from the backend
    const fetchOccasions = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/occasions');
            setOccasions(response.data);
        } catch (error) {
            console.error('Error fetching occasions:', error);
        }
    };

    useEffect(() => {
        fetchOccasions();
    }, []);

    // Function to handle occasion click and fetch makeup styles
    const handleOccasionClick = async (occasion) => {
        setSelectedOccasion(occasion);

        try {
            const response = await axios.get(`/api/makeupStyles?occasion=${occasion.occasionName}`);
            setMakeupStyles(response.data);
        } catch (error) {
            console.error('Error fetching makeup styles:', error);
        }
    };

    // Function to calculate total cost of makeup products
    const calculateTotalCost = (makeups) => {
        return makeups.reduce((total, makeup) => {
            return total + (makeup.price || 0); // Assuming 'price' property exists
        }, 0);
    };

    return (
        <>
            <Navbar />
            <div className="occasion-section">
                <h2>Special Occasions</h2>

                {!selectedOccasion ? (
                    <div className="occasion-list">
                        {occasions.map((occasion) => (
                            <div
                                key={occasion._id}
                                className="occasion-card"
                                onClick={() => handleOccasionClick(occasion)}
                            >
                                <img src={occasion.imageUrl} alt={occasion.occasionName} />
                                <h3>{occasion.occasionName}</h3>
                                <p>{occasion.description}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="occasion-details">
                        <button onClick={() => setSelectedOccasion(null)} className="back-button">← Back</button>
                        <h2>{selectedOccasion.occasionName}</h2>
                        <p>{selectedOccasion.description}</p>

                        {/* Camera Try-On */}
                        <div className="camera-try-wrapper">
                            <CameraTry />
                        </div>

                        {/* Makeup Products List */}
                        <h3>Makeup Products Used:</h3>
                        <MakeupList makeupStyles={makeupStyles} />

                        {/* Total Cost */}
                        <h4>Total Cost: ${calculateTotalCost(makeupStyles)}</h4>
                    </div>
                )}
            </div>
        </>
    );
};

export default OccasionSection;
