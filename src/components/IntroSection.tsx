import { typingText } from "@/util/typing";
import { FC, useEffect } from "react";

const IntroSection: FC = () => {
  useEffect(() => {
    typingText(["FRONT-END DEVELOPER", "FULL-STACK DEVELOPER"], "text", [
      "#333",
    ]);
  }, []);

  return (
    <section
      className="sec sec1"
      id="sec1"
    >
      <article className="inner">
        <div className="content">
          <ul>
            <li>
              <div className="txt txt1">
                <h2>
                  NAME <span>YEONJU KIM</span>
                </h2>
                <h2>
                  FLIGHT <span>FRONT-END DEVELOPER 04OCT21</span>
                  <br className="mo_show2" /> TO
                  <span>FRONT-END DEVELOPER</span>
                </h2>
                <h2>DEP TIME</h2>
                <div className="wrap">
                  <ul>
                    <li>
                      <span>
                        BOARDING
                        <br />
                        탑승시각
                      </span>
                      <h2>2021.10.04~</h2>
                    </li>
                    <li>
                      <span>
                        GATE
                        <br />
                        탑승구
                      </span>
                      <h2>FRONT-END DEVELOPER</h2>
                    </li>
                  </ul>
                </div>
                <p>FRONT-END DEVELOPER KIMYEONJU INTRODUCE</p>
              </div>
              <div className="txt txt2">
                <div className="fly_text">
                  <h2 id="text">ㅤ</h2>
                </div>
                <p>
                  이 웹 사이트는 <b>프론트엔드 개발자</b>에서{" "}
                  <b>풀스택 개발자</b>
                  까지 가는 연주항공 709편입니다.
                </p>
                <p>
                  <b>웹 표준성</b>과 <b>웹 접근성</b>에 맞춰져 역동적인 웹
                  사이트 구현이 가능한
                  <br className="mo mo_hide2" />{" "}
                  <b>프론트엔드 개발자 김연주 포트폴리오</b>에 대해 안내해
                  드리겠습니다.
                </p>
              </div>
              <a
                href="https://open.kakao.com/o/seFYYgFe"
                target="_blank"
                className="code"
              ></a>
            </li>
            <li>
              <div className="txt txt1">
                <h2>
                  NAME <span>YEONJU KIM</span>
                </h2>
                <h2>
                  FROM <span>FRONT-END DEVELOPER</span>
                </h2>
                <h2>
                  TO <span>FULL-STACK DEVELOPER</span>
                </h2>
                <h2>
                  DATE <span>04OCT</span>
                </h2>
                <div className="wrap">
                  <ul>
                    <li>
                      <span>
                        SEAT
                        <br />
                        좌석
                      </span>
                      01A
                    </li>
                    <li>
                      <span>
                        FLIGHT
                        <br />
                        편명
                      </span>
                      FRONT-END DEVELOPER
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href="#sec2"
                id="down"
              >
                <b>KIMYEONJU PORTFOLIO</b>
                <br />
                김연주 포트폴리오 항공편에 탑승하시겠습니까?
              </a>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default IntroSection;
