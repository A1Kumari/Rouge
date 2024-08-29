import React from 'react';
import Navbar from '../components/Navbar';
import featureImage1 from '../img/img (2).png';
import featureImage2 from '../img/img (4).png';
import img7 from "../img/gifs (7).svg";
import styles from './styles/FeaturesPage.module.css';

const featuresList = [
    {
        title: "LIMITLESS SHADES AND FINISHES",
        description: "Experiment with new finishes and play with colors to find the right match for you in just a few clicks.",
        image: featureImage1,
        link: '/shades-try-on'
    },
    {
        title: "ACNE DETECTION",
        description: "Identify acne-prone areas and get tailored recommendations for your skin.",
        image: featureImage2,
        link: '/acne-detection'
    },
    {
        title: "PERSONALIZED RECOMMENDATIONS",
        description: "Get products and routines based on your unique skin profile.",
        image: featureImage1,
        link: '/personalized-recommendations'
    },
    {
        title: "AI-POWERED ANALYSIS",
        description: "Leverage AI to analyze your skin health and suggest improvements.",
        image: featureImage2,
        link: '/ai-powered-analysis'
    }
];

const FeaturesPage = () => {
    return (
        <>
            <Navbar />
            <div className={`${styles.containerFeatures} my-5 container`}>
            <div className={`${styles.header} text-center mb-4`}>
                    <img src={img7} alt="Header Graphic" className={`${styles.headerImage} text-center mb-4`}/>
                    <h2 className={styles.heading} >Our Features</h2>
                    <p className={styles.tagline}>Discover the perfect blend of beauty and technology.</p>
                </div>
                <div className={`${styles.featuresList} ${styles.container}`}>
                    {featuresList.map((feature, index) => (
                        <div key={index} className={`${styles.featureItem} ${index % 2 === 0 ? styles.reverseLayout : ''}`}>
                            <div className={styles.featureContent}>
                                <div className={styles.featureImageWrapper}>
                                    <img src={feature.image} alt={`${feature.title} Image`} className={styles.featureImage} />
                                </div>
                                <div className={styles.featureText}>
                                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                                    <p className={styles.featureDescription}>{feature.description}</p>
                                    <a href={feature.link} className={styles.featureBtn}>Try It On</a>
                                </div>
                            </div>
                            <hr className={styles.featureDivider} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FeaturesPage;
