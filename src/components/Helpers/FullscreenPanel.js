import React from 'react';

export const FullScreenPanel = (props)=> {

    const styles = {
        display: 'inline-block',
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: props.bk
    }

    console.log(props);

    return (
        <div className="FullScreenPanel" style={styles}>
            {props.children}
        </div>
    );

};