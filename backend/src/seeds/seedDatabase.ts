import sequelize from '../config/database';
import Product from '../models/Product';
import Service from '../models/Service';

const seed = async () => {
    try {
        await sequelize.sync({ force: true });

        // Services (Exactly as on danynaturalconcept.org)
        await Service.bulkCreate([
            { title: "Consultation 1h Naturopathie", description: "Bilan complet de santé naturelle : nutrition, gestion du stress, soins naturels.", duration: 60, price: 50.00 },
            { title: "Soin spécifique ou relaxation", description: "Réflexologie plantaire, massage thérapeutique ou séance de relaxation.", duration: 60, price: 50.00 },
            { title: "Suivi naturopathique (3 séances)", description: "Accompagnement complet sur le long terme pour des résultats durables.", duration: 180, price: 120.00 },
            { title: "Diagnostic capillaire + routine personnalisée", description: "Analyse approfondie de votre cuir chevelu et création d'une routine sur mesure.", duration: 45, price: 60.00 },
            { title: "Diagnostic de peau + routine personnalisée", description: "Diagnostic complet de votre type de peau et conseils en cosmétique naturelle.", duration: 45, price: 85.00 }
        ]);

        // Products (All 22 products from the scrape)
        await Product.bulkCreate([
            { name: "lait hydratant et démêlant cheveux secs (leave in )", description: "Produit artisanal au lait d’avoine, vanille, huile d’abyssinie et huile d’avocat. 100% naturel.", price: 18.00, category: "Soins capillaires", stock: 50, imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2015/12/lait-capillaire-demelant-hydratant-510x510.png" },
            { name: "Serum prodigieux pour la croissance", description: "Favorise la pousse et fortifie la fibre capillaire.", price: 25.00, category: "Soins capillaires", stock: 30, imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2020/02/serum-prodigieux-DNC-510x510.jpg" },
            { name: "Poudre de chébé authentique du tchad", description: "Le secret de beauté des femmes tchadiennes pour des cheveux longs et forts.", price: 15.00, category: "Soins capillaires", stock: 100, imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2019/01/FotoGrid_20240515_094328468-510x507.jpg" },
            { name: "Baume tropical fondant (mangue et aloe vera)", description: "Nutrition intense pour cheveux secs et déshydratés.", price: 15.00, category: "Soins capillaires", stock: 40, imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2015/12/Baume-tropical-fondant-mangue-510x510.png" },
            { name: "Pack soin capillaire complet", description: "La routine complète : Shampoing, Soin profond, Baume, Lait et Sérum.", price: 82.00, category: "Soins capillaires", stock: 15, imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2016/03/PhotoGrid_1565190847319-1-510x510.jpg" },
            { name: "Soin profond démêlant et revitalisant", description: "Masque intensif pour nourrir en profondeur.", price: 20.00, category: "Soins capillaires", stock: 25, imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2015/12/PhotoGrid_1565269967310-510x510.jpg" },
            { name: "Shampoing adoucissant miel et ortie", description: "Nettoyage en douceur pour cuir chevelu sensible.", price: 14.00, category: "Soins capillaires", stock: 60, imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2016/02/Shampoing-adoucissant-miel-ortie-DNC-1-510x510.jpg" },
            { name: "Savon noir purifiant DNC", description: "Savon traditionnel pour une peau nette et purifiée.", price: 7.00, category: "Soins du corps et du visage", stock: 80, imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2019/08/PhotoGrid_1564986935974-1-510x510.jpg" },
            { name: "Baume fondant cacao et aloe vera", description: "Soin corporel riche et protecteur. Poids 250ml.", price: 22.00, category: "Soins du corps et du visage", stock: 35, imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2019/01/PhotoGrid_1565185949774-510x510.jpg" },
            { name: "Lait de jour matifiant visage", description: "Équilibre le sébum et hydrate sans graisser.", price: 20.00, category: "Soins du corps et du visage", stock: 20, imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2017/10/PhotoGrid_1565186545390-510x510.jpg" },
            { name: "Beurre de karité bio brut", description: "100% pur, non raffiné, originaire du Burkina Faso. Poids 100g.", price: 10.00, category: "Beurres végétaux bio", stock: 120, imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2018/06/beurre-de-karite-510x510.jpg" },
            { name: "Le guide de recettes cosmétiques de Dany", description: "Livre numérique pour apprendre à fabriquer ses propres soins.", price: 12.00, category: "Livres", stock: 500, imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2017/12/IMG_20171204_134706_347-510x510.jpg" },
            { name: "Huile de palmiste bio", description: "Fortifiant capillaire traditionnel.", price: 10.00, category: "Huiles végétales bio", stock: 45, imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2016/03/PhotoGrid_1581423068335-510x510.jpg" },
            { name: "Huile anti imperfections et cicatrisante", description: "Soin ciblé pour les problèmes de peau.", price: 25.00, category: "Soins du corps et du visage", stock: 25, imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2018/12/PhotoGrid_1565185116754-510x510.jpg" },
            { name: "Beurre de cacao bio en pastilles", description: "Soin corporel gourmand et protecteur.", price: 10.00, category: "Beurres végétaux bio", stock: 55, imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2016/03/CocoaButterWafers_OIL81_Main-510x510.jpg" },
            { name: "Velouté hydratant corps", description: "Texture légère pour une hydratation quotidienne.", price: 19.00, category: "Soins du corps et du visage", stock: 30, imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2018/06/PhotoGrid_1564835428611-510x510.jpg" },
            { name: "Élixir de massage relaxant", description: "Synergie d'huiles pour la détente.", price: 18.00, category: "Soins du corps et du visage", stock: 20, imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2019/07/PhotoGrid_1564989791373-510x510.jpg" },
            { name: "Beurre de mangue artisanal", description: "Riche en antioxydants, idéal pour cheveux et peau.", price: 15.00, category: "Beurres végétaux bio", stock: 40, imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2024/11/FotoGrid_20241122_134441149-510x533.jpg" },
            { name: "Synergie huiles raffermissantes", description: "Aide à tonifier et raffermir la peau.", price: 28.00, category: "Soins du corps et du visage", stock: 15, imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2018/06/PhotoGrid_1564990158865-510x510.jpg" },
            { name: "Pack routine éclat visage", description: "Savon noir + Lait matifiant + Huile anti-imperfections.", price: 45.00, category: "Soins du corps et du visage", stock: 10, imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2017/10/pack-visage-dnc-510x510.jpg" },
            { name: "Huile de baobab bio", description: "Nutrition intense pour peaux sèches.", price: 12.00, category: "Huiles végétales bio", stock: 30, imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2016/03/huile-baobab-510x510.jpg" },
            { name: "Beurre de sal bio", description: "Alternative au karité, texture fine.", price: 14.00, category: "Beurres végétaux bio", stock: 20, imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2023/05/beurre-de-sal-510x510.jpg" }
        ]);

        console.log("Database seeded successfully with all 22 products and 5 services!");
        process.exit(0);
    } catch (error) {
        console.error("Seeding failed:", error);
        process.exit(1);
    }
};

seed();
