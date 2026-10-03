"use client"
import { Button } from "@/components/ui/button"
import { Heart, User, ShoppingBag, Menu, X, Search } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const navItems = [
        { label: "Novidades", href: "/#destaques" },
        { label: "Mulher", href: "/#categorias" },
        { label: "Homem", href: "/#categorias" },
        { label: "Acessórios", href: "/#categorias" },
        { label: "Beleza", href: "/#categorias" },
        { label: "Casa", href: "/#categorias" },
    ]
    return (
        <nav className=" z-50 fixed left-0 top-0 bg-(--colorNav)/90 w-full h-20 flex items-center  shadow-md">
            <div className="container px-4 max-w-[1200px] mx-auto flex gap-4">
                <div>
                    <Link href="/"><h1 className="text-(--colortitulo) font-bold text-2xl md:mr-10">Veloura</h1></Link>
                </div>
                <div className="lg:flex items-center hidden text-[15px] md:mr-10">
                    <ul className="flex gap-8">
                        {navItems.map((item) => <li key={item.label}><Link className="text-(--colorparagrafo) transition-colors hover:text-(--colortitulo)" href={item.href}>{item.label}</Link></li>)}
                    </ul>
                </div>
                <div className="hidden relative lg:flex items-center ml-auto">
                    <Search className="absolute left-3 text-gray-400 w-4 h-4 pointer-events-none" />
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        className=" py-2 rounded-full border bg-(--colorHero) border-gray-300 outline-none focus:ring-2 focus:ring-gray-400 text-sm shadow-sm w-[200px] md:w-[250px] lg:w-[350px] pl-10"
                    />
                </div>
                <div className="hidden lg:flex items-center gap-2">
                    <Link href="/login"><Button className="bg-(--colorNav) border-0 shadow-none" variant="ghost">
                        <User />
                    </Button></Link>
                    <Button className="bg-(--colorNav) border-0 shadow-none" variant="ghost" size="icon" aria-label="Submit">
                        <Heart />
                    </Button>
                    <Button className="bg-(--colorNav) border-0 shadow-none" variant="ghost" size="icon" aria-label="Submit">
                        <ShoppingBag />
                    </Button>
                </div>
                <div className="lg:hidden ml-auto">
                    <Button className="bg-(--colorNav)/90 border border-gray-300 hover:bg-(--colorNav)/80 px-3 py-3" onClick={() => setIsOpen(!isOpen)} variant="outline" size="icon" aria-label="Submit">
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </Button>
                    {
                        isOpen && (
                            <div className="absolute top-20 left-0 w-full text-center bg-(--colorNav)  shadow-md px-5 py-5">
                                <ul className="flex flex-col gap-4 p-4">
                                    {navItems.map((item) => <li key={item.label}><Link onClick={() => setIsOpen(false)} className="text-(--colorparagrafo) transition-colors hover:text-(--colortitulo)" href={item.href}>{item.label}</Link></li>)}
                                </ul>
                                <div>
                                        <Link href="/login"><Button className="bg-(--colorNav) border-0 shadow-none" variant="ghost">
                                            <User />
                                        </Button></Link>
                                        <Button className="bg-(--colorNav) border-0 shadow-none" variant="ghost" size="icon" aria-label="Submit">
                                            <Heart />
                                        </Button>
                                        <Button className="bg-(--colorNav) border-0 shadow-none" variant="ghost" size="icon" aria-label="Submit">
                                            <ShoppingBag />
                                        </Button>
                                          
                                    </div>
                            <div className="ml-auto relative items-center w-full">
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                                        <input
                                            type="text"
                                            placeholder=" Pesquisar..."
                                            className=" py-2 rounded-full border bg-(--colorHero) border-gray-300 outline-none focus:ring-2 focus:ring-gray-400 text-sm shadow-sm w-full pl-10"
                                        />
                                    </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </nav>
    )
}
