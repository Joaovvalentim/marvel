import React, { useState } from "react";
import "./Personagens.css";

function DropdownCriadores() {
    const [dropdown, setDropdown] = useState(false);

    return (
        <>
            <ul
                className={dropdown ? "services-submenu clicked" : "services-submenu"}
                onClick={() => setDropdown(!dropdown)}
            >
                <div>
                    <p>Criadores</p>
                </div>
            </ul>

        </>
    );
}

export default DropdownCriadores;
