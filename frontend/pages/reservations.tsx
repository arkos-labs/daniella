import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MOCK_SERVICES, TIME_SLOTS } from '../lib/mockData';
import { format, addDays } from 'date-fns';
import { fr } from 'date-fns/locale';
import { CheckCircle, Clock, Euro, ChevronRight, Leaf, Flower2, CalendarDays, User, Sparkles, RefreshCcw } from 'lucide-react';

const getServiceIcon = (id: string) => {
  switch (id) {
    case 's1': return <Leaf className="w-5 h-5" />;
    case 's2': return <Sparkles className="w-5 h-5" />;
    case 's3': return <CalendarDays className="w-5 h-5" />;
    case 's4': return <User className="w-5 h-5" />;
    case 's5': return <Flower2 className="w-5 h-5" />;
    default: return <Leaf className="w-5 h-5" />;
  }
};

const getCleanTitle = (title: string) => {
  return title.replace(/\s*\([^)]*\)/g, '');
};

export default function Reservations() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [clientInfo, setClientInfo] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const next14Days = [...Array(14)].map((_, i) => addDays(new Date(), i + 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate network request
    await new Promise(res => setTimeout(res, 1500));
    setStep(4);
    setSubmitting(false);
  };

  const steps = ['Service', 'Date & Heure', 'Informations', 'Confirmation'];

  return (
    <div className="min-h-screen bg-[#FAFAF8] pt-28 pb-20">
      <Head>
        <title>Réserver une séance | Dany Natural Concept</title>
        <meta name="description" content="Réservez votre consultation naturopathique ou soin bien-être avec Daniella Adabra à Valenciennes." />
      </Head>

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Title */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#39B54A]/10 text-[#39B54A] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Prise de rendez-vous</span>
          <h1 className="text-5xl font-serif text-[#2C2C2C]">Réserver votre séance</h1>
        </div>

        {/* Progress Bar */}
        {step < 4 && (
          <div className="flex items-center justify-center mb-12">
            {steps.slice(0, 3).map((s, i) => (
              <React.Fragment key={s}>
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 ${
                    step > i + 1 ? 'bg-[#39B54A] border-[#39B54A] text-white' :
                    step === i + 1 ? 'border-[#39B54A] text-[#39B54A] bg-white' :
                    'border-gray-200 text-gray-300 bg-white'
                  }`}>
                    {step > i + 1 ? '✓' : i + 1}
                  </div>
                  <span className={`text-xs font-medium ${step === i + 1 ? 'text-[#39B54A]' : 'text-gray-300'}`}>{s}</span>
                </div>
                {i < 2 && <div className={`w-24 h-0.5 mb-5 mx-2 transition-all duration-300 ${step > i + 1 ? 'bg-[#39B54A]' : 'bg-gray-200'}`} />}
              </React.Fragment>
            ))}
          </div>
        )}

        <div className={step > 1 ? "bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden" : ""}>

          {/* STEP 1 — Service */}
          {step === 1 && (
            <div className="pb-10">
              <h2 className="text-3xl font-serif text-[#39B54A] text-center mb-10">Choisissez votre prestation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {MOCK_SERVICES.map((service, index) => {
                  const isWide = index === 2; // Suivi Naturopathique spans 2 columns
                  return (
                    <button
                      key={service.id}
                      onClick={() => { setSelectedService(service); setStep(2); }}
                      className={`bg-white border border-gray-200 rounded-sm p-6 text-left hover:shadow-md transition-all duration-300 flex flex-col justify-between group ${
                        isWide ? 'md:col-span-2 md:flex-row relative overflow-hidden' : ''
                      }`}
                    >
                      <div className={`flex flex-col h-full ${isWide ? 'md:w-3/5 relative z-10' : 'w-full'}`}>
                        <div className="flex justify-between items-start w-full mb-4">
                          <div className="w-10 h-10 rounded-xl bg-[#eef4ef] flex items-center justify-center text-[#39B54A]">
                            {getServiceIcon(service.id)}
                          </div>
                          {!isWide && <span className="text-xl font-serif font-bold text-[#39B54A]">{service.price} €</span>}
                        </div>

                        <h3 className="text-xl font-serif text-[#2C2C2C] mb-2">{getCleanTitle(service.title)}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.description}</p>

                        <div className="flex items-center gap-6 mt-auto">
                          <span className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                            {isWide ? <RefreshCcw className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
                            {isWide ? '3 SÉANCES' : `${service.duration} MIN`}
                          </span>
                          {isWide && <span className="text-xl font-serif font-bold text-[#39B54A]">{service.price} €</span>}
                        </div>
                      </div>
                      
                      {isWide && (
                         <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-2/5 justify-end items-center pr-8 opacity-20 pointer-events-none">
                            {/* Decorative element resembling screenshot interface */}
                            <div className="w-48 h-64 bg-white border border-gray-200 rounded-xl shadow-lg translate-x-4 translate-y-8 flex flex-col p-4 opacity-50">
                              <div className="w-1/2 h-2 bg-gray-200 rounded mb-4 mx-auto"></div>
                              <div className="w-full h-8 bg-gray-100 rounded mb-2"></div>
                              <div className="w-full h-8 bg-gray-100 rounded mb-2"></div>
                              <div className="w-full h-8 bg-gray-100 rounded mb-2"></div>
                            </div>
                         </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2 — Date & Time */}
          {step === 2 && (
            <div className="p-10">
              <button onClick={() => setStep(1)} className="text-[#39B54A] font-bold mb-6 flex items-center gap-1 text-sm hover:underline">← Retour</button>
              <h2 className="text-2xl font-bold mb-2">Choisissez une date</h2>
              <p className="text-gray-400 mb-8 text-sm">Prestation : <strong className="text-[#39B54A]">{selectedService?.title}</strong></p>

              {/* Date Picker */}
              <div className="grid grid-cols-7 gap-2 mb-10">
                {next14Days.map(date => {
                  const dayName = format(date, 'EEE', { locale: fr });
                  const dayNum = format(date, 'd');
                  const isSelected = selectedDate && format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
                  const isSunday = date.getDay() === 0;
                  return (
                    <button
                      key={date.toISOString()}
                      disabled={isSunday}
                      onClick={() => setSelectedDate(date)}
                      className={`p-3 rounded-2xl text-center transition-all duration-200 ${
                        isSunday ? 'opacity-30 cursor-not-allowed bg-gray-50' :
                        isSelected ? 'bg-[#39B54A] text-white shadow-md' :
                        'bg-[#FAFAF8] hover:bg-[#39B54A]/10 border border-gray-100'
                      }`}
                    >
                      <div className="text-xs uppercase font-bold opacity-70">{dayName}</div>
                      <div className="text-xl font-bold mt-1">{dayNum}</div>
                    </button>
                  );
                })}
              </div>

              {/* Time Slots */}
              {selectedDate && (
                <>
                  <h3 className="font-bold mb-4">Créneaux disponibles — {format(selectedDate, 'EEEE d MMMM', { locale: fr })}</h3>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                    {TIME_SLOTS.map(slot => (
                      <button
                        key={slot}
                        onClick={() => { setSelectedSlot(slot); setStep(3); }}
                        className={`py-3 rounded-xl text-sm font-bold border-2 transition-all duration-200 ${
                          selectedSlot === slot ? 'bg-[#39B54A] text-white border-[#39B54A]' :
                          'border-gray-200 hover:border-[#39B54A] hover:text-[#39B54A]'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </>
              )}
              {!selectedDate && (
                <div className="text-center py-8 text-gray-300 italic">Sélectionnez une date ci-dessus pour voir les créneaux.</div>
              )}
            </div>
          )}

          {/* STEP 3 — Form */}
          {step === 3 && (
            <div className="p-10">
              <button onClick={() => setStep(2)} className="text-[#39B54A] font-bold mb-6 flex items-center gap-1 text-sm hover:underline">← Retour</button>
              <h2 className="text-2xl font-bold mb-8">Vos informations</h2>

              <div className="bg-[#F5F3EE] rounded-2xl p-6 mb-8 grid grid-cols-3 divide-x divide-gray-200">
                <div className="text-center px-4">
                  <div className="text-2xl mb-1">{selectedService?.icon}</div>
                  <div className="text-xs text-gray-400">Prestation</div>
                  <div className="font-bold text-sm">{selectedService?.title}</div>
                </div>
                <div className="text-center px-4">
                  <div className="text-2xl mb-1">📅</div>
                  <div className="text-xs text-gray-400">Date</div>
                  <div className="font-bold text-sm">{selectedDate && format(selectedDate, 'dd MMM yyyy', { locale: fr })}</div>
                </div>
                <div className="text-center px-4">
                  <div className="text-2xl mb-1">🕐</div>
                  <div className="text-xs text-gray-400">Heure</div>
                  <div className="font-bold text-sm">{selectedSlot}</div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-1.5 text-gray-700">Prénom & Nom</label>
                    <input required value={clientInfo.name} onChange={e => setClientInfo({ ...clientInfo, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAFAF8] border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#39B54A] outline-none text-sm"
                      placeholder="Daniella Dupont"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1.5 text-gray-700">Téléphone</label>
                    <input required value={clientInfo.phone} onChange={e => setClientInfo({ ...clientInfo, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAFAF8] border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#39B54A] outline-none text-sm"
                      placeholder="+33 6 00 00 00 00"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1.5 text-gray-700">Email</label>
                  <input required type="email" value={clientInfo.email} onChange={e => setClientInfo({ ...clientInfo, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAFAF8] border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#39B54A] outline-none text-sm"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1.5 text-gray-700">Message ou précisions (optionnel)</label>
                  <textarea value={clientInfo.message} onChange={e => setClientInfo({ ...clientInfo, message: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 bg-[#FAFAF8] border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#39B54A] outline-none text-sm resize-none"
                    placeholder="Décrivez brièvement votre situation ou vos attentes..."
                  />
                </div>
                <button
                  disabled={submitting}
                  className="w-full py-4 bg-[#39B54A] text-white rounded-xl font-bold text-base hover:bg-[#3a4a2d] transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                  {submitting ? 'Confirmation en cours...' : `Confirmer la réservation — ${selectedService?.price} €`}
                </button>
              </form>
            </div>
          )}

          {/* STEP 4 — Success */}
          {step === 4 && (
            <div className="p-16 text-center">
              <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="text-green-500 w-12 h-12" />
              </div>
              <h2 className="text-4xl font-serif text-[#2C2C2C] mb-4">Rendez-vous confirmé !</h2>
              <p className="text-gray-500 mb-4 text-lg">
                Merci {clientInfo.name} ! 🎉
              </p>
              <p className="text-gray-400 mb-2">
                Votre séance <strong className="text-[#4A5C3A]">{selectedService?.title}</strong>
              </p>
              <p className="text-gray-400 mb-10">
                le <strong>{selectedDate && format(selectedDate, 'EEEE d MMMM yyyy', { locale: fr })}</strong> à <strong>{selectedSlot}</strong> est bien enregistrée.
              </p>
              <p className="text-gray-400 text-sm mb-12">Un email de confirmation vous a été envoyé à <strong>{clientInfo.email}</strong>.</p>
              <div className="flex gap-4 justify-center">
                <Link href="/" className="px-8 py-3 bg-[#4A5C3A] text-white rounded-xl font-bold hover:bg-[#3a4a2d] transition-colors">Retour à l'accueil</Link>
                <Link href="/boutique" className="px-8 py-3 bg-white border border-gray-200 text-gray-600 rounded-xl font-bold hover:border-[#4A5C3A] transition-colors">Voir la boutique</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
