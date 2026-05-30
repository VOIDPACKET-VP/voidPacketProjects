export default function MainContent() {
    return (
        <>
            <main className="content">
                <section className="intro"> 
                    <h2>Voidpacket</h2>
                    <h3>Cybersecurity - Web dev - Build to Break</h3>
                    <button className="email-btn">Email</button>
                </section>

                <section className="more">
                    <div className="about">    
                        <h2>About</h2>
                        <p>I'm not a web developer who does security on the side. I'm not a security researcher who codes on the side. I'm building toward something rarer : someone who understands systems deeply enough to build them, break them, and secure them.</p>
                    </div>
                    <div className="interests">
                        <h2>Interests</h2>
                        <p>Cycling. Gaming. Treking and Mountaineering. Programming</p>
                    </div>
                </section>
            </main>
        </>
    )
}