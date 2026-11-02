export default function CyberPrelaunch() {
  const commands = [
    '> Initialising security framework...',
    '> Loading threat intelligence modules...',
    '> Deploying portfolio infrastructure...',
    '> Hardening perimeter defences...',
    '> Status: BUILD IN PROGRESS'
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex items-center justify-center p-6">
      <div className="w-full max-w-5xl rounded-3xl border border-green-500/40 shadow-2xl bg-neutral-950 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-green-500/30 bg-black">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-4 text-sm text-green-300">5hr1d@root:~</span>
        </div>
        <div className="p-8 md:p-12">
          <div className="text-green-500 text-sm mb-4">SECURE TERMINAL v1.0</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-300">5hr1d's portfolio</h1>
          <div className="text-xl md:text-2xl mb-8 text-green-500">UNDER CONSTRUCTION</div>
          <div className="bg-black border border-green-500/30 rounded-2xl p-6 mb-8">
            {commands.map((cmd,index)=><div key={index} className="mb-2">{cmd}</div>)}
            <div className="animate-pulse">▋</div>
          </div>
        </div>
      </div>
    </div>
  );
}
