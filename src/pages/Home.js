import React from "react";
import Buy from "../section/Buy";
import Image from "../section/Image";
import Grid from "../section/Grid";

const Home = () => {
  return (
    <div>
      <Image />
      <Buy />
      <div className="w-[80%] m-auto mt-20">
        <Grid />
      </div>
    </div>
  );
};

export default Home;
