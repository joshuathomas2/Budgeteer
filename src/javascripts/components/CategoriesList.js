import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { LoadingSpinner } from "./LoadingSpinner"

export function CategoriesListItem(props) {
  const c = props.category;

  if (!c) {
    return (
      <tr>
        <td><LoadingSpinner/></td>
      </tr>
    );
  } else {
    return (
      <div className="col-lg-6 col-md-6 col-sm-12">
        <a href={"/category?id=" + c._id}>
          <h3 className="text-secondary my-3 text-center">{c.name}</h3>
          <img className="text-center"></img>
          <p className="text-secondary text-center mb-0 pb-0">Planned: </p>
          <br></br>
          <p className="text-secondary text-center mt-0 pt-0">Received: </p>
          <br></br>
        </a>
      </div>
    );
  }
}

export function CategoriesList(props) {
  const [categories, setCategories] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [userID, setUserID] = useState();

  useEffect(() => {
    if (!userID) {
      fetch("/api/v1/users/getCurrentUser", {
        credentials: "same-origin",
      })
        .then((response) => response.text())
        .then((data) => {
          const retrieved_id = JSON.parse(data);
          setUserID(retrieved_id);
        });
    }
  });

  useEffect(() => {
    if (userID) {
      if (!categories) {
        fetch(`/api/v1/categories/user/${userID.id}`, {
          credentials: "same-origin",
        })
          .then((response) => response.text())
          .then((data) => {
            const retrieved_categories = JSON.parse(data);
            setCategories(retrieved_categories);
          });
      }
    }
  });

  if (!categories) {
    return <LoadingSpinner/>;
  } else {
    return (
      <>
 
        <section id="categories" className="bg-light my-5">
          <div className="row">
            {categories.map((c) => {
              return <CategoriesListItem key={c._id} category={c} />;
            })}
          </div>
        </section>
      </>
    );
  }
}
