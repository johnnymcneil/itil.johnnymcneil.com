import Link from "next/link";
import styles from "./Navigation.module.scss"

export default function NavItem({ active, item }) {
    const classes = active ? `${styles['nav-item']} ${styles['active']}` : styles['nav-item']
    return (
        <Link href={item.href}>
            <a className={classes}>
                {item.name}
            </a>
        </Link>
    )
}