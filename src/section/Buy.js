import React from "react";
import { companyImages } from "../data";
import CustomSVGPath from "../components/CustomPath";

const Buy = () => {
  return (
    <div className="relative flex flex-col gap-[32px] w-full mx-auto my-[80px] md:my-[150px] xl:mt-[400px] 2xl:mt-[550px] px-[10%] sm:px-[15%] md:px-[10%] lg:px-[15%] bg-gradient-to-r from-[#A1C8E8] to-[#E0F7FA]">
      <h2>How to buy cwk</h2>
      <h5>
        Download the SUI wallet for the SUI blockchain. Then, purchase SUI using
        your debit card ​with Moonpay OR swap existing coins for $SUI. After,
        visit any SUI based DEX and trade ​your $SUI for $BOB.
      </h5>

      <h4 className="break-words">
        CA:
        0x5f3a18cdfd7ef0527a65ba5c07dbe0efe276507d4d1a4d1bebe87f5d40df6cf6::bob::BOB
      </h4>

      <div className="flex flex-wrap justify-center gap-20 py-10">
        {companyImages.map((company) => (
          <img
            key={company.id}
            src={company.imageSrc}
            alt="company"
            className="w-[120px] md:w-[150px] lg:w-[200px] xl:w-[250px] "
          />
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center sm:items-start justify-between gap-8">
        <div className="flex flex-col gap-5 w-full md:w-[30%] items-center md:items-start">
          <CustomSVGPath img="https://buybob.xyz/images/dce615e04e1298ade3fa1ca428b3100e.png" name={"BIRDEYE"} bgColor={"#1965FD"}/>
          <CustomSVGPath />
          <h4>
            Built by{" "}
            <span className="underline">
              <a
                href="https://www.suiblockchain.com/"
                target="_blank"
                rel="noreferrer"
              >
                Memespace
              </a>
            </span>
          </h4>
        </div>

        <div className="flex flex-col gap-8 w-full items-center md:items-start md:w-[60%]">
          <CustomSVGPath img="https://buybob.xyz/images/36220bc05d390737f6fd6885fb2dc7f5.svg" name={"DEX TOOLS"}/>

          <h6 className="text-xs sm:text-sm lg:text-base text-center sm:text-left">
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
