const AnimatedBackground = () => {
  return (
    <>
      {/* Main Background */}
      <div className="pointer-events-none fixed inset-0 -z-30 bg-[#020817]" />

      {/* Grid */}
      <div
        className="
          pointer-events-none
          fixed
          inset-0
          -z-20
          opacity-30
          bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-[size:50px_50px]
        "
      />

      {/* Glow Blob 1 — desktop only */}
      <div
        className="
          pointer-events-none
          fixed
          left-[-150px]
          top-[10%]
          -z-10
          hidden
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/10
          blur-[140px]
          animate-float
          lg:block
        "
      />

      {/* Glow Blob 2 — desktop only */}
      <div
        className="
          pointer-events-none
          fixed
          right-[-150px]
          top-[40%]
          -z-10
          hidden
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-500/10
          blur-[140px]
          animate-float
          lg:block
        "
        style={{
          animationDelay: "4s",
        }}
      />

      {/* Glow Blob 3 — desktop only */}
      <div
        className="
          pointer-events-none
          fixed
          bottom-[-150px]
          left-1/2
          -z-10
          hidden
          h-[450px]
          w-[450px]
          -translate-x-1/2
          rounded-full
          bg-purple-500/10
          blur-[140px]
          animate-float
          lg:block
        "
        style={{
          animationDelay: "8s",
        }}
      />

      {/* Moving Beam — desktop only */}
      <div className="beam hidden lg:block" />
    </>
  );
};

export default AnimatedBackground;