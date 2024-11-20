"use client";

import { useState, useContext } from "react";
import { LoaderContext } from "@/providers/LoaderProvider/LoaderProvider";
import { SplitText } from "@cyriacbr/react-split-text";
import { motion } from "framer-motion";
import { presenceAnim, TitlePresence } from "@/helpers/anim";

const Paragraph = ({ text, index = 0, duration = 1 }) => {
  const [isAnimationEnded, setIsAnimationEnded] = useState(false);

  const { loaderFinished } = useContext(LoaderContext);

  // return (
  //   <SplitText
  //     LineWrapper={({ lineIndex, children }) => (
  //       <motion.p
  //         {...presenceAnim(TitlePresence, loaderFinished)}
  //         custom={{ id: lineIndex + index, duration }}
  //         className="wrapper"
  //         // onAnimationComplete={() => setIsAnimationEnded(true)}
  //       >
  //         {children}
  //       </motion.p>
  //     )}
  //   >
  //     {text}
  //   </SplitText>
  // );

  return (
    <>
      {!isAnimationEnded ? (
        <SplitText
          LineWrapper={({ lineIndex, children }) => (
            <motion.p
              {...presenceAnim(TitlePresence, loaderFinished)}
              custom={{ id: lineIndex + index, duration }}
              className="wrapper"
              onAnimationComplete={() => setIsAnimationEnded(true)}
            >
              {children}
            </motion.p>
          )}
        >
          {text}
        </SplitText>
      ) : (
        <p>{text}</p>
      )}
    </>
  );
};

export default Paragraph;
