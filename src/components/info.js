import headshot from "../images/headshot.png";

export default function Info() {
  return (
    <div id="headshot-wrapper">
      <img src={headshot} alt="a" id="headshot" />
      <h1 id="name-header">Chase Cartwright</h1>
      <p id="job-title">Full Stack Developer</p>

      <p>
        <a
          href="mailto:chasecartwright757@gmail.com?subject=subject text"
          target="_blank"
          rel="noopener noreferrer"
        >
          <a id="email">chasecartwright757@gmail.com</a>
        </a>
      </p>
    </div>
  );
}
