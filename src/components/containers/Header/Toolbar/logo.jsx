import React from "react";
import reactLogo from '../../../../assets/react.svggit '
import './logo.css'
const Logo = ()=> {
    return (
        <div className="logo">
            <img src={reactLogo}/>
        </div>
    )
}


export default React.memo(Logo);