import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 50vh;
  padding-top: 80px;
  background-color: crimson;
`;

const Slider = styled.div`
  position: relative;
  padding-top: 10px;
  display: flex;
  justify-content: center;
`;

const Grid = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  position: absolute;
  gap: 10px;
  div {
    min-height: 150px;
    background: yellow;
  }
  div:first-child {
    background: cyan;
    transform-origin: left;
  }

  div:last-child {
    background: lightgrey;
    transform-origin: right;
  }
`;

const Box = styled(motion.div)``;

const Btn = styled.button`
  width: 40px;
  height: 40px;
  background-color: pink;
  z-index: 2222;
  position: absolute;
`;

const gridVariants = {
  enter: (nextPage: number) => {
    return { x: 2000 };
  },
  center: { x: 0 },
  exit: (nextPage: number) => {
    return { x: -2000 };
  },
};
function LayoutPrac() {
  const [nextPage, setNextPage] = useState(0);

  const onClick = () => {
    setNextPage((curr) => curr + 1);
  };

  return (
    <>
      <Wrapper>
        <Slider>
          <AnimatePresence initial={false} custom={nextPage}>
            <Grid
              key={nextPage}
              custom={nextPage}
              variants={gridVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 3,
              }}
            >
              <Box whileHover={{ scale: 1.2, zIndex: 99 }}>
                nextPage: {nextPage}
              </Box>
              <Box whileHover={{ scale: 1.2, zIndex: 99 }}>
                nextPage: {nextPage}
              </Box>
              <Box whileHover={{ scale: 1.2, zIndex: 99 }}>
                nextPage: {nextPage}
              </Box>
              <Box whileHover={{ scale: 1.2, zIndex: 99 }}>
                nextPage: {nextPage}
              </Box>
              <Box whileHover={{ scale: 1.2, zIndex: 99 }}>
                nextPage: {nextPage}
              </Box>
            </Grid>
          </AnimatePresence>
        </Slider>
        <Btn onClick={onClick}>&lt;</Btn>
      </Wrapper>
    </>
  );
}

export default LayoutPrac;
