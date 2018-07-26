import React from 'react'
import State from './State'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPauseCircle, faStopCircle } from '@fortawesome/free-regular-svg-icons'

const VcrControl =  ({ playOrPause, stop, status }) => {

    
    const handleClick = () => {
        playOrPause()
    }

    return (
        <div className="VcrControl" style={styles.vcrControl} >
            <FontAwesomeIcon icon={ status === State.PLAY ? faPauseCircle : faPlayCircle } size="5x" onClick={handleClick} />
            <FontAwesomeIcon icon={ faStopCircle } size="5x" onClick={stop}/>
        </div>
    )
}

const styles = {
    vcrControl: {
        border: 'solid 2px red',
        width: '90%',
        padding: '0.75rem 0',
        backgroundColor: 'lightgrey',
    },
}

export default VcrControl