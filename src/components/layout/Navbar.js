import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-5">
      <span className="navbar-brand mb-0 h1 mx-auto">
        <i className="fas fa-music" />
        <span className="mr-2 ml-2">
          {" "}
          Lyric Point - Pointing you to the right lyrics.
        </span>
      </span>
    </nav>
  );
};
export default Navbar;
