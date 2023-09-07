import React from 'react';
import '../Css/about-us.css';
function AboutUs() {
  return (
    <>
      <div className="container  flex flex-col">
        <div className="content">
          <div className="content-item">
            <h1 className="font-medium text-4xl my-2">About Us</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              quod laborum esse aliquam nemo adipisci sed excepturi fuga officia
              maxime? Fugiat consectetur saepe a cupiditate adipisci asperiores
              provident, quis at. Explicabo eum deleniti accusantium temporibus
              a sunt itaque odio, architecto minus harum vitae, exercitationem
              repellendus iure quod illo? Porro unde, consequatur animi
              voluptatem ipsa quaerat voluptatibus dolores ullam. Sed repellat
              saepe adipisci sunt voluptas itaque consequuntur reprehenderit
              quam veritatis quod a asperiores odio, praesentium totam nisi?
              Voluptatibus dolor reprehenderit similique?
            </p>
            <p>
              Etiam dapibus massa ac tellus consequat rutrum. Nullam eu diam vel
              metus efficitur placerat. Integer in urna id ligula hendrerit
              suscipit vitae ac felis. Integer nec ex nec lorem condimentum
              sollicitudin id ac purus. Vestibulum elementum euismod dui vitae
              pulvinar. Aenean vestibulum nunc id ex lacinia rhoncus.
            </p>
          </div>
          <div className="picture"></div>
        </div>
      </div>
      {/* <!-- Our Team section --> */}
      <div className="main-team-section">
        <h1 className="main-team-heading title-0">Our team</h1>
        <div className="core-member member-box my-3">
          <div className="members">
            <div className="core-member-images photos"></div>

            <span className="name">Lorem.</span>
            <span className="designation">Lorem, ipsum.</span>
          </div>
          <div className="members">
            <div className="core-member-images photos"></div>
            <span className="name">Lorem.</span>
            <span className="designation">Lorem, ipsum.</span>
          </div>
          <div className="members">
            <div className="core-member-images photos"></div>
            <span className="name">Lorem.</span>
            <span className="designation">Lorem, ipsum.</span>
          </div>
          <div className="members">
            <div className="core-member-images photos"></div>
            <span className="name">Lorem.</span>
            <span className="designation">Lorem, ipsum.</span>
          </div>
          <div className="members">
            <div className="core-member-images photos"></div>
            <span className="name">Lorem.</span>
            <span className="designation">Lorem, ipsum.</span>
          </div>
        </div>

        {/*   Pilars sections  */}
        <h1 className="our-Pillers title-0">Our Pillars</h1>
        {/*  Video Editors   */}

        <h2 className="video-editors title-1">Video Editing team</h2>
        <div className="pillar-member member-box">
          <div className="members">
            <div className="video-editors-image photos"></div>

            <span className="name">Lorem.</span>
            <span className="designation">Lorem, ipsum.</span>
          </div>
          <div className="members">
            <div className="video-editors-image photos"></div>
            <span className="name">Lorem.</span>
            <span className="designation">Lorem, ipsum.</span>
          </div>
          <div className="members">
            <div className="video-editors-image photos"></div>
            <span className="name">Lorem.</span>
            <span className="designation">Lorem, ipsum.</span>
          </div>
          <div className="members">
            <div className="video-editors-image photos"></div>
            <span className="name">Lorem.</span>
            <span className="designation">Lorem, ipsum.</span>
          </div>
          <div className="members">
            <div className="video-editors-image photos"></div>
            <span className="name">Lorem.</span>
            <span className="designation">Lorem, ipsum.</span>
          </div>
        </div>

        {/*   <!-- Graphic designers section --> */}
        <h2 className="Graphic-designers title-1">Graphic Designers</h2>
        <div className="Graphic-member member-box">
          <div className="graphic">
            <div className="graphic-members photos"></div>

            <span className="name">Lorem.</span>
            <span className="designation">Lorem, ipsum.</span>
          </div>
          <div className="graphic">
            <div className="graphic-members photos"></div>
            <span className="name">Lorem.</span>
            <span className="designation">Lorem, ipsum.</span>
          </div>
          <div className="graphic">
            <div className="graphic-members photos"></div>
            <span className="name">Lorem.</span>
            <span className="designation">Lorem, ipsum.</span>
          </div>
          <div className="graphic">
            <div className="graphic-members photos"></div>
            <span className="name">Lorem.</span>
            <span className="designation">Lorem, ipsum.</span>
          </div>
          <div className="graphic">
            <div className="graphic-members photos"></div>
            <span className="name">Lorem.</span>
            <span className="designation">Lorem, ipsum.</span>
          </div>
          <div className="graphic">
            <div className="graphic-members photos"></div>

            <span className="name">Lorem.</span>
            <span className="designation">Lorem, ipsum.</span>
          </div>
        </div>
        {/*  <!-- Website Developers --> */}
        <h2 className="Web-devs title-1">Website Developers</h2>
        <div className="web-dev-member member-box py-4">
          <div className="developers">
            <div className="web-developers-pictures photos"></div>

            <span className="name">Lorem.</span>
            <span className="designation">Lorem, ipsum.</span>
          </div>
          <div className="developers">
            <div className="web-developers-pictures photos"></div>
            <span className="name">Lorem.</span>
            <span className="designation">Lorem, ipsum.</span>
          </div>
          <div className="developers">
            <div className="web-developers-pictures photos"></div>
            <span className="name">Lorem.</span>
            <span className="designation">Lorem, ipsum.</span>
          </div>
          <div className="developers">
            <div className="web-developers-pictures photos"></div>
            <span className="name">Lorem.</span>
            <span className="designation">Lorem, ipsum.</span>
          </div>
          <div className="developers">
            <div className="web-developers-pictures photos"></div>
            <span className="name">Lorem.</span>
            <span className="designation">Lorem, ipsum.</span>
          </div>
          <div className="developers">
            <div className="web-developers-pictures photos"></div>
            <span className="name">Lorem.</span>
            <span className="designation">Lorem, ipsum.</span>
          </div>
          <div className="developers">
            <div className="web-developers-pictures photos"></div>
            <span className="name">Lorem.</span>
            <span className="designation">Lorem, ipsum.</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
