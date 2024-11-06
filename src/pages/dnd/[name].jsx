import DropSection from '@/components/reactDnd/dropSection/dropSection';
import WordPressClone from '@/components/reactDnd/mergComp';
import { getStoreData } from '@/datasStore/useContextStore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function DndDynamic (){
    const router = useRouter();
    const { name } = router.query;
    const { createdSite }= getStoreData()


    const getDataByPageRef = () => {
        let data;
        if(!createdSite) return null;
        for (const [key, val] of Object.entries(createdSite)) { // Use Object.entries to iterate over the object
            if (key === name) {
                data = val; // Assign the value to data if the key matches the reference
                break; // Exit the loop once the match is found
            }
        }
        return data; // Return the found data
    };

    let temp = getDataByPageRef()
    return(
        <WordPressClone>
            {/* {createdSite && createdSite.length > 0 ? <Navbar/> : null} */}
            <DropSection pageRef={name} createdSite={temp}/>
        </WordPressClone>

    )

}