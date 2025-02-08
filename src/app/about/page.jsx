import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <p className="text-3xl text-center font-bold">AboutPage</p>
      <li className="list-none">
        Go to{" "}
        <Link href="/about/address" className="underline">
          Address Page
        </Link>
      </li>
    </div>
  );
};

export default AboutPage;
