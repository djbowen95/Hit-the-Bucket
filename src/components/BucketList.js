import React, { useState } from 'react';
import BucketForm from './BucketForm';
// import Bucket from './Bucket';

function BucketList() {

  const [bucket, setBucket] = useState([{id: 0, text: "Buy a car"}, {id: 1, text: "See a Dolphin"}]);
 
  // Function to add a bucket list item
  const addBucketItem = (item) => {
    console.log(item);
    console.log(bucket);
    // Currently using a helper function for testing.
    // TODO: UPDATE with the item parameter.
    setBucket([...bucket, item]);
  };

  const getNewItem = () => {
    // Array of items that could be on a bucket list.
    const items = ["Buy Things", "Do Things", "See a Dolphin", "Eat a Cake", "Go Scuba Diving", "Pay Off Mortgage"];
    // Random choice from the 
    const position = Math.floor(Math.random()*6);
    // Returns the item to be added to the list.
    return items[position];
  }
 /*
  // Function to mark bucket list item as complete
  const completeBucketItem = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedBucket = bucket.map((item) => {
      
      // TODO: Write logic that marks an item as complete or incomplete when invoked

    });

    setBucket(updatedBucket);
  };

  // Function to remove bucket list item and update state
  const removeBucketItem = (id) => {
    // TODO: Write logic that will return an array of items that don't contain the ID passed to this function


    // TODO: Update the bucket state variable
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
*/
  return (
    <div>
      <h1>What is on your bucket list?</h1>
      <h1>Bucket: </h1>
      <BucketForm onSubmit={addBucketItem} />
      {/* <BucketForm onSubmit={addBucketItem} /> 
      { /* <Bucket
        bucket={bucket}
        completeBucketItem={completeBucketItem}
        removeBucketItem={removeBucketItem}
        editBucketItem={editBucketItem}
  ></Bucket> */}
    </div>
  );
}

export default BucketList;
