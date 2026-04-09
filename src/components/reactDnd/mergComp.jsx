import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { useRouter } from 'next/router';
import ListingComponents from './dropSection/listingComponents';
import WordPressNavbar from './wordPressNavbar';


export default function WordPressClone({children}) {
    const router = useRouter();
  const { id } = router.query; 

    return (
        <DndProvider backend={HTML5Backend}>
            <WordPressNavbar />
            <div className='flex w-full overflow-hidden min-h-[100vh]'>
                {/* Drag section */}
                <div className='w-[20%] bg-gray-100 bg-opacity-45 capitalize'>
                   <div className='text-lg font-semibold text-purple-600 p-3 text-center bg-purple-100'>Components Listing</div>
                    <ListingComponents />
                </div>

                {/* Drop section */}
                <div className='w-[80%] bg-gray-100'>
                    {children}
                  
                </div>
            </div>
        </DndProvider>
    );
}
