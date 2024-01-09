import { HeaderContainer } from "./styles";
import logoSrc from "../../assets/logo-header.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoSrc} alt="" />
    </HeaderContainer>
  )
}