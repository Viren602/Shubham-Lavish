import { useEffect, useState } from "react";

const Preloader = ({ onFinish }) => {
    useEffect(() => {
        setTimeout(() => {
            if (onFinish) {
                onFinish();
            }
        }, 2000);
    }, [onFinish]);


    return (
        <div className="preloader">
            <div className="loader">
                <div className="pulseCircle"></div>
                <div className="loader-logo"></div>
            </div>
        </div>
    );
};

export default Preloader;