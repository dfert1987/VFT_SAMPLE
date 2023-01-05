import React from 'react';
import Cards from './Cards';
import '../Styles/MainLayout.css';

const MainLayout = ({ data }) => {
    return (
        <>
            {data ? (
                <div className='main-container all-columns col-14'>
                    <div className='title-section'>
                        <h3 className='main-title'>{data.TITLE}</h3>
                        <h4 className='intro'>{data.INTRO}</h4>
                    </div>
                    <>
                        <Cards data={data.CARDS} />
                    </>
                </div>
            ) : null}
        </>
    );
};

export default MainLayout;
