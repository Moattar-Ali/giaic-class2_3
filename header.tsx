import Link from "next/link"

export default function Header(){
    return(
        <div className="header">
            
        <ul className="header-buttons">
        <Link href={"/"}>
        <li>Home</li>
        </Link>
        <Link href={"/about-us"}>
        <li>About</li>
        </Link>
        <Link href={"/contact-us"}>
        <li>Contact Us</li>
        </Link>
        <Link href={"/jobs"}>
        <li>Jobs</li>
        </Link>
        </ul>
        </div>
    )
}

//dry: dont repeat yourself-- code should not be repeated in any other file or folder.