import React, { useState, useEffect } from "react";
import { CategoryFormik } from "./CategoryFormik";
import { LoadingSpinner } from "./LoadingSpinner"

export function CategoryForm(props) {
  const [category, setCategory] = useState();
  const [userID, setUserID] = useState();

  let search = window.location.search;
  let params = new URLSearchParams(search);
  let category_id = params.get("categoryId");

  let is_new = true;
  if (category_id) {
    is_new = false;
  }
  //retrieving details
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
    if (category_id) {
      if (!category) {
        fetch(`/api/v1/categories/one/${category_id}`, {
          credentials: "same-origin",
        })
          .then((response) => response.text())
          .then((data) => {
            const retrieved_category = JSON.parse(data);
            setCategory(retrieved_category);
          });
      }
    }
  });

  if (is_new) {
    if (!userID) {
      return <LoadingSpinner/>;
    } else {
      return <CategoryFormik userId={userID} is_new={is_new} />;
    }
  } else {
    if (!userID || !category) {
      //console.log(labels)
      return <LoadingSpinner/>;
    } else {
      return (
        <CategoryFormik category={category} userId={userID} is_new={is_new} />
      );
    }
  }
}
