import React from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
const Features = () => {
  return (
    <section className="w-full flex justify-center py-12">
      <div className=" max-w-3xl flex justify-between gap-2">
        <div className="flex flex-col justify-center gap-2">
          <div className=" bg-secondary text-black p-2 rounded-lg w-fit h-fit">
            <SupportAgentIcon fontSize="large" />
          </div>
          <header className="font-bold text-2xl">Lorem ipsum dolor sit.</header>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            asperiores pariatur iure vel earum corporis!
          </p>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div className=" bg-secondary text-black p-2 rounded-lg w-fit h-fit">
            <SupportAgentIcon fontSize="large" />
          </div>
          <header className="font-bold text-2xl">Lorem ipsum dolor sit.</header>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            asperiores pariatur iure vel earum corporis!
          </p>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div className=" bg-secondary text-black p-2 rounded-lg w-fit h-fit">
            <SupportAgentIcon fontSize="large" />
          </div>
          <header className="font-bold text-2xl">Lorem ipsum dolor sit.</header>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            asperiores pariatur iure vel earum corporis!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
