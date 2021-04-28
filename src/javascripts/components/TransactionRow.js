import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

export function TransactionRow(props) {
  
  const t = props.transaction;
  const c = props.category;
  const [label, setLabel] = useState()
 
  //code to find the label name by label_id
  //'/api/v1/labels/one/:labelID

  useEffect(() => {
    if (!label) {
      fetch(`/api/v1/labels/one/${t.label_id}`, {
        credentials: "same-origin",
      })
        .then((response) => response.text())
        .then((data) => {
          const retrieved_label = JSON.parse(data);
          setLabel(retrieved_label);
          console.log('Label' + retrieved_label);
        });
    }
  });

  if (!label) {
    return <tr><td className="text-center">Loading data...</td></tr>
  } else {
    return (
        <tr>
        <td scope="row">{ t.title }</td>
        <td> { label[0].name }</td>
        <td>{ t.amount }</td>
        <td>
          <a className="text-secondary" href={ '/transaction/form?transactionId=' + t._id + '&categoryId=' + c._id }>
            <FontAwesomeIcon icon={faEye} />
          </a>{" "}
          <a className="text-danger" href="/">
            <FontAwesomeIcon icon={faMinusCircle} />
          </a>
        </td>
      </tr>
    );

  }
  }
  


