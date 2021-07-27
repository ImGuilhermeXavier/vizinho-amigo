import React from 'react';
import './Number.scss';
import { useNavigate } from 'react-router-dom'

function Number() {
    const navigate = useNavigate()

    function next() {
        navigate(`/location`)
    }

    return (
        <>
            <main className='number'>
                <div className='number__top'>
                    <div className='number__title'>Cadastre-se</div>
                    <div className='number__subtitle'>Insira os dados para cadastrar-se</div>
                </div>
                <div className='number__bot'>
                    <div className='number__input-area'>
                        <label className='number__label'>CELULAR</label>
                        <input className='number__input' placeholder='(00) 00000-0000'/>
                    </div>
                    <div className='number__input-area'>
                        <label className='number__label'>CEP</label>
                        <input className='number__input' placeholder='00000-000'/>
                    </div>
                    <button className='number__btn' onClick={next}>CONTINUAR</button>
                </div>
            </main>
        </>
    )
}

export default Number
