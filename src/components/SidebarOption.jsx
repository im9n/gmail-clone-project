import React from 'react';
import './SidebarOption.css'

const SidebarOption = ({ icon, title, number, selected }) => {
    return (
       <div className={`sidebar__option ${selected && "sidebar__option--active"}`}> 
       {icon}
       <h3>{title}</h3>
       <p>{number}</p>
       </div>
    );
}

export default SidebarOption;
