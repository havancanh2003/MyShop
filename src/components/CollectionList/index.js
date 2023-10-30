import React from "react";
import { useParams } from "react-router";
// import Product from './../Product';
import { collections } from "../../data";

const CollectionList = () => {
  const params = useParams();
  console.log(params);

  return <div>CollectionList</div>;
};

export default CollectionList;
