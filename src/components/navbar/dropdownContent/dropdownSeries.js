import React, { useState } from "react";
// import "./dropdown.css";

function DropdownSeries() {
    const [dropdown, setDropdown] = useState(false);

    return (
        <>
            <ul
                className={dropdown ? "services-submenu clicked" : "services-submenu"}
                onClick={() => setDropdown(!dropdown)}
            >
                <div>
                    <p>Series</p>
                </div>
            </ul>

        </>
    );
}

export default DropdownSeries;
