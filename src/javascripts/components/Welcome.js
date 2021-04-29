import React from "react";

export function Welcome(props) {
  const username = props.username;

  return (
    <div className="jumbotron text-center text-secondary bg-light">
      <h1 className="display-4">Welcome to Budgeteer, {username}!</h1>
      <p className="lead">
        This is a simple budgeting app used to track your expenses.   To get started with us, add a category.  After that add a specific label for that category.
        After that you can add transactions!
      </p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="/category/form" role="button">
          Create Category
        </a>
      </p>
    </div>
  );
}
