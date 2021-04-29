import React, { useState, useEffect } from 'react';
import { LabelFormik } from './LabelFormik'
import { LoadingSpinner } from "./LoadingSpinner"


export function LabelForm(props) {
    const [userID, setUserID] = useState();
    const [label, setLabel] = useState();

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

  let search = window.location.search;
  let params = new URLSearchParams(search);
  let label_id = params.get("labelId");
  let category_id = params.get("categoryId");
  let is_new = true;
  if (label_id) {
    is_new = false;
  }

  //retrieving label to use as prop
  useEffect(() => {
    if (label_id) {
      if (!label) {
        fetch(`/api/v1/labels/one/${label_id}`, {
          credentials: "same-origin",
        })
          .then((response) => response.text())
          .then((data) => {
            const retrieved_label = JSON.parse(data);
            setLabel(retrieved_label);
          });
      }
    }
  });


  if (is_new) {
    if (!userID || !category_id) {
      return <LoadingSpinner/>;
    } else {
      return <LabelFormik categoryId={category_id} userId={userID}
      is_new= {is_new} />;
    }
  }
  else {
    if (!label) {
      //console.log(labels)
      return <LoadingSpinner/>;
    } else {
      return (
        <LabelFormik
          label={label}
          categoryId={category_id}
          userId={userID}
          is_new= {is_new}
        />
      );
    }
  }
}
