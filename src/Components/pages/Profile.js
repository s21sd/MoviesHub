import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
const Profile = () => {
    return (
        <div style={containerStyle}>
            <div style={titleStyle}>About Me</div>
            <div style={textStyle}>
                Hi, I'm <strong>Sunny Srivastava</strong>, the developer of this movie recommendation app. I'm passionate about creating innovative and user-friendly applications that make life easier and more enjoyable. I hope you enjoy using this app as much as I enjoyed building it.
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10
            }}>
                Here Is my GitHub
                <a href="https://github.com/s21sd" style={iconStyle} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon fontSize='54' />
                </a>
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
    textAlign: 'center',
};

const titleStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
};

const textStyle = {
    fontSize: '18px',
    marginBottom: '20px',
};

const iconStyle = {
    fontSize: '40px',
    color: '#333',
    textDecoration: 'none',
    marginTop: '10px',
};


export default Profile;
