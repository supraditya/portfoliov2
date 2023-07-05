export default function Header({title, subtitle}){
    return(
        <>
            <p className="text-7xl font-primary mb-4">{title}</p>
            <p className="text-3xl font-secondary text-subtitleGray font-light">{subtitle}</p>
        </>
    )
};