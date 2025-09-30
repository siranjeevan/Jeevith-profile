import React from "react";

const LeetCard = () => {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-110 hover:rotate-2 transition-all duration-500 group" style={{ height: "250px", width: "30%" }}>
      {/* Multi-layer Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-pulse" style={{background: 'linear-gradient(135deg, #8B7355 0%, #dac4ae 50%, #8B7355 100%)'}}></div>
        <div className="absolute inset-0 opacity-70 animate-pulse delay-1000" style={{background: 'linear-gradient(225deg, #dac4ae 0%, #A0956B 50%, #dac4ae 100%)'}}></div>
        <div className="absolute inset-0 opacity-50 animate-pulse delay-2000" style={{background: 'linear-gradient(45deg, #8B7355 0%, #dac4ae 100%)'}}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-6 left-6 w-20 h-20 rounded-full animate-bounce opacity-40" style={{background: 'linear-gradient(45deg, #dac4ae, #ffffff)'}}></div>
        <div className="absolute bottom-10 right-8 w-16 h-16 rounded-full animate-bounce delay-500 opacity-50" style={{background: 'linear-gradient(135deg, #ffffff, #8B7355)'}}></div>
        <div className="absolute top-1/3 right-6 w-12 h-12 rounded-full animate-bounce delay-1000 opacity-45" style={{background: 'linear-gradient(225deg, #A0956B, #ffffff)'}}></div>
        <div className="absolute bottom-1/3 left-8 w-10 h-10 rounded-full animate-bounce delay-1500 opacity-40" style={{background: 'linear-gradient(315deg, #ffffff, #dac4ae)'}}></div>
        
        {/* Rotating Rings */}
        <div className="absolute top-4 right-4 w-24 h-24 border-4 border-white/20 rounded-full animate-spin"></div>
        <div className="absolute bottom-4 left-4 w-20 h-20 border-4 border-white/15 rounded-full animate-spin delay-700" style={{animationDirection: 'reverse'}}></div>
      </div>
      
      {/* Sparkle Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-8 left-1/2 w-2 h-2 rounded-full animate-ping" style={{backgroundColor: '#dac4ae'}}></div>
        <div className="absolute top-1/4 left-8 w-1 h-1 bg-white rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-1/4 right-12 w-1.5 h-1.5 rounded-full animate-ping delay-700" style={{backgroundColor: '#dac4ae'}}></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-white rounded-full animate-ping delay-1000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-4 h-full flex flex-col justify-between text-white">
        <div>
          <div className="flex items-center gap-2 mb-4 group-hover:scale-110 transition-transform duration-300">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center backdrop-blur-sm shadow-lg animate-pulse" style={{background: 'linear-gradient(45deg, #8B7355, #dac4ae)'}}>
              <span className="text-lg animate-bounce">🚀</span>
            </div>
            <div>
              <h2 className="text-xl font-black tracking-wider text-white drop-shadow-lg">LeetCode</h2>
              <p className="text-xs font-semibold animate-pulse text-white/90 drop-shadow">Code writer</p>
            </div>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="backdrop-blur-lg rounded-xl p-2 border transition-all duration-300 hover:scale-105" style={{background: 'rgba(255,255,255,0.25)', borderColor: 'rgba(255,255,255,0.4)'}}>
              <div className="flex items-center gap-2">
                <span className="text-sm animate-spin">⚡</span>
                <div>
                  <p className="text-xs font-semibold text-white/90 drop-shadow">Problem Solving</p>
                  <p className="text-sm font-black text-white drop-shadow-lg">Medium Level</p>
                </div>
              </div>
            </div>
            <div className="backdrop-blur-lg rounded-xl p-2 border transition-all duration-300 hover:scale-105" style={{background: 'rgba(255,255,255,0.25)', borderColor: 'rgba(255,255,255,0.4)'}}>
              <div className="flex items-center gap-2">
                <span className="text-sm animate-pulse">🎯</span>
                <div>
                  <p className="text-xs font-semibold text-white/90 drop-shadow">Status</p>
                  <p className="text-sm font-black animate-pulse text-white drop-shadow-lg">Active Coder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <a
          href="https://leetcode.com/u/XkQfYjIy0A/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2 backdrop-blur-sm rounded-xl font-black text-center transition-all duration-300 border-2 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 text-sm text-white drop-shadow-lg"
          style={{
            background: 'linear-gradient(45deg, #8B7355, #A0956B)',
            borderColor: 'rgba(255,255,255,0.6)'
          }}
        >
          <span className="flex items-center justify-center gap-1">
            <span className="animate-bounce text-xs">🔥</span>
            View Profile
            <span className="animate-bounce delay-300 text-xs">→</span>
          </span>
        </a>
      </div>
      
      {/* Enhanced Glow Effects */}
      <div className="absolute -inset-2 rounded-3xl blur-lg opacity-50 group-hover:opacity-80 transition duration-500 animate-pulse" style={{background: 'linear-gradient(45deg, #8B7355, #dac4ae)'}}></div>
      <div className="absolute -inset-1 rounded-3xl blur opacity-60 group-hover:opacity-90 transition duration-500" style={{background: 'linear-gradient(135deg, #A0956B, #8B7355)'}}></div>
    </div>
  );
};

export default LeetCard;