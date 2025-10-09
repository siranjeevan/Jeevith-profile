import { SiReact, SiJavascript,SiSwift,SiDatastax , SiHtml5,SiCss3,SiMysql, SiPython, SiTailwindcss } from "react-icons/si";
export default function Layout(){
    const techLogos = [
    <SiReact className="text-5xl text-white filter drop-shadow-lg hover:scale-125 transition-transform duration-300" />,
    <SiSwift className="text-5xl text-white filter drop-shadow-lg hover:scale-125 transition-transform duration-300" />,
    <SiDatastax className="text-5xl text-white filter drop-shadow-lg hover:scale-125 transition-transform duration-300" />,
    <SiHtml5 className="text-5xl text-white filter drop-shadow-lg hover:scale-125 transition-transform duration-300" />,
    <SiCss3 className="text-5xl text-white filter drop-shadow-lg hover:scale-125 transition-transform duration-300" />,
    <SiMysql className="text-5xl text-white filter drop-shadow-lg hover:scale-125 transition-transform duration-300" />,
    <SiJavascript className="text-5xl text-white filter drop-shadow-lg hover:scale-125 transition-transform duration-300" />,
    <SiPython className="text-5xl text-white filter drop-shadow-lg hover:scale-125 transition-transform duration-300" />,
    <SiTailwindcss className="text-5xl text-white filter drop-shadow-lg hover:scale-125 transition-transform duration-300" />
  ];
    return(
        <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 group w-full h-64 bg-gradient-to-br from-[#8B7355]/90 to-[#baa794]/90 backdrop-blur-sm">
          {/* Multi-layer Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 animate-pulse" style={{background: 'linear-gradient(135deg, #8B7355 0%, #baa794 50%, #8B7355 100%)'}}></div>
            <div className="absolute inset-0 opacity-70 animate-pulse delay-1000" style={{background: 'linear-gradient(225deg, #baa794 0%, #A0956B 50%, #baa794 100%)'}}></div>
            <div className="absolute inset-0 opacity-50 animate-pulse delay-2000" style={{background: 'linear-gradient(45deg, #8B7355 0%, #baa794 100%)'}}></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-4 left-4 w-16 h-16 rounded-full animate-bounce opacity-40" style={{background: 'linear-gradient(45deg, #baa794, #ffffff)'}}></div>
            <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full animate-bounce delay-500 opacity-50" style={{background: 'linear-gradient(135deg, #ffffff, #8B7355)'}}></div>
            <div className="absolute top-1/3 right-4 w-8 h-8 rounded-full animate-bounce delay-1000 opacity-45" style={{background: 'linear-gradient(225deg, #A0956B, #ffffff)'}}></div>
            
            {/* Rotating Rings */}
            <div className="absolute top-2 right-2 w-20 h-20 border-4 border-white/20 rounded-full animate-spin"></div>
            <div className="absolute bottom-2 left-2 w-16 h-16 border-4 border-white/15 rounded-full animate-spin delay-700" style={{animationDirection: 'reverse'}}></div>
          </div>
          
          {/* Sparkle Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-6 left-1/2 w-2 h-2 rounded-full animate-ping" style={{backgroundColor: '#baa794'}}></div>
            <div className="absolute top-1/4 left-6 w-1 h-1 bg-white rounded-full animate-ping delay-300"></div>
            <div className="absolute bottom-1/4 right-8 w-1.5 h-1.5 rounded-full animate-ping delay-700" style={{backgroundColor: '#baa794'}}></div>
            <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-white rounded-full animate-ping delay-1000"></div>
          </div>
          
          <div className="relative z-10 h-full p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-gradient-to-r from-[#baa794] to-[#8b7355] rounded-lg flex items-center justify-center animate-pulse">
                  <span className="text-white text-sm font-bold animate-bounce">⚙️</span>
                </div>
                <h3 className="text-white font-semibold drop-shadow-lg">Tech Stack</h3>
              </div>
            </div>
            
            {/* Tech Stack Scrolling Animation */}
            <div className="h-full flex items-center overflow-hidden">
              <div 
                className="inline-flex animate-scroll-left"
                style={{
                  animationDuration: '25s',
                  animationTimingFunction: 'linear',
                  animationIterationCount: 'infinite'
                }}
              >
                {/* First set of logos */}
                {techLogos.map((logo, index) => (
                  <div key={index} className="flex-shrink-0 mx-5 flex items-center justify-center transform hover:scale-125 hover:rotate-12 hover:-translate-y-2 transition-all duration-300 hover:animate-pulse">
                    <div className="opacity-80 text- hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                      {logo}
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {techLogos.map((logo, index) => (
                  <div key={`duplicate-${index}`} className="flex-shrink-0 mx-8 flex items-center justify-center transform hover:scale-125 hover:rotate-12 hover:-translate-y-2 transition-all duration-300 hover:animate-pulse">
                    <div className="opacity-80 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                      {logo}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Enhanced Glow Effects */}
          <div className="absolute -inset-2 rounded-3xl blur-lg opacity-50 group-hover:opacity-80 transition duration-500 animate-pulse" style={{background: 'linear-gradient(45deg, #8B7355, #baa794)'}}></div>
          <div className="absolute -inset-1 rounded-3xl blur opacity-60 group-hover:opacity-90 transition duration-500" style={{background: 'linear-gradient(135deg, #A0956B, #8B7355)'}}></div>

          <style jsx="true">{`
            @keyframes scroll-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .animate-scroll-left {
              animation: scroll-left linear infinite;
            }
          `}</style>

        </div>
    )
}