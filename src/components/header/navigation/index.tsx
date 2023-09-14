"use client";

import { Link } from "react-scroll";
import { Container } from "./styles"
import { useEffect, useState } from "react";

type LinkProps = {
    name: string;
    to: string;
}

export const Navigation = () => {
    const [links] = useState<LinkProps[]>([
        { name: "Home", to: "main" },
        { name: "About Me", to: "about-me" },
        { name: "Projects", to: "projects" },
        { name: "Contact", to: "contact" },
    ]);
    const [activeLink, setActiveLink] = useState("home");

    useEffect(() => {
        const handeScroll = () => {
            const activeLink = links.find((link) => {
                const section = document.getElementById(link.to);

                if (!section) return false;

                const rect = section.getBoundingClientRect();

                return rect.top >= 0 && rect.bottom <= window.innerHeight;
            })

            if (activeLink) {
                setActiveLink(activeLink.to);
            }
        }

        window.addEventListener("scroll", handeScroll);

        return () => window.removeEventListener("scroll", handeScroll);
    }, []);

    return (
        <Container>
            {links.map((link) => (
                <Link
                    key={link.name}
                    className={activeLink === link.to ? "active": ""}
                    to={link.to}
                    offset={-100}
                    duration={700}
                    smooth
                >
                    {link.name}
                </Link>
            ))}
        </Container>
    )
}