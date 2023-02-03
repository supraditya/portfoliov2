export default function ProjectCard(props) {
  return (
    <div className={`w-[31%] min-w-[300px] mr-6 mt-4 ${props.domains.includes(props.currentTab) ? '':'hidden'}`}>
      <div className="h-72 bg-customGray rounded-sm">Image Placeholder</div>
      <div className="p-4 flex justify-between items-center bg-[#eeeeee]">
        <div className="rounded-sm">
          <p className="font-primary font-semibold text-2xl">Project Title</p>
          <div className="font-secondary text-base">
            {
                props.domains.slice(1).map((domain, i) => {
                    return(
                        i!==props.domains.length-2 ?(
                            <span key={i}>{domain}, </span>
                        ):(
                            <span key={i}>{domain}</span>
                        )
                    )
                })
            }
          </div>
        </div>
        <button className="font-primary text-base border rounded-sm px-3 py-2 hover:bg-black hover:text-white ease-in-out">
            View
        </button>
      </div>
    </div>
  );
}
