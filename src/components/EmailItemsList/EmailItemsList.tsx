import React, { FC, ReactElement } from "react";
import { EmailItemType } from "../../types/EmailTypes";
import EmailItem from "../EmailItem/EmailItem";
import { StyledEmailitemsContainer } from "./EmailItemsList.styles";

export interface EmailItemsProps {
  items: EmailItemType[];
  emailOpenClickHandler: (id: string) => void;
  readList: string[];
  favList: string[];
}

const EmailItemsList: FC<EmailItemsProps> = ({
  items,
  emailOpenClickHandler,
  readList,
  favList,
}: EmailItemsProps): ReactElement => {
  return (
    <StyledEmailitemsContainer>
      {items.map((item) => (
        <EmailItem
          key={item.id}
          item={item}
          emailOpenClickHandler={emailOpenClickHandler}
          readList={readList}
          favList={favList}
        />
      ))}
    </StyledEmailitemsContainer>
  );
};

export default EmailItemsList;
