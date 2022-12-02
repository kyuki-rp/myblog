import * as React from "react"

import { FacebookIcon, FacebookShareButton, HatenaIcon, HatenaShareButton, LineIcon, LineShareButton, TwitterIcon, TwitterShareButton } from 'react-share'


const ShareButtonList = ({title, url}) => {
     
    return (

      <div style={{textAlign:"center"}}>
        <ul>

            <li style={{display:"inline-block", verticalAlign:"top"}}>
            <FacebookShareButton url={url}>
                <FacebookIcon style={{opacity:"0.5"}} size={40} round />
            </FacebookShareButton>
            </li>

            <li style={{display:"inline-block", verticalAlign:"top"}}>
            <LineShareButton url={url} >
                <LineIcon style={{opacity:"0.5"}} size={40} round />
            </LineShareButton>
            </li>

            <li style={{display:"inline-block", verticalAlign:"top"}}>
            <TwitterShareButton title={title} url={url} >
                <TwitterIcon style={{opacity:"0.5"}} size={40} round />
            </TwitterShareButton>
            </li>

            <li style={{display:"inline-block", verticalAlign:"top"}}>
            <HatenaShareButton url={url} >
                <HatenaIcon style={{opacity:"0.5"}} size={40} round />
            </HatenaShareButton>
            </li>

            <li style={{display:"inline-block", verticalAlign:"top"}}>
            <CopyButton text={`${title} ${url}`} message="タイトルとURLをコピーしました"/>
            </li>

        </ul>
      </div>


    )
}

const CopyButton = ({ text, message }) => {
    function CopyAction(text, message){
        CopyClipboard(text);
        // action_modal(message);
      }
      
    return (
    <>
        <button onClick={() => CopyAction(text,message)} style={{ border:"none", outline:"none", background:"transparent", padding:"0", margin:"0"}}>
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-2x" style={{color: "gray", opacity:"0.5"}} aria-hidden="true"></i>
            <i className="fa fa-paperclip fa-stack-1x" style={{color:"white"}} aria-hidden="true"></i>
          </span>
        </button>
    </>
    )
}

const CopyClipboard = (text) => {
    // titleとurlをコピー
    navigator.clipboard.writeText(text).then(
        ()=>alert("クリップボードにコピーしました。"), 
      ()=>alert("クリップボードにコピーできませんでした。")
    );
}

export default ShareButtonList
