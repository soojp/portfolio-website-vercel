import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl text-center text-fuchsia-800">My Projects</h1>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2">
        <Card
          image="https://soojpimages.s3.us-west-1.amazonaws.com/expenseCalculator.png"
          link="https://github.com/soojp/Expense-Calculator.git"
          title="Expense Calculator"
          description="An expense calculator with full CRUD function where you can add items per a category by user. You can see the total amount spent per category as well as total amount spent between all the categories. The details page shows you all the items in the category as well as the sum."
          tags={[
            "React",
            "MongoDB",
            "Mongoose",
            "Express",
            "Node.js",
            "JavaScript",
            "HTML",
            "CSS",
            "Bootstrap",
            "Socket.io",
            "Bcrypt",
          ]}
        />
        <Card
          image="https://soojpimages.s3.us-west-1.amazonaws.com/just.eat.png"
          link="https://github.com/soojp/Just.eat.git"
          title="Just.eat"
          description="An app with full CRUD function that can randomly choose a cuisine from a preference form. The goal is to be able to feed the information from the form to an API in order to select a random restaurant using cuisine type, zipcode, and radius. I did try using the Yelp-fusion API, however, there was a CORS conflict. I am still searching for a suitable API in order to continue this project."
          tags={[
            "React",
            "MongoDB",
            "Mongoose",
            "Express",
            "Node.js",
            "JavaScript",
            "HTML",
            "CSS",
            "Balsamiq",
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;
