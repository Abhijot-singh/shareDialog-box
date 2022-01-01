import React from 'react';
import {ReactComponent as Facebookicon} from "../icons/facebookIcon.svg"
import {FacebookShareButton} from "react-share"
function FacebookIcon() {
    return (
        <div>
        <FacebookShareButton url={window.location.href}>
            <Facebookicon/>
            </FacebookShareButton>
        </div>
    );
}

export default FacebookIcon;