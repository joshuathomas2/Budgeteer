import React from "react";


export function HomeTransactionListItem(props) {
  
  const t = props.transaction;
 
  if (!t) {
    return <tr><td className="text-center">Loading data...</td></tr>
  } else {
    return (
        <a href={ '/transactions' } className="list-group-item list-group-item-action b-border bg-light">{ t.title }</a> 
    );

  }
  }
  


