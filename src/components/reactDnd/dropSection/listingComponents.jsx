import React from 'react';
import DraggableComponent from './dragIcon';
import { getStoreCompData } from '@/datasStore/compDatas';

export default function ListingComponents() {
    const { componentsData } = getStoreCompData();

    if (!componentsData) return <div>No Data!</div>;

    return (
        <ul className='pt-3 flex flex-wrap gap-3 justify-start items-start p-2'>
            {componentsData.map((val) => (
                <DraggableComponent key={val.id} component={val} />
            ))}
            
        </ul>
    );
}


