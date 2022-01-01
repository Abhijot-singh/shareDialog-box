import React from 'react';
import {ReactComponent as Twittertext} from "../icons/twitterText.svg"
import {TwitterShareButton} from "react-share"
function TwitterText() {
    return (
        <div>
        <TwitterShareButton url={window.location.href}>
            <Twittertext/>
            </TwitterShareButton>
        </div>
    );
}
export default TwitterText;