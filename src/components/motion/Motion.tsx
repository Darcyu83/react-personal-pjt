import styled from "styled-components";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding-top: 80px;
  justify-content: center;
  align-items: center;
  background: cover;
  flex-direction: column;
  background: linear-gradient(
    -45deg,
    rgba(255, 0, 0, 0.5),
    rgba(0, 255, 255, 0.5)
  );
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 100px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  background-color: #5f27cd;
  width: 20px;
  height: 20px;
  border-radius: 10px;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BigBox = styled(motion.div)`
  width: 600px;
  height: 300px;
  background-color: rgb(0, 0, 0, 0.7);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const boxVariants = {
  hover: { scale: 1.2, y: -20, border: "0.5px solid rgba(127,127,127,0.5)" },
  active: {},
  exit: {},
};

const Btn = styled.button`
  margin: 5px 5px;
  padding: 5px;
  align-self: center;
`;

function Motion() {
  const [idClicked, setIdClicked] = useState("");
  const [prevPrevId, setPrevPrevId] = useState("");
  const [prevId, setPrevId] = useState("");
  const [isPoped, setIsPoped] = useState(false);
  const onPop = (id: string) => {
    console.log(id);
    setPrevPrevId(idClicked);
    setIdClicked(id);
    setIsPoped(true);
  };
  const cancelPopup = () => {
    setIsPoped(false);
  };

  const onClick = () => {
    setPrevId(idClicked);
    if (prevPrevId === idClicked) {
      setIdClicked(prevId);
    } else {
      setIdClicked(prevPrevId);
    }
  };

  return (
    <>
      <Wrapper>
        <Grid>
          {[1, 2, 3, 4].map((id, idx) => (
            <Box
              key={idx + ""}
              variants={boxVariants}
              whileHover="hover"
              animate="active"
              layoutId={id + ""}
              onClick={() => onPop(id + "")}
            >
              {idClicked === id + "" ? <Circle layoutId="circle" /> : null}
            </Box>
          ))}
        </Grid>
        <Btn onClick={onClick}>switch</Btn>
        <AnimatePresence>
          {isPoped ? (
            <Overlay onClick={cancelPopup}>
              <BigBox layoutId={idClicked}>
                <Circle
                  layoutId="circle"
                  style={{ scale: 2, backgroundColor: "yellow" }}
                />
              </BigBox>
            </Overlay>
          ) : null}
        </AnimatePresence>
      </Wrapper>
    </>
  );
}

export default Motion;
