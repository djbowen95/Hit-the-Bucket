import React, { useState } from "react";
import BucketForm from "./BucketForm";

function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    eagerness: "",
  });

  const submitUpdate = (value) => {
    // TODO: Write logic to update the `edit` value in state after a user updates an entry in the list
    // TODO: Set the key:value pairs in the `edit` object back to empty strings
  };

  // If the user is attempting to edit an item, render the bucket form with the edit variable passed as a prop
  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  const getClasses = (item) => {
    return (item.complete ? `bucket-row complete ${item.eagerness}` : `bucket-row ${item.eagerness}`);
  };

  return props.bucket.map((item, index) => (
    <div className={getClasses(item)} key={index}>
      {/* TODO: Add an onClick event that invokes the `completeBucketItem` method passing the item id as a argument */}
      <div className="bucket-item" key={item.id} onClick={() => {props.completeBucketItem(item.id)}}>{item.text}</div>
      <div className="icons">
        {/* TODO: Add an onClick event update the `edit` object with the `id`, `value`, and `eagerness` properties */}
        <p> ✏️</p>
        {/* TODO: Add an onClick event that will invoke the removeBucketItem method passing in the `item.id` */}
        <p> 🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;
