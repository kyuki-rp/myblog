import React from "react";
import { Link } from "gatsby";

import 'font-awesome/css/font-awesome.min.css';

const Labels = ({ category, tags }) => {
    return (
      <div>
        <p>
          {(category != null) &&
            <Link style={{marginRight:"5px", padding:"3px 10px", color:"white", border:"none", background:"gray", borderRadius:"10px", textDecoration: "none", fontSize:"0.8rem"}}>
              <i className="fa fa-folder" style={{color: "white"}}></i> {category}
            </Link>
          }
          {(tags != null) &&
              <>
                {tags.map((tag, index) => {
                  return (
                    <Link key={index} style={{marginRight:"5px", padding:"3px 10px", color:"white", border:"none" , background:"gray", borderRadius:"10px", textDecoration: "none", fontSize:"0.8rem"}}>
                      <i className="fa fa-tag" style={{color: "white"}}></i> {tag}
                    </Link>
                  );
                })}
              </>
          }
        </p>
      </div>
    );
};

export default Labels;
