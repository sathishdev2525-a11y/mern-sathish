import React from 'react';


export default function ButtonComp (props){
        
    if(!props.obj.renderDatas) return <div>oops in button!</div>
    return(

        <button className='border px-3 py-1 border-purple-500 m-1 rounded-md text-purple-500 capitalize font-semibold'>{props.obj.renderDatas.innerText}</button>

    )

}