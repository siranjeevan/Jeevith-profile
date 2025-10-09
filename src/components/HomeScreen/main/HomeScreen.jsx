import { useNavigate } from 'react-router-dom';
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
import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

export default function HomeScreen() {
  const navigate = useNavigate();
  
  const items = [
    { icon: <VscHome size={18} color="white" />, label: 'Home', onClick: () => navigate('/') },
    { icon: <VscArchive size={18} color="white"/>, label: 'Projects', onClick: () => navigate('/projects') },
    { icon: <VscAccount size={18} color="white" />, label: 'Mentor', onClick: () => navigate('Mentor') },
    { icon: <VscSettingsGear size={18} color="white" />, label: 'Settings', onClick: () => alert('Settings!') },
  ];
  return (
    <div className="min-h-screen cursor-none relative overflow-hidden" >
      <MovingBackground />
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col justify-center items-center px-4">
        {/* Portfolio Image */}
        <div className="relative z-10 -mt-20">
          <img src={Portfolio} className="w-auto h-auto xl:max-w-full lg:max-w-300 md:max-w-250 sm:max-w-250 lg:scale-80 md:scale-80" />
        </div>
        
        {/* Name Title */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 xl:-ml-90 xl:mt-20 lg:-ml-80 lg:mt-10
                        md:-ml-60 md:mt-10 sm:-ml-60 sm:mt-10 -ml-50 mt-10 first-of-type:mt-0
         not-first-of-type:">
          <h2 className="text-[#baa794] font-black text-center xl:text-4xl md:text-3xl sm:text-2xl text-xl lg:tracking-[8px] md:tracking-[6px] sm:tracking-[4px] tracking-[2px] whitespace-nowrap">
            Siranjeevan
          </h2>
        </div> 
        
        {/* Profile Image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 mt-8">
          <img src={Jeevith} className="xl:h-174 lg:h-179 md:h-170 sm:h-179  object-contain"/>
        </div>
        
        {/* Social Links */}
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-30 flex flex-col gap-3">
          <a href="https://github.com/siranjeevan" className="w-12 h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-[#baa794]/30 transition-all duration-300 hover:scale-110 shadow-lg">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/siranjeevan" className="w-12 h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-[#0077b5]/30 transition-all duration-300 hover:scale-110 shadow-lg">
            <FaLinkedin size={20} />
          </a>
          <a href="https://x.com/siranjeevan" className="w-12 h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg">
            <SiX size={18} />
          </a>
          <a href="mailto:siranjeevan@example.com" className="w-12 h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-red-500/30 transition-all duration-300 hover:scale-110 shadow-lg">
            <FaEnvelope size={18} />
          </a>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative z-20 bg-gradient-to-b from-transparent to-black/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 space-y-8">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-duration="1000">
            <HomeMap />
            <LeetCard />
            <TypingResultCard wpm={174} time={60} accuracy={98} lang="EN" />
          </div>
          
          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Github />
            <LogoLoop />
            <SpotifyCard />
          </div>
        </div>
      </div>
      
      <Dock 
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
        items={items}
        panelHeight={60}
        baseItemSize={45}
        magnification={65}
      />
      <TargetCursor />
    </div>
  );
}
