import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaEllipsisV } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ReactQueryDevtools } from "react-query/devtools";
import GridCss from "../components/movie/MovieLayout";

const Wrapper = styled.div`
  font-family: cursive;
`;

function ResponsiveLayout() {
  return (
    <Wrapper>
      <GridCss />
      <ReactQueryDevtools initialIsOpen />
    </Wrapper>
  );
}

export default ResponsiveLayout;
