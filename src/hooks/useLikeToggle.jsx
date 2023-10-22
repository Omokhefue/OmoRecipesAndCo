import { useState } from "react";

const useLikeToggle = (initialData) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleToggleLike = async (
    id,
    resourceType,
    isMultipleResources = false
  ) => {
    const token = localStorage.getItem("access_token"); // Retrieve the token

    const res = await fetch(
      `http://localhost:5000/api/v1/likes/${resourceType}/` + id,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!res.ok) {
      throw Error("there was an error liking the resource. Please try again");
    }
    const updatedResource = await res.json();

    let updatedData;
    setIsLiked(!isLiked);
    console.log(isLiked);
    localStorage.setItem("liked", isLiked);
    if (isMultipleResources) {
      updatedData = initialData.map((data) => {
        if (data._id === updatedResource.parentId) {
          return {
            ...data,
            likesCount: updatedResource.likes,
            isLiked: isLiked,
          };
        }
        return data;
      });
    } else {
      // Handle the case when a single resource is passed
      updatedData = {
        ...initialData,
        likesCount: updatedResource.likes,
        isLiked: isLiked,
      };
    }

    return { updatedData };
  };

  return { handleToggleLike };
};

export default useLikeToggle;
