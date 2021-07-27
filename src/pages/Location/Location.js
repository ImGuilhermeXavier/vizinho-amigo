import React from 'react';
import './Location.scss';
import { useNavigate } from 'react-router-dom';
import location from '../../images/location.png';

function Location() {
    const navigate = useNavigate()

    function next() {
        navigate(`/explorar`)
    }

    return (
        <>
            <main className='location'>
                <div className='location__center'>
                    <img src={location} alt=''/>
                    <div className='location__title'>Habilitar localização?</div>
                    <div className='location__description'>Isso facilita a detecção da sua vizinhança e trará melhores recomendações para você. Os dados são sigilosos.</div>
                    <button className='location__btn' onClick={next}>SIM, HABILITAR LOCALIZAÇÃO</button>
                    <button className='location__btn location__btn--jump' onClick={next}>PULAR</button>
                </div>
            </main>
        </>
    )
}

export default Location
