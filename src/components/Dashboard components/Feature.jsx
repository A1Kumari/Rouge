import React, { useState } from 'react';
import beautyBrandsData from '../../data/beautyBrandsData';
import occasionMakeupData from '../../data/occasionMakeupData';
import './styles/FeaturesPage.css';

const FeaturesPage = () => {
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedOccasion, setSelectedOccasion] = useState(null);

    return (
        <div className="features-page">
            <h2 className="section-title">Try on Makeup</h2>

            {/* Try on makeup by brand */}
            <div className="try-by-brand">
                <h3>Try by Beauty Brand</h3>
                {beautyBrandsData.map((brand, index) => (
                    <div key={index} className="brand-item">
                        <h4>{brand.brandName}</h4>
                        <ul>
                            {brand.products.map((product, idx) => (
                                <li key={idx}>
                                    {product.productName} ({product.shades.join(', ')}) - ₹{product.price}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Try makeup based on occasion */}
            <div className="try-by-occasion">
                <h3>Try by Occasion</h3>
                {occasionMakeupData.map((look, index) => (
                    <div key={index} className="occasion-item">
                        <h4>{look.occasion}</h4>
                        <ul>
                            {look.products.map((product, idx) => (
                                <li key={idx}>
                                    {product.productName} ({product.brand}, {product.shade}) - ₹{product.price}
                                    <br />
                                    <small>Alternative: {product.alternative.productName} ({product.alternative.brand}) - ₹{product.alternative.price}</small>
                                </li>
                            ))}
                        </ul>
                        <p><strong>Total Cost:</strong> ₹{look.totalCost}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesPage;
