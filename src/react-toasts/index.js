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
                    <div className="button buttonHtml" onClick={() => {
                        ToastsStore.error(<div><h1>Title element</h1>
                            <p>
                                <svg enableBackground="new 0 0 64 64" id="Layer_1" version="1.1" viewBox="0 0 64 64">
                                    <circle cx="32" cy="32" fill="#FFD766" r="24"/>
                                    <path d="M48.7,38.2C46,44.8,39.6,49.5,32,49.5c-7.6,0-14.1-4.7-16.7-11.4L48.7,38.2z"
                                          fill="#4B687F"/>
                                    <path
                                        d="M25.5,48.2c2,0.8,4.2,1.2,6.6,1.2c2.3,0,4.5-0.4,6.5-1.2c0-3.6-2.9-6.5-6.5-6.5  C28.4,41.8,25.5,44.7,25.5,48.2z"
                                        fill="#EA685E"/>
                                    <path
                                        d="  M48.7,38.2C46,44.8,39.6,49.5,32,49.5c-7.6,0-14.1-4.7-16.7-11.4L48.7,38.2z"
                                        fill="none" stroke="#2C3E50"
                                        strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                                    <circle cx="41" cy="25.2" fill="#FFFFFF" r="3.8"/>
                                    <circle cx="23" cy="25.2" fill="#FFFFFF" r="3.8"/>
                                    <circle cx="41" cy="25.2" fill="none" r="3.8" stroke="#2C3E50"
                                            strokeLinejoin="round"
                                            strokeMiterlimit="10" strokeWidth="2"/>
                                    <circle cx="23" cy="25.2" fill="none" r="3.8" stroke="#2C3E50"
                                            strokeLinejoin="round"
                                            strokeMiterlimit="10" strokeWidth="2"/>
                                    <circle cx="32" cy="32" fill="none" r="24" stroke="#2C3E50" strokeLinejoin="round"
                                            strokeMiterlimit="10" strokeWidth="2"/>
                                </svg>
                                Paragraph element with an SVG inside
                            </p>
                        </div>, 15000, 'alert-danger')
                    }}>HTML Content
                    </div>
                </div>
            </div>
        </div>
    );
}
