import React from "react";
import { companyImages } from "../data";
import CustomSVGPath from "../components/CustomPath";

const Buy = () => {
  return (
    <div className="flex flex-col gap-[32px] w-full mx-auto my-12 px-[15%]">
      <h2>How to buy bob</h2>
      <h5>
        Download the SUI wallet for the SUI blockchain. Then, purchase SUI using
        your debit card ​with Moonpay OR swap existing coins for $SUI. After,
        visit any SUI based DEX and trade ​your $SUI for $BOB.
      </h5>

      <h4>
        CA:0x5f3a18cdfd7ef0527a65ba5c07dbe0efe276507d4d1a4d1bebe87f5d40df6cf6::bob::BOB
      </h4>

      <div className="flex flex-row justify-between">
        {companyImages.map((company) => (
          <img
            key={company.id}
            src={company.imageSrc}
            alt="company"
            className="w-20 h-20"
          />
        ))}
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-2 w-[30%]">
          <CustomSVGPath />
          <CustomSVGPath />
          <CustomSVGPath />
        </div>

        <div className="flex flex-col gap-5 w-[60%]">
          <CustomSVGPath />
          <CustomSVGPath />
          <h6>
            $BOB is a meme token and should not be considered as an investment
            vehicle or a medium ​for profit. The value of $BOB is not promised
            or guaranteed. The primary purpose of $BOB is ​to encourage
            ​community engagement and facilitate participation in a
            community-driven meme ​culture project. Purchasing $BOB should be
            regarded as a form of participation and support ​for the project,
            not as a ​financial investment with an expectation of profit. By
            engaging with ​this project, you acknowledge that you understand and
            accept these terms.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Buy;
