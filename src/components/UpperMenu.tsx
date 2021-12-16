import { Link, useRouteMatch } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { darkModeState } from "../atoms";

const Wrapper = styled.div`
  width: 80%;
  height: 100px;
  margin: 20px auto;
`;

const Menu = styled.div`
  display: flex;
  box-shadow: 0px 2px 5px ${(props) => props.theme.textColor};
  padding: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const BtnWarpper = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  position: absolute;
  right: 10px;
`;

const ModeToggleBtn = styled.svg`
  color: ${(props) => props.theme.textColor};
  width: 1rem;
  height: 1rem;
`;
const menuIndicatorAttrs = {
  borderBottom: "5px solid blue",
};

function UpperMenu() {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState);
  const onToggle = () => {
    setIsDarkMode((curr) => !curr);
  };
  const homeMatch = useRouteMatch("/");
  const coinListMatch = useRouteMatch("/coinlist");
  const toDoListMatch = useRouteMatch("/todolist");
  const motionMatch = useRouteMatch("/motion");

  return (
    <Wrapper>
      <Menu>
        <Link style={homeMatch?.isExact ? menuIndicatorAttrs : {}} to="/">
          Home
        </Link>
        <span> &nbsp; | &nbsp;</span>
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
        {isDarkMode ? (
          <BtnWarpper as="button" onClick={onToggle}>
            <ModeToggleBtn
              style={{ color: "rgb(224, 214, 73)" }}
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
              ></path>
            </ModeToggleBtn>
          </BtnWarpper>
        ) : (
          <BtnWarpper as="button" onClick={onToggle}>
            <ModeToggleBtn
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
              ></path>
            </ModeToggleBtn>
          </BtnWarpper>
        )}
      </Menu>
    </Wrapper>
  );
}

export default UpperMenu;
