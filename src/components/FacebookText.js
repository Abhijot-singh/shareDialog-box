import React from 'react';
import {ReactComponent as Facebooktext} from "../icons/facebookText.svg"
import {FacebookShareButton} from "react-share"
function FacebookText() {
    return (
        <div>
        <FacebookShareButton url={window.location.href}>
            <Facebooktext/>
            </FacebookShareButton>
        </div>
    );
}

export default FacebookText;