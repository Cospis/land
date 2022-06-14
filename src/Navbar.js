const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <h1>WhyTeData</h1>
        {/* <div className="hbtext">
          // …trading RAW global business secrets in Nigeria
        </div> */}

        <ul>
          <li>
            <a href="#aboutus">About us</a>
          </li>
          <li>
            <a href="#businessfocus">Business Focus</a>
          </li>
          <li>
            <a href="#events">Events and Industries</a>
          </li>
          <li>
            {" "}
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
