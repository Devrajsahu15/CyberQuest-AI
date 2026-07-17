function BackgroundGlow() {
  return (
    <>
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 blur-[150px] rounded-full"></div>
    </>
  );
}

export default BackgroundGlow;