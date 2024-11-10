import { getStoreData } from '@/datasStore/useContextStore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import RenderComp from '../dropSection/renderComp';

export default function ContainerComp({obj}) {
    const router = useRouter();
    const { name } = router.query;
    const {  handleNestedDrop } = getStoreData();


    const [{ isOver, isOverCurrent }, dropRef] = useDrop({
        accept: 'COMPONENT',
        drop: (item, monitor) => {
            const didDrop = monitor.didDrop();
            if (didDrop) return;
            
            if (obj) handleNestedDrop(obj.id, {...item, id:Math.random(), children:[]}, name);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            isOverCurrent: monitor.isOver({ shallow: true }),
        }),
    });

    if (!obj) return <div>Loading component data...</div>;

   
    return (
        <div
            ref={dropRef}
            className={`border p-2 border-purple-500 w-full min-h-[60vh] 
                ${isOverCurrent ? 'bg-green-100 border-[1px] border-[#64ce64]' : 'bg-gray-100'}`}
        >
            {obj.children && obj.children.length > 0 ? (
                obj.children.map((child, index) => (
                    <div key={index}>
                       <RenderComp Component={child.component} obj={child}/>

                    </div>
                ))
            ) : (
                "No components to display."
            )}
        </div>
    );
}
