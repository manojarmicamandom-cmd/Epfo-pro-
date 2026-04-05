/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  UserPlus, 
  RefreshCw, 
  FileText, 
  BookOpen, 
  MessageCircle, 
  X, 
  CheckCircle2, 
  Phone,
  Home,
  Grid,
  Info,
  User,
  ChevronRight,
  Languages
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Language = 'en' | 'hi';

interface Translation {
  headerTitle: string;
  headerSub: string;
  welcome: string;
  howHelp: string;
  offerLabel: string;
  offerTitle: string;
  offerSub: string;
  servicesTitle: string;
  seeAll: string;
  instantHelp: string;
  callManoj: string;
  chatWhatsApp: string;
  navHome: string;
  navServices: string;
  navAbout: string;
  applyNow: string;
  fullName: string;
  mobileNumber: string;
  uanNumber: string;
  submitRequest: string;
  cancel: string;
  success: string;
  successMsg: string;
  serviceCharge: string;
  uanActivation: string;
  uanActivationDesc: string;
  kycUpdate: string;
  kycUpdateDesc: string;
  claimFiling: string;
  claimFilingDesc: string;
  passbook: string;
  passbookDesc: string;
  nomination: string;
  nominationDesc: string;
  aboutTitle: string;
  aboutDesc: string;
  contactEmail: string;
  shopAddress: string;
  shopAddressVal: string;
}

const translations: Record<Language, Translation> = {
  en: {
    headerTitle: "Manoj CSC",
    headerSub: "EPFO Specialist",
    welcome: "Welcome back,",
    howHelp: "How can we help today?",
    offerLabel: "Current Offer",
    offerTitle: "Best Service Charges",
    offerSub: "Professional EPFO assistance starting at ₹40",
    servicesTitle: "Our Services",
    seeAll: "See All",
    instantHelp: "Need Instant Help?",
    callManoj: "Call Manoj directly",
    chatWhatsApp: "Chat on WhatsApp",
    navHome: "Home",
    navServices: "Services",
    navAbout: "About",
    applyNow: "Apply Now",
    fullName: "Full Name",
    mobileNumber: "Mobile Number",
    uanNumber: "UAN Number",
    submitRequest: "Submit Request",
    cancel: "Cancel",
    success: "Success!",
    successMsg: "Manoj will call you shortly.",
    serviceCharge: "Charge",
    uanActivation: "UAN Activation (Self Help)",
    uanActivationDesc: "Guide with live screen help.",
    kycUpdate: "KYC Update",
    kycUpdateDesc: "Update Aadhaar, PAN & Bank.",
    claimFiling: "Claim Filing",
    claimFilingDesc: "Withdrawal & Transfer help.",
    passbook: "Passbook",
    passbookDesc: "Check balance & passbook.",
    nomination: "Nomination Add/Approval",
    nominationDesc: "E-Nomination assistance.",
    aboutTitle: "About Manoj CSC",
    aboutDesc: "We are authorized CSC service providers specializing in EPFO and government digital services. Our mission is to provide transparent and efficient digital assistance to every citizen.",
    contactEmail: "Email Us",
    shopAddress: "Visit Our Shop",
    shopAddressVal: "CSC Center, Main Market, Near Bus Stand",
  },
  hi: {
    headerTitle: "मनोज सीएससी",
    headerSub: "ईपीएफओ विशेषज्ञ",
    welcome: "स्वागत है,",
    howHelp: "आज हम आपकी क्या मदद कर सकते हैं?",
    offerLabel: "वर्तमान ऑफर",
    offerTitle: "बेहतरीन सेवा शुल्क",
    offerSub: "₹40 से शुरू होने वाली पेशेवर ईपीएफओ सहायता",
    servicesTitle: "हमारी सेवाएं",
    seeAll: "सभी देखें",
    instantHelp: "तुरंत मदद चाहिए?",
    callManoj: "मनोज को सीधे कॉल करें",
    chatWhatsApp: "व्हाट्सएप पर चैट करें",
    navHome: "होम",
    navServices: "सेवाएं",
    navAbout: "बारे में",
    applyNow: "अभी आवेदन करें",
    fullName: "पूरा नाम",
    mobileNumber: "मोबाइल नंबर",
    uanNumber: "यूएएन नंबर",
    submitRequest: "अनुरोध भेजें",
    cancel: "रद्द करें",
    success: "सफल!",
    successMsg: "मनोज जल्द ही आपसे संपर्क करेंगे।",
    serviceCharge: "शुल्क",
    uanActivation: "UAN एक्टिवेशन (सेल्फ हेल्प)",
    uanActivationDesc: "लाइव स्क्रीन गाइड के साथ मदद।",
    kycUpdate: "केवाईसी अपडेट",
    kycUpdateDesc: "आधार, पैन और बैंक अपडेट करें।",
    claimFiling: "क्लेम फाइलिंग",
    claimFilingDesc: "निकासी और ट्रांसफर में मदद।",
    passbook: "पासबुक",
    passbookDesc: "बैलेंस और पासबुक चेक करें।",
    nomination: "नॉमिनेशन जोड़ें/अनुमोदन",
    nominationDesc: "ई-नॉमिनेशन सहायता।",
    aboutTitle: "मनोज सीएससी के बारे में",
    aboutDesc: "हम ईपीएफओ और सरकारी डिजिटल सेवाओं में विशेषज्ञता रखने वाले अधिकृत सीएससी सेवा प्रदाता हैं। हमारा मिशन हर नागरिक को पारदर्शी और कुशल डिजिटल सहायता प्रदान करना है।",
    contactEmail: "हमें ईमेल करें",
    shopAddress: "हमारी दुकान पर आएं",
    shopAddressVal: "सीएससी केंद्र, मुख्य बाजार, बस स्टैंड के पास",
  }
};

