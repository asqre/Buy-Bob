import React, { useState } from "react";
import { companyImages } from "../data";
import CustomSVGPath from "../components/CustomPath";
import dexscreener from "../assets/images/dexscreener.png";
import { FaClipboard, FaClipboardCheck } from "react-icons/fa";

const Buy = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress =
    "0x5cc33d0aabadf21d977b6249b417750ce34b52a7a144e61bf9874413214d2364::cwk::CWK";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative flex flex-col gap-[32px] w-full mx-auto my-[80px] md:my-[150px] xl:mt-[400px] 2xl:mt-[550px] px-[10%] sm:px-[15%] md:px-[10%] lg:px-[15%] bg-gradient-to-r from-[#A1C8E8] to-[#E0F7FA]">
      <h2>How to buy cwk</h2>
      <h5>
        Download the SUI wallet for the SUI blockchain. Then, purchase SUI using
        your debit card ​with Moonpay OR swap existing coins for $SUI. After,
        visit any SUI based DEX and trade ​your $SUI for $CWK.
      </h5>

      <div className="flex gap-4 items-center">
        <h4 className="break-words">CA: {contractAddress}</h4>
        <button
          onClick={copyToClipboard}
        >
          {copied ? <FaClipboardCheck  size={30}/> : <FaClipboard size={30} />}
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-5 md:gap-20 py-10">
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
        <div className="flex flex-col gap-8 md:gap-15 w-full md:w-[30%] items-center md:items-start">
          <CustomSVGPath
            img="https://buybob.xyz/images/dce615e04e1298ade3fa1ca428b3100e.png"
            name={"BIRDEYE"}
            bgColor={"#1965FD"}
            link={
              "https://birdeye.so/token/0x5cc33d0aabadf21d977b6249b417750ce34b52a7a144e61bf9874413214d2364::cwk::CWK?chain=sui"
            }
          />
          <CustomSVGPath
            img={dexscreener}
            name={"DEX SCREENER"}
            link={
              "https://dexscreener.com/sui/0x199bb56fb7f9934b92585721d10b267534d4f3c667db4f26a44437d4d8f9da1b"
            }
          />
          {/* <CustomSVGPath />
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
          </h4> */}
        </div>

        <div className="flex flex-col gap-8 w-full items-center md:items-start md:w-[60%]">
          {/* <CustomSVGPath
            img="https://buybob.xyz/images/36220bc05d390737f6fd6885fb2dc7f5.svg"
            name={"DEX TOOLS"}
          /> */}

          <h6 className="text-sm sm:text-lg lg:text-2xl text-center sm:text-left">
            Crab with Knife: You’ve heard of bulls & bears. Forget them. The
            real market animal is a crab—armed, armored, and ready to slice up
            the competition. Grab your knife! This coin doesn’t just have
            utility—it has a knife. Why trust boring old charts when you can
            have a crab wielding a knife? Join the sharpest community in crypto!
            Armed with humor and low fees, Crab with Knife is here to take over
            the sui blockchain!
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Buy;
