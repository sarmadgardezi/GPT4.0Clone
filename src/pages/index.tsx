import Head from "next/head";
import React, { useEffect } from "react";
import { useOpenAI } from "@/context/OpenAIProvider";
import Features from "@/components/homepagecomp/hero/features";
import Hero from "@/components/homepagecomp/hero/hero";
import Points from "@/components/homepagecomp/points/points";
import { Faqs } from "@/components/homepagecomp/faqs/faqs";
import BlogHome from "@/components/homepagecomp/blog/bloghome";
import Footer from "@/components/layout/footer/footer";
import Count from "@/components/homepagecomp/counts";

export default function index () {

  return (
    <React.Fragment>
      <Head>
        <title>OpenAI</title>
        <meta name="description" content="A clone of OpenAI playground." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen relative">

      <Hero />
    <Features />
    <Count/>
    <Points />
    <Faqs />
   
    <Footer/>
      </div>
    </React.Fragment>
  );
}
