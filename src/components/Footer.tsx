import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab, faLinkedin);
library.add(fab, faGithub);

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 bg-red-300 min-w-full p-1 flex justify-center items-center">
      <div className="mr-5">
        <p>
          Click on the LinkedIn and GitHub logos to checkout my profiles on the
          corresponding sites
        </p>
      </div>
      <div className="flex">
        <a href="http://linkedin.com/in/soojeepark/" className="mr-4">
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
        </a>
        <a href="http://github.com/soojp">
          <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
