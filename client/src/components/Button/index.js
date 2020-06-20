import React from 'react';

function Button(props){
    return(
        <button {...props} type="button">{props.children}</button>
    )
}

export default Button;