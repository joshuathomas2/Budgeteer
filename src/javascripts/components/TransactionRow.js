import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

export function TransactionRow(props) {
    return (
        <tr>
        <td scope="row">Title</td>
        <td>Label</td>
        <td>xxx</td>
        <td>
          <a className="text-secondary" href="/">
            <FontAwesomeIcon icon={faEye} />
          </a>{" "}
          <a className="text-danger" href="/">
            <FontAwesomeIcon icon={faMinusCircle} />
          </a>
        </td>
      </tr>
    );
  }
  


