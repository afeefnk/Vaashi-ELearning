import { React } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Typewriter from "typewriter-effect";
import Footer from "../components/Footer";

export default function Home() {
  const { user } = useUserAuth();
  function CheckUser(user) {
    if (user) {
      return true;
    }
  }

  return (
    <div className="home page">
      <div className="hero">
        <h1 className="banner-heading1">Start Learning From </h1>
        <span className="banner-heading2">The World's Best Teachers</span>

        <div className="content">
          <p>
            Start, switch, or advance your career with more than 5,000 courses,
            Professional Certificates, and degrees from world-class universities
            and companies.
          </p>
          <Typewriter
            options={{
              strings: ["Learn From Anywhere", "Learn Without Limits"],
              autoStart: true,
              loop: true,
            }}
          />
          <div className="cta">
            {CheckUser(user) ? (
              <div>
                <Link to="/courses" className="link-1">
                  Explore all courses
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/login" className="btn">
                  Login
                </Link>
                <Link to="/teacher/" className="btn">
                  Teach
                </Link>
              </div>
            )}
          </div>
        </div>
        {/* <div className="image">
          <img src="/images/hero.svg" alt="Hero-image" />
        </div> */}
      </div>
      <div className="p-2">
        <br />
        <br />
        <h2>Why choose our Platform?</h2>
        <p>
          Our platform connects you with world-renowned educators and industry
          experts to deliver high-quality learning experiences. Whether you're
          looking to advance in your career, learn a new skill, or dive deep
          into a field of interest, we offer a comprehensive range of courses to
          support your goals.
        </p>
        <br />
        <br />
        <h2>Explore a Wide Range of Courses</h2>
        <p>
          With over 5,000 courses across technology, business, science, and
          more, there's something here for everyone. We also offer Professional
          Certificates and fully accredited degrees that empower you to earn
          industry-recognized credentials online—at your own pace.
        </p>
        <br />
        <br />
        <h2>Flexible and Accessible Learning</h2>
        <p>
          Designed with flexibility in mind, our platform allows you to learn
          from anywhere, at any time. Access course materials on your preferred
          devices and learn at a pace that suits you. Join a vibrant community
          of learners and benefit from interactive content, live sessions, and
          hands-on projects.
        </p>
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}
