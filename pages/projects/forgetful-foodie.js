import Header from "../../components/ProjectPage/Header";
import Wrapper from "../../components/ProjectPage/Wrapper";
import Image from "next/image";
import placeholder from '../../public/placeholder.png'

export default function forgetfulFoodie() {
  return (
    // TODO: Make ProjectPage components for every type of content arrangement as depicted on figma
    <Wrapper>
      <Header title="Forgetful Foodie" subtitle="Always know what you have in the kitchen, and what dishes you can make using them." />
      <div className="py-4 my-4 rounded-md text-center bg-blue-300">
      <Image src={placeholder} alt="forgetful foodie header" className="w-2/5 mx-auto mt-5"></Image>
      </div>
    </Wrapper>
  );
}
