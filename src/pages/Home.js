import React from "react";
import Buy from "../section/Buy";
import Image from "../section/Image";
import Grid from "../section/Grid";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#A1C8E8] to-[#E0F7FA]">
      <Image />
      <Buy />
      <div className="w-[80%] m-auto mt-20">
        <Grid />
      </div>
    </div>
  );
};

export default Home;
