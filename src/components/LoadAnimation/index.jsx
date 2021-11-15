import React, { useState, useEffect } from 'react'
import Lottie from 'react-lottie';
import animationData from '../../data/lf30_editor_b12qm2yk.json';
import './animationLoad.scss';

export const LoadAnimation = () => {

    const [animationState, setanimationState] = useState({
        isStopped: false, isPaused: false
    })

    const [loading, setloading] = useState(true);

    let carregar = () => { 
        setTimeout(() => {setloading(false)}, 3000)
    };
    window.onload = carregar;

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <div className={loading ? "load-visivel" : "load-none"} >
            <Lottie options={defaultOptions}
                height={350}
                width={350}
                isStopped={animationState.isStopped}
                isPaused={animationState.isPaused} />
        </div>
    )
}