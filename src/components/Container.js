import React from "react";
import Header from "./Header";
import CrossButton from "./CrossButton";
import WhatsappIcon from "./WhatsappIcon";
import WhatsappText from "./WhatsappText";
import FacebookIcon from "./FacebookIcon";
import { ReactComponent as Firstline } from "../icons/line-one.svg";
import { ReactComponent as BackgorundIcon } from "../icons/background.svg";
import FacebookText from "./FacebookText";
import TwitterIcon from "./TwitterIcon";
import TwitterText from "./TwitterText";
import CopyIcon from "./CopyIcon";
import CopyText from "./CopyText";
//import{ReactComponent as WhatsappLine} from "../icons/Line 386.svg"
function container({ Open, setOpen }) {
  console.log("Open", Open);
  if (Open === true) {
    return (
      <div className="container">
        <div id="parent">
          <div className="background">
            <BackgorundIcon />
          </div>
          <div className="row-one">
            <div className="header-heading">
              <Header />
            </div>
            <div className="crossButton-icon">
              <CrossButton Open={Open} setOpen={setOpen} />
            </div>
            <div className="line-one">
              <Firstline />
            </div>
          </div>
          <div className="row-two">
            <div className="whatsapp-icon">
              <WhatsappIcon/>
            </div>
            <div className="whatsapp-text">
              <WhatsappText/>
            </div>
            <div className="line-two">
              <Firstline />
            </div>
          </div>
          <div className="row-three">
            <div className="facebook-icon">
              <FacebookIcon />
            </div>
            <div className="facebook-text">
              <FacebookText />
            </div>
            <div className="line-three">
              <Firstline />
            </div>
          </div>
          <div className="row-four">
            <div className="twitter-icon">
              <TwitterIcon />
            </div>
            <div className="twitter-text">
              <TwitterText />
            </div>
            <div className="line-four">
              <Firstline />
            </div>
          </div>
          <div className="row-five">
            <div className="copy-icon">
              <CopyIcon />
            </div>
            <div className="copy-text">
              <CopyText />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
}

export default container;
