import React from 'react';
import { lightSpeedIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';


const styles = {

    lightSpeedIn: {
        animation: 'x 40s',
        animationName: Radium.keyframes(lightSpeedIn, 'lightSpeedIn')
    }
}
export default class Animation extends React.Component {
    render() {
        return (
            <StyleRoot>
                <div className="text-center" style={styles.lightSpeedIn}>
                <h1>Robeil Aregawi</h1>
                
                </div>
            </StyleRoot>
        )
    }
}
