import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const AsBody = styled.div`
  width: 100vw;
  height: 100vh;
  background: #151515;
  overflow: hidden;
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const AsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled(motion.img)`
  position: absolute;
  max-width: 100vw;
`;

const Btn = styled.button`
  position: absolute;
  top: 100px;
  background: rgb(255, 255, 255, 0.9);
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 12px;
  z-index: 2;
  border-radius: 50%;
`;

const images = [
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    };
  },
};

function rotateIdx(min: number, max: number, value: number) {
  const newIdx = value < min ? max - 1 : value > max - 1 ? 0 : value;
  console.log("newIdx", newIdx);
  return newIdx;
}
function Movies() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage(([currPage, direction]) => {
      const newPage = rotateIdx(0, images.length, currPage + newDirection);
      return [newPage, newDirection];
    });
  };

  return (
    <AsBody>
      <AsContainer>
        <>
          <AnimatePresence initial={false} custom={direction}>
            <Img
              src={images[page]}
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            />
          </AnimatePresence>
        </>
        <Btn style={{ left: 100 }} onClick={() => paginate(-1)}>
          prev
        </Btn>
        <Btn style={{ right: 100 }} onClick={() => paginate(1)}>
          next
        </Btn>
      </AsContainer>
    </AsBody>
  );
}

export default Movies;
