import React, { FC, ReactElement } from "react";
import { StyledEmailIconContainer } from "./EmailIcon.styles";

interface EmailIconProps {
  nameAvatar: string;
}

const EmailIcon: FC<EmailIconProps> = ({
  nameAvatar,
}: EmailIconProps): ReactElement => {
  return (
    <StyledEmailIconContainer>
      {nameAvatar.toUpperCase()}
    </StyledEmailIconContainer>
  );
};

export default EmailIcon;
