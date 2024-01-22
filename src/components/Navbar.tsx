import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png"

export default function Navbar() {
    return (
        <header className="shadow-sm">
            <nav className="max-w-5xl m-auto px-3 py-5 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src={logo}
                        width={40}
                        height={40}
                        alt="Job Board"
                        className="rounded-lg"
                    />
                    <span className="text-xl font-bold tracking-tight">Job Board</span>
                </Link>
                <div>Element 2</div>
            </nav>
        </header>
    )
}