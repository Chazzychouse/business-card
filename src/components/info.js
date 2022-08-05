import headshot from "../images/headshot.png";

export default function Info() {
  return (
    <div id="headshot-wrapper">
      <img src={headshot} alt="a" id="headshot" />
      <h1 id="name-header">Chase Cartwright</h1>
      <p id="job-title">Full Stack Developer</p>
      <a
        href="https://github.com/Chazzychouse"
        target="_blank"
        rel="noopener noreferrer"
      >
        <small id="website">www.github.com/chazzychouse</small>
      </a>

      <p>
        <a
          href="mailto:chasecartwright757@gmail.com?subject=subject text"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button" id="email">
            Email
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/chase-cartwright-98963823a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button" id="linkedin">
            LinkedIn
          </button>
        </a>
      </p>
    </div>
  );
}
