import React from 'react';
import Card from './Card';
import '../Styles/MainLayout.css';

const Cards = ({ data }) => {
    const displayCards = () => {
        if (data) {
            return data.map((item, index) => (
                <li className='outer-card' key={index}>
                    <Card key={index} data={item} />
                </li>
            ));
        }
    };

    return <ul className='cards-container'>{displayCards()}</ul>;
};

export default Cards;
