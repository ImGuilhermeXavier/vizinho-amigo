import React from 'react';
import './Presentation.scss';
import { useNavigate } from 'react-router-dom'


function Presentation({title, desc, goTo, image}) {
    console.log(title)
    const navigate = useNavigate()

    function next() {
        console.log(goTo)
        navigate(`/${goTo}`)
    }

    return (
        <>
            <main className='presentation'>
                <div className='presentation__top'>
                    <img className='presentation__img' alt='title' src={image}/>
                </div>
                <div className='presentation__bot'>
                    <div className='presentation__title'>{title}</div>
                    <div className='presentation__desc'>{desc}</div>
                    <button className='presentation__btn' onClick={next}>Próximo</button>
                </div>
            </main>
        </>
    )
}

export default Presentation
