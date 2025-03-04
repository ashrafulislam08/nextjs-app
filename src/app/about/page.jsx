import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <h2 className="text-4xl text-center mb-3">About Page</h2>
      <section className="flex items-center gap-2">
        <div className="w-1/2 h-auto border-2 p-2 flex items-center gap-2">
          <img
            src="https://i.ibb.co.com/cST4jyGP/working-person.png"
            className=" w-1/2 mx-auto -mb-32"
          />
          <img
            src="https://i.ibb.co.com/cST4jyGP/working-person.png"
            className=" w-1/2 mx-auto"
          />
        </div>
        <div className="w-1/2 p-2">
          <h2 className="text-4xl font-bold">
            Empowering Each Other to Succeed
          </h2>
          <p className="font-normal text-xl">
            Every project we've undertaken has been a collaborative effort,
            where every person involved has left their mark. Together, we've not
            only constructed buildings but also built enduring connections that
            define our success story.
          </p>
          <button className="text-lg bg-blue-400 px-2 py-3 rounded-md text-white mt-5">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
