import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
export function TransactionCard(props) {
  return (
    <div className="card bg-info m-3">
      <div className="card-body">
        <h5 className="card-title">Category Title</h5>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Label</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {/*TODO: each of these rows will need to be separated into one component with dynamic transaction data being passed */}
            <tr>
              <th scope="row">Title</th>
              <td>Label</td>
              <td>xxx</td>
              <td><a className="text-secondary" href="/"><FontAwesomeIcon icon={faEye} /></a> <a className="text-danger"  href="/"><FontAwesomeIcon icon={faMinusCircle} /></a></td>
    
            </tr>
            <tr>
              <th scope="row">Title</th>
              <td>Label</td>
              <td>xxx</td>
              <td><a className="text-secondary"  href="/"><FontAwesomeIcon icon={faEye} /></a> <a className="text-danger" href="/"><FontAwesomeIcon icon={faMinusCircle} /></a></td>
     
            </tr>
            <tr>
              <th scope="row">Title</th>
              <td>Label</td>
              <td>xxx</td>
              <td><a  className="text-secondary" href="/"><FontAwesomeIcon icon={faEye} /></a> <a className="text-danger"  href="/"><FontAwesomeIcon icon={faMinusCircle} /></a></td>
            
            </tr>
          </tbody>
        </table>
        <button type="button" className="btn btn-primary">
          Button
        </button>
      </div>
    </div>
  );
}
