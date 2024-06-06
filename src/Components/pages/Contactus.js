import React from 'react';
const ContactUs = () => {
    return (
        <div style={containerStyle}>
            <div style={titleStyle}>Contact Us</div>
            <div style={textStyle}>
                We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us. Here's how you can get in touch:
            </div>
            <div style={textStyle}>
                <strong>Email:</strong> support@moviesdb.com
            </div>
            <div style={textStyle}>
                <strong>Phone:</strong> +91 **********
            </div>
            <div style={textStyle}>
                <strong>Address:</strong> 123 Movie Lane, Filmtown, *****, INDIA
            </div>
            <div style={textStyle}>
                Or, simply fill out the form below and we'll get back to you as soon as possible.
            </div>
            <form style={formStyle}>
                <input type="text" placeholder="Your Name" style={inputStyle} />
                <input type="email" placeholder="Your Email" style={inputStyle} />
                <textarea placeholder="Your Message" style={textAreaStyle}></textarea>
                <button type="submit" style={buttonStyle}>Send Message</button>
            </form>
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

const textStyle = {
    fontSize: '18px',
    marginBottom: '10px',
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
};

const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
};

const textAreaStyle = {
    padding: '10px',
    fontSize: '16px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    minHeight: '100px',
};

const buttonStyle = {
    padding: '10px',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};

export default ContactUs;
