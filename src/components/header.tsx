import { FC } from "react";

const Header: FC = () => {
  return (
    <>
      <header className="flex gap-[10px] justify-between p-[10px] bg-[#346872] text-[#fff]">
        <ol className="top_txt">
          <li>KIMYEONJU PORTFOLIO</li>
          <li className="mo_hide">FIRST</li>
          <li className="mo_hide">BOARDING PASS</li>
        </ol>
        <nav>
          <ul className="flex gap-[10px]">
            <li>
              <a
                href="#sec1"
                className="on"
              >
                GATE
              </a>
            </li>
            <li>
              <a href="#sec2">ABOUT</a>
            </li>
            <li>
              <a href="#sec3">WORK</a>
            </li>
            <li>
              <a href="#sec4">CONTACT</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="block h-[3px] bg-[#10373E]"></div>
    </>
  );
};

export default Header;
