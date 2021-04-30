import React from "react";

export function Error(props) {

  let search = window.location.search;
  let params = new URLSearchParams(search);
  let errorType = params.get("type");

  if (errorType == "label") {
    return (
      <div className="jumbotron text-center text-secondary bg-light">
        <h4><strong className="text-danger">Oops!</strong> You need labels added to this category before you add a transaction.</h4>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="/categories" role="button">
            Categories Page
          </a>
        </p>
      </div>
    );
  }
  
}
