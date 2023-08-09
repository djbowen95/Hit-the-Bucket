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
    let updatedBucket = props.bucket.map((item) => {
      if (item.id === edit.id) {
        let updatedItem = item;
        if(value.text) {
          updatedItem.text = value.text;
          console.log(value.eagerness);
        };
        if (value.eagerness) {
          updatedItem.eagerness = value.eagerness;
        }
        return updatedItem;
      }
      return item;
    })
    props.setBucket(updatedBucket);
    setEdit({id: null, value: "", eagerness: ""});
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
      <div 
        className="bucket-item" key={item.id}
        onClick={() => {props.completeBucketItem(item.id)}}
      >
        <p>{item.text}</p>
      </div>
      
      <div className="icons">
        {/* TODO: Add an onClick event update the `edit` object with the `id`, `value`, and `eagerness` properties */}
        <p onClick={() => setEdit({id:item.id, value:item.text, eagerness:item.eagerness})}> ✏️</p>
        <p onClick={() => {props.removeBucketItem(item.id)}}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;
