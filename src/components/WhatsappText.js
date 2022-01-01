import React from 'react';
import {ReactComponent as Whatsapptext} from "../icons/whatsappText.svg"
import { WhatsappShareButton} from "react-share"
function WhatsappText() {
    return (
        <div>
        <WhatsappShareButton url={window.location.href}>
            <Whatsapptext/>
            </WhatsappShareButton>
        </div>
    );
}

export default WhatsappText;