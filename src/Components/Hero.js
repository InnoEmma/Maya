function Hero() {
  return (
    <div>
      <p className="text-slate-600 text-center text-sm font-ibmCondensed text-[13px] pb-10 font-medium">
        February 1, 2026
      </p>
      <p className="text-5xl text-center font-ibm leading-tight">
        Introducing Maya, the First AI Insurance Agentic System
      </p>
      <div className="text-center font-ibmCondensed text-slate-600 text-sm text-[13px] pt-10 font-medium mb-4">
        By Emmanuel
      </div>
      <div className="text-slate-600 text-sm font-ibm leading-tight mb-14">
        <p className="pb-3 text-base">In This Article:</p>
        <div className="hover:cursor-pointer flex flex-col gap-3">
          {/* Added href links to matching IDs */}
          <a href="#capabilities" className="hover:text-teal-600 transition-colors">Maya’s Capabilities</a>
          <a href="#impact" className="hover:text-teal-600 transition-colors">Performance & Reliability</a>
          <a href="#why-maya" className="hover:text-teal-600 transition-colors">Restoring Trust In Nigeria</a>
          <a href="#demo" className="hover:text-teal-600 transition-colors">Partner With Maya</a>
        </div>
      </div>
    </div>
  );
}
export default Hero;
