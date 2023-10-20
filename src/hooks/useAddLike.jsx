import { useState } from "react";

const useAddLike = (initialData) => {
  const [data, setData] = useState(initialData);

  const handleAddLike = (resource, callback) => {
    const updatedData = data.map((e) =>
      e._id === resource._id ? { ...e, likesCount: e.likesCount + 1 } : e
    );
    setData(updatedData);
    if (callback) {
      callback(updatedData);
    }
    return data;
  };

  return { handleAddLike };
};

export default useAddLike;

//   const { handleAddLike } = useAddLike(comments);
//   const handleLike = (comment) => {
//     handleAddLike(comment, (updatedData) => {
//       console.log(updatedData);
//     });
//   };