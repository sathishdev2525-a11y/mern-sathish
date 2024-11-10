import DropSection from '@/components/reactDnd/dropSection/dropSection';
import RenderComp from '@/components/reactDnd/dropSection/renderComp';
import WordPressClone from '@/components/reactDnd/mergComp';
import { getStoreData } from '@/datasStore/useContextStore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function DndDynamic (){
    const router = useRouter();
    const { name } = router.query;
    const { createdSite , getNav}= getStoreData()


    const getDataByPageRef = () => {
        let data;
        if(!createdSite) return null;
        for (const [key, val] of Object.entries(createdSite)) {
            if (key === name) {
                data = val; 
                break; 
            }
        }
        return data; 
    };

    let pageData = getDataByPageRef()
    let navData = getNav()
    return(
        <WordPressClone>
                       <DropSection pageRef={name} createdSite={pageData} navData={navData}/>
        </WordPressClone>

    )

}