function NavBar() {
  return (
    <div>
      <div className="flex item-center justify-between pt-7 font-ibm font-medium text-xl pb-28">
        <p>Maya</p>
        <div className="flex justify-center gap-32">
          <div className="flex justify-center gap-5">
          <p>
            Maya<sup>+</sup>
          </p>
            <p>Blog</p>
            <p>Contact us</p>
            <p>Careers</p>
          </div>
          <p>Try Maya</p>
        </div>
      </div>
      {/* <div className="underline underline-offset-8 decoration-2 decoration-slate-300"></div> */}
    </div>
  );
}

export default NavBar;
