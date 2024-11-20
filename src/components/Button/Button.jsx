import React from "react";

import s from "./Button.module.scss";
import Link from "next/link";

export const Button = ({ text, classes, link, ...rest }) => {
  return (
    <Link
      href={link || "/"}
      className={`${s.button} ${classes || ""}`}
      {...rest}
    >
      <span className={s.bg}/>
      <p className={s.textWrapper}>
        {text.split(" ").map((currWord, wordIndex) => (
          <span className={s.word} key={wordIndex}>
            {currWord.split("").map((currChar, charIndex) => (
              <span key={charIndex} className={s.char} style={{ transitionDelay: `${(charIndex+wordIndex)*0.03}s` }}>{currChar}</span>
            ))}
          </span>
        ))}
      </p>
    </Link>
  );
};
