import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { LoadingSpinner } from "./LoadingSpinner";

export function CategoriesListItem(props) {
  const c = props.category;
  const [labels, setLabels] = useState();
  useEffect(() => {
    if (c) {
      if (!labels) {
        fetch(`/api/v1/labels/category/${c._id}`, {
          credentials: "same-origin",
        })
          .then((response) => response.text())
          .then((data) => {
            const retrieved_labels = JSON.parse(data);
            setLabels(retrieved_labels);
            console.log(retrieved_labels);
          });
      }
    }
  });

  if (!c || !labels) {
    return <LoadingSpinner />;
  } else {
    return (
      <div className=" col-lg-6 col-md-6 col-sm-12">
        <div className="card bg-info mt-2">
          <div className="card-body">
            <a href={"/category?id=" + c._id}>
              <h3 className="card-title text-secondary">{c.name}</h3>
            </a>
          </div>
          <ul className="list-group list-group-flush">
            {labels.map((l) => {
              return <li className="list-group-item text-primary">{l.name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
