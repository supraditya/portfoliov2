import Link from "next/link"

export default function Header({title, subtitle}){
    return(
        <>
            <Link href="/projects" className="text-md md:text-xl font-primary ml-0.5 relative z-20 hover:underline">Projects /</Link>
            <p className="text-4xl md:text-7xl font-primary mb-2 md:mb-2 relative z-10">{title}</p>
            <p className="text-lg md:text-3xl font-secondary text-subtitleGray font-light mb-2">{subtitle}</p>
        </>
    )
};