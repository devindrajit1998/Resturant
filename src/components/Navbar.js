import React from "react";

export default function Navbar({ filterNav, newNavList }) {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {newNavList.map((cate) => {
            return (
              <>
                <button
                  className="btn-group__item"
                  onClick={() => filterNav(cate)}
                >
                  {cate}
                </button>
              </>
            );
          })}
        </div>
      </nav>
    </>
  );
}
