import React, { useState } from "react";
import "./dropdownPersonagens";

function DropdownPersonagens() {
    const [dropdown, setDropdown] = useState(false);

    return (
        <>
            <ul
                className={dropdown ? "services-submenu clicked" : "services-submenu"}
                onClick={() => setDropdown(!dropdown)}
            >
                <div className="Title-dropdown">
                    <p>tendências no universo</p>
                </div>
                <div className="Cards">
                    <p>Card</p>
                </div>
                <div className="Cards">
                    <p>Card</p>
                </div>
                <div className="Cards">
                    <p>Card</p>
                </div>
                <div className="Cards">
                    <p>Card</p>
                </div>
                <div className="Cards">
                    <p>Card</p>
                </div>
                <div className="Cards">
                    <p>Card</p>
                </div>
            </ul>

        </>
    );
}

export default DropdownPersonagens;
