import React, { FC, ReactElement, useState } from "react";
import { StyledPaginationContainer } from "./Pagination.styles";

type PaginationProps = {
  handlePageClick: (pageNo: number) => void;
};

const Pagination: FC<PaginationProps> = ({
  handlePageClick,
}: PaginationProps): ReactElement => {
  const [activePage, setActivePage] = useState<number>(1);
  return (
    <StyledPaginationContainer active={activePage}>
      <span
        className="page-1"
        onClick={() => {
          setActivePage(1);
          handlePageClick(1);
        }}
      >
        1
      </span>
      <span
        className="page-2"
        onClick={() => {
          setActivePage(2);
          handlePageClick(2);
        }}
      >
        2
      </span>
    </StyledPaginationContainer>
  );
};

export default Pagination;
