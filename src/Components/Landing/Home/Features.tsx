import React from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
const Features = () => {
  return (
    <section className="w-full py-24 px-2 lg:px-48 flex justify-center bg-secondary">
      <div className="w-full flex flex-col lg:flex-row justify-center items-stretch gap-2 ">
        <div className="lg:max-w-[25%] w-fit flex flex-col justify-start  gap-2 shadow-lg p-8 rounded-lg transition-all hover:scale-[1.01] bg-primary">
          <div className=" bg-darkPrimary  text-white p-2 rounded-lg w-fit h-fit">
            <SupportAgentIcon fontSize="large" />
          </div>
          <header className="font-bold text-2xl">Monitor Conversations</header>
          <p className="text-lg">
            Answer to Customers, Change the conversation status, Automatic
            assingment of reprensentetives.
          </p>
        </div>
        <div className="lg:max-w-[25%] flex flex-col justify-start gap-2 shadow-lg p-8 rounded-lg transition-all hover:scale-[1.01] bg-primary">
          <div className=" bg-darkPrimary  text-white p-2 rounded-lg w-fit h-fit">
            <SmartToyOutlinedIcon fontSize="large" />
          </div>
          <header className="font-bold text-2xl">Easy to Use Bot</header>
          <p className="text-lg">
            Autmatic reponse to frequenlty asked questions. Easy to use UI.
            Fully control the conversation flow and edit it as you like.
          </p>
        </div>
        <div className="lg:max-w-[25%] flex flex-col justify-start gap-2 shadow-lg p-8 rounded-lg transition-all hover:scale-[1.01] bg-primary">
          <div className=" bg-darkPrimary  text-white p-2 rounded-lg w-fit h-fit">
            <EmojiEmotionsOutlinedIcon fontSize="large" />
          </div>
          <header className="font-bold text-2xl">
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
