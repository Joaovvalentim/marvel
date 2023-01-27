import React, { useState } from "react";
// import "./dropdown.css";

function DropdownStories() {
    const [dropdown, setDropdown] = useState(false);

    return (
        <>
            <ul
                className={dropdown ? "services-submenu clicked" : "services-submenu"}
                onClick={() => setDropdown(!dropdown)}
            >
                <div>
                    <p>Stories</p>
                </div>
            </ul>

        </>
    );
}

export default DropdownStories;
