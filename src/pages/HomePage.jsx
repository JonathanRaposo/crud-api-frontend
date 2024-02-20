
const HomePage = () => {


    const paraStyles = {
        margin: '200px auto',
        fontSize: '70px',
        textAlign: 'center'
    }

    return (
        <div >
            <p style={paraStyles}>Next generation web framework for node.js.</p>

            <section className="section-a">
                <div className="img-wrapper">
                    <img src={`/img1.png`} alt={'programming'} />
                </div>
                <div className="content-wrapper">
                    <p>Daedalus fashioned two pairs of wings for himself and his son, made of metal feather held to a leather frame by beeswax. Before trying to escape the island, he warned his son to follow his path of flight and not fly too close to the sun or too close to the sea, but, overcome by giddiness while flying, Icarus disobeyed his father and soared higher into the sky. The heat from the sun melted the beeswax, causing the wings to fall apart as he flew. Icarus attempted to stay aloft, but ultimately fell into the sea and drowned. Daedalus wept for his son and called the nearest land Icaria (an island southwest of Samos) in memory of him. Today, the supposed site of his burial on the island bears his name, and the sea near Icaria in which he drowned is called the Icarian Sea</p>
                </div>
            </section>
        </div>
    );
}

export default HomePage;