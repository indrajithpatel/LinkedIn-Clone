import React from 'react';
import "./HeaderOptions.css"

function HeaderOptions({Icon, title}) {
    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption__icons"/>}
            <span className ="headerOption__title">{title}</span>
        </div>
    )
}

export default HeaderOptions
