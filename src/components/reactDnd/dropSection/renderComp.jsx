import React from 'react';

export default function RenderComp ({Component, obj}){

    return(
        <div>
        {Component && <Component obj={obj} />} 
    </div>
    )

}