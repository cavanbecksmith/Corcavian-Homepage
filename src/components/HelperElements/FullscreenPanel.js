import React from 'react';

export const FullScreenPanel = ({children})=> {

    const styles = {
        display: 'inline-block',
        width: '100%',
        height: '100%',
        position: 'relative'
    }

    return (
        <div className="FullScreenPanel" style={styles}>
            {children}
        </div>
    );

};