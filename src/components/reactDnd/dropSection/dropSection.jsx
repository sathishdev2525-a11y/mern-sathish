import React, { useEffect, useRef } from 'react';
import { useDrop } from 'react-dnd';
import { getStoreData } from '@/datasStore/useContextStore';
import { MdClose } from "react-icons/md";
import RenderComp from './renderComp';
import { RiDragDropLine } from "react-icons/ri";

export default function DropSection({pageRef, createdSite, navData}) {
    const { setSiteDatasToStore, preview, setPreview,
        removeComponent, addNav
     } = getStoreData();
   
     const [{ isOver, isOverCurrent }, dropRef] = useDrop({
        accept: 'COMPONENT',
        drop: (item, monitor) => {
           
            if (!pageRef) return;
    
            const didDrop = monitor.didDrop();
            
            if (didDrop) {
                return;
            }
            if(!navData && item.compName != 'navbar'){
                return alert("Add Nav First!")
            }
            else if(!navData && item.compName == 'navbar'){
                addNav( item);
            }

            if (navData) {
    
                if (navData && item.compName === 'navbar') {
                    alert('Navbar already added');
                    return; 
                }
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
                {navData ?  <div key={0} className='relative'>
                      
                
                  <RenderComp obj={navData}/>
                
                      
                        </div>   : null}
                {createdSite && createdSite.length > 0 ? <div>
                    
                    
                   { createdSite.map((val, i) => (
                        <div key={i}>
                            <RenderComp Component={val.component} obj={val}/>
                        </div> // Display component data
                    ))}</div>
                 : (
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
             {navData ?  <div key={0} className='relative'>
                        <MdClose
                    onClick={() => removeComponent(null, 'navbar')}
                    className="absolute cursor-pointer -top-1 -right-1 text-[25px] bg-opacity-75 z-50 text-[red] border rounded-md border-[red] bg-white hover:bg-opacity-85 hover:scale-110 duration-300"
                /> 
                
                  <RenderComp obj={navData}/>
                
                      
                        </div>   : null}
            {createdSite && createdSite.length > 0 ? (
                createdSite.map((val, i) => (
                    <div key={i} className='relative'>
                        <MdClose
                    onClick={() => removeComponent(i, pageRef)}
                    className="absolute cursor-pointer -top-1 -right-1 text-[25px] bg-opacity-75 z-50 text-[red] border rounded-md border-[red] bg-white hover:bg-opacity-85 hover:scale-110 duration-300"
                /> 
                
                  <RenderComp obj={val}/>
                
                      
                        </div> 
                ))
            ) : (
              <div className="flex flex-col items-center justify-center min-h-[90vh] border-2 border-dashed border-purple-300 rounded-lg bg-purple-50 text-center p-6">
<RiDragDropLine className="text-4xl text-purple-400 mb-3" />
  <p className="text-lg font-semibold text-purple-600">
    Start Building Your Page
  </p>

  <p className="text-sm text-gray-600 mt-2">
    Drag components from the left sidebar and drop them here to create your layout
  </p>

</div>
            )}
        </div>
    );
}
