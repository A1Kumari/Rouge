import React from 'react';

import img2 from '../img/gifs (2).svg';
import './styles/Homecontent.css'; // Assuming you place the CSS code in a file named HomeContent.css

const HomeContent = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 ">
                    <div className="p-4">
                        <h1 className="display-4">Makeup Try-on</h1>
                        <p className="lead">~See Your True Beauty Unveiled</p>
                        <div className="mt-4">
                            <button className="btn btn-success btn-lg">Get Started Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={img2}/>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;
