const AnimatedBackground = () => {
  return (
    <>
      {/* Main Background */}
      <div className="fixed inset-0 -z-30 bg-[#020817]" />

      {/* Grid */}
      <div
        className="
        fixed
        inset-0
        -z-20
        opacity-30
        bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
        bg-[size:50px_50px]
        "
      />

      {/* Glow Blob 1 */}
      <div
        className="
        fixed
        left-[-150px]
        top-[10%]
        -z-10
        h-[500px]
        w-[500px]
        rounded-full
        bg-cyan-500/10
        blur-[140px]
        animate-float
        "
      />

      {/* Glow Blob 2 */}
      <div
        className="
        fixed
        right-[-150px]
        top-[40%]
        -z-10
        h-[500px]
        w-[500px]
        rounded-full
        bg-blue-500/10
        blur-[140px]
        animate-float
        "
        style={{
          animationDelay: "4s",
        }}
      />

      {/* Glow Blob 3 */}
      <div
        className="
        fixed
        left-1/2
-translate-x-1/2
bottom-[-150px]
h-[300px]
w-[300px]
md:h-[450px]
md:w-[450px]
        -z-10
        rounded-full
        bg-purple-500/10
        blur-[140px]
        animate-float
        "
        style={{
          animationDelay: "8s",
        }}
      />

      {/* Moving Beam */}
      <div className="beam" />
    </>
  );
};

export default AnimatedBackground;