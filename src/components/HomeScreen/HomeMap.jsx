export default function HomeMap() {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 group w-full h-64 bg-gradient-to-br from-[#baa794]/90 to-[#8b7355]/90 backdrop-blur-sm">
      {/* Multi-layer Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-pulse" style={{background: 'linear-gradient(135deg, #baa794 0%, #8b7355 50%, #baa794 100%)'}}></div>
        <div className="absolute inset-0 opacity-70 animate-pulse delay-1000" style={{background: 'linear-gradient(225deg, #8b7355 0%, #6d5a42 50%, #8b7355 100%)'}}></div>
        <div className="absolute inset-0 opacity-50 animate-pulse delay-2000" style={{background: 'linear-gradient(45deg, #baa794 0%, #8b7355 100%)'}}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-4 left-4 w-16 h-16 rounded-full animate-bounce opacity-40" style={{background: 'linear-gradient(45deg, #baa794, #ffffff)'}}></div>
        <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full animate-bounce delay-500 opacity-50" style={{background: 'linear-gradient(135deg, #ffffff, #8b7355)'}}></div>
        <div className="absolute top-1/3 right-4 w-8 h-8 rounded-full animate-bounce delay-1000 opacity-45" style={{background: 'linear-gradient(225deg, #6d5a42, #ffffff)'}}></div>
        
        {/* Rotating Rings */}
        <div className="absolute top-2 right-2 w-20 h-20 border-4 border-white/20 rounded-full animate-spin"></div>
        <div className="absolute bottom-2 left-2 w-16 h-16 border-4 border-white/15 rounded-full animate-spin delay-700" style={{animationDirection: 'reverse'}}></div>
      </div>
      
      {/* Sparkle Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-6 left-1/2 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-1/4 left-6 w-1 h-1 rounded-full animate-ping delay-300" style={{backgroundColor: '#baa794'}}></div>
        <div className="absolute bottom-1/4 right-8 w-1.5 h-1.5 bg-white rounded-full animate-ping delay-700"></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 rounded-full animate-ping delay-1000" style={{backgroundColor: '#8b7355'}}></div>
      </div>
      
      {/* Header */}
      <div className="absolute top-2 left-2 z-20 flex items-center gap-2 backdrop-blur-sm rounded-xl p-2 border" style={{background: 'rgba(255,255,255,0.25)', borderColor: 'rgba(255,255,255,0.4)'}}>
        <div className="w-6 h-6 rounded-lg flex items-center justify-center animate-pulse" style={{background: 'linear-gradient(45deg, #baa794, #8b7355)'}}>
          <span className="text-sm animate-bounce">🏠</span>
        </div>
        <span className="font-black text-sm text-white drop-shadow-lg">My Home</span>
      </div>
      
      {/* Map Container */}
      <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border-4 border-white/30 group-hover:border-white/50 transition-all duration-300">
        <iframe
          title="My Home (Satellite)"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://maps.google.com/maps?q=10.08228619814015,78.74592271474032&t=k&z=18&output=embed"
        ></iframe>
      </div>
      
      {/* Enhanced Glow Effects */}
      <div className="absolute -inset-2 rounded-3xl blur-lg opacity-50 group-hover:opacity-80 transition duration-500 animate-pulse" style={{background: 'linear-gradient(45deg, #baa794, #8b7355)'}}></div>
      <div className="absolute -inset-1 rounded-3xl blur opacity-60 group-hover:opacity-90 transition duration-500" style={{background: 'linear-gradient(135deg, #6d5a42, #baa794)'}}></div>
    </div>
  );
}
