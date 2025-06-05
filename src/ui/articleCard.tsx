import styles from "./articleCard.module.css"

export default function Products() {

    type Product = {
        name: string;
        price: number;
        description: string;
        image: string;
    };

    const products: Product[] = [
        {
            name: "Patins pour la natation",
            price: 44.99,
            description: "Des patins créés et destinés à la natation afin de pouvoir vous faire nager plus vite, comme des palmes mais avec des roulettes.",
            image: "/images/pattinsNatation.png"
        },
        {
            name: "Patins pour le judo",
            price: 44.99,
            description: "Des patins créés et destinés au judo. Nous y avons installé des roues en velcro qui agrippent le sol pour être plus stable que pieds nus.",
            image: "/images/pattinsJudo.png"
        },
        {
            name: "Patins pour le cyclisme",
            price: 49.99,
            description: "Des patins créés et destinés au cyclisme. Plus de roues, plus de vitesse, c'est une question de mathématiques.",
            image: "/images/pattinsCyclisme.png"
        },
        {
            name: "Patins pour l'escalade",
            price: 49.99,
            description: "Des patins créés et destinés à la pratique de l'escalade. Ils remplaçeront vos chaussons devenus obsolètes et vous permettront de gravir les plus hauts sommets. Une fois en haut, plus qu'à rouler pour descendre.",
            image: "/images/pattinsEscalade.png"
        },
        {
            name: "Double Patins",
            price: 59.99,
            description: "Conçus pour vous protéger et absorber les chocs, ces patins vous permettront aussi de pouvoir rider sur les genoux.",
            image: "/images/doublePattins.png"
        },
        {
            name: "La combi Intégrale",
            price: 99.99,
            description: "Une tenue entièrement conçue pour les kiffeurs de la ride. A genoux, sur la tête, sur les mains, à quatre pattes, toutes les positions sont bonnes pour rider avec. Un seul but, le kiff.",
            image: "/images/combiIntégrale.png"
        }
    ];


    return (
        <>
            <ul className={styles.articleCard}>
                {products.map((product, index) => (
                    <li key={index}>
                        <img src={product.image} alt={product.name} />
                        <div className={styles.articleDescription}>
                            <h2>{product.name}</h2>
                            <p>Prix : {product.price}€</p>
                            <p>{product.description}</p>
                        </div>
                        <button className={styles.shopButton}>Ajouter au panier</button>
                    </li>
                ))}
            </ul>
        </>
    )
}