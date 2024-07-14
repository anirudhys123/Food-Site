import React from 'react';
import './Popup.css';

const Popup = ({ show, onClose, selectedDay, selectedTimeSlot, chair }) => {
    if (!show) {
        return null;
    }

    const fontsize = { fontSize: '20px' }; // Adjust the font size as needed

    return (
        <div className="popup-container">
            <div className="popup-content">
                <h2>Booking Details</h2>
                {chair && <p style={fontsize}>{chair}</p>}
                {selectedDay && (
                    <p style={fontsize}>
                        Selected Date: {selectedDay.date} {selectedDay.month} {selectedDay.year}
                    </p>
                )}
                {selectedTimeSlot && <p style={fontsize}>Selected Time: {selectedTimeSlot}</p>}
                <button className="popup-button">Book</button>
                <button className="popup-button" onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
}

export default Popup;
