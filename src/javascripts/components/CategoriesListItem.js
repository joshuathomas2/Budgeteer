import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export function CategoriesListItem(props) {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const c = props.category;
 
  if (!c) {
    return <tr><td className="text-center">Loading data...</td></tr>
  } else {
    return (
    
            <div className="col-6"><a href="/category">
                <h3 className="text-secondary my-3 text-center">{ c.name }</h3>
                <img className="text-center"></img>
                <p className="text-secondary text-center mb-0 pb-0">Planned: </p><br></br>
                <p className="text-secondary text-center mt-0 pt-0">Received: </p><br></br>
            </a></div>

    );

  }
}

