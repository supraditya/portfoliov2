import Link from "next/link";

export default function ProjectCard(props) {
  return (
    <div className={`min-w-sm max-w-lg mt-4 ${props.domains.includes(props.currentTab) ? '':'hidden'}`}>
      <div className="h-72 bg-customGray rounded-sm">Image Placeholder</div>
      <div className="p-4 flex justify-between items-center bg-[#eeeeee]">
        <div className="rounded-sm">
          <p className="font-primary font-semibold text-xl">{props.title}</p>
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
          <Link href={`/projects/${props.id}`}>
          <button className="font-primary text-base border rounded-sm px-3 py-2 hover:bg-black hover:text-white ease-in-out">
            View
        </button>
          </Link>
      </div>
    </div>
  );
}
