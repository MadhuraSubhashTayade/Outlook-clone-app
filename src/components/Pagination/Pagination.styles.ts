import styled from "styled-components";

type StyledPaginationProps = {
  active: number;
};

export const StyledPaginationContainer = styled.div<StyledPaginationProps>`
  position: sticky;
  font-size: 3.6rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;

  span {
    border-radius: 50%;
    padding: 1rem 1.6rem;
    font-size: 2.4rem;
  }
  .page-1 {
    background-color: ${(props) => (props.active === 1 ? "#e54065" : "none")};
    color: ${(props) => (props.active === 1 ? "#f2f2f2" : "#636363")};
  }
  .page-2 {
    background-color: ${(props) => (props.active === 2 ? "#e54065" : "none")};
    color: ${(props) => (props.active === 2 ? "#f2f2f2" : "#636363")};
  }
`;
