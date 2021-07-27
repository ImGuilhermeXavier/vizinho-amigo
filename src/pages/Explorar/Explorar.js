import React from 'react';
import './Explorar.scss';
import { useNavigate } from 'react-router-dom';
import location from '../../images/location.png';

function Explorar() {


    return (
        <>
            <main className='explorar'>
                <div className='explorar__title'>Explorar</div>
                <input className='explorar__input' placeholder='Procurar ofertas'/>
                <div className='explorar__area'>
                    <div className='explorar__title'>Categorias</div>
                    <div className='explorar__cats'>
                        <div className='explorar__cat'>Serviços</div>
                        <div className='explorar__cat'>Produtos</div>
                        <div className='explorar__cat'>Comida</div>
                        <div className='explorar__cat'>Empregos</div>
                    </div>
                </div>
                <div className='explorar__area'>
                    <div className='explorar__title'>Em alta na sua vizinhança</div>
                    <div className='explorar__prods'>
                        <div className='explorar__prod'></div>
                        <div className='explorar__prod'></div>
                        <div className='explorar__prod'></div>
                        <div className='explorar__prod'></div>
                    </div>
                </div>
                <div className='explorar__area'>
                    <div className='explorar__title'>Recomendações para você</div>
                    <div className='explorar__prods'>
                        <div className='explorar__prod'></div>
                        <div className='explorar__prod'></div>
                        <div className='explorar__prod'></div>
                        <div className='explorar__prod'></div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Explorar
