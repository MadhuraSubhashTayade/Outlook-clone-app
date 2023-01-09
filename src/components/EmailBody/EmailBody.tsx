import React, { FC, ReactElement } from "react";
import { StyledEmailBodyContainer } from "./EmailBody.styles";
import EmailIcon from "../EmailIcon/EmailIcon";
import { EmailBodyType, EmailItemType } from "../../types/EmailTypes";
import { getDate } from "../EmailItem/EmailItem";

interface EmailBodyProps {
  openView: boolean;
  email: EmailItemType;
  openedEmail: EmailBodyType;
  markAsFav: (id: string) => void;
}

const EmailBody: FC<EmailBodyProps> = ({
  openView,
  email,
  openedEmail,
  markAsFav,
}: EmailBodyProps): ReactElement => {
  if (!openedEmail) return <></>;
  const { date, subject, id, from } = email;
  return (
    <StyledEmailBodyContainer openView={openView}>
      <EmailIcon nameAvatar={from.name[0]} />{" "}
      <div>
        <p className="body-subject">{subject}</p>
        <p className="body-date">{getDate(date)}</p>
      </div>
      <div>
        <button className="mark-fav-btn" onClick={() => markAsFav(id)}>
          Mark as favorite
        </button>
      </div>
      <div
        className="body-text"
        dangerouslySetInnerHTML={{ __html: openedEmail.body }}
      />
    </StyledEmailBodyContainer>
  );
};

export default EmailBody;
