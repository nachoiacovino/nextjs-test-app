import Link from 'next/link'

export default () => {
    const styles = {
        display: "flex",
        background: "grey",
        justifyContent: "space-around",
        margin: 0,
        padding: 0
    }
    return ( 
        <nav style={styles}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
        </nav>
    )
}