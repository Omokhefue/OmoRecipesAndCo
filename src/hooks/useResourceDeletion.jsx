import { useState } from "react";

const useResourceDeletion = (initialData) => {
  const deleteResource = async (
    id,
    resourceType,
    isMultipleResources = false
  ) => {
    const token = localStorage.getItem("access_token");

    try {
      const res = await fetch(
        `http://localhost:5000/api/v1/${resourceType}/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw Error(
          "There was an error deleting the resource. Please try again"
        );
      }
      const result = await res.json();
      if (isMultipleResources) {
        const updatedData = initialData.filter(
          (resource) => resource._id !== id
        );
        return { updatedData };
      } else {
        return;
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  return { deleteResource };
};

export default useResourceDeletion;
