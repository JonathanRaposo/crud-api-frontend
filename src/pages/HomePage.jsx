import textGenerator from "../utils/text-generator";

const HomePage = () => {
    const items = [
        { value: 'section-a', imgExt: '.png', text: textGenerator, alt: 'coding pic' },
        { value: 'section-b', imgExt: '.jpeg', text: textGenerator, alt: 'icarus pic' }
    ]


    return (
        <div >
            <p className="next-generation">Next generation web framework for node.js.</p>

            {items.map((item, i) => (
                <section key={item.value} className={item.value}>
                    <div className="img-wrapper">
                        <img src={`/img${i}${item.imgExt}`} alt={item.alt} />
                    </div>
                    <div className="content-wrapper">
                        <p>{item.text[i]}</p>
                    </div>
                </section>
            ))}

        </div>
    );
}

export default HomePage;