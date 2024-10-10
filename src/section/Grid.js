import React from 'react';
import { gridImages } from '../data';
import FlexBoxComp from '../components/FlexBoxComp';

function Grid() {
    const chunkSize = Math.ceil(gridImages.length / 3);
    
    const images1 = gridImages.slice(0, chunkSize);
    const images2 = gridImages.slice(chunkSize, chunkSize * 2);
    const images3 = gridImages.slice(chunkSize * 2, chunkSize * 3);

    return (
        <div className='flex flex-col md:flex-row md:justify-center gap-6'>
            <FlexBoxComp images={images1} />
            <FlexBoxComp images={images2} />
            <FlexBoxComp images={images3} />
        </div>
    );
}

export default Grid