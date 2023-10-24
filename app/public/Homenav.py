const styles = require<any>('./home.css')

    return (
        <nav className={styles.cnav}>
            <div className={styles.lk}>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet" />
                <h1>Le</h1>
                <Link href="/home"><a>Home</a></Link>
                <Link href="/howitworks"><a>How it Works</a></Link>
                <Link href="/calculator"><a>Calculator</a></Link>
                <Link href="/contact"><a>Contact</a></Link>
            </div>
            <button className={styles.cbtn} onClick={logout}>Logout</button>
        </nav>
)
