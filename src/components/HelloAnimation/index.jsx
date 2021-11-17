import React, { useState } from 'react'
import Lottie from 'react-lottie';
import animationData from '../../data/75705-welcome-animation (1).json';
// import './animation.scss';

export const HelloAnimation = () => {

    const [animationState, setanimationState] = useState({
        isStopped: false, isPaused: false
    })

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
