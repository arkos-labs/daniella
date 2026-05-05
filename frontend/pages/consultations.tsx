import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MOCK_SERVICES, TIME_SLOTS } from '../lib/mockData';
import { format, addDays } from 'date-fns';
import { fr } from 'date-fns/locale';
import { CheckCircle, Clock, ArrowLeft, ArrowRight, Leaf, Sparkles, Droplets, Sun, Footprints, Calendar, RefreshCcw, CheckCircle2 } from 'lucide-react';

const getServiceIcon = (id: string) => {
  switch (id) {
    case 's1': return <Leaf className="w-7 h-7" />;
    case 's2': return <Sparkles className="w-7 h-7" />;
    case 's3': return <RefreshCcw className="w-7 h-7" />;
    case 's4': return <Droplets className="w-7 h-7" />;
    case 's5': return <Sun className="w-7 h-7" />;
    default: return <Leaf className="w-7 h-7" />;
  }
};

const getCleanTitle = (title: string) => {
  return title.replace(/\s*\([^)]*\)/g, '');
};

export default function Consultations() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [clientInfo, setClientInfo] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [viewingMonth, setViewingMonth] = useState(new Date());

  const startOfViewingMonth = new Date(viewingMonth.getFullYear(), viewingMonth.getMonth(), 1);
  const endOfViewingMonth = new Date(viewingMonth.getFullYear(), viewingMonth.getMonth() + 1, 0);
  
  // Generate all days for the current viewing month
  const daysInMonth = [...Array(endOfViewingMonth.getDate())].map((_, i) => {
    return new Date(viewingMonth.getFullYear(), viewingMonth.getMonth(), i + 1);
  });

  const maxDate = addDays(new Date(), 180); // 6 months limit

  const handlePrevMonth = () => {
    const prev = new Date(viewingMonth.getFullYear(), viewingMonth.getMonth() - 1, 1);
    if (prev >= new Date(new Date().getFullYear(), new Date().getMonth(), 1)) {
      setViewingMonth(prev);
    }
  };

  const handleNextMonth = () => {
    const next = new Date(viewingMonth.getFullYear(), viewingMonth.getMonth() + 1, 1);
    if (next <= maxDate) {
      setViewingMonth(next);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(res => setTimeout(res, 2000));
    setStep(4);
    setSubmitting(false);
  };

  const steps = ['Prestation', 'Planification', 'Coordonnées', 'Confirmation'];

  return (
    <main className="min-h-screen bg-[#F8F5EE] pb-32">
      <Head>
        <title>Consultation Naturopathe: Diagnostic Peau &amp; Cheveux Personnalisé | Dany</title>
        <meta name="description" content="Consultations naturopathe avec Daniella: diagnostic peau (85€), diagnostic capillaire (60€), bilan complet (50€). Approche holistique personnalisée. Résultats durables." />
        <meta name="keywords" content="consultation naturopathe prix, naturopathe consultation holistique, diagnostic peau, diagnostic capillaire, consultation beauté naturopathe" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://daniella-three.vercel.app/consultations" />
        <meta property="og:title" content="Consultation Naturopathe: Diagnostic Peau &amp; Cheveux | Dany Natural" />
        <meta property="og:description" content="Diagnostic peau (85€), capillaire (60€) ou bilan complet (50€). Consultations en ligne ou à Valenciennes. Approche holistique et personnalisée." />
      </Head>

      {/* Header Section */}
      <section className="relative pt-44 pb-20 overflow-hidden bg-white border-b border-[#3fad28]/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#4ec433]/5 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <span className="section-tag mb-6">Expertise Holistique</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 text-[#1a1a1a] leading-[0.95]">
            Consultation Naturopathe <span className="italic-serif text-gradient">Personnalisée</span>
          </h1>
          <p className="text-gray-500 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Diagnostic Peau &amp; Cheveux Complet. Un accompagnement sur-mesure pour réconcilier votre santé intérieure et votre éclat extérieur.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="bg-[#3fad28]/10 text-[#3fad28] px-4 py-2 rounded-full">Diagnostic Capillaire — 60€</span>
            <span className="bg-[#3fad28]/10 text-[#3fad28] px-4 py-2 rounded-full">Diagnostic Peau — 85€</span>
            <span className="bg-[#3fad28]/10 text-[#3fad28] px-4 py-2 rounded-full">Bilan Complet — 50€</span>
          </div>

          {/* Progress Stepper */}
          {step < 4 && (
            <div className="flex items-center justify-center gap-4 md:gap-12">
              {steps.slice(0, 3).map((s, i) => (
                <div key={s} className="flex flex-col items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 border-2 ${
                    step > i + 1 ? 'bg-[#3fad28] border-[#3fad28] text-white' :
                    step === i + 1 ? 'border-[#e68d15] text-[#e68d15] bg-white shadow-xl shadow-[#e68d15]/20 scale-110' :
                    'border-gray-100 text-gray-300 bg-white'
                  }`}>
                    {step > i + 1 ? '✓' : `0${i + 1}`}
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-[0.2em] ${step === i + 1 ? 'text-[#e68d15]' : 'text-gray-300'}`}>{s}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="container mx-auto px-6 mt-20 max-w-6xl">
        <div className={`transition-all duration-700 ${step > 1 && step < 4 ? 'bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl shadow-black/5 border border-[#3fad28]/5' : ''}`}>
          
          {/* STEP 1 — Service Selection */}
          {step === 1 && (
            <div className="animate-reveal-up">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {MOCK_SERVICES.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => { setSelectedService(service); setStep(2); }}
                    className="card-hover bg-white p-10 rounded-[3rem] text-left flex flex-col group border border-[#3fad28]/5"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#F8F5EE] flex items-center justify-center text-[#3fad28] mb-8 group-hover:bg-[#3fad28] group-hover:text-white transition-all duration-500">
                      {getServiceIcon(service.id)}
                    </div>
                    
                    <h3 className="text-2xl font-serif text-[#1a1a1a] mb-4 group-hover:text-[#3fad28] transition-colors">
                      {getCleanTitle(service.title)}
                    </h3>
                    <p className="text-gray-400 text-sm font-light mb-10 leading-relaxed flex-1">
                      {service.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between border-t border-[#3fad28]/5 pt-8">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#e68d15] mb-1">Prix</span>
                        <span className="text-2xl font-serif text-[#3fad28]">{service.price.toFixed(2)}€</span>
                      </div>
                      <div className="flex flex-col text-right">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-1">Durée</span>
                        <span className="text-sm font-bold text-gray-400">{service.duration} MIN</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2 — Date & Time */}
          {step === 2 && (
            <div className="animate-reveal-up">
              <button onClick={() => setStep(1)} className="group flex items-center gap-3 text-gray-400 hover:text-[#3fad28] transition-colors mb-12 uppercase text-xs font-bold tracking-widest">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Retour aux prestations
              </button>
              
              <div className="grid lg:grid-cols-2 gap-20">
                <div>
                  <h2 className="text-4xl font-serif text-[#1a1a1a] mb-4">Choisir une date</h2>
                  <p className="text-gray-400 font-light mb-10">Consultez nos disponibilités pour votre <span className="text-[#3fad28] font-medium italic">{getCleanTitle(selectedService?.title)}</span>.</p>
                  
                  <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-3xl border border-[#3fad28]/5">
                    <button 
                      onClick={handlePrevMonth}
                      className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[#F8F5EE] transition-colors disabled:opacity-10"
                      disabled={viewingMonth.getMonth() === new Date().getMonth() && viewingMonth.getFullYear() === new Date().getFullYear()}
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#3fad28]">
                      {format(viewingMonth, 'MMMM yyyy', { locale: fr })}
                    </span>
                    <button 
                      onClick={handleNextMonth}
                      className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[#F8F5EE] transition-colors disabled:opacity-10"
                      disabled={viewingMonth >= new Date(maxDate.getFullYear(), maxDate.getMonth(), 1)}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-3">
                    {/* Days of week headers */}
                    {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, i) => (
                      <div key={i} className="text-xs font-bold text-center text-gray-300 py-2 uppercase tracking-widest">{d}</div>
                    ))}
                    
                    {/* Empty slots for month start offset */}
                    {[...Array((startOfViewingMonth.getDay() + 6) % 7)].map((_, i) => (
                      <div key={`empty-${i}`} className="aspect-square"></div>
                    ))}

                    {daysInMonth.map(date => {
                      const dayName = format(date, 'EEE', { locale: fr });
                      const dayNum = format(date, 'd');
                      const isSelected = selectedDate && format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
                      const isSunday = date.getDay() === 0;
                      const isPast = date < new Date(new Date().setHours(0,0,0,0));
                      const isTooFar = date > maxDate;
                      
                      return (
                        <button
                          key={date.toISOString()}
                          disabled={isSunday || isPast || isTooFar}
                          onClick={() => setSelectedDate(date)}
                          className={`aspect-square rounded-2xl flex flex-col items-center justify-center transition-all duration-300 border ${
                            isSunday || isPast || isTooFar ? 'opacity-10 cursor-not-allowed bg-gray-50 border-transparent' :
                            isSelected ? 'bg-[#3fad28] text-white border-[#3fad28] shadow-xl shadow-[#3fad28]/20 scale-105' :
                            'bg-white border-[#3fad28]/5 text-gray-400 hover:border-[#e68d15] hover:text-[#3fad28]'
                          }`}
                        >
                          <span className="text-lg font-serif">{dayNum}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-[#F8F5EE] rounded-[3rem] p-10">
                  <h3 className="text-2xl font-serif text-[#1a1a1a] mb-8">Créneaux horaires</h3>
                  {selectedDate ? (
                    <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-3">
                      {TIME_SLOTS.map(slot => {
                        const isMonday = selectedDate.getDay() === 1;
                        const isBooked = (isMonday && (slot === '10:00' || slot === '15:30')) || 
                                         (selectedDate.getDate() % 3 === 0 && slot === '14:00');
                        
                        return (
                          <button
                            key={slot}
                            disabled={isBooked}
                            onClick={() => { setSelectedSlot(slot); setStep(3); }}
                            className={`py-3 md:py-4 rounded-xl text-[10px] md:text-xs font-bold transition-all duration-300 border relative overflow-hidden ${
                              isBooked
                                ? 'bg-gray-100 text-gray-300 border-transparent cursor-not-allowed opacity-50'
                                : selectedSlot === slot 
                                  ? 'bg-[#e68d15] text-white border-[#e68d15] shadow-lg' 
                                  : 'bg-white text-gray-400 border-transparent hover:border-[#e68d15] hover:text-[#3fad28]'
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="h-64 flex flex-col items-center justify-center text-center opacity-30">
                      <Calendar className="w-12 h-12 mb-4" />
                      <p className="text-xs font-bold uppercase tracking-widest">Sélectionnez une date</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3 — Client Info Form */}
          {step === 3 && (
            <div className="animate-reveal-up max-w-3xl mx-auto">
              <button onClick={() => setStep(2)} className="group flex items-center gap-3 text-gray-400 hover:text-[#3fad28] transition-colors mb-12 uppercase text-xs font-bold tracking-widest">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Retour au calendrier
              </button>

              <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 mb-16 p-6 md:p-8 bg-[#F8F5EE] rounded-[2rem] md:rounded-[2.5rem] border border-[#3fad28]/5">
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#e68d15] mb-2 block">Votre Sélection</span>
                  <h4 className="text-xl md:text-2xl font-serif text-[#3fad28]">{getCleanTitle(selectedService?.title)}</h4>
                </div>
                <div className="sm:text-right">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Date & Heure</span>
                  <p className="text-xs md:text-sm font-bold text-[#1a1a1a] uppercase tracking-widest">
                    {selectedDate && format(selectedDate, 'dd MMMM', { locale: fr })} @ {selectedSlot}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 ml-4">Prénom & Nom</label>
                    <input required value={clientInfo.name} onChange={e => setClientInfo({ ...clientInfo, name: e.target.value })}
                      className="w-full px-8 py-5 bg-[#F8F5EE] border-none rounded-full focus:ring-2 focus:ring-[#3fad28] outline-none text-sm font-light"
                      placeholder="Ex: Daniella Adabra"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 ml-4">Téléphone</label>
                    <input required value={clientInfo.phone} onChange={e => setClientInfo({ ...clientInfo, phone: e.target.value })}
                      className="w-full px-8 py-5 bg-[#F8F5EE] border-none rounded-full focus:ring-2 focus:ring-[#3fad28] outline-none text-sm font-light"
                      placeholder="+33 6 00 00 00 00"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 ml-4">Email de contact</label>
                  <input required type="email" value={clientInfo.email} onChange={e => setClientInfo({ ...clientInfo, email: e.target.value })}
                    className="w-full px-8 py-5 bg-[#F8F5EE] border-none rounded-full focus:ring-2 focus:ring-[#3fad28] outline-none text-sm font-light"
                    placeholder="votre@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 ml-4">Notes optionnelles</label>
                  <textarea value={clientInfo.message} onChange={e => setClientInfo({ ...clientInfo, message: e.target.value })}
                    rows={4}
                    className="w-full px-8 py-6 bg-[#F8F5EE] border-none rounded-[2.5rem] focus:ring-2 focus:ring-[#3fad28] outline-none text-sm font-light resize-none"
                    placeholder="Précisez ici vos attentes particulières..."
                  />
                </div>

                <button
                  disabled={submitting}
                  className="btn-primary w-full py-6 group"
                >
                  {submitting ? 'Validation en cours...' : `Confirmer le rendez-vous • ${selectedService?.price.toFixed(2)}€`}
                  {!submitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            </div>
          )}

          {/* STEP 4 — Success Confirmation */}
          {step === 4 && (
            <div className="py-20 text-center animate-reveal-up max-w-2xl mx-auto">
              <div className="w-32 h-32 bg-[#3fad28] rounded-full flex items-center justify-center mx-auto mb-12 shadow-2xl shadow-[#3fad28]/30 text-white animate-float">
                <CheckCircle2 className="w-16 h-16" />
              </div>
              
              <h2 className="text-6xl font-serif text-[#1a1a1a] mb-6">Séance <br /> <span className="italic text-gradient">Confirmée</span></h2>
              <p className="text-xl text-gray-500 font-light mb-10 leading-relaxed">
                Ravie de vous accompagner bientôt, <span className="text-[#3fad28] font-medium">{clientInfo.name}</span>. <br />
                Un récapitulatif complet vient de vous être envoyé à <span className="italic font-medium">{clientInfo.email}</span>.
              </p>

              <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-black/5 border border-[#3fad28]/5 mb-16 text-left">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#e68d15] mb-2 block">Prestation</span>
                    <p className="text-lg font-serif text-[#1a1a1a]">{getCleanTitle(selectedService?.title)}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#e68d15] mb-2 block">Horaire</span>
                    <p className="text-lg font-serif text-[#1a1a1a]">
                      {selectedDate && format(selectedDate, 'EEEE d MMMM', { locale: fr })} à {selectedSlot}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" className="btn-primary px-12">Retour à l'accueil</Link>
                <Link href="/collection" className="btn-outline px-12">Découvrir la collection</Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Trust Badges */}
      {step < 4 && (
        <section className="container mx-auto px-6 mt-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex items-center gap-6 p-8 bg-white rounded-[2.5rem] border border-[#3fad28]/5 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-[#F8F5EE] flex items-center justify-center text-[#e68d15]">
                <Clock className="w-6 h-6" />
              </div>
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#3fad28]/60 leading-relaxed">
                Rappel automatique <br /> <span className="text-[#1a1a1a]">24h avant la séance</span>
              </p>
            </div>
            <div className="flex items-center gap-6 p-8 bg-white rounded-[2.5rem] border border-[#3fad28]/5 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-[#F8F5EE] flex items-center justify-center text-[#e68d15]">
                <Sparkles className="w-6 h-6" />
              </div>
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#3fad28]/60 leading-relaxed">
                Expertise certifiée <br /> <span className="text-[#1a1a1a]">Naturopathie Holistique</span>
              </p>
            </div>
            <div className="flex items-center gap-6 p-8 bg-white rounded-[2.5rem] border border-[#3fad28]/5 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-[#F8F5EE] flex items-center justify-center text-[#e68d15]">
                <CheckCircle className="w-6 h-6" />
              </div>
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#3fad28]/60 leading-relaxed">
                Réservation <br /> <span className="text-[#1a1a1a]">Simple & Sécurisée</span>
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
