import React from 'react';
import { useDrag } from 'react-dnd';
import { getStoreData } from '@/datasStore/useContextStore';

export default function ListingComponents() {
    const { componentsData } = getStoreData();

    if (!componentsData) return <div>No Data!</div>;

    return (
        <ul className='space-y-2 pt-3 flex flex-col'>
            {componentsData.map((val) => (
                <DraggableComponent key={val.id} component={val} />
            ))}
        </ul>
    );
}

function DraggableComponent({ component }) {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'COMPONENT',
        item: component,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <li
            ref={dragRef}
            className={`border bg-white rounded-lg w-[60%] mx-auto text-center cursor-pointer hover:bg-opacity-45 ${
                isDragging ? 'opacity-50' : 'opacity-100'
            }`}
        >
            {component.compName}
        </li>
    );
}
