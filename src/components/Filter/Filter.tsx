import React, { FC, ReactElement } from "react";
import { StyledFilterContainer } from "./Filter.styles";

interface FilterProps {
  readClickHandler: () => void;
  unreadClickHandler: () => void;
  favClickHandler: () => void;
  unreadFilter: boolean;
  readFilter: boolean;
  favFilter: boolean;
}

const Filter: FC<FilterProps> = ({
  readClickHandler,
  unreadClickHandler,
  favClickHandler,
  unreadFilter,
  readFilter,
  favFilter,
}: FilterProps): ReactElement => {
  return (
    <StyledFilterContainer
      read={readFilter}
      unread={unreadFilter}
      fav={favFilter}
    >
      <span className="filter-title">Filter By:</span>
      <span className="filter-unread" onClick={unreadClickHandler}>
        Unread
      </span>
      <span className="filter-read" onClick={readClickHandler}>
        Read
      </span>
      <span className="filter-favs" onClick={favClickHandler}>
        Favorites
      </span>
    </StyledFilterContainer>
  );
};

export default Filter;
