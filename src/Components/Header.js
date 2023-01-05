import React, { useEffect, useState } from 'react';
import heart from '../Assets/Icons/heart.svg';
import '../Styles/Header.css';

const Header = ({ data }) => {
    const [serious, setSerious] = useState(false);

    useEffect(() => {
        if (data && data.SERIOUS) {
            setSerious(true);
        } else setSerious(false);
    }, [data]);

    const seriousBanner = () => {
        if (serious) {
            return 'serious';
        } else return 'light';
    };

    return (
        <header className={'header all-columns col-14 ' + seriousBanner()}>
            <div className='header-text col-6'>
                <h1 className='header-sub'>HMH Social Studies</h1>
                <h2 className='header-title'>Virtual Field Trip</h2>
            </div>
            <div className='banner-image-container'>
                {!serious ? (
                    <img src={heart} alt='heart icon' className='heart-icon' />
                ) : null}
            </div>
        </header>
    );
};
export default Header;
