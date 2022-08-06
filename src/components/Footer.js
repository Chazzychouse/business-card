import facebook from "../images/facebook.png";
import { SocialIcon } from "react-social-icons";
import youtube from "../images/youtube.png";

export default function Footer() {
  return (
    <div>
      <h3 id="social-header">Socials</h3>
      <div id="logo-wrapper">
        <SocialIcon
          url="https://github.com/Chazzychouse"
          target="_blank"
          id="github"
        />

        <SocialIcon
          url="https://www.linkedin.com/in/chase-cartwright-98963823a/"
          target="_blank"
          id="linkedin"
        />

        <SocialIcon
          url="https://www.facebook.com/chase.cartwright.3"
          target="_blank"
          id="facebook"
        />

        <SocialIcon
          url="https://www.youtube.com/channel/UCZqUuli_95AQZcdNHABbSIw"
          target="_blank"
          id="youtube"
        />
      </div>
    </div>
  );
}
