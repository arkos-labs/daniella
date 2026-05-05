// lib/mockData.ts — Toutes les données du site en mode mock

export const MOCK_PRODUCTS = [
  { 
    id: '1', 
    name: "Lait hydratant et démêlant (Leave-in)", 
    description: "Soin artisanal à base de lait d'avoine, vanille, huile d'abyssinie et d'avocat. 100% naturel.",
    longDescription: "Véritable best-seller de Dany Natural Concept, ce lait hydratant est une formulation artisanale noble. Sans paraben, sans silicone et sans huile minérale, il respecte l'équilibre naturel de vos cheveux tout en facilitant un démêlage sans douleur. Idéal pour redéfinir les boucles et apporter une douceur incomparable aux cheveux crépus, frisés ou lissés.",
    price: 18.00, 
    category: "Soins capillaires", 
    stock: 50, 
    imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2015/12/lait-capillaire-demelant-hydratant-510x510.png",
    benefits: [
      "Démêlage facilité sans casse",
      "Hydratation intense et durable",
      "Redéfinition des boucles naturelle",
      "Apporte douceur et souplesse",
      "Formule artisanale sans chimie agressive"
    ],
    ingredients: [
      "Lait d'avoine - Adoucissant naturel",
      "Huile d'Abyssinie - Brillance et protection",
      "Huile d'Avocat - Nutrition riche",
      "Extrait de Vanille - Parfum naturel et douceur"
    ],
    usage: "Appliquez sur cheveux humides, section par section, des pointes vers les racines. Travaillez le produit pour bien définir les boucles.",
    faq: [
      { q: "Convient-il aux cheveux lissés ?", r: "Oui, il apporte la nutrition nécessaire sans alourdir la fibre capillaire." }
    ]
  },
  { 
    id: '2', 
    name: "Sérum Prodigieux (Croissance & Vitalité)", 
    description: "Élixir concentré pour stimuler la pousse et fortifier les tempes dégarnies.",
    longDescription: "Le Sérum Prodigieux est un concentré d'actifs végétaux puissants. Formulé avec des huiles de chanvre, moutarde, ricin et sapote, il est complété par des huiles essentielles de romarin et tea tree pour une action purifiante et stimulante. C'est la solution idéale pour les cheveux fins, cassants et pour lutter contre l'alopécie de traction.",
    price: 25.00, 
    category: "Soins capillaires", 
    stock: 30, 
    imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2020/02/serum-prodigieux-DNC-510x510.jpg",
    benefits: [
      "Stimule la croissance capillaire",
      "Fortifie les tempes dégarnies",
      "Action anti-pelliculaire (Tea Tree)",
      "Revitalise les cheveux cassants",
      "Micro-circulation boostée (Romarin)"
    ],
    ingredients: [
      "Huile de Ricin et Sapote - Force et pousse",
      "Huile de Chanvre et Moutarde - Vitalité",
      "Huiles essentielles de Romarin et Tea Tree - Purification",
      "Macérâts de Bardane et Ortie - Santé du cuir chevelu"
    ],
    usage: "En usage quotidien : appliquez quelques gouttes sur les racines et les pointes. En bain d'huile : laissez poser 30 min avant le shampoing.",
    faq: [
      { q: "Peut-on l'utiliser sur les tempes dégarnies ?", r: "Absolument, c'est l'un de ses usages principaux pour stimuler la repousse locale." }
    ]
  },
  { 
    id: '3', 
    name: "Poudre de Chébé Authentique", 
    description: "Trésor ancestral du Tchad pour une croissance rapide et des cheveux ultra-forts.",
    longDescription: "Notre poudre de Chébé est importée directement du Tchad pour garantir son authenticité. Composée de Croton du Zambèze, de gomme arabique et de graines Mahlaba, c'est le secret millénaire des femmes tchadiennes pour obtenir une chevelure extrêmement longue et résistante à la casse.",
    price: 15.00, 
    category: "Soins capillaires", 
    stock: 100, 
    imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2022/01/Poudre-de-Chebe-510x510.jpg",
    benefits: [
      "Croissance capillaire accélérée",
      "Réduction drastique de la casse",
      "Brillance durable et naturelle",
      "Gaine la fibre capillaire",
      "Rétention de longueur maximale"
    ],
    ingredients: [
      "Croton du Zambèze (Chébé) - Actif principal",
      "Gomme arabique - Liant et protecteur",
      "Graine Mahlaba (Soybean) - Nutrition",
      "Clou de girofle - Santé du cuir chevelu"
    ],
    usage: "Utilisez en masque tous les 15 jours. Mélangez à une huile ou un beurre, appliquez sur les longueurs et tresser.",
    faq: [
      { q: "D'où vient cette poudre ?", r: "Elle provient directement de circuits artisanaux au Tchad." }
    ]
  },
  { 
    id: '4', 
    name: "Baume tropical fondant (mangue & aloe vera)", 
    description: "Nutrition intense pour cheveux secs et déshydratés. Referme les écailles et apporte brillance.",
    longDescription: "Un voyage sensoriel au cœur des tropiques. Ce baume fondant à la mangue et à l'aloe vera est une véritable cure d'hydratation. Il répare les pointes sèches et redonne une brillance miroir à votre chevelure.",
    price: 15.00, 
    category: "Soins capillaires", 
    stock: 40, 
    imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2015/12/Baume-tropical-fondant-mangue-510x510.png",
    benefits: [
      "Hydratation intense tropicale",
      "Pointes réparées durablement",
      "Brillance miroir instantanée",
      "Parfum mangue envoûtant",
      "Texture fondante unique"
    ],
    ingredients: [
      "Beurre de Mangue - Nutrition riche",
      "Gel d'Aloe Vera - Hydratation pure",
      "Huile de Coco - Protection",
      "Vitamines E - Brillance"
    ],
    usage: "Appliquer sur les pointes et les longueurs après le shampoing. Laisser poser 5 à 10 minutes puis rincer à l'eau fraîche.",
    faq: [
      { q: "Peut-on l'utiliser en masque ?", r: "Oui, laissez-le poser 30 minutes sous une serviette chaude pour une action encore plus profonde." }
    ]
  },
  { 
    id: '5', 
    name: "Pack soin capillaire complet", 
    description: "La routine complète : Shampoing doux + Soin profond + Baume tropical + Lait démêlant + Sérum croissance.",
    longDescription: "Offrez à vos cheveux le rituel ultime. Ce pack regroupe nos 5 best-sellers pour une routine capillaire complète et cohérente. Des résultats professionnels à la maison, avec 100% de naturalité.",
    price: 82.00, 
    category: "Soins capillaires", 
    stock: 15, 
    imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2016/03/PhotoGrid_1565190847319-1-510x510.jpg",
    benefits: [
      "Routine 360° complète",
      "Économie par rapport à l'achat séparé",
      "Synergie parfaite des actifs",
      "Résultats visibles en 30 jours",
      "Guide d'utilisation inclus"
    ],
    ingredients: [
      "Comprend les ingrédients de nos 5 meilleurs soins",
      "100% Naturel & Artisanal"
    ],
    usage: "Suivre les étapes du guide inclus : 1. Shampoing, 2. Soin Profond, 3. Baume, 4. Lait, 5. Sérum.",
    faq: [
      { q: "Combien de temps dure le pack ?", r: "Environ 3 à 4 mois pour une utilisation régulière complète." }
    ]
  },
  { 
    id: '6', 
    name: "Soin profond démêlant et revitalisant", 
    description: "Masque intensif pour nourrir en profondeur, réparer et redonner vie aux cheveux abîmés.",
    longDescription: "Le soin de secours pour les cheveux en détresse. Ce masque ultra-concentré pénètre au cœur de la fibre pour reconstruire les cheveux abîmés par les traitements chimiques ou la chaleur.",
    price: 20.00, 
    category: "Soins capillaires", 
    stock: 25, 
    imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2015/12/PhotoGrid_1565269967310-510x510.jpg",
    benefits: [
      "Reconstruction de la fibre",
      "Démêlage facile garanti",
      "Nutrition extrême",
      "Réduction de la casse de 90%",
      "Volume et vitalité retrouvés"
    ],
    ingredients: [
      "Protéines végétales - Force",
      "Beurre de Karité - Nutrition",
      "Huile d'Argan - Réparation",
      "Kératine végétale - Structure"
    ],
    usage: "Après le shampoing, appliquer mèche par mèche. Laisser poser 20 à 30 minutes sous un bonnet chauffant ou une serviette chaude. Rincer abondamment.",
    faq: [
      { q: "À quelle fréquence l'utiliser ?", r: "Une fois par semaine pour les cheveux abîmés, deux fois par mois pour l'entretien." }
    ]
  },
  { 
    id: '7', 
    name: "Shampoing Doux (Miel & Aloe Vera)", 
    description: "Nettoyage en douceur pour cuir chevelu sensible. Apaise et hydrate.",
    longDescription: "Le Shampoing Doux de Dany Natural Concept est formulé pour purifier vos cheveux sans jamais les agresser. Enrichi au miel bio et au gel d'aloe vera, il laisse la fibre souple et le cuir chevelu parfaitement apaisé. Idéal pour une utilisation fréquente sur tous types de cheveux.",
    price: 14.00, 
    category: "Soins capillaires", 
    stock: 60, 
    imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2016/02/Shampoing-adoucissant-miel-ortie-DNC-1-510x510.jpg",
    benefits: [
      "Nettoyage ultra-doux",
      "Respecte le pH du cuir chevelu",
      "Action hydratante (Aloe Vera)",
      "Apporte brillance et douceur (Miel)",
      "Senteur naturelle relaxante"
    ],
    ingredients: [
      "Miel bio - Brillance et nutrition",
      "Gel d'Aloe Vera - Hydratation intense",
      "Extrait d'Ortie - Tonifiant capillaire",
      "Base lavante douce végétale"
    ],
    usage: "Appliquez sur cheveux mouillés, massez délicatement le cuir chevelu puis rincez abondamment.",
    faq: [
      { q: "Est-il sans sulfates ?", r: "Oui, il utilise uniquement des agents lavants doux dérivés de la coco." }
    ]
  },
  { 
    id: '8', 
    name: "Savon Noir Purifiant (Tradition Togo)", 
    description: "Soin détox traditionnel pour une peau et un cuir chevelu sains.",
    longDescription: "Véritable héritage du Togo, notre Savon Noir est fabriqué selon des méthodes ancestrales. Il est le partenaire idéal pour un nettoyage profond du visage, du corps et même du cuir chevelu. Il élimine les impuretés et l'excès de sébum pour une peau purifiée et unifiée.",
    price: 7.00, 
    category: "Soins du corps", 
    stock: 80, 
    imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2019/08/PhotoGrid_1564986935974-1-510x510.jpg",
    benefits: [
      "Nettoyage détox profond",
      "Élimine les impuretés et toxines",
      "Unifie le teint naturellement",
      "Antibactérien naturel",
      "Usage multi-zones (Visage/Corps/Cheveux)"
    ],
    ingredients: [
      "Cendres de végétaux - Agent lavant traditionnel",
      "Beurre de Karité - Protection et douceur",
      "Huile de Palme (sourcée durablement) - Base nourrissante"
    ],
    usage: "Faites mousser dans les mains, appliquez sur la zone souhaitée, massez puis rincez. Utilisez 1 à 2 fois par semaine pour le visage.",
    faq: [
      { q: "Peut-on l'utiliser sur l'acné ?", r: "Oui, il est excellent pour purifier les peaux à imperfections." }
    ]
  },
  { 
    id: '9', 
    name: "Baume fondant cacao & aloe vera", 
    description: "Soin corporel riche et protecteur au beurre de cacao et gel d'aloe vera. 250ml.",
    longDescription: "Formulé spécialement pour les peaux matures et sèches, ce baume apporte une nutrition intense. Les rides sont atténuées, la peau est revitalisée et retrouve son élasticité naturelle grâce à la puissance du cacao brut.",
    price: 22.00, 
    category: "Soins du corps", 
    stock: 35, 
    imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2019/01/PhotoGrid_1565185949774-510x510.jpg",
    benefits: [
      "Nutrition intense anti-âge",
      "Rides fines atténuées",
      "Peau raffermie et élastique",
      "Hydratation profonde",
      "Arôme chocolaté divin"
    ],
    ingredients: [
      "Beurre de Cacao - Nutrition extrême",
      "Aloe Vera - Hydratation et cicatrisation",
      "Huile d'Argan - Anti-âge puissant",
      "Vitamine E - Antioxydant majeur"
    ],
    usage: "Appliquer matin et soir sur une peau propre. Masser avec des mouvements circulaires ascendants pour favoriser la fermeté.",
    faq: [
      { q: "Peut-on l'utiliser sur le visage ?", r: "Oui, il est excellent comme soin de nuit pour les peaux sèches ou matures." }
    ]
  },
  { 
    id: '10', 
    name: "Beurre de Karité Pur", 
    description: "Le soin universel par excellence. 100% naturel et brut pour visage, corps et cheveux.",
    longDescription: "La nutrition absolue en un pot. Notre Beurre de Karité est extrait traditionnellement pour conserver tous ses actifs. C'est l'ingrédient fondamental de toute routine beauté naturelle, protecteur et réparateur.",
    price: 10.00, 
    category: "Soins du corps", 
    stock: 100, 
    imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2015/12/beurre-karite-pur-510x510.jpg",
    benefits: [
      "Nutrition extrême des peaux sèches",
      "Protection contre les agressions extérieures",
      "Réparation des zones craquelées",
      "Soin multi-usage (lèvres, mains, pieds)",
      "100% Pur et Artisanal"
    ],
    ingredients: [
      "Beurre de Karité brut - Nutrition et protection"
    ],
    usage: "Faire fondre une petite noisette dans le creux de la main et appliquer sur la zone souhaitée.",
    faq: [
      { q: "Est-ce qu'il sent fort ?", r: "Il possède une légère odeur de noix caractéristique du karité brut non raffiné." }
    ]
  },
  { 
    id: '11', 
    name: "Huile anti-imperfections", 
    description: "Traitement ciblé pour une peau nette et équilibrée sans produits chimiques agressifs.",
    longDescription: "Dites adieu aux imperfections tout en douceur. Ce mélange d'huiles végétales et essentielles est conçu pour réguler le sébum et favoriser la cicatrisation des boutons sans dessécher la peau.",
    price: 25.00, 
    category: "Soins du visage", 
    stock: 20, 
    imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2019/08/huile-anti-imperfections-510x510.jpg",
    benefits: [
      "Élimine les boutons et points noirs",
      "Régule la production de sébum",
      "Atténue les cicatrices d'acné",
      "Apaisa l'inflammation",
      "Zéro effet asséchant"
    ],
    ingredients: [
      "Huile de Jojoba - Équilibre sébum",
      "Huile essentielle d'Arbre à thé - Antibactérien",
      "Camomille - Apaisant",
      "Zinc naturel - Cicatrisant"
    ],
    usage: "Appliquer le soir quelques gouttes sur les zones concernées après le nettoyage.",
    faq: [
      { q: "Est-ce adapté aux peaux grasses ?", r: "Oui ! C'est paradoxal mais l'huile de jojoba aide à réguler les peaux grasses." }
    ]
  },
  { 
    id: '12', 
    name: "Lait de Jour Matifiant (Unifiant)", 
    description: "Soin quotidien pour unifier le teint et protéger la peau des agressions.",
    longDescription: "Le Lait de Jour Matifiant est conçu pour les peaux cherchant éclat et uniformité. Il hydrate en légèreté tout en régulant la brillance pour un fini mat parfait toute la journée. Ses actifs naturels aident à atténuer les taches et à lisser le grain de peau.",
    price: 20.00, 
    category: "Soins du visage", 
    stock: 30, 
    imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2019/08/lait-jour-visage-510x510.jpg",
    benefits: [
      "Unifie le teint durablement",
      "Matifie et régule le sébum",
      "Protection quotidienne légère",
      "Grain de peau affiné",
      "Absorption instantanée"
    ],
    ingredients: [
      "Aloe Vera - Hydratation",
      "Extraits végétaux unifiants - Éclat",
      "Oxyde de Zinc - Protection naturelle",
      "Vitamine E - Antioxydant"
    ],
    usage: "Appliquez chaque matin sur une peau propre et sèche avant votre maquillage ou seul.",
    faq: [
      { q: "Est-ce adapté aux peaux mixtes ?", r: "Oui, sa texture fluide est parfaite pour réguler la zone T." }
    ]
  },
  { 
    id: '13', 
    name: "Élixir de massage relaxant", 
    description: "Détente profonde et nutrition de la peau grâce à une synergie d'huiles précieuses.",
    longDescription: "Transformez votre salle de bain en spa. Cet élixir glisse parfaitement sur la peau pour un massage relaxant tout en diffusant des arômes apaisants qui calment l'esprit et détendent les muscles.",
    price: 18.00, 
    category: "Soins du corps", 
    stock: 25, 
    imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2019/08/elixir-massage-510x510.jpg",
    benefits: [
      "Détente musculaire immédiate",
      "Parfum apaisant aux huiles essentielles",
      "Peau nourrie et soyeuse",
      "Glisse idéale pour le massage",
      "100% Naturel premium"
    ],
    ingredients: [
      "Huile d'Argan - Nutrition",
      "Huile de Coco - Glisse",
      "Huiles essentielles de Lavande et Menthe - Relaxation"
    ],
    usage: "Réchauffer l'huile entre les mains et masser par mouvements circulaires sur le corps.",
    faq: [
      { q: "L'odeur est-elle forte ?", r: "Elle est relaxante et s'estompe délicatement après application." }
    ]
  },
  { 
    id: '14', 
    name: "Beurre de Mangue Brut", 
    description: "Nutrition tropicale intense pour les peaux les plus sèches et les cheveux déshydratés.",
    longDescription: "Le secret des tropiques pour une peau de velours. Riche en acides gras, le beurre de mangue est plus léger que le karité mais tout aussi nourrissant. Il est idéal pour redonner élasticité à la peau et force aux cheveux.",
    price: 15.00, 
    category: "Beurres végétaux", 
    stock: 40, 
    imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2015/12/Baume-tropical-fondant-mangue-510x510.png",
    benefits: [
      "Nutrition intense sans fini trop gras",
      "Améliore l'élasticité de la peau",
      "Idéal pour les masques capillaires",
      "Arôme fruité naturel discret",
      "Riche en antioxydants"
    ],
    ingredients: [
      "Beurre de Mangue 100% pur et brut"
    ],
    usage: "Utiliser pur en baume ou comme ingrédient dans vos recettes de cosmétiques maison.",
    faq: [
      { q: "Est-ce que ça sent la mangue ?", r: "Il a une odeur de mangue brute, très légère et naturelle." }
    ]
  },
  { 
    id: '15', 
    name: "Pack Corporel Éclat", 
    description: "Une routine complète pour le corps : Savon noir, Beurre de Karité et Velouté corps.",
    longDescription: "Prenez soin de votre peau de la tête aux pieds. Ce pack regroupe l'essentiel pour nettoyer, exfolier et nourrir votre corps en profondeur. Le secret pour une peau douce et lumineuse toute l'année.",
    price: 35.00, 
    category: "Soins du corps", 
    stock: 20, 
    imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2019/08/PhotoGrid_1564986935974-1-510x510.jpg",
    benefits: [
      "Rituel complet de soin corporel",
      "Peau exfoliée et purifiée",
      "Nutrition longue durée",
      "Cadeau idéal et économique",
      "Ingrédients naturels d'exception"
    ],
    ingredients: [
      "Sélection de nos meilleurs actifs pour le corps"
    ],
    usage: "1. Purifier avec le savon noir. 2. Nourrir avec le beurre de karité sur les zones sèches. 3. Hydrater avec le velouté corps au quotidien.",
    faq: [
      { q: "Est-ce adapté aux peaux sensibles ?", r: "Oui, tous les produits sont formulés pour respecter les peaux les plus délicates." }
    ]
  },
  { 
    id: '16', 
    name: "Synergie Raffermissante", 
    description: "Mélange d'huiles précieuses pour tonifier la peau et lutter contre le relâchement cutané.",
    longDescription: "Redonnez de la fermeté à votre silhouette. Cette synergie d'huiles végétales et essentielles stimule la production de collagène naturel et améliore la tonicité de la peau. Idéal pour le ventre, les bras et les cuisses.",
    price: 28.00, 
    category: "Soins du corps", 
    stock: 15, 
    imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2019/08/elixir-massage-510x510.jpg",
    benefits: [
      "Tonifie et raffermit les tissus",
      "Lutte contre le relâchement cutané",
      "Peau plus lisse et galbée",
      "Texture huileuse fine, pénétration rapide",
      "Efficacité prouvée sur la tonicité"
    ],
    ingredients: [
      "Huile d'Argan - Fermeté",
      "Huile de Rose - Régénérant",
      "Huile essentielle de Géranium - Tonifiant"
    ],
    usage: "Appliquer matin et soir par massages ascendants sur les zones à raffermir.",
    faq: [
      { q: "Combien de temps avant les résultats ?", r: "Une amélioration de la tonicité est visible après 3 semaines d'application biquotidienne." }
    ]
  },
  { 
    id: '17', 
    name: "Huile de Palmiste Pur", 
    description: "L'ingrédient brut idéal pour vos soins capillaires et corporels maison.",
    longDescription: "Une huile polyvalente et économique. L'huile de palmiste est excellente comme base pour vos recettes DIY. Elle apporte une nutrition légère et favorise la santé du cuir chevelu.",
    price: 10.00, 
    category: "Huiles végétales", 
    stock: 60, 
    imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2019/08/PhotoGrid_1564986935974-1-510x510.jpg",
    benefits: [
      "Base polyvalente pour cosmétiques DIY",
      "Nutrition légère peau et cheveux",
      "Excellent rapport qualité-prix",
      "Format économique",
      "100% Pure et brute"
    ],
    ingredients: [
      "Huile de Palmiste 100% pure"
    ],
    usage: "À utiliser seule ou à mélanger avec d'autres huiles/beurres pour créer vos propres soins.",
    faq: [
      { q: "Quelle est la différence avec l'huile de palme ?", r: "L'huile de palmiste est extraite du noyau du fruit, elle est plus légère et plus riche en acides gras spécifiques." }
    ]
  },
  { 
    id: '18', 
    name: "Lait Capillaire Format Géant (500ml)", 
    description: "Votre soin hydratant préféré en format familial ultra-économique.",
    longDescription: "Ne soyez jamais à court de votre soin indispensable. Ce format généreux de 500ml est idéal pour toute la famille ou pour celles qui utilisent le lait hydratant quotidiennement. Même formule, plus de plaisir.",
    price: 28.00, 
    category: "Soins capillaires", 
    stock: 40, 
    imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2015/12/lait-capillaire-demelant-hydratant-510x510.png",
    benefits: [
      "Format ultra-économique (-20% vs 250ml)",
      "Idéal pour un usage familial",
      "Dure jusqu'à 6 mois pour une personne",
      "Même efficacité hydratante reconnue",
      "Pompe doseuse pratique"
    ],
    ingredients: [
      "Même composition que notre lait 250ml"
    ],
    usage: "Usage identique au format standard. Idéal pour le coiffage quotidien.",
    faq: [
      { q: "Est-ce le même produit ?", r: "Oui, c'est exactement la même formulation plébiscitée par nos clientes." }
    ]
  },
  { 
    id: '20', 
    name: "Poudre de Chébé (Format 50g)", 
    description: "Format découverte de notre célèbre poudre de Chébé du Tchad.",
    longDescription: "Idéal pour tester l'efficacité incroyable du Chébé sur vos cheveux. Ce format de 50g vous permet de réaliser plusieurs applications et de constater les premiers résultats sur la rétention de longueur.",
    price: 8.00, 
    category: "Soins capillaires", 
    stock: 80, 
    imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2022/01/Poudre-de-Chebe-510x510.jpg",
    benefits: [
      "Petit prix pour tester",
      "Authenticité garantie",
      "Résultats visibles sur la casse",
      "Format voyage pratique",
      "Pureté africaine"
    ],
    ingredients: [
      "100% Poudre de Chébé authentique"
    ],
    usage: "Mélanger avec une huile et appliquer sur les longueurs.",
    faq: [
      { q: "Combien d'utilisations ?", r: "Environ 3 à 5 utilisations selon la longueur de vos cheveux." }
    ]
  },
  { 
    id: '21', 
    name: "Sérum Croissance - Duo Pack", 
    description: "Cure de 3 mois pour des résultats optimaux sur la pousse de vos cheveux.",
    longDescription: "Ne cassez pas votre routine ! Pour des résultats vraiment spectaculaires, une cure prolongée est recommandée. Ce duo pack vous assure d'avoir toujours votre sérum à portée de main pendant toute la phase de croissance.",
    price: 45.00, 
    category: "Soins capillaires", 
    stock: 15, 
    imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2020/02/serum-prodigieux-DNC-510x510.jpg",
    benefits: [
      "Cure complète recommandée",
      "Économie sur l'unité",
      "Assure la régularité du traitement",
      "Cadeau parfait pour un proche",
      "Efficacité décuplée sur la durée"
    ],
    ingredients: [
      "Même composition riche que le sérum à l'unité"
    ],
    usage: "Application 3 fois par semaine sur le cuir chevelu.",
    faq: [
      { q: "Est-ce trop pour une personne ?", r: "Non, c'est la quantité parfaite pour une cure de 3-4 mois." }
    ]
  },
  { 
    id: '22', 
    name: "Baume Tropical Fondant - Format 500ml", 
    description: "Votre masque hydratant favori en format professionnel ultra-généreux.",
    longDescription: "Pour les amoureuses de la mangue et de l'aloe vera. Ce format XXL est parfait pour celles qui utilisent le baume fondant comme démêlant régulier ou en masque profond hebdomadaire. Un pur moment de bonheur tropical.",
    price: 42.00, 
    category: "Soins capillaires", 
    stock: 20, 
    imageUrl: "https://danynaturalconcept.org/wp-content/uploads/2015/12/Baume-tropical-fondant-mangue-510x510.png",
    benefits: [
      "Format économique XXL",
      "Démêlage facile pour toute la famille",
      "Nutrition tropicale longue durée",
      "Packaging pompe pratique",
      "Soin professionnel à la maison"
    ],
    ingredients: [
      "Même formulation à base de mangue et aloe vera"
    ],
    usage: "Appliquer généreusement sur les longueurs après le lavage.",
    faq: [
      { q: "Peut-on l'utiliser sur les enfants ?", r: "Oui, sa composition naturelle est très douce pour les cheveux des petits." }
    ]
  }
];

