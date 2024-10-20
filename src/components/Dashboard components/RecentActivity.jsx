import React from 'react';
import './styles/RecentActivity.css'; // Make sure this path is correct

const RecentActivity = () => {
    const activities = [
        { id: 1, activity: "You tried Lipstick X on", date: "2024-10-12" },
        { id: 2, activity: "Saved a look featuring Brand Y", date: "2024-10-10" },
        { id: 3, activity: "You tried Foundation Z on", date: "2024-09-28" },
    ];

    return (
        <div className="recent-activity-container">
            <h2 className="section-title">Recent Activity</h2>
            <div className="recent-activity-list">
                {activities.map((activity) => (
                    <div key={activity.id} className="activity-item">
                        <p>{activity.activity} <strong>{activity.date}</strong></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentActivity;
