import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { darkModeState } from "../atoms";

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 80px;
  margin: 0px auto;
  color: ${(props) => props.theme.textColor};
  /* background-color: rgba(255, 255, 255, 0.4); */
  box-shadow: 0px 2px 5px ${(props) => props.theme.textColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  padding: 20px;
  z-index: 100;
  div:last-child {
    padding: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  padding: 20px;
  grid-template-columns: 1fr 80px;
  position: relative;

  div:first-child {
    justify-content: flex-start;
  }
`;

const InnerWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  cursor: pointer;
`;

const Svg = styled(motion.svg)`
  width: 30px;
  path {
    stroke: rgba(46, 134, 222, 0.5);
    stroke-width: 5;
  }
`;

const HiddenMenu = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  left: 0px;
  top: 60%;
  a {
    min-width: fit-content;
    margin: 0px;
    margin-right: 3px;
  }
`;

const MenuTitle = styled(motion.div)`
  text-align: center;
  cursor: pointer;
`;

const ToggleContainer = styled(motion.div)`
  width: fit-content;
  /* background: #313a3a; */
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ToggleBackground = styled(motion.div)`
  width: 40px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToggleCircle = styled(motion.div)`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 40px;
  border: 1px gray solid;
`;

const menuVariants = {
  top: { backgroundColor: "rgba(255,255,255,0.4)", color: "inherit" },
  scroll: { backgroundColor: "rgba(0,0,0,0.9)", color: "white" },
};

const menuIndicatorAttrs = {
  borderBottom: "2px solid blue",
};

const subMenuAnimate = {
  enter: {
    opacity: 1,
    width: " 300px",
    height: "40px",
    fontSize: "16px",
    transition: { duration: 0.5, delay: 0.1 },
  },
  exit: {
    opacity: 0,
    width: "0px",
    height: "0px",
    fontSize: "0px",
    transition: { duration: 0.5, delay: 0.1 },
  },
};

function UpperMenu() {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollY } = useViewportScroll();
  const onToggle = () => {
    setIsDarkMode((curr) => !curr);
  };
  const homeMatch = useRouteMatch("/");
  const moviesMatch = useRouteMatch("/movies");
  const tvMatch = useRouteMatch("/tv");
  const coinListMatch = useRouteMatch("/coinlist");
  const toDoListMatch = useRouteMatch("/todolist");
  const motionMatch = useRouteMatch("/motion");
  const animateMatch = useRouteMatch("/animate");
  const sliderMatch = useRouteMatch("/slider");
  const responsiveMatch = useRouteMatch("/responsive");
  const gridMatch = useRouteMatch("/grid");
  const history = useHistory();

  const onHover = () => {
    setIsHovered(true);
  };
  const onLeave = () => {
    setIsHovered(false);
  };

  const menuAnimation = useAnimation();

  useEffect(() => {
    scrollY.onChange((value) => {
      if (value > 100) {
        menuAnimation.start("scroll");
      } else {
        menuAnimation.start("top");
      }
    });
  });

  const onGoHome = () => {
    history.push("/");
  };
  return (
    <Wrapper
      variants={menuVariants}
      initial="top"
      animate={menuAnimation}
      transition={{ duration: 0.5 }}
    >
      <Grid>
        <InnerWrapper>
          <Logo onClick={onGoHome}>
            <Svg
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <motion.path
                initial={{
                  pathLength: 0,
                  fill: "rgb(204, 35, 30,0)",
                }}
                animate={{
                  pathLength: 1,
                  fill: "rgba(204, 35, 30,1)",
                }}
                transition={{ duration: 2 }}
                fill="currentColor"
                d="M129.5 512V345.9L18.5 48h55.8l81.8 229.7L250.2 0h51.3L180.8 347.8V512h-51.3z"
              ></motion.path>
            </Svg>
            <Svg
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <motion.path
                initial={{
                  pathLength: 0,
                  fill: "rgba(52, 166, 95,0)",
                }}
                animate={{
                  pathLength: 1,
                  fill: "rgba(52, 166, 95,1.0)",
                }}
                transition={{ duration: 2 }}
                fill="currentColor"
                d="M192 480c39.5 0 76.2-11.8 106.8-32.2H85.3C115.8 468.2 152.5 480 192 480zm-89.1-193.1v-12.4H0v12.4c0 2.5 0 5 .1 7.4h103.1c-.2-2.4-.3-4.9-.3-7.4zm20.5 57H8.5c2.6 8.5 5.8 16.8 9.6 24.8h138.3c-12.9-5.7-24.1-14.2-33-24.8zm-17.7-34.7H1.3c.9 7.6 2.2 15 3.9 22.3h109.7c-4-6.9-7.2-14.4-9.2-22.3zm-2.8-69.3H0v17.3h102.9zm0-173.2H0v4.9h102.9zm0-34.7H0v2.5h102.9zm0 69.3H0v7.4h102.9zm0 104H0v14.8h102.9zm0-69.3H0v9.9h102.9zm0 34.6H0V183h102.9zm166.2 160.9h109.7c1.8-7.3 3.1-14.7 3.9-22.3H278.3c-2.1 7.9-5.2 15.4-9.2 22.3zm12-185.7H384V136H281.1zm0 37.2H384v-12.4H281.1zm0-74.3H384v-7.4H281.1zm0-76.7v2.5H384V32zm-203 410.9h227.7c11.8-8.7 22.7-18.6 32.2-29.7H44.9c9.6 11 21.4 21 33.2 29.7zm203-371.3H384v-4.9H281.1zm0 148.5H384v-14.8H281.1zM38.8 405.7h305.3c6.7-8.5 12.6-17.6 17.8-27.2H23c5.2 9.6 9.2 18.7 15.8 27.2zm188.8-37.1H367c3.7-8 5.8-16.2 8.5-24.8h-115c-8.8 10.7-20.1 19.2-32.9 24.8zm53.5-81.7c0 2.5-.1 5-.4 7.4h103.1c.1-2.5.2-4.9.2-7.4v-12.4H281.1zm0-29.7H384v-17.3H281.1z"
              ></motion.path>
            </Svg>
            <Svg
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 416 512"
            >
              <motion.path
                initial={{
                  pathLength: 0,
                  fill: "rgba(15, 138, 95,0)",
                }}
                animate={{
                  pathLength: 1,
                  fill: "rgba(15, 138, 95,1.0)",
                }}
                transition={{ duration: 2 }}
                fill="currentColor"
                d="M397.9 160H256V19.6L397.9 160zM304 192v130c0 66.8-36.5 100.1-113.3 100.1H96V84.8h94.7c12 0 23.1.8 33.1 2.5v-84C212.9 1.1 201.4 0 189.2 0H0v512h189.2C329.7 512 400 447.4 400 318.1V192h-96z"
              ></motion.path>
            </Svg>
            <Svg
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <motion.path
                initial={{
                  pathLength: 0,
                  fill: "rgba(35, 94, 111,0)",
                }}
                animate={{
                  pathLength: 1,
                  fill: "rgba(35, 94, 111,1.0)",
                }}
                transition={{ duration: 2 }}
                fill="currentColor"
                d="M496 224H293.9l-87.17-26.83A43.55 43.55 0 0 1 219.55 112h66.79A49.89 49.89 0 0 1 331 139.58a16 16 0 0 0 21.46 7.15l42.94-21.47a16 16 0 0 0 7.16-21.46l-.53-1A128 128 0 0 0 287.51 32h-68a123.68 123.68 0 0 0-123 135.64c2 20.89 10.1 39.83 21.78 56.36H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-180.24 96A43 43 0 0 1 336 356.45 43.59 43.59 0 0 1 292.45 400h-66.79A49.89 49.89 0 0 1 181 372.42a16 16 0 0 0-21.46-7.15l-42.94 21.47a16 16 0 0 0-7.16 21.46l.53 1A128 128 0 0 0 224.49 480h68a123.68 123.68 0 0 0 123-135.64 114.25 114.25 0 0 0-5.34-24.36z"
              ></motion.path>
            </Svg>
          </Logo>

          <Link style={homeMatch?.isExact ? menuIndicatorAttrs : {}} to="/">
            Home
          </Link>
          <span> &nbsp; | &nbsp;</span>
          <Link
            style={moviesMatch?.isExact ? menuIndicatorAttrs : {}}
            to="/movies"
          >
            Movies
          </Link>
          <span> &nbsp; | &nbsp;</span>
          <Link
            style={responsiveMatch?.isExact ? menuIndicatorAttrs : {}}
            to="/responsive"
          >
            Responsive Grid
          </Link>
          <span> &nbsp; | &nbsp;</span>
          <Link style={gridMatch?.isExact ? menuIndicatorAttrs : {}} to="/grid">
            Responsive Layout
          </Link>
          <span> &nbsp; | &nbsp;</span>
          <InnerWrapper
            onHoverStart={onHover}
            onHoverEnd={onLeave}
            transition={{ type: "linear", duration: 0.5 }}
          >
            <MenuTitle>Challenge</MenuTitle>
            <HiddenMenu
              variants={subMenuAnimate}
              initial="exit"
              animate={isHovered ? "enter" : "exit"}
            >
              <Link
                style={coinListMatch?.isExact ? menuIndicatorAttrs : {}}
                to="/coinlist"
              >
                Coin List
              </Link>
              <span> &nbsp; | &nbsp;</span>
              <Link
                style={toDoListMatch?.isExact ? menuIndicatorAttrs : {}}
                to="/todolist"
              >
                ToDo List
              </Link>
              <span> &nbsp; | &nbsp;</span>
              <Link
                style={motionMatch?.isExact ? menuIndicatorAttrs : {}}
                to="/motion"
              >
                Framer motion
              </Link>
              <span> &nbsp; | &nbsp;</span>
              <Link
                style={animateMatch?.isExact ? menuIndicatorAttrs : {}}
                to="/animate"
              >
                AnimatePresence
              </Link>
              <span> &nbsp; | &nbsp;</span>
              <Link
                style={sliderMatch?.isExact ? menuIndicatorAttrs : {}}
                to="/slider"
              >
                Slider
              </Link>
            </HiddenMenu>
          </InnerWrapper>
          {/* <Link style={tvMatch?.isExact ? menuIndicatorAttrs : {}} to="/tv">
            TV
          </Link> */}
        </InnerWrapper>

        <InnerWrapper>
          <ToggleContainer>
            <ToggleBackground
              onClick={onToggle}
              style={{ background: isDarkMode ? "#fffefe" : "#c2c0be" }}
            >
              <ToggleCircle
                animate={{ x: isDarkMode ? 20 : 0 }}
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                style={{
                  background: isDarkMode ? "#303030" : "#ffffff",
                }}
              ></ToggleCircle>
            </ToggleBackground>
          </ToggleContainer>
        </InnerWrapper>
      </Grid>
    </Wrapper>
  );
}

export default UpperMenu;
