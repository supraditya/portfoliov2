import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";
import me from "../public/me.jpg";
import verticalLine from "../public/line.svg";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Aditya Menon</title>
        <meta
          name="description"
          content="I am a UX Designer and Web Developer, and this is my portfolio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="overflow-x-hidden">
        <Navbar />
        <Image
          src={verticalLine}
          alt="dotted line vertical"
          className="absolute right-[23rem] h-2/5 top-0"
        ></Image>
        <Image
          src={verticalLine}
          alt="dotted line horizontal"
          className="absolute rotate-90 top-36 right-0"
        ></Image>
        <div className="px-32 flex justify-between items-start h-[83.5vh] flex-wrap ">
          <div className="w-2/5 h-full">
            <p className="text-7xl font-primary mb-4">About Me</p>
            <p className="text-xl font-secondary text-justify">
              Occaecat dolore commodo ea mollit culpa. Proident Lorem
              consectetur officia consequat id. Qui aliqua irure est elit cillum
              occaecat. Ad cillum veniam deserunt deserunt voluptate commodo
              enim velit amet officia. Officia voluptate fugiat nulla veniam
              pariatur minim excepteur aute eiusmod qui proident cupidatat
              exercitation. Magna aliqua deserunt eiusmod voluptate est est.Ut
              amet ad quis sunt voluptate dolore quis nisi aute aute veniam
              deserunt fugiat. Anim occaecat sit quis minim. Lorem culpa
              reprehenderit aliqua irure mollit labore ullamco minim voluptate
              occaecat pariatur. Ea occaecat minim id eu quis aliqua esse
              laborum nulla do.
            </p>
          </div>
          <div className="relative w-2/5 h-full">
            <div className="border border-figmaBlue bg-white h-3 w-3 absolute -ml-1 -mt-1 z-20"></div>
            <div className="border border-figmaBlue bg-white h-3 w-3 absolute -mr-1 -mt-1 z-20 right-0"></div>
            <Image
              src={me}
              alt="My profile photo"
              className="border-2 border-figmaBlue z-10 bg-white w-full"
            ></Image>
            <div className="border border-figmaBlue bg-white h-3 w-3 absolute -mr-1 -mt-1 z-20 right-0"></div>
            <div className="border border-figmaBlue bg-white h-3 w-3 absolute -ml-1 -mt-1 z-20"></div>
            <div className="bg-figmaBlue rounded-md py-0.5 px-2 text-white absolute z-20 text-sm left-48 ml-1.5 mt-2 mx-auto">
              That's me!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
