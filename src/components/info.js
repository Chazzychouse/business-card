import headshot from "../images/headshot.png"

export default function Info() {
    return (
        <div id="headshot-wrapper">
            <img src={headshot} alt="a" id="headshot" />
            <h1 id="name-header">Chase Cartwright</h1>
            <p id="job-title">Full Stack Developer</p>
            <small id="website">www.chasecartwright.com</small>
            <p><button className="button" id="email">Email</button><button className="button" id="linkedin">LinkedIn</button></p>
        </div>
    );
}