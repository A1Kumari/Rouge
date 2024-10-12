
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './styles/Occasions.css';
import CameraTry from '../components/cameraTry';
import MakeupList from '../components/makeupList'; // Import the MakeupList component


const EventsList = [
    {
        title: "Marriage Party",
        description: "The inner urge to look as good as the bride, why not when we are here.",
        link: '/shades-try-on',
    },
    {
        title: "Cocktail Party",
        description: "Want to go to a cocktail party and look all cocky? Try makeups from here.",
        link: '/acne-detection',
    },
    // Add more events as needed
];

function Occasions() {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [makeupStyles, setMakeupStyles] = useState([]);

    const handleEventClick = (event) => {
        if (selectedEvent?.title === event.title) {
            setSelectedEvent(null);
            setMakeupStyles([]); // Clear the makeup styles when the event is deselected
        } else {
            setSelectedEvent(event);
            fetchMakeupStyles(event); // Fetch makeup styles for the selected event
        }
    };

    const fetchMakeupStyles = async (event) => {
        // Mock fetching data from backend based on the selected event
        // Replace this with an actual API call
        const response = await fetch(`/api/makeupStyles?event=${event.title}`);
        const data = await response.json();
        setMakeupStyles(data);
    };

    return (
        <>
            <Navbar />
            <div className="occasions-container">
                <h2 className="text-center">Special Occasions</h2>
                <p className="text-center tagline">Choose makeup for special events</p>

                {selectedEvent && (
                    <div className="expanded-event-card">
                        <button className="back-button" onClick={() => setSelectedEvent(null)}>← Back</button>
                        <div className="expanded-content">
                            <div className="camera-try-wrapper">
                                <CameraTry />
                            </div>
                            <div className="event-content">
                                <h3 className="card-title">{selectedEvent.title}</h3>
                                <p>{selectedEvent.description}</p>
                                <MakeupList makeupStyles={makeupStyles} /> {/* Render makeup styles */}
                            </div>
                        </div>
                    </div>
                )}

                <div className={`grid-container ${selectedEvent ? 'hidden' : ''}`}>
                    {EventsList.map((event, index) => (
                        <div
                            key={index}
                            className="event-card"
                            onClick={() => handleEventClick(event)}
                        >
                            <h3 className="card-title">{event.title}</h3>
                            <p>{event.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Occasions;
