import Jeevith from "../../../assets/Jeevith2.png"
import Portfolio from "../../../assets/portfolio1.png"
import TargetCursor from "../../Animations/TargetCursor/TargetCursor";
import Dock from "../../Animations/Dock/Dock";
import MovingBackground from "../../Animations/MovingBackground";
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";
import HomeMap from "../HomeMap"
import LeetCard from "../LeetCard"
import TypingResultCard from "../Typing";
import Github from "../Github"
import LogoLoop from "../LogoLoopLayout";
import SpotifyCard from "../SpotifyCard";

export default function HomeScreen() {
  const items = [
    { icon: <VscHome size={18} color="white" />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <VscArchive size={18} color="white"/>, label: 'Archive', onClick: () => alert('Archive!') },
    { icon: <VscAccount size={18} color="white" />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <VscSettingsGear size={18} color="white" />, label: 'Settings', onClick: () => alert('Settings!') },
  ];
  return (
    <div className="min-h-screen cursor-none relative" >
      <MovingBackground />
      <div className="flex flex-col justify-center items-center">
        <img src={Portfolio} className="scale-80 -mt-15" />\
        <div className="flex flex-col justify-center items-center">
          <h2 className="-ml-190 absolute top-110 text-[#baa794] font-black text-4xl tracking-[8px]">
            Siranjeevan
          </h2>

          
        </div>
        
        <div>
          <img src={Jeevith} className="h-150 absolute top-44.5 -translate-x-1/2"/>
        </div>
      </div>

      <div className="px-10">
        <div className="ml-10 p-4 flex flex-row gap-5 mt-10" data-aos="fade-up" data-aos-duration="1000">
          <HomeMap />
          <LeetCard />
          <TypingResultCard wpm={174} time={60} accuracy={98} lang="EN" />
        </div>
        <div className="px-10 flex flex-row gap-5">
          <Github />
          <LogoLoop />
          <SpotifyCard />
        </div>
      </div>
      
      <Dock 
        className="fixed bottom-5 left-1/2 -translate-x-1/2"
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
      <TargetCursor />
    </div>
  );
}
