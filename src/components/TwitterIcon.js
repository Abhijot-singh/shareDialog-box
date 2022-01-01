import React from 'react';
import {ReactComponent as Twittericon} from "../icons/twitterIcon.svg"
import {TwitterShareButton} from "react-share"
function TwitterIcon(){
    return (
        <div>
        <TwitterShareButton url={window.location.href}>
            <Twittericon/>
            </TwitterShareButton>
        </div>
    );
}

export default TwitterIcon;