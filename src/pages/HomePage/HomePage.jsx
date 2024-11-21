"use client";

import { Logo, LogoHD } from "@/components/Logo/Logo";
import React, { useContext, useEffect, useRef, useState } from "react";
import s from "./HomePage.module.scss";
import { Button } from "@/components/Button/Button";
import Paragraph from "@/components/Paragraph/Paragraph";
import { LoaderContext } from "@/providers/LoaderProvider/LoaderProvider";
import { anim, LoaderAnim, presenceAnim, TitlePresence } from "@/helpers/anim";
import { LayoutGroup, motion, useAnimation } from "framer-motion";
import { ease } from "@/helpers/ease";

export default function HomePage() {
  const { loaderFinished, setLoaderFinished } = useContext(LoaderContext);
  const [logoAnim, setLogoAnim] = useState(false);
  const lineRef = useRef();
  const controls = useAnimation();

  useEffect(() => {
    const strokeStart = -5500;

    if (lineRef) {
      const sequence = async () => {
        await controls.set({ strokeDashoffset: strokeStart });

        await controls.start({
          strokeDashoffset: 0,
          transition: {
            duration: 2,
            delay: 0.5,
            onUpdate: (progress) => {
              if (progress >= strokeStart / 2) {
                setLogoAnim(true);
              }
              if (progress >= strokeStart / 4) {
                setLoaderFinished(true);
              }
            },
          },
        });
      };

      sequence();
    }
  }, [lineRef]);

  return (
    <LayoutGroup type="crossfade">
      <div className={s.home}>
        {!logoAnim && (
          <Logo className={`${s.logo} ${s.logo_big}`} layoutId="logo" {...anim(LoaderAnim.logo)} />
        )}
        <div className={s.top}>
          {logoAnim && (
            <Logo
              className={s.logo}
              layoutId="logo"
              transition={{
                duration: 1.2,
                ease: ease.inOutExpo,
              }}
            />
          )}
          <div className={s.dates_wrapper}>
            <div className={s.dates}>
              <h1 className={s.date}>
                <Paragraph text="01:12:47" />
              </h1>
              <h1 className={s.date}>
                <Paragraph text="14.24.21" index={1} />
              </h1>
            </div>
            <div className={s.dates}>
              <h1 className={s.date}>
                <Paragraph text="Day #2" />
              </h1>
              <h1 className={s.date}>
                <Paragraph text="2024" index={1} />
              </h1>
            </div>
          </div>
        </div>
        <data className={s.perseverance + " upperCase"}>
          <div>
            <div className="bold">
              <Paragraph text="perseverance" />
            </div>
            <Paragraph
              text="is a vital trait that defines the resolve of individuals and nations during times of war. It embodies the relentless determination to"
              index={1}
            />
            <div className="bold">
              <Paragraph text="[ push forward ]" index={3} />
            </div>
          </div>
          <div>
            <Paragraph
              text="even when the odds appear insurmountable. In war, perseverance is not just about"
              index={3}
            />
            <div className="bold">
              <Paragraph text="enduring physical hardships" index={4} />
            </div>
          </div>
        </data>
        <div className={s.about}>
          <div className={s.title}>
            <h1 className={s.title_top}>
              <Paragraph text="365 design" />
              <LogoHD
                {...presenceAnim(TitlePresence, loaderFinished)}
                custom={{ id: 2, duration: 1 }}
                className={s.title_top_logo}
              />
            </h1>
            <h1 className={s.title_bottom}>
              <Paragraph text="Perseverance" index={1} />
              &nbsp;
              <Paragraph text="|" index={1.3} />
              &nbsp;
              <Paragraph text="365 Ideas" index={1.8} />
            </h1>
          </div>
          {loaderFinished && (
            <div className={s.button}>
              <svg
                className={s.icon}
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.5 57.375V52.375C22.2917 51.7917 17.8225 49.6358 14.0925 45.9075C10.3625 42.1792 8.20667 37.71 7.625 32.5H2.625V27.5H7.625C8.20833 22.2917 10.365 17.8225 14.095 14.0925C17.825 10.3625 22.2933 8.20667 27.5 7.625V2.625H32.5V7.625C37.7083 8.20833 42.1775 10.365 45.9075 14.095C49.6375 17.825 51.7933 22.2933 52.375 27.5H57.375V32.5H52.375C51.7917 37.7083 49.6358 42.1775 45.9075 45.9075C42.1792 49.6375 37.71 51.7933 32.5 52.375V57.375H27.5ZM30 47.5C34.8333 47.5 38.9583 45.7917 42.375 42.375C45.7917 38.9583 47.5 34.8333 47.5 30C47.5 25.1667 45.7917 21.0417 42.375 17.625C38.9583 14.2083 34.8333 12.5 30 12.5C25.1667 12.5 21.0417 14.2083 17.625 17.625C14.2083 21.0417 12.5 25.1667 12.5 30C12.5 34.8333 14.2083 38.9583 17.625 42.375C21.0417 45.7917 25.1667 47.5 30 47.5ZM30 40C27.25 40 24.8958 39.0208 22.9375 37.0625C20.9792 35.1042 20 32.75 20 30C20 27.25 20.9792 24.8958 22.9375 22.9375C24.8958 20.9792 27.25 20 30 20C32.75 20 35.1042 20.9792 37.0625 22.9375C39.0208 24.8958 40 27.25 40 30C40 32.75 39.0208 35.1042 37.0625 37.0625C35.1042 39.0208 32.75 40 30 40Z"
                  fill="#212529"
                />
              </svg>
              <Button text="Search" />
            </div>
          )}
        </div>
        <motion.svg
          className={s.line}
          viewBox="0 0 1983 634"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={lineRef}
          animate={controls}
        >
          <path
            d="M1981.69 342.379C1956.24 351.236 1895.34 386.642 1855.36 457.405C1805.39 545.859 1806.46 613.303 1758.74 629.91C1711.02 646.518 1695.21 501.782 1624.32 496.922C1553.43 492.063 1485.46 647.167 1398.93 599.713C1312.39 552.259 1312.79 226.01 1274.24 219.305C1235.7 212.6 1205.32 424.03 1176.73 419.055C1148.13 414.08 1189.04 134.755 1178.69 127.972C1168.34 121.19 1114.24 535.244 1071.88 565.238C1029.51 595.233 1012.4 141.389 904.871 30.5168C797.346 -80.3552 704.268 167.51 577.778 180.379C451.288 193.247 381.922 76.5584 361.113 107.812C340.305 139.066 197.25 644.756 259.533 441.367C321.816 237.979 263.127 163 225.828 156.511C188.529 150.022 59.6455 625.791 99.2885 523.089C138.932 420.386 158.109 45.0808 132.822 43.1726C112.593 41.6461 37.2897 278.151 2.1669 396.594"
            stroke="black"
            strokeWidth="4"
          />
        </motion.svg>
      </div>
    </LayoutGroup>
  );
}
