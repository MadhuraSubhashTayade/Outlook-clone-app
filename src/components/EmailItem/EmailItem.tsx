import React, { FC, ReactElement, useEffect, useState } from "react";
import { EmailItemType } from "../../types/EmailTypes";
import EmailIcon from "../EmailIcon/EmailIcon";
import { useLocalStorage } from "../../utils/useLocalStorage";
import { StyledEmailitemContainer } from "./EmailItem.styles";
import moment from "moment";

interface EmailItemProps {
  item: EmailItemType;
  emailOpenClickHandler: (id: string) => void;
  readList: string[];
  favList: string[];
}

export const getDate = (dateStr: string): string => {
  return moment(new Date(dateStr)).format("DD/MM/YYYY hh:mma");
};

const EmailItem: FC<EmailItemProps> = ({
  item,
  emailOpenClickHandler,
  readList,
  favList,
}: EmailItemProps): ReactElement => {
  const [emailOpened, setEmailOpened] = useState<boolean>(false);
  const [emailFavMarked, setEmailFavMarked] = useState<boolean>(false);

  useEffect(() => {
    setEmailOpened(readList?.includes(item.id));
    setEmailFavMarked(favList?.includes(item.id));
  }, [readList, favList, item.id]);

  const capitalizeFirstLetter = (str: string): string => {
    const arr = str.split("");
    console.log(arr);
    arr[0] = arr[0].replace(arr[0], arr[0].toUpperCase());
    return arr.join("");
  };
  const truncateDesc = (desc: string): string => {
    return desc?.length > 44 ? desc.substring(0, 43) + "..." : desc;
  };

  return (
    <StyledEmailitemContainer read={emailOpened} tabIndex="1">
      <EmailIcon nameAvatar={item.from.name[0].toUpperCase()} />
      <div
        className="email-content"
        onClick={() => {
          emailOpenClickHandler(item.id);
        }}
      >
        <p className="email-content-from">
          From:{" "}
          <b>
            {capitalizeFirstLetter(item.from.name)} {` <${item.from.email}>`}
          </b>
        </p>
        <p className="email-content-subject">
          Subject: <b>{capitalizeFirstLetter(item.subject)}</b>
        </p>
        <p className="email-content-desc">
          {truncateDesc(item.short_description)}
        </p>
        <div className="email-container-right">
          <p className="email-content-date">{getDate(item.date)}</p>
          {emailFavMarked ? <button className="btn-fav">Favorite</button> : ""}
        </div>
      </div>
    </StyledEmailitemContainer>
  );
};

export default EmailItem;
