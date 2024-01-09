import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/Walber2903.png" />

      <ProfileDetails>
        <header>
          <h1>Walber Menezes</h1>
          <ExternalLink text="Github" href="#" />
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. 
          Eu viverra massa quam dignissim aenean malesuada suscipit. 
          Nunc, volutpat pulvinar vel mass.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            Walber2903
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            WM Software
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            11 followers
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}