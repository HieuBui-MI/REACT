import React from 'react';

export function FlightInfo({ flightNumber, flightDetails }) {
    return (
        <div className="flight-info">
            <p><strong>Flight Number:</strong> {flightNumber}</p>
            <p><strong>Departure:</strong> {flightDetails.departure}</p>
            <p><strong>Destination:</strong> {flightDetails.destination}</p>
            <p><strong>Departure Time:</strong> {flightDetails.departureTime}</p>
            <p><strong>Arrival Time:</strong> {flightDetails.arrivalTime}</p>
        </div>
    );
}

export function Flight() {
    return (
        <div className="app-container">
            <FlightInfo
                flightNumber="VN123"
                flightDetails={{
                    departure: "Hanoi, Vietnam",
                    destination: "New York, USA",
                    departureTime: "2025-01-20 08:00",
                    arrivalTime: "2025-01-20 20:00"
                }}
            />
            <FlightInfo
                flightNumber="QR456"
                flightDetails={{
                    departure: "Doha, Qatar",
                    destination: "London, UK",
                    departureTime: "2025-01-21 10:00",
                    arrivalTime: "2025-01-21 14:00"
                }}
            />
        </div>
    );
}