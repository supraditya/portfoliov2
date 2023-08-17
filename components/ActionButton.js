import Link from "next/link";

export default function ActionButton({ link, icon, label }) {
  return (
    <Link href={link} target="_blank" alt={`${link}-button`}>
      <button className="font-primary inline-flex items-center text-base border border-black rounded-sm px-3 max-md:mb-2 mr-3 py-2 hover:bg-black hover:text-white ease-in-out">
        <span className="text-lg sm:text-base">{icon}</span>&nbsp;{label}
      </button>
    </Link>
  );
}
