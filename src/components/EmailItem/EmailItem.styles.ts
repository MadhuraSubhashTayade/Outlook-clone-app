import styled from "styled-components";

type StyledEmailItemProps = {
  read: boolean;
  tabIndex: any; // used to make 'focus' work
};

export const StyledEmailitemContainer = styled.div<StyledEmailItemProps>`
  border: 1px solid #cfd2dc;
  background-color: ${(props) => (props.read ? "#f4f5f9" : "none")};
  padding: 1.4rem 2rem;
  font-size: 1.6rem;
  display: flex;
  border-radius: 1rem;
  :focus {
    border-color: #e54065;
  }

  .email-icon {
    border-radius: 50%;
    background-color: #e54065;
    color: #f2f2f2;
    align-self: flex-start;
    padding: 1rem 1.6rem;
    font-size: 2.4rem;
    margin-right: 2rem;
    /* font-weight: bold; */
  }
  .email-content {
    cursor: pointer;
  }
  .email-content-from {
  }
  .email-content-subject {
    margin-top: 0.4rem;
  }
  .email-content-desc {
    margin-top: 1rem;
  }
  .email-container-right {
    margin-top: 0.8rem;
    display: flex;
  }
  .email-content-date {
  }
  .btn-fav {
    border: none;
    color: #e54065;
    background-color: none;
    cursor: pointer;
    margin-left: 2rem;
    font-weight: bold;
  }
`;
