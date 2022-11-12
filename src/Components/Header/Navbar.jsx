import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <a>My Assignment</a>
          </li>

          <li>
            <a>Chat with Mentor</a>
          </li>

          <li className="profile">
            <a>
              Profile Name
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                style={{ marginLeft: "5px" }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.41 0.589844L6 5.16984L10.59 0.589844L12 1.99984L6 7.99984L0 1.99984L1.41 0.589844Z"
                  fill="#800080"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;