import React from 'react';
import Cir from '../assets/Circle.jpg'; 
import HCN_b from '../assets/HCN.jpg'; // Đường dẫn tương đối đến hình ảnh
import HCN_v from '../assets/HCN_v.jpg'; // Đường dẫn tương đối đến hình ảnh

export function Image1() {
    return (
        <div className="Image1">
            <img src={Cir} alt="Example" style={{ maxHeight: '300px', objectFit: 'cover' }}/>
        </div>
    );
}

export function Image2() {
    return (
        <div className="Image2">
            <img src={HCN_b} alt="Example" style={{ maxHeight: '300px', objectFit: 'cover' }}/>
        </div>
    );
}
export function Paraphse() {
    return (
        <div className="Text">
            <p>
                © 2025 - All rights reserved. This is the footer section.
            </p>
        </div>
    );
}
export function Image3() {
    return (
        <div className="Image3">
            <img src={HCN_v} alt="Example" style={{ maxHeight: '300px', objectFit: 'cover' }}/>
        </div>
    );
}

