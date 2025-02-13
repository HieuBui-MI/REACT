import React from 'react';
import HCN from '../assets/HCN.jpg';
import HT from '../assets/Circle.jpg';
import HV from '../assets/th.jpg';

export function Baitap03() {
    return (
        <div>
            <Image1 />
            <HTandText />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginTop: '10px',
                }}
            >
                {[...Array(3)].map((_, index) => (
                    <Image3 key={index} />
                ))}
            </div>
        </div>
    );
}

export function Text() {
    return (
        <div className="Text">
            <p>
                The correct HTML element for playing video files is a. Introduced in HTML5, the element allows developers to embed video content directly into web pages without relying on external plugins like Adobe Flash.
            </p>
        </div>
    );
}

export function Image1() {
    return (
        <div className="Image1">
            <img
                src={HCN}
                alt="Example"
                style={{
                    width: '99%',
                    maxHeight: '300px',
                    objectFit: 'cover',
                    margin: '10px'
                }}
            />
        </div>
    );
}

export function Image2() {
    return (
        <div
            className="Image2"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
            }}
        >
            <img
                src={HT}
                alt="Example"
                style={{
                    maxHeight: '300px',
                    objectFit: 'cover'
                }}
            />
        </div>
    );
}


export function Image3() {
    return (
        <div className="Image3">
            <img
                src={HV}
                alt="Example"
                style={{ maxHeight: '300px', objectFit: 'cover' }}
            />
        </div>
    );
}

export function HTandText() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                margin: '10px 0'
            }}
        >
            <div
                style={{
                    width: '48%',
                    margin: '10px'
                }}>
                <Image2 />
                <Text />
            </div>

            <div
                style={{
                    width: '48%',
                    margin: '10px'
                }}>
                <Image2 />
                <Text />
            </div>
        </div>
    );
}


