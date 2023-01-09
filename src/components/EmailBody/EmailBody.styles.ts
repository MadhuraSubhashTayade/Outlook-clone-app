import styled from "styled-components";

type StyledBodyProps = {
  openView: boolean;
};

export const StyledEmailBodyContainer = styled.div<StyledBodyProps>`
  flex: 8;
  font-size: 1.6rem;
  padding: 2rem;
  border: 1px solid #cfd2dc;
  border-radius: 1rem;
  display: ${(props) => (props.openView ? "grid" : "none")};
  grid-template-columns: 0.6fr 5fr 2fr;
  grid-template-rows: 0.5fr 8fr;
  row-gap: 1rem;
  justify-items: start;
  height: 100vh;

  .icon {
    /* justify-self: end;
    align-self: end; */
  }
  .body-text {
    grid-column: 2/-1;
    p {
      margin-bottom: 1.8rem;
    }
  }
  .body-header {
    display: flex;
  }
  .body-header-center {
  }
  .body-subject {
    font-size: 2.4rem;
    font-weight: bold;
    margin-bottom: 1.8rem;
  }
  .body-date {
    margin-bottom: 1.8rem;
  }
  .mark-fav-btn {
    background-color: #e54065;
    color: #f2f2f2;
    border-radius: 5.2rem;
    font-weight: bold;
    padding: 0.8rem 2rem;
    border: none;
    cursor: pointer;
    margin-left: 8rem;
  }
  .body-content {
  }
`;
