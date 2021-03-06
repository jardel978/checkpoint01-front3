import React, { useState, useEffect } from 'react'
import Lottie from 'react-lottie';
import animationData from '../../data/lf20_ZQhQzO.json';
// import './animation.scss';

export const HelloAnimation = () => {

    const [animationState, setanimationState] = useState({ })

    useEffect(() => {
        setanimationState({isStopped: false, isPaused: false})
    }, [])

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <div className="hello" >
            <Lottie options={defaultOptions}
                height={400}
                width={400}
                isStopped={animationState.isStopped}
                isPaused={animationState.isPaused} />
        </div>
    )
}
