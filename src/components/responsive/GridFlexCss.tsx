import { motion } from "framer-motion";
import styled from "styled-components";

export const GridWrapper = styled.div`
  background-color: rgb(0, 0, 0, 0.9);
  color: white;
  width: 100%;
  min-width: fit-content;
  height: 100%;
  min-height: 100vh;
  padding-top: 100px;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(max-content, 6.25rem)) 1fr;
  grid-template-rows: max-content;
  gap: 10px;
`;

export const FullWidthSection = styled.section`
  background-color: rgb(0, 0, 0, 1);
  grid-column: 1 / span 14;
`;

export const MaxWidthSection = styled.div`
  background-color: rgb(0, 0, 0, 0.5);
  grid-column: 2 / span 12;
`;

export const Row = styled.div`
  span {
    display: block;
    margin: 10px;
    font-weight: bold;
  }
`;

export interface IGridBox {
  columns: number;
  rows: number;
  itemMinHeight: number;
}
export const GridBox = styled(motion.div)<IGridBox>`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-template-rows: repeat(
    ${(props) => props.rows},
    ${(props) => props.itemMinHeight}px
  );
  gap: calc(1rem * 0.4);

  @media ${(props) => props.theme.breakpoints.r1280} {
    grid-template-columns: repeat(5, 1fr);
  }
  @media ${(props) => props.theme.breakpoints.r1080} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${(props) => props.theme.breakpoints.r960} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${(props) => props.theme.breakpoints.r720} {
  }
  @media ${(props) => props.theme.breakpoints.r640} {
  }
  @media ${(props) => props.theme.breakpoints.r540} {
    grid-template-columns: repeat(2, 1fr);
    min-width: 500px;
  }
  @media ${(props) => props.theme.breakpoints.r360} {
  }

  div {
    min-height: ${(props) => props.itemMinHeight}px;
  }
`;

export interface IGridItem {
  startCol?: number;
  spanCol?: number;
  startRow?: number;
  spanRow?: number;
  bgPhoto?: string;
}

export const GridItem = styled(motion.div)<IGridItem>`
  border: 1px solid rgba(255, 255, 255, 0.6);
  grid-column: ${(props) => props.startCol} / span ${(props) => props.spanCol};
  grid-row: ${(props) => (props.startRow ? props.startRow : 0)} / span
    ${(props) => (props.spanRow ? props.spanRow : 0)};
  color: black;
  background-color: rgb(255, 255, 255, 0.7);
  margin: calc(1rem * 0.2);

  @media ${(props) => props.theme.breakpoints.r720} {
    grid-column: span 1;
    grid-row: auto;
  }
`;

export const FlexBox = styled.div`
  border: 2px solid white;
  background-color: rgb(0, 0, 0, 0.5);
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`;
export const FlexItem = styled.div`
  border: 1px solid blue;
  background-color: rgb(0, 0, 0, 0.8);
  flex: 23%;
  padding: 10px;
  margin: calc(1rem * 0.2);
  @media ${(props) => props.theme.breakpoints.r720} {
    flex: 48%;
    max-width: 48%;
  }
  @media ${(props) => props.theme.breakpoints.r540} {
    flex: 100%;
    max-width: 100%;
  }
`;

const RedeclareGridItem = styled(GridItem)`
  @media ${(props) => props.theme.breakpoints.r1280} {
  }
`;
export default function GridFlexCss() {
  return (
    <GridWrapper style={{ backgroundColor: "#00d2d3" }}>
      <FullWidthSection style={{ backgroundColor: "##ff6b6b" }}>
        FullWidthSection = NavBar
      </FullWidthSection>
      <MaxWidthSection style={{ backgroundColor: "##1545e4" }}>
        MaxWidthSection = Contents
        <Row>
          <span>GridBox</span>
          <GridBox columns={4} rows={4} itemMinHeight={200}>
            <GridItem startCol={1} spanCol={2} startRow={1} spanRow={2}>
              GridItem1
            </GridItem>
            <GridItem startCol={3} spanCol={2} startRow={0} spanRow={0}>
              GridItem2
            </GridItem>
            <GridItem startCol={1} spanCol={2} startRow={3} spanRow={1}>
              GridItem3
            </GridItem>
            <GridItem startCol={3} spanCol={2} startRow={2} spanRow={2}>
              GridItem4
            </GridItem>
            <GridItem startCol={1} spanCol={4} startRow={4} spanRow={1}>
              GridItem5
            </GridItem>
          </GridBox>
        </Row>
        <Row>
          <span>FexBox</span>
          <FlexBox>
            <FlexItem>FlexItem 1</FlexItem>
            <FlexItem>FlexItem 2</FlexItem>
            <FlexItem>FlexItem 3</FlexItem>
            <FlexItem>FlexItem 4</FlexItem>
            <FlexItem>FlexItem 5</FlexItem>
          </FlexBox>
        </Row>
      </MaxWidthSection>
    </GridWrapper>
  );
}
