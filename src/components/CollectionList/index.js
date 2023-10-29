import React from "react";
import { useParams } from "react-router-dom";

const CollectionList = () => {
  const params = useParams();
  console.log(params);
  return <div>CollectionList</div>;
};

export default CollectionList;
