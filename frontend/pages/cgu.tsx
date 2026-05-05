import React from 'react';
import Head from 'next/head';
import { FileText, ShoppingBag, Truck, CreditCard, RotateCcw, ShieldAlert } from 'lucide-react';

export default function CGU() {
  const sections = [
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "1. Commandes et Produits",
      content: "Les produits proposés à la vente sont ceux décrits sur le site. Dany Natural Concept apporte le plus grand soin à la présentation et à la description de ces produits pour satisfaire au mieux l'information du Client. Chaque produit est artisanal et peut présenter de légères variations, gage de son authenticité."
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "2. Tarifs et Paiement",
      content: "Les prix sont indiqués en Euros TTC. Dany Natural Concept se réserve le droit de modifier ses prix à tout moment, mais les produits seront facturés sur la base des tarifs en vigueur au moment de l'enregistrement de la commande. Le règlement s'effectue via les plateformes de paiement sécurisées intégrées au site."
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "3. Livraison",
      content: "Les produits sont livrés à l'adresse de livraison indiquée lors du processus de commande. Les délais de livraison indiqués sont des délais indicatifs. Dany Natural Concept ne pourra être tenue responsable des conséquences dues à un retard d'acheminement n'étant pas de son fait."
    },
    {
      icon: <RotateCcw className="w-6 h-6" />,
      title: "4. Rétractation et Retours",
      content: "Conformément aux dispositions de l'article L.121-21 du Code de la Consommation, vous disposez d'un délai de rétractation de 14 jours. Cependant, pour des raisons d'hygiène et de protection de la santé, les produits cosmétiques dont l'opercule ou l'emballage a été ouvert ne peuvent faire l'objet d'un droit de rétractation."
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: "5. Responsabilité",
      content: "Les produits proposés sont conformes à la législation française en vigueur. La responsabilité de Dany Natural Concept ne saurait être engagée en cas de non-respect de la législation du pays où le produit est livré. Il appartient au Client de vérifier auprès des autorités locales les possibilités d'importation."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8F5EE] pb-32">
      <Head>
        <title>Conditions Générales (CGU/CGV) | Dany Natural Concept</title>
        <meta name="description" content="Conditions Générales d'Utilisation et de Vente de Dany Natural Concept. Transparence sur vos achats et l'utilisation de nos services." />
        <meta name="robots" content="noindex, follow" />
      </Head>

      {/* Hero Header */}
      <section className="relative pt-44 pb-20 overflow-hidden bg-white border-b border-[#e68d15]/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#e68d15]/5 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <span className="section-tag mb-6 border-[#e68d15]/20 text-[#e68d15] bg-[#e68d15]/5">Contrat de confiance</span>
          <h1 className="text-6xl md:text-7xl font-serif mb-8 text-[#1a1a1a] leading-tight">
            Conditions <span className="italic-serif text-[#e68d15]">Générales</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            L&apos;ensemble des règles régissant l&apos;utilisation de nos services et la vente de nos créations artisanales.
          </p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-[3rem] p-12 shadow-xl shadow-black/5 border border-[#e68d15]/5 mb-16">
            <p className="text-gray-600 font-light leading-relaxed italic text-lg">
              "Les présentes conditions générales de vente et d&apos;utilisation visent à définir les relations contractuelles entre Dany Natural Concept et l&apos;acheteur, qu&apos;il soit professionnel ou particulier, et les conditions applicables à tout achat effectué par le biais du site marchand."
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <div 
                key={index}
                className="group bg-white p-8 md:p-12 rounded-[2.5rem] border border-black/[0.03] hover:border-[#3fad28]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-black/[0.02]"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-14 h-14 bg-[#F8F5EE] group-hover:bg-[#3fad28] group-hover:text-white rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-500 text-[#3fad28]">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-serif text-[#1a1a1a] mb-4">{section.title}</h2>
                    <p className="text-gray-500 font-light leading-relaxed text-lg">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Legal Footnote */}
          <div className="mt-20 p-12 bg-[#1a1a1a] rounded-[3rem] text-white/50 font-light text-sm text-center">
            <p>Dernière mise à jour : Mai 2024. Dany Natural Concept se réserve le droit de modifier ces conditions à tout moment.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
