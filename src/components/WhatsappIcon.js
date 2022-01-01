import React from 'react';
import {ReactComponent as Whatsappicon} from "../icons/whatsappIcon.svg"
import { WhatsappShareButton} from "react-share"
function WhatsappIcon() {
    return (
        <div>
        <WhatsappShareButton url={window.location.href}>
            <Whatsappicon/>
        </WhatsappShareButton>
        </div>
    );
}

export default WhatsappIcon;