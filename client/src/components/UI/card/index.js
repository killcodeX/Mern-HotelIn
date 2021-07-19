import React from 'react';
import styled from 'styled-components';
import { CardWrapper,ImageWrapper } from './cardstyle'

export const Card = (props) => {
    const {name, image} = props;
    return (
        <CardWrapper>
            <ImageWrapper src={process.env.PUBLIC_URL + image} alt={name}/>
        </CardWrapper>
    )
}