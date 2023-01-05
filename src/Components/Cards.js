import React from 'react';
import Card from './Card';
import '../Styles/MainLayout.css';

const Cards = ({ data }) => {
    const displayCards = () => {
        if (data) {
            return data.map((item, index) => (
                <div className='outer-card' key={index}>
                    <Card key={index} data={item} />
                </div>
            ));
        }
    };

    return <div className='cards-container'>{displayCards()}</div>;
};

export default Cards;
