export default function TypingResultCard({ wpm, time, accuracy, lang }) {
  return (
    <div className="relative bg-gradient-to-br from-[#baa794] via-[#8b7355] to-[#6d5a42] rounded-2xl h-62.5 p-6 w-100 overflow-hidden shadow-2xl">
      {/* Animated background layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#baa794]/30 to-[#8b7355]/30 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-[#6d5a42]/20 to-transparent animate-cyber-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-[#baa794] to-[#8b7355] rounded-lg flex items-center justify-center animate-tech-spin">
              <span className="text-white text-sm font-bold">⚡</span>
            </div>
            <h3 className="text-white font-semibold drop-shadow-lg">Typing Speed</h3>
          </div>
          <span className="text-xs text-[#baa794] bg-white/20 backdrop-blur px-3 py-1 rounded-full border border-[#baa794]/30">
            {lang}
          </span>
        </div>

        {/* Main WPM */}
        <div className="text-center mb-6">
          <div className="text-5xl font-black text-transparent bg-gradient-to-r from-[#baa794] via-white to-[#8b7355] bg-clip-text mb-2 animate-neon-drift">
            {wpm}
          </div>
          <p className="text-[#baa794] text-sm uppercase tracking-wider font-medium">Words Per Minute</p>
        </div>

        {/* Stats */}
        <div className="flex justify-between">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1 drop-shadow-md">{time}s</div>
            <div className="text-xs text-[#baa794] uppercase tracking-wide font-medium">Duration</div>
          </div>
          <div className="w-px bg-[#baa794]/40"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#baa794] mb-1 drop-shadow-md">{accuracy}%</div>
            <div className="text-xs text-[#baa794] uppercase tracking-wide font-medium">Accuracy</div>
          </div>
        </div>
      </div>
    </div>
  );
}