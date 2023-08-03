import React, { useState } from "react";
import BucketForm from "./BucketForm";
import Bucket from "./Bucket";

function BucketList() {
  const [bucket, setBucket] = useState([
    {
      id: 0.2187712753129798,
      text: "Go Scuba Diving",
      eagerness: "high",
      complete: false,
    },
    {
      id: 0.6719643913431121,
      text: "See a Dolphin",
      eagerness: "medium",
      complete: false,
    },
    {
      id: 0.9234561674495707,
      text: "Raise Chickens",
      eagerness: "low",
      complete: false,
    },
    {
      id: 0.6174456772282497,
      text: "Grow Chillis from Seed",
      eagerness: "low",
      complete: false,
    },
  ]);

  // Function to add a bucket list item
  const addBucketItem = (item) => {
    setBucket([...bucket, item]);
  };

  // Function to mark bucket list item as complete, or incomplete
  const completeBucketItem = (id) => {
    let updatedBucket = bucket.map((item) => {
      if (item.id === id) {
        let newItem = item;
        newItem.complete = !newItem.complete;
        return newItem;
      }
      return item;
    });

    setBucket(updatedBucket);
  };

  // Function to remove bucket list item and update state
  const removeBucketItem = (id) => {
    let updatedBucket = bucket.filter((item) => item.id != id);
    setBucket(updatedBucket);
  };

  // Function to edit the bucket list item
  const editBucketItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.text) {
      return;
    }

    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the id of the item that was clicked and if so, we set it to a new value
    setBucket((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>What is on your bucket list?</h1>
      <BucketForm onSubmit={addBucketItem} />
      <Bucket 
        bucket={bucket} 
        completeBucketItem={completeBucketItem}
        removeBucketItem={removeBucketItem}
        editBucketItem={editBucketItem} 
      />
    </div>
  );
}

export default BucketList;
