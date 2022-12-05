import React from 'react';
import {useState, useEffect, useRef} from 'react';
import { useLocation } from "@reach/router"

import './toc.css'


const SideToc = ({toc}) => {
    const location = useLocation();
    const insideRef = useRef(null);
    const [sidebarOpen, setsidebarOpen] = useState(false)
    
    const onClick = (flug) => {
        setsidebarOpen(flug)
    }

    // ページ内遷移時に状態を更新
    useEffect(() => {
      onClick(false)
    }, [location]);

    useEffect(() => {
        
        //対象の要素を取得
        const el = insideRef.current;
    
        // //対象の要素がなければ何もしない
        // if (!el) return;
    
        //クリックした時に実行する関数
        const hundleClickOutside = (e) => {
          console.log(e)

          if (e.target.id === 'background') {
              setsidebarOpen(false)
          }
        };
    
        //クリックイベントを設定
        document.addEventListener("click", hundleClickOutside);
    
      }, [insideRef]);


      const [navbar, setNavbar] = useState(-100)
      useEffect(() => {
        let scrollPrev = 0;
        
        const scrollNav = () => {
          if (window.scrollY < 20) {
            setNavbar(0);
          } else if(scrollPrev - window.scrollY > 0) {
            setNavbar(0);
          }else{
            setNavbar(-100);
          }
          scrollPrev = window.scrollY;
        };
        scrollNav()
        window.addEventListener("scroll", scrollNav)
    
        return () => {
          window.removeEventListener('scroll', scrollNav);
        };
    
      }, [])
      
    return (
        <div>
          
          { !sidebarOpen &&
            <button onClick={()=>onClick(true)} style={{border:"none", background:"transparent", position:"fixed", top:"70px", left:"20px", opacity: "0.5", transform:`translateY(${navbar}%)`}}>
              <i className="fa fa-list-ul fa-2x" style={{color:"silver"}}></i> 
            </button>
          }
          { sidebarOpen &&
            <>
            <div id="background" style={{position:"fixed", top:"0", left:"0", width:"100%", height:"100%", backgroundColor:"rgba(0,0,0,0.5)"}} ref={insideRef}>
            <div id="sidetoc" style={{position:"fixed", top:"0", left:"0", width:"32rem", maxWidth:"100%", height:"100%", backgroundColor:"white"}}>
              <div style={{marginTop:"4rem", textAlign:"right"}}>
                <button onClick={() => onClick(false)} style={{border:"none", background:"transparent", color:"silver", opacity: "0.5"}}>
                  <i className="fa fa-close fa-3x"></i>
                </button>
              </div>
              <div style={{padding: "1rem 2rem"}}>
                <h3 style={{color:"silver"}}><i className="fa fa-list-ul fa-x"></i> 目次</h3>
                <div className="tocstyle" dangerouslySetInnerHTML={{ __html: toc }} itemProp="articleBody"/>
              </div>
            </div>
            </div>

            </>
          }

        </div>
    );
}
  
export default SideToc