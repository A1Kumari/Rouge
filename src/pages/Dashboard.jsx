import React from 'react';
import Navbar from '../components/Dashboard components/Navbar';
import Footer from '../components/Dashboard components/footer';
import SavedLooks from '../components/Dashboard components/SavedLooks';
import RecentActivity from '../components/Dashboard components/RecentActivity';
import ProfileSection from '../components/Dashboard components/ProfileSection';
import Features from '../components/Dashboard components/Feature';
import './styles/Dashboard.css';
import Occasion from '../components/Dashboard components/occasions';

function Dashboard() {
    return (
        <>
            <Navbar />
            <section className="dashboard-container">
                <ProfileSection />

                {/* Saved Looks Section */}
                <SavedLooks />

                {/* Recent Activity Section */}
                <RecentActivity />

                {/* Features Section */}
                <Features />
                <Occasion/>
            </section>
            <Footer />
        </>
    );
}

export default Dashboard;
