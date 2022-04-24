import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LinkList({ heading, linkList }) {
    var links = []
    
    linkList.forEach(link => {
        var newLink = (
            <Link href={ link.href }>
                <a>{ link.name }</a>
            </Link>
        )
        links.push(newLink)
    })

    return (
        <>
            <h4>{ heading }</h4>
            { links }
        </>
    )
}