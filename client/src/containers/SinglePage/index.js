import React from 'react';
import { SectionWrapper } from './singleStyle';
import { data } from './fakeData';

export const SingleHotel = () => {
    console.log(data)
    return (
        <SectionWrapper>
            This is Single hotel
            <img src={data.image} alt={data.name}/>
        </SectionWrapper>
    )
}
