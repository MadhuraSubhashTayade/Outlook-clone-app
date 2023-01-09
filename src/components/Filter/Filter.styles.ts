import styled from "styled-components";

type StyledFilterProps = {
  read: boolean;
  unread: boolean;
  fav: boolean;
};

export const StyledFilterContainer = styled.div<StyledFilterProps>`
  font-size: 1.8rem;
  display: flex;
  gap: 0.2rem;
  align-items: center;
  cursor: pointer;

  .filter-title {
    margin-right: 1rem;
  }
  .filter-unread {
    /* background-color: #e1e4ea; */
    background-color: ${(props) => (props.unread ? "#e1e4ea" : "none")};
    border-radius: 5.2rem;
    padding: 0.4rem 1.8rem;
  }
  .filter-read {
    /* background-color: #e1e4ea; */
    background-color: ${(props) => (props.read ? "#e1e4ea" : "none")};
    border-radius: 5.2rem;
    padding: 0.4rem 1.8rem;
  }
  .filter-favs {
    /* background-color: #e1e4ea; */
    background-color: ${(props) => (props.fav ? "#e1e4ea" : "none")};
    border-radius: 5.2rem;
    padding: 0.4rem 1.8rem;
  }
`;
