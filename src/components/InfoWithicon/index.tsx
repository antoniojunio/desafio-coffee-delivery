import { ReactNode } from "react";
import { Iconontainer, InfoWitchIconContainer } from "./styles";

interface InfoWithIconProps {
  icon: ReactNode;
  text: string | ReactNode;
  iconBg: string;
}

export function InfoWitchIcon({ icon, text, iconBg }: InfoWithIconProps) {
  return(
    <InfoWitchIconContainer>
      <Iconontainer iconBg={iconBg}>{icon}</Iconontainer>
      {typeof text === "string" ? <p>{text}</p> : text}
    </InfoWitchIconContainer>
  )
}