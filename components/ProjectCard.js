import ListRenderer from "./ListRenderer";

export default function ProjectCard(props) {
  return (
    <div className={`min-w-sm w-full md:max-w-lg mt-4 ${props.domains.includes(props.currentTab) ? '':'hidden'}`}>
      <div className="h-72 bg-footerGray rounded-sm">Image Placeholder</div>
      <div className="p-4 flex justify-between items-center bg-[#eeeeee]">
        <div className="rounded-sm">
          <p className="font-primary font-semibold text-2xl">Project Title</p>
          <div className="font-secondary text-base">
          <ListRenderer list={props.domains} removeFirst={true}/>
          </div>
        </div>
        <button className="font-primary text-base border border-black rounded-sm px-3 py-2 hover:bg-black hover:text-white ease-in-out">
            View
        </button>
      </div>
    </div>
  );
}
