import React from 'react';

function Images (props) {
    return (
<div>
       <img src={props.src} alt={props.alt}/>
   </div>
    )

}
export default Images;