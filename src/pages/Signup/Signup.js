import React from 'react';
import './Signup.scss';
import { useNavigate } from 'react-router-dom'
import image from '../../images/global.png'

function Signup() {
    const navigate = useNavigate()

    function next() {
        navigate(`/number`)
    }

    return (
        <>
            <main className='signup'>
                <div className='signup__top'>
                    <div className='signup__title'>VizinhoAmigo</div>
                    <img className='signup__img' alt='title' src={image}/>
                </div>
                <div className='signup__bot'>
                    <div className='signup__input-area'>
                        <label className='signup__label'>EMAIL</label>
                        <input className='signup__input' placeholder='exemplo@email.com'/>
                    </div>
                    <div className='signup__input-area'>
                        <label className='signup__label'>SENHA</label>
                        <input className='signup__input'/>
                    </div>
                    <button className='signup__btn' onClick={next}>Cadastre-se</button>
                    <div className='signup__already'>Já possui uma conta? <span>Faça login!</span></div>
                </div>
            </main>
        </>
    )
}

export default Signup
