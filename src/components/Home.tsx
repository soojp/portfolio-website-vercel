import React from "react";

const Home = () => {
  return (
    <div className="p-6">
      {/* page title */}
      <h1 className="text-xl text-center text-fuchsia-800 mb-4">About Me</h1>
      {/* body */}
      <div className="grid grid-cols-1 p-3 justify-items-center md:grid-cols-2">
        <div className=" grid justify-items-center m-6">
          <img
            src="https://soojpimages.s3.us-west-1.amazonaws.com/soojee.jpg"
            alt="Soo Jee"
            className="w-40 h-50 rounded-full shadow-xl p-2 mb-6 items-center outline outline-offset-2 outline-rose-700 w-80 h-90 rounded-full"
          />
        </div>

        <div className="m-6">
          <p className="bg-white p-3 border border-black">
            Hello, my name is Soo Jee and I am a full stack engineer who loves
            to play games (mainly Valorant) and chill with my cats (Check out
            their Youtube Channel{" "}
            <span>
              <a
                href="https://www.youtube.com/channel/UC4s766tDAg5mBztuzUSAAgQ"
                className="underline text-purple-700 hover:text-fuchsia-600"
              >
                here
              </a>
            </span>
            ).
          </p>

          <br />

          <p className="bg-white p-3 border border-black">
            What makes me different from most developers is that I come from a
            non-traditional background; I have a bachelors in Biology and worked
            as a clinical laboratory assistant before joining a coding bootcamp.
            You can see my publication as third author in{" "}
            <span className="italic">Current Biology</span>{" "}
            <span>
              <a
                href="https://www.sciencedirect.com/science/article/pii/S0960982222011228"
                className="underline text-purple-700 hover:text-fuchsia-600"
              >
                here
              </a>
            </span>
            .
          </p>

          <br />

          <p className="bg-white p-3 border border-black">
            I have recently graduated from a coding bootcamp (Coding Dojo) and
            am now looking for a job. This site is made using React, Typescript,
            and Tailwind CSS.
          </p>

          <br />

          <p className="bg-white p-3 border border-black">
            Please reach out if you have any questions :)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
