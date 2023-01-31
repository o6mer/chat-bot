import React from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
const Features = () => {
  return (
    <section className="flex w-full justify-center bg-secondary py-24 px-2 lg:px-48">
      <div className="flex w-full flex-col items-stretch justify-center gap-2 lg:flex-row ">
        <div className="flex w-fit flex-col justify-start gap-2  rounded-lg bg-primary p-8 shadow-lg transition-all hover:scale-[1.01] lg:max-w-[25%]">
          <div className=" h-fit  w-fit rounded-lg bg-darkPrimary p-2 text-white">
            <SupportAgentIcon fontSize="large" />
          </div>
          <header className="text-2xl font-bold">Monitor Conversations</header>
          <p className="text-lg">
            Answer to Customers, Change the conversation status, Automatic
            assingment of reprensentetives.
          </p>
        </div>
        <div className="flex flex-col justify-start gap-2 rounded-lg bg-primary p-8 shadow-lg transition-all hover:scale-[1.01] lg:max-w-[25%]">
          <div className=" h-fit  w-fit rounded-lg bg-darkPrimary p-2 text-white">
            <SmartToyOutlinedIcon fontSize="large" />
          </div>
          <header className="text-2xl font-bold">Easy to Use Bot</header>
          <p className="text-lg">
            Autmatic reponse to frequenlty asked questions. Easy to use UI.
            Fully control the conversation flow and edit it as you like.
          </p>
        </div>
        <div className="flex flex-col justify-start gap-2 rounded-lg bg-primary p-8 shadow-lg transition-all hover:scale-[1.01] lg:max-w-[25%]">
          <div className=" h-fit  w-fit rounded-lg bg-darkPrimary p-2 text-white">
            <EmojiEmotionsOutlinedIcon fontSize="large" />
          </div>
          <header className="text-2xl font-bold">
            Diverse messeging options
          </header>
          <p className="text-lg">
            Admin Dashboard with great messeging options like emojis,
            customizable templates and file attachments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
