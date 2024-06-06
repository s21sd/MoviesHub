import React from 'react';
const About = () => {
    return (
        <div style={containerStyle}>
            <div style={titleStyle}>About Our App</div>
            <div style={textStyle}>
                Welcome to <strong>MoviesHub</strong> – your personalized movie recommendation companion! Our mission is to help you discover the perfect film for any mood, occasion, or taste. Whether you're in the mood for a heartwarming romance, an adrenaline-pumping thriller, a mind-bending sci-fi adventure, or a laugh-out-loud comedy, we've got you covered.
            </div>
            <div style={sectionTitleStyle}>Features</div>
            <div style={textStyle}>
                <ul>
                    <li>Personalized Recommendations: Get movie suggestions tailored to your unique tastes.</li>
                    <li>Explore a vast collection of movies, from classics to the latest releases.</li>

                </ul>
            </div>
            <div style={sectionTitleStyle}>Why Choose Us?</div>
            <div style={textStyle}>
                At <strong>MoviesHub</strong>, we believe that finding a great movie should be easy and enjoyable. Our app is designed to save you time and enhance your viewing experience by providing you with the best possible recommendations. Say goodbye to endless scrolling and hello to movie nights made simple!
            </div>
            <div style={textStyle}>
                Thank you for choosing <strong>MoviesHub</strong>. We hope you enjoy using our app as much as we enjoyed creating it for you.
            </div>
            <div style={textStyle}>
                Happy Watching!
            </div>
        </div>
    );
};

const containerStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',

};

const titleStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
};

const sectionTitleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
};

const textStyle = {
    fontSize: '18px',
    marginBottom: '10px',
};

export default About;
