import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ButtonLoader = ({ btnName, cstm }) => {
    const isCustom = Boolean(cstm);
    return (
        <button className={`${isCustom ? "prm-btn-square" : "prm-btn"} btn w-[150px] ${isCustom ? "" : "mt-[30px]"}`}>
            <div className="w-[15px] h-[15px] flex items-center custom-spin">
                <FontAwesomeIcon className="w-full h-full" icon={faSpinner} />
            </div>
            <span style={{ backgroundColor: "transparent", width: "auto", padding: "0", height: "auto" }}>
                {btnName?.length > 0 ? btnName : "Sending..."}
            </span>
        </button>
    );
};

export default ButtonLoader;
