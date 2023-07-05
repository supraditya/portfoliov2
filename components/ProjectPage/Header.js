import Link from "next/link"

export default function Header({title, subtitle}){
    return(
        <>
            <Link href="/projects" className="text-xl font-primary ml-0.5 relative z-20 hover:underline">Projects /</Link>
            <p className="text-7xl font-primary mb-4 relative z-10">{title}</p>
            <p className="text-3xl font-secondary text-subtitleGray font-light">{subtitle}</p>
        </>
    )
};