export const MOCK_SERVICES = [
  { id: 's1', title: "Consultation Naturopathie (1h)", description: "Bilan complet de santé naturelle : nutrition, gestion du stress, hygiène de vie.", duration: 60, price: 50.00, icon: "🌿", color: "from-green-50 to-emerald-50" },
  { id: 's2', title: "Soin ou Relaxation (1h)", description: "Réflexologie plantaire, massage thérapeutique ou séance de relaxation profonde.", duration: 60, price: 50.00, icon: "✨", color: "from-purple-50 to-violet-50" },
  { id: 's3', title: "Suivi Naturopathique (3 séances)", description: "Accompagnement complet sur le long terme pour des résultats profonds et durables.", duration: 180, price: 120.00, icon: "📈", color: "from-blue-50 to-sky-50" },
  { id: 's4', title: "Diagnostic Capillaire + Routine", description: "Analyse approfondie de votre cuir chevelu et création d'une routine personnalisée.", duration: 45, price: 60.00, icon: "💆", color: "from-amber-50 to-yellow-50" },
  { id: 's5', title: "Diagnostic Peau + Routine", description: "Diagnostic complet de votre peau et conseils en cosmétique naturelle sur-mesure.", duration: 45, price: 85.00, icon: "🌸", color: "from-rose-50 to-pink-50" }
];

export const CATEGORIES = ['Tous', 'Soins capillaires', 'Soins du corps', 'Soins du visage', 'Beurres végétaux', 'Huiles végétales'];

export const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30'
];
