import React, { useState, useContext, useEffect } from "react";
import { RingLoader } from "react-spinners";

import AnimatedLetters from "./../../components/AnimatedLetters/";
import ContactControls from "../../components/ContactControls";
import { useEffectOnce } from "../../hooks/useEffectOnce";

import "./styles.scss";

import { override } from "../../model/loader";
import { SettingsContext } from "../../context";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  let { isLightTheme, isEnLang } = useContext(SettingsContext);

  useEffectOnce(() => {
    window.scrollTo(0, -1);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <main className="page__content home">
        <svg
          className="s"
          xmlns="http://www.w3.org/2000/svg"
          width="1200"
          height="1320"
          viewBox="0 0 1200 1320"
        >
          <g
            transform="matrix(.9294 0 0 .9294 615.39927 700.638422)"
            stroke="#000"
          >
            <g className="s__arm">
              <path
                d="M80.685-540.574s-23.525-23.289-28.092-38.506c-5.061-16.861-14.15-46.996 2.485-52.754 17.277-5.98 18.085 45.575 35.9 41.466 34.792-8.026-8.134-104.622 27.554-103.513 28.598.889 16.885 84.159 16.885 84.159s.55-90.827 16.113-86.678c29.206 7.785 9.859 90.14 9.859 90.14s11.503-86.39 29.596-78.074c27.925 12.835-10.076 91.647-10.076 91.647s15.283-45.898 27.851-39.706c31.005 15.276-46.464 92.701-46.464 92.701z"
                fill="#ffffff"
                strokeWidth="3.2"
              />
              <g fillRule="evenodd">
                <path
                  className="s__arm-color"
                  d="M-182.435-57.895s137.3-99.576 193.387-197.671c45.371-79.352 61.198-253.973 61.198-253.973l83.23 4.896s-27.882 206.809-91.798 301.096C-8.341-97.447-143.268-10.16-143.268-10.16z"
                  fillOpacity=".983"
                  strokeWidth=".428"
                />
                <path
                  d="M61.135-538.914c41.716-15.951 63.519-8.585 101.589 1.224 11.464 2.954 10.519 33.99-1.224 35.495-33.82 4.334-58.179.854-101.589-7.344-9.63-1.819-7.93-25.875 1.224-29.375z"
                  fill="#fff"
                  fillOpacity="1"
                  strokeWidth="2.142"
                />
              </g>
            </g>
          </g>
          <g fillRule="evenodd" stroke="#000">
            <path
              className="s__arm-color"
              d="M290.023 592.596s-115.47 21.476-171.215 131.248c-45.094 88.798 215.669-3.183 215.669-3.183l100.594 36.303s-182.71 72.347-272.346 90.61c-74.793 15.238-146.913-34.269-132.566-94.642 43.976-185.051 228.954-218.74 228.954-218.74z"
              fillOpacity=".983"
              strokeWidth=".467"
            />
            <path
              d="M453.986 753.7c-47.891 8.622-69.738-3.682-108.506-21.899-11.674-5.486-4.372-38.519 8.504-37.75 37.084 2.214 62.455 10.876 107.265 28.451 9.941 3.899 3.245 29.307-7.264 31.199z"
              fill="#fff"
              strokeWidth="2.334"
            />
          </g>
          <text
            transform="matrix(.735042 0 0 1.360467 725.44 735.618)"
            y="394.774"
            x="-834.483"
            xmlSpace="preserve"
            fontSize="1260.441"
            fontFamily="Arial, sans-serif"
            letterSpacing="0"
            wordSpacing="0"
            fill="#c9cd02"
          >
            <tspan y="394.774" x="-834.483">
              S
            </tspan>
          </text>
          <path
            d="M200.954 312.421c11.192 14.69-22.384 58.059-33.226 67.502-20.635 18.187-50.364 26.581-77.645 22.384C31.675 392.864-2.95 340.751.198 285.84c2.798-52.113 34.276-131.856 97.93-135.004 46.867-2.099 96.531 57.709 102.127 101.777l.7 59.807zm259.481-3.497c17.837 58.408-82.541 100.029-123.811 89.186-62.255-16.089-83.59-76.945-75.196-134.304 8.044-53.861 45.467-104.925 104.226-99.679 43.369 4.197 94.083 48.615 94.083 95.132l.7 49.664z"
            fill="#edeff2"
          />
          <path
            className="s__eyes"
            d="M210.496 312.421c-36.024 43.019-96.181-22.734-58.059-61.906 44.768-46.517 76.246 28.679 58.059 61.906zm249.939-3.497c-19.586 36.374-79.393 10.143-71.349-33.576 9.443-51.763 64.354-31.128 70.65-16.088 6.995 17.487 8.744 34.625.7 49.664z"
            fill="#100f0d"
          />
          <path
            d="M352.407 643.641c-76.755 3.542-139.26-62.372-143.631-63.258-9.56-1.771-16.116-11.806-14.204-22.431 1.639-10.33 10.926-17.413 20.759-15.347 1.639.295 137.075 101.035 259.493-6.493 9.56-2.656 19.394 0 23.491 9.74s0 20.955-9.014 25.382c-37.422 18.004-89.366 72.407-136.894 72.407z"
            fill="#ee4d4c"
          />
        </svg>

        <section className="home-content">
          <h1 className="home-content__title">
            <AnimatedLetters
              strArray={
                isEnLang
                  ? [
                      ["H", ""],
                      ["i,", ""],
                    ]
                  : [
                      ["П", ""],
                      ["р", ""],
                      ["и", ""],
                      ["в", ""],
                      ["е", ""],
                      ["т,", ""],
                    ]
              }
              startDelay={1.5}
              timeBeforeHoverActive={isEnLang ? 2.7 : 3.1}
            />
            <br />
            <AnimatedLetters
              strArray={
                isEnLang
                  ? [
                      ["I", ""],
                      ["'m", ""],
                    ]
                  : [
                      ["я", ""],
                      [" ", ""],
                      ["—", ""],
                    ]
              }
              startDelay={isEnLang ? 1.7 : 2.1}
              timeBeforeHoverActive={isEnLang ? 2.9 : 3.4}
            />{" "}
            <AnimatedLetters
              strArray={
                isEnLang
                  ? [
                      ["A", ""],
                      ["l", ""],
                      ["e", ""],
                      ["k", ""],
                      ["s", ""],
                      ["a", ""],
                      ["n", ""],
                      ["d", ""],
                      ["r", ""],
                      ["a", ""],
                    ]
                  : [
                      ["А", ""],
                      ["л", ""],
                      ["е", ""],
                      ["к", ""],
                      ["с", ""],
                      ["а", ""],
                      ["н", ""],
                      ["д", ""],
                      ["р", ""],
                      ["а", ""],
                    ]
              }
              startDelay={isEnLang ? 2 : 2.5}
              timeBeforeHoverActive={isEnLang ? 4 : 4.5}
            />{" "}
            <AnimatedLetters
              strArray={[
                ["(", ""],
                ["S", "home-content__letter-s"],
                ["a", ""],
                ["s", ""],
                ["h", ""],
                ["t", ""],
                ["j", ""],
                ["e", ""],
                [")", ""],
              ]}
              startDelay={isEnLang ? 3.1 : 3.6}
              timeBeforeHoverActive={isEnLang ? 5 : 5.5}
            />
            <br />
            <AnimatedLetters
              strArray={[
                ["F", ""],
                ["r", ""],
                ["o", ""],
                ["n", ""],
                ["t", ""],
                ["e", ""],
                ["n", ""],
                ["d", ""],
              ]}
              startDelay={isEnLang ? 4 : 4.5}
              timeBeforeHoverActive={isEnLang ? 5.8 : 6.3}
            />{" "}
            <AnimatedLetters
              strArray={[
                ["D", ""],
                ["e", ""],
                ["v", ""],
                ["e", ""],
                ["l", ""],
                ["o", ""],
                ["p", ""],
                ["e", ""],
                ["r", ""],
              ]}
              startDelay={isEnLang ? 4.9 : 5.4}
              timeBeforeHoverActive={isEnLang ? 6.8 : 7.3}
            />
          </h1>

          <p className="home-content__subtitle" lang="en">
            React / TypeScript / JavaScript
          </p>

          <ContactControls />
        </section>
      </main>

      <RingLoader
        size={100}
        color={isLightTheme ? "#b2b604" : "#fbfd66"}
        css={override}
        loading={isLoading}
      />
    </>
  );
};

export default Home;
