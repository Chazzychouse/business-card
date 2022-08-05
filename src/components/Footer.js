import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";

export default function Footer() {
  return (
    <div id="logo-wrapper">
      <a href="https://www.facebook.com/chase.cartwright.3">
        <img src={facebook} alt="facebook" id="facebook" />
      </a>
      <a href="https://www.youtube.com/channel/UCZqUuli_95AQZcdNHABbSIw">
        <img src={youtube} alt="youtube" id="youtube" />
      </a>
    </div>
  );
}
