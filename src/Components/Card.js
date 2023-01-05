import React from 'react';
import pano from '../Assets/Icons/360-icon.svg';
import pdf from '../Assets/Icons/pdf.svg';
import '../Styles/Card.css';

const Card = ({ data }) => {
    const image = data.IMAGE;
    return (
        <div className='card-container'>
            <div
                className='card-image'
                alt={data.TITLE}
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                <div className='spacer'></div>
                <div>
                    <a href={data.PANO} target='_blank' rel='noreferrer'>
                        <img
                            src={pano}
                            alt='360 view icon'
                            className='pano-icon'
                        />
                    </a>
                </div>
            </div>
            <div className='below-image flexible'>
                <div className='flexible'>
                    <div className='card-text-section'>
                        <a href={data.PANO} target='_blank' rel='noreferrer'>
                            <h5 className='card-title'>{data.TITLE}</h5>
                        </a>
                        <p className='card-description'>{data.PARA}</p>
                    </div>
                </div>
                <div className='hr-container'>
                    <hr className='card-divider' />
                </div>
                <div className='bottom-card'>
                    <img src={pdf} alt='PDF Icon' className='PDF-icon' />
                    <a href={data.PDF} target='_blank' rel='noreferrer'>
                        <h6 className='pdf-text'>Open a text-only version</h6>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
