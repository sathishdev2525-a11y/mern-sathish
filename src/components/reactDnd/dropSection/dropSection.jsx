import React, { useEffect, useRef } from 'react';
import { useDrop } from 'react-dnd';
import { getStoreData } from '@/datasStore/useContextStore';
import { MdClose } from "react-icons/md";
import RenderComp from './renderComp';

export default function DropSection({pageRef, createdSite}) {
    const { setSiteDatasToStore, preview, setPreview,
        removeComponent,
     } = getStoreData();
   
     const [{ isOver, isOverCurrent }, dropRef] = useDrop({
        accept: 'COMPONENT',
        drop: (item, monitor) => {
           
            if (!pageRef) return;
    
            const didDrop = monitor.didDrop();
            
            if (didDrop) {
                return;
            }
    
            if (createdSite && createdSite.length > 0) {
                const hasNavbar = createdSite.some((val) => val.compName === 'navbar');
    
                if (hasNavbar && item.compName === 'navbar') {
                    alert('Navbar already added');
                    return; 
                }
                setSiteDatasToStore(pageRef, item);
            } 
            
            else if (createdSite && createdSite.length === 0) {
                if (item.compName === 'navbar') {
                    setSiteDatasToStore(pageRef, item);
                } else {
                    alert("Please add the navbar first");
                    return; 
                }
            }
            
            else if (!createdSite && item.compName === 'navbar') {
                setSiteDatasToStore(pageRef, item);
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            isOverCurrent: monitor.isOver({ shallow: true }),
        }),
    });
    
    
    

    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [createdSite]);

    if (preview) {
        return (
            <div className="fixed inset-0 overflow-auto scroll-hidden z-50 bg-black bg-opacity-50 pt-5 px-7 pb-12">
                <MdClose
                    onClick={() => setPreview(!preview)}
                    className="absolute cursor-pointer top-2 right-2 text-[35px] bg-opacity-75 z-50 text-[red] border rounded-md border-[red] bg-white hover:bg-opacity-85 hover:scale-110 duration-300"
                />
                {createdSite && createdSite.length > 0 ? (
                    createdSite.map((val, i) => (
                        <div key={i}>{val.component}</div> // Display component data
                    ))
                ) : (
                    <div className='h-full w-full flex justify-center items-center
                    text-white font-bold '>No Data To Preview!</div>
                )}
            </div>
        );
    }

    return (
        <div
            ref={(node) => {
                dropRef(node);
                scrollRef.current = node;
            }}
            className={`h-full border-4 border-dashed p-4 transition-colors duration-200 ${
                isOverCurrent ? 'bg-green-100 border-[10px] border-[#64ce64]' : 'bg-gray-50'
            } overflow-y-auto`}
            style={{ maxHeight: '100vh' }}
        >
            {createdSite && createdSite.length > 0 ? (
                createdSite.map((val, i) => (
                    <div key={i} className='relative'>
                        <MdClose
                    onClick={() => removeComponent(i, pageRef)}
                    className="absolute cursor-pointer -top-1 -right-1 text-[25px] bg-opacity-75 z-50 text-[red] border rounded-md border-[red] bg-white hover:bg-opacity-85 hover:scale-110 duration-300"
                /> 
                        <RenderComp Component={val.component} obj={val}/>
                        </div> 
                ))
            ) : (
                <div className='flex min-h-[90vh] justify-center items-center'>Drop items here</div>
            )}
        </div>
    );
}
