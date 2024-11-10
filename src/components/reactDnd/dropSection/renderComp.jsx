import React from 'react';

export default function RenderComp ({obj}){

    return(
        <>
        {obj && <obj.component obj={obj} />} 
    </>
    )

}