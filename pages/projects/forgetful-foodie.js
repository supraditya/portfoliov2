import Header from "../../components/ProjectPage/Header";
import Wrapper from "../../components/ProjectPage/Wrapper";
import Image from "next/image";
import placeholder from "../../public/placeholder.png";
import Highlights from "../../components/ProjectPage/Highlights";

export default function forgetfulFoodie() {
  return (
    // TODO: Make ProjectPage components for every type of content arrangement as depicted on figma
    <Wrapper>
      <Header
        title="Forgetful Foodie"
        subtitle="Always know what you have in the kitchen, and what dishes you can make using them."
      />
      <div className="py-4 my-4 rounded-md text-center bg-blue-300">
        <Image
          src={placeholder}
          alt="forgetful foodie header"
          className="w-2/5 mx-auto mt-5"
        ></Image>
      </div>
      <Highlights
        summary="Forgetful Foodie was ideated and designed as part of our coursework with the Master of Science in Information (MSI) program at the University of Michigan, for the course “Introduction to Interaction Design”. I collaborated with two fellow graduate students to ideate and design a smartphone application to reduce food wastage by streamlining pantry and inventory management for the average household owner."
        roles={["UX Designer", "UX Researcher"]}
        team={["Saumya Bora", "Coulton Theuer"]}
        timeline="Aug 2022 - Dec 2022"
        tools={["Figma", "Adobe Illustrator"]}
      />
    </Wrapper>
  );
}
