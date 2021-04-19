import React from "react";


export function HomeCategoryListItem(props) {
  
  const c = props.category;
 
  if (!c) {
    return <tr><td className="text-center">Loading data...</td></tr>
  } else {
    return (
        <a href={ '/category?id=' + c._id  } className="list-group-item list-group-item-action b-border bg-light">{ c.name }</a> 
    );

  }
  }
  


