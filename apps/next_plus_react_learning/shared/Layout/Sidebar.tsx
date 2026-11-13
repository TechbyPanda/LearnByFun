"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Layout.module.css";

// Add a new entry here whenever you create a new page under app/
const NAV_ITEMS = [
    { href: "/", label: "Home" },
    { href: "/use_effect", label: "useEffect" },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className={styles.sidebar}>
            <h2 className={styles.title}>React Learning</h2>
            <nav>
                <ul className={styles.navList}>
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
}
