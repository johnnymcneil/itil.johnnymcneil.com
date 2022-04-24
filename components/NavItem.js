import Link from "next/link";
import styles from "./Navigation.module.scss"

import { useRouter } from "next/router";

export default function NavItem({ item }) {
    const router = useRouter()
    const active = router.asPath === item.href ? true : false
    const classes = active ? styles['nav-link', 'nav-link-active'] : styles['nav-link']
    return (
        <Link href={item.href}>
            <a className={classes}>
                {item.name}
            </a>
        </Link>
    )
}