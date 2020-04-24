import React from 'react';
import Images from './Images';

function MovieItem (props) {
    return (
<div>
    <Images src={props.data.image} alt={props.data.title} />
       <h3>title:{props.data.title}</h3>
       <p>average:{props.data.average}</p>
     </div>
    )
}
export default MovieItem;