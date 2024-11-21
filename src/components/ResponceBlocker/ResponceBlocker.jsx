"use client"

import useIsDesktop from "@/helpers/useIsDesktop";
import React from "react";

import s from "./ResponceBlocker.module.scss";

export const ResponceBlocker = () => {
  const isDesktop = useIsDesktop();

  return (
    !isDesktop && (
      <div className={s.responceBlock}>
        <h1 className={s.title}>
          Unfortunately, this project does not have a response design
        </h1>
        <h2>Better experience on 16/9 ratio screens.
        </h2>
      </div>
    )
  );
};
