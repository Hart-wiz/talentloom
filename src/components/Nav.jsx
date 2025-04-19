import React from "react";
import logo from "/logotalent.png";

function Nav() {
  return (
    <div>
      <div className="bg-gradient-to-l from-white to-blue-500 h-[100px] ">
        <img src={logo} alt="" className="size-80 absolute top-[-70px] " />
      </div>
      <div className="flex justify-around bg-blue-950 text-white py-4 font-bold ">
        <ul className="flex gap-10">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">scholarships</a>
          </li>
          <li>
            <a href="">jobs</a>
          </li>
          <li>
            <a href="">internships</a>
          </li>
          <li>
            <a href="">global opportunities</a>
          </li>
        </ul>
        <ul className="flex gap-10">
          <li>
            <a href="">explainer</a>
          </li>
          <li>
            <a href="">about us</a>
          </li>
          <li>
            <a href="">contact us</a>
          </li>
          <li>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                class="main-grid-item-icon"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" x2="16.65" y1="21" y2="16.65" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
