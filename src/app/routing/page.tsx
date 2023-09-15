'use client'
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const About = () => {
  const router = useRouter();
  const navigate = (name: any) => {
    router.push(name);
  };
  return (
    <>
      <h1>About Page</h1>
      <Link href="/routing/AboutStud">Go to About Student</Link>
      <br/>
      <Link href="/routing/aboutClg">Go to About Student</Link>
      <br/>
      <br/>

      <button onClick={() => navigate("/login")}>Go to Login</button>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </>
  );
};

export default About;
