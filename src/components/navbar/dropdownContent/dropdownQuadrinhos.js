import React, { useState } from "react";
// import "./dropdown.css";

function DropdownQuadrinhos() {
    const [dropdown, setDropdown] = useState(false);

    return (
        <>
            <ul
                className={dropdown ? "services-submenu clicked" : "services-submenu"}
                onClick={() => setDropdown(!dropdown)}
            >
                <div>
                    <p>Quadrinhos</p>
                </div>
            </ul>

        </>
    );
}

export default DropdownQuadrinhos;
