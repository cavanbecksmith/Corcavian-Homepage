import React from 'react';

export const FullScreenPanel = (props)=> {

    const styles = {
        display: 'block',
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: props.bk,
        fontSize: props.fontSize,
        lineHeight: props.lineHeight
    }

    return (
        <div className="FullScreenPanel" style={styles}>
            {props.children}
        </div>
    );

};