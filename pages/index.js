import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import verticalLine from '../public/line.svg';

export default function Home() {
  const prototypeBox=useRef();
  const [dimensions, setdimensions] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    if(prototypeBox.current)
    {
      setdimensions({
        width: prototypeBox.current.offsetWidth,
        height: prototypeBox.current.offsetHeight,
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Aditya Menon</title>
        <meta name="description" content="I am a UX Designer and Web Developer, and this is my portfolio." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className="relative">
        <Navbar />
        <Image src={verticalLine} alt="dotted line vertical" className="absolute left-[21rem] h-3/5 top-0"></Image>
        <Image src={verticalLine} alt="dotted line horizontal" className="absolute rotate-90 top-40"></Image>
        <div className="px-32 h-[83.5vh] flex flex-col pt-2 items-start relative">
          <p className="font-secondary text-4xl leading-snug ml-1">
            I realise ideas
          </p>
          <p className="font-secondary text-7xl leading-snug">From</p>
          <div className="leading-snug">
            <span className="font-writing text-7xl">Pen and Paper</span>
            <span className="font-secondary text-7xl">&nbsp;to</span>
          </div>
          <div className="p-2 relative">
            <div className="border border-figmaBlue bg-white h-3 w-3 absolute -ml-1 -mt-1 z-20"></div>
            <div className="border border-figmaBlue bg-white h-3 w-3 absolute mr-1 -mt-1 z-20 right-0"></div>
            <p
              ref={prototypeBox}
              className="font-primary text-7xl leading-snug border-2 border-figmaBlue z-10 bg-white"
            >
              Prototype
            </p>
            <div className="border border-figmaBlue bg-white h-3 w-3 absolute mr-1 -mt-1 z-20 right-0"></div>
            <div className="border border-figmaBlue bg-white h-3 w-3 absolute -ml-1 -mt-1 z-20"></div>
            <div className="bg-figmaBlue rounded-md py-0.5 px-2 text-white absolute z-20 top-full text-sm left-40 ml-1.5 mx-auto">
              {dimensions.width} x {dimensions.height}
            </div>
          </div>
          <p className="font-secondary text-7xl leading-tight">and</p>
          <p className="font-coding text-7xl leading-tight pb-3 blink">
            &lt;p&gt;Product&lt;/p&gt;
          </p>
        </div>
      </main>
    </>
  );
}
