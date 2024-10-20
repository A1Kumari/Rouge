import React from 'react';
import savedLooksData from '../../data/savedLooksData';
import './styles/SavedLooks.css'; // Make sure this path is correct

const SavedLooks = ({ history = [] }) => {
    return (
        <>
            <div className="saved-looks-section">
                <h2 className="section-title">My Saved Looks</h2>
                <div className="saved-looks">
                    {savedLooksData.map((look) => (
                        <div key={look.id} className="saved-look">
                            <h3>{look.title}</h3>
                            <p>{look.description}</p>
                            <p><strong>Products Used:</strong> {look.productsUsed.join(', ')}</p>
                            <p><small>Saved on {look.dateSaved}</small></p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="user-history-container">
                <h3 className="history-title">Your Skin Health History</h3>
                <table className="history-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Skin Health</th>
                            <th>Shades Tried</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.length > 0 ? (
                            history.map((entry, index) => (
                                <tr key={index}>
                                    <td>{entry.date}</td>
                                    <td>{entry.skinHealth}</td>
                                    <td>{entry.shades.join(", ")}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3">No history available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default SavedLooks;