interface Service {
  id: string;
  titleKey: keyof Translation;
  descKey: keyof Translation;
  icon: React.ReactNode;
  charge: number;
  color: string;
}

const SERVICES: Service[] = [
  {
    id: 'uan-activation',
    titleKey: 'uanActivation',
    descKey: 'uanActivationDesc',
    icon: <UserPlus className="w-6 h-6" />,
    charge: 40,
    color: 'bg-blue-500'
  },
  {
    id: 'kyc-update',
    titleKey: 'kycUpdate',
    descKey: 'kycUpdateDesc',
    icon: <RefreshCw className="w-6 h-6" />,
    charge: 100,
    color: 'bg-indigo-500'
  },
  {
    id: 'nomination',
    titleKey: 'nomination',
    descKey: 'nominationDesc',
    icon: <ShieldCheck className="w-6 h-6" />,
    charge: 50,
    color: 'bg-purple-500'
  },
  {
    id: 'claim-filing',
    titleKey: 'claimFiling',
    descKey: 'claimFilingDesc',
    icon: <FileText className="w-6 h-6" />,
    charge: 100,
    color: 'bg-emerald-500'
  },
  {
    id: 'passbook',
    titleKey: 'passbook',
    descKey: 'passbookDesc',
    icon: <BookOpen className="w-6 h-6" />,
    charge: 100,
    color: 'bg-orange-500'
  }
];

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    uan: ''
  });

  const t = translations[lang];

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsFormOpen(true);
    setIsSubmitted(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsFormOpen(false);
      setFormData({ name: '', mobile: '', uan: '' });
    }, 3000);
  };

  const toggleLang = () => setLang(prev => prev === 'en' ? 'hi' : 'en');

  const whatsappNumber = "919669839619";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lang === 'en' ? 'Hi Manoj, I need help with EPFO services.' : 'नमस्ते मनोज, मुझे ईपीएफओ सेवाओं में मदद चाहिए।')}`;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-24 max-w-md mx-auto shadow-2xl relative border-x border-slate-200">
      {/* Mobile App Header */}
      <header className="bg-blue-900 text-white pt-12 pb-6 px-6 sticky top-0 z-30 shadow-md rounded-b-[2rem]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight">{t.headerTitle}</h1>
              <p className="text-blue-200 text-xs">{t.headerSub}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={toggleLang}
              className="px-3 py-1.5 bg-white/10 rounded-full flex items-center gap-1.5 hover:bg-white/20 transition-colors text-xs font-bold border border-white/10"
            >
              <Languages className="w-3.5 h-3.5" />
              {lang === 'en' ? 'हिन्दी' : 'English'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="px-6 py-8">
        {activeTab === 'home' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Quick Stats/Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-5 rounded-3xl text-white mb-8 shadow-lg shadow-blue-200">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-blue-100 text-xs font-medium uppercase tracking-wider mb-1">{t.offerLabel}</p>
                  <h3 className="text-lg font-bold">{t.offerTitle}</h3>
                  <p className="text-blue-100 text-xs">{t.offerSub}</p>
                </div>
                <div className="bg-white/20 p-3 rounded-2xl">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
              </div>
            </div>

            {/* Services Grid - App Style */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-slate-800">{t.servicesTitle}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {SERVICES.slice(0, 4).map((service) => (
                  <motion.button
                    key={service.id}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleServiceClick(service)}
                    className="bg-white p-5 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-start text-left hover:shadow-md transition-all"
                  >
                    <div className={`${service.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-100`}>
                      {service.icon}
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm mb-1">{t[service.titleKey]}</h4>
                    <p className="text-[10px] text-slate-400 leading-tight mb-3">{t[service.descKey]}</p>
                    <div className="mt-auto flex justify-between items-center w-full">
                      <span className="text-blue-600 font-bold text-xs">{t.serviceCharge}: ₹{service.charge}</span>
                      <ChevronRight className="w-4 h-4 text-slate-300" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm mb-8">
              <h3 className="font-bold text-slate-800 mb-4">{t.instantHelp}</h3>
              <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-2xl mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">{t.callManoj}</p>
                  <p className="font-bold text-slate-800">+91 96698 39619</p>
                </div>
              </div>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-100"
              >
                <MessageCircle className="w-5 h-5" /> {t.chatWhatsApp}
              </a>
            </div>
          </motion.div>
        )}

        {activeTab === 'services' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-6">{t.servicesTitle}</h3>
            <div className="grid grid-cols-1 gap-4">
              {SERVICES.map((service) => (
                <motion.button
                  key={service.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleServiceClick(service)}
                  className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-5 text-left hover:shadow-md transition-all w-full"
                >
                  <div className={`${service.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-100 shrink-0`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 text-base mb-1">{t[service.titleKey]}</h4>
                    <p className="text-xs text-slate-400 leading-tight">{t[service.descKey]}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-blue-600 font-bold text-sm block">{t.serviceCharge}</span>
                    <span className="text-slate-800 font-black text-lg">₹{service.charge}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'about' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-900 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-blue-900/20">
                <ShieldCheck className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">{t.aboutTitle}</h3>
              <p className="text-slate-500 leading-relaxed">{t.aboutDesc}</p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-800">{t.contactEmail}</h4>
                </div>
                <a href="mailto:mjenterprizesco@gmail.com" className="text-blue-600 font-bold text-lg break-all">
                  mjenterprizesco@gmail.com
                </a>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                    <Home className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-800">{t.shopAddress}</h4>
                </div>
                <p className="text-slate-600 font-medium">
                  {t.shopAddressVal}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 backdrop-blur-xl border-t border-slate-100 px-8 py-4 flex justify-around items-center z-40 rounded-t-[2.5rem] shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.05)]">
        <button 
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'home' ? 'text-blue-600 scale-110' : 'text-slate-400'}`}
        >
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-bold">{t.navHome}</span>
        </button>
        <div className="relative -top-8">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleServiceClick(SERVICES[0])}
            className="w-14 h-14 bg-blue-900 text-white rounded-full flex items-center justify-center shadow-xl shadow-blue-200 border-4 border-white"
          >
            <UserPlus className="w-6 h-6" />
          </motion.button>
        </div>
        <button 
          onClick={() => setActiveTab('about')}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'about' ? 'text-blue-600 scale-110' : 'text-slate-400'}`}
        >
          <Info className="w-6 h-6" />
          <span className="text-[10px] font-bold">{t.navAbout}</span>
        </button>
      </nav>

      {/* Lead Generation Modal - App Style */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-end justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-white w-full max-w-md rounded-t-[3rem] shadow-2xl relative z-10 overflow-hidden pb-10"
            >
              <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mt-4 mb-6" />
              
              <div className="px-8 pb-6">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">{t.applyNow}</h3>
                    <p className="text-blue-600 font-medium">{t[selectedService?.titleKey || 'uanActivation']}</p>
                    <p className="text-slate-400 text-xs mt-1 font-bold">{t.serviceCharge}: ₹{selectedService?.charge}</p>
                  </div>
                  <div className={`${selectedService?.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-100`}>
                    {selectedService?.icon}
                  </div>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8"
                    >
                      <CheckCircle2 className="w-14 h-14" />
                    </motion.div>
                    <h4 className="text-2xl font-bold text-slate-800 mb-3">{t.success}</h4>
                    <p className="text-slate-500">{t.successMsg}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">{t.fullName}</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-slate-50 px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">{t.mobileNumber}</label>
                      <input
                        required
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="+91 96698 39619"
                        className="w-full bg-slate-50 px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">{t.uanNumber}</label>
                      <input
                        type="text"
                        name="uan"
                        value={formData.uan}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012"
                        className="w-full bg-slate-50 px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium"
                      />
                    </div>
                    <div className="pt-4 flex flex-col gap-4">
                      <button
                        type="submit"
                        className="w-full bg-blue-900 text-white py-5 rounded-2xl font-bold shadow-xl shadow-blue-900/20 active:scale-95 transition-all"
                      >
                        {t.submitRequest}
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsFormOpen(false)}
                        className="w-full py-4 text-slate-400 font-bold text-sm"
                      >
                        {t.cancel}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
