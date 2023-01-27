import React, { useState } from "react";
// import "./dropdown.css";

function DropdownEventos() {
    const [dropdown, setDropdown] = useState(false);

    return (
        <>
            <ul
                className={dropdown ? "services-submenu clicked" : "services-submenu"}
                onClick={() => setDropdown(!dropdown)}
            >
                <div>
                    <p>Eventos</p>
                </div>
            </ul>

        </>
    );
}

export default DropdownEventos;
