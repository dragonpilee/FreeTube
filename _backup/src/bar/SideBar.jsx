import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

// import necessary components ^^^^^

const SideBar = ({ sideBar, setsideBar }) => {
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1000) {
        setsideBar(false);
      } else {
        setsideBar(true);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // disable the window scroll when click is true

  function disableScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  function enableScroll() {
    window.onscroll = function () { };
  }

  if (sideBar && window.innerWidth < 1000) {
    disableScroll();
  } else {
    enableScroll();
  }

  // closing sideBar on every route
  function close() {
    if (window.innerWidth < 1000) {
      setsideBar(false);
    }
  }

  //// jsx

  return (
    <>
      {sideBar && (
        <div className="sb-big">
          <div className="home">
            <NavLink
              to={"/"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-house"></i> Home
            </NavLink>
            <NavLink
              to={"/explore"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-globe"></i> Explore
            </NavLink>
          </div>

          <div className="explore">
            <h4>Library</h4>
            <NavLink
              to={"/explore"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-music"></i> New Releases
            </NavLink>
            <NavLink
              to={"/top-charts"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-arrow-trend-up"></i> Top Charts
            </NavLink>
          </div>

          <div className="explore">

          </div>
          <Admin />
        </div>
      )}

      {/* --------------------------- */}

      {!sideBar && (
        <div className="sb-small">
          <NavLink
            to={"/"}
            className={`sidebar-link-sm ${({ isActive }) =>
              isActive ? "active" : ""}`}
          >
            <i className="fa-solid fa-house"></i> Home
          </NavLink>
          <NavLink
            to={"/explore"}
            className={`sidebar-link-sm ${({ isActive }) =>
              isActive ? "active" : ""}`}
          >
            <i className="fa-solid fa-music"></i> New
          </NavLink>
          <NavLink
            to={"/top-charts"}
            className={`sidebar-link-sm ${({ isActive }) =>
              isActive ? "active" : ""}`}
          >
            <i className="fa-solid fa-arrow-trend-up"></i> Charts
          </NavLink>
        </div>
      )}
    </>
  );
};

export default SideBar;
