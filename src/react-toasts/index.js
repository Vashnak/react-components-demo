import React from 'react';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

import './index.css';

export const ReactToasts = () => {
    return (
        <div className="root">
            <div className="bc">
                <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_RIGHT}/>
                <div className="text">
                    <h1>Welcome to react-toasts test page</h1>
                    <span>This page is currently using the component default values. <br/>
             Check my page <a href="https://github.com/Vashnak/react-toasts">https://github.com/Vashnak/react-toasts</a> to know what options you can use.</span>
                </div>
                <div className="buttons">
                    <div className="button buttonSuccess" onClick={() => {
                        ToastsStore.success("It works !\n With line break (thx to '\\n') ")
                    }}>Success
                    </div>
                    <div className="button buttonInfo" onClick={() => {
                        ToastsStore.info("It's pretty cool :), timer = 10s", 10000)
                    }}>Info
                    </div>
                    <div className="button buttonWarning" onClick={() => {
                        ToastsStore.warning("Ho, I found a bug :/")
                    }}>Warning
                    </div>
                    <div className="button buttonError" onClick={() => {
                        ToastsStore.error("Haaa it doesn't work anymore x(\nThis toast has custom bootstrap classes", 5000, 'alert-danger')
                    }}>Error
                    </div>
                </div>
            </div>
        </div>
    );
}
