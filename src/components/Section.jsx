import React from 'react';
import './Section.css'

const Section = ({ icon, title, colour, selected}) => {
    return (
      <div 
      className={`emailList__section ${selected === true && "emailList__section--active"}`}
      style={{
        borderBottom: `3px solid ${selected === true && colour}`,
        color: `${selected === true && colour}`,
      }}
      >
      {icon}
      <h4>{title}</h4>
      </div>
    );
}

export default Section;
