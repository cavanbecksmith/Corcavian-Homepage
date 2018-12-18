import React from 'react';
import "./FullScreenPanel.scss";

export const FullScreenPanel = (props)=> {

    const styles = {
        display: 'block',
        position: 'relative',
        backgroundColor: props.bk,
        fontSize: props.fontSize,
        lineHeight: props.lineHeight
    }

    let classN = "FullScreenPanel" + (props.banner ? " bannerCollapse" : "");

    return (
        <div className={classN} style={styles}>
            {props.children}
        </div>
    );

};