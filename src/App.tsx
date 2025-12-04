import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Moon, Sun, Check, ArrowRight, Star, 
  Code, Zap, Search, Layout, Smartphone, Mail, 
  Instagram, Linkedin, Globe, MessageCircle,
  Clock, Shield, Users, Hammer, Heart, ShoppingBag, 
  Utensils, BookOpen, Briefcase, BarChart, Server, 
  PenTool, Database, Cpu, Monitor, TrendingUp,
  Lock, ChevronRight, Loader, Construction,
  XCircle, CheckCircle, ExternalLink, CreditCard, Gift,
  EyeOff, Phone, MapPin
} from 'lucide-react';

// --- Interfaces & Types ---

type PageType = 'home' | 'services' | 'portfolio' | 'about' | 'contact' | 'book' | 'privacy';

interface PageProps {
  setPage: (page: PageType) => void;
  targetSection?: string | null; // Added for deep linking
}

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

// --- Components ---

const BrandLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 85V55H35V85H20Z" className="fill-neutral-900 dark:fill-white" />
    <path d="M42.5 85V40H57.5V85H42.5Z" className="fill-neutral-900 dark:fill-white" />
    <path d="M65 85V25H80V85H65Z" className="fill-neutral-900 dark:fill-white" />
    <path d="M10 60 L35 35 L50 50 L85 15" stroke="#7c3aed" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M85 15 L70 15 M85 15 L85 30" stroke="#7c3aed" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button', disabled = false }: ButtonProps) => {
  const baseStyle = "px-6 py-3 rounded-none font-bold uppercase tracking-wide text-sm transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed border";
  
  const variants: Record<string, string> = {
    primary: "bg-violet-600 hover:bg-violet-700 border-violet-600 text-white shadow-lg shadow-violet-900/20",
    secondary: "bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900",
    outline: "border-violet-600 text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20",
  };

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const Card = ({ children, className = "", highlight = false }: { children: React.ReactNode; className?: string; highlight?: boolean }) => (
  <div className={`p-8 rounded-none transition-all duration-300 ${
    highlight 
      ? 'bg-white dark:bg-neutral-900 ring-1 ring-violet-500 shadow-2xl shadow-violet-500/10 z-10' 
      : 'bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:border-violet-500/50'
    } ${className}`}>
    {children}
  </div>
);

// --- Pages ---

const Home = ({ setPage }: PageProps) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    
    {/* 1. Agency Hero Section */}
    <section className="relative pt-40 pb-32 px-6 flex flex-col items-center text-center overflow-hidden bg-white dark:bg-black">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-100 via-transparent to-transparent dark:from-neutral-800/20"></div>
      
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <motion.div 
        initial={{ y: 30, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono uppercase tracking-widest text-neutral-600 dark:text-neutral-400 mb-8">
          <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span> Melbourne Based Agency
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-neutral-900 dark:text-white mb-8 leading-[0.9]">
          WE BUILD <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">DIGITAL EMPIRES</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Premium web development & automation for Australian businesses ready to scale. No fluff. Just results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-0 justify-center items-center border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-2 w-fit mx-auto shadow-xl">
          <Button onClick={() => setPage('contact')} className="w-full sm:w-auto h-12 text-base border-0">
            Start Project
          </Button>
          <Button variant="secondary" onClick={() => window.open('https://wa.me/61400123456')} className="w-full sm:w-auto h-12 text-base border-0">
            WhatsApp
          </Button>
        </div>
      </motion.div>
    </section>

    {/* 2. Stats Strip */}
    <div className="bg-neutral-50 dark:bg-neutral-950 border-y border-neutral-200 dark:border-neutral-900">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-200 dark:divide-neutral-900">
        {[
          { label: "Turnaround", val: "7-14 DAYS" },
          { label: "Support", val: "LOCAL AUS" },
          { label: "Security", val: "ENTERPRISE" },
          { label: "Growth", val: "SEO READY" }
        ].map((item, i) => (
          <div key={i} className="py-12 px-6 text-center">
            <div className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-2">{item.label}</div>
            <div className="text-xl md:text-2xl font-black text-neutral-900 dark:text-white">{item.val}</div>
          </div>
        ))}
      </div>
    </div>

    {/* 3. Problem / Solution Split */}
    <Section>
      <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left: Problem */}
        <div>
          <h2 className="text-4xl font-bold mb-8 text-neutral-900 dark:text-white tracking-tight">The Agency Gap.</h2>
          <div className="space-y-8">
            {[
              "Agencies charging $10k+ for basic sites.",
              "DIY builders that look cheap and break.",
              "No support when things go wrong.",
              "Confusing tech jargon used to upsell."
            ].map((prob, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 text-neutral-600 dark:text-neutral-400 group"
              >
                <div className="mt-1 w-6 h-6 border border-neutral-300 dark:border-neutral-700 flex items-center justify-center shrink-0 group-hover:border-red-500 transition-colors">
                  <X className="w-3 h-3 text-neutral-400 group-hover:text-red-500" />
                </div>
                <span className="text-lg">{prob}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Solution */}
        <div className="bg-neutral-900 text-white p-10 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600 blur-[100px] opacity-50"></div>
          <h2 className="text-3xl font-bold mb-8 relative z-10">The Build50 Standard</h2>
          <div className="space-y-6 relative z-10">
            {[
              "Fixed pricing. No surprises.",
              "Enterprise-grade tech stack.",
              "Designed to convert traffic.",
              "Managed for you monthly."
            ].map((sol, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <CheckCircle className="w-5 h-5 text-violet-500" />
                <span className="font-bold text-lg">{sol}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-12">
            <Button variant="primary" className="w-full border-0" onClick={() => setPage('services')}>View Capabilities</Button>
          </div>
        </div>
      </div>
    </Section>

    {/* 4. Services Grid */}
    <Section className="bg-neutral-100 dark:bg-neutral-900/30">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <div className="text-violet-600 font-bold tracking-widest text-sm mb-2">CAPABILITIES</div>
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">Full Cycle Digital.</h2>
          </div>
          <button onClick={() => setPage('services')} className="text-neutral-900 dark:text-white hover:text-violet-600 transition-colors flex items-center gap-2 font-bold border-b-2 border-transparent hover:border-violet-600 pb-1">
            Explore Services <ArrowRight className="w-4 h-4"/>
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-1">
          {[
            { icon: Globe, title: "Websites", desc: "High-performance React builds." },
            { icon: TrendingUp, title: "SEO", desc: "Technical & Content strategy." },
            { icon: Smartphone, title: "Social", desc: "Multi-channel management." },
            { icon: Zap, title: "Automation", desc: "CRM & Workflow logic." }
          ].map((srv, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-black p-8 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors cursor-pointer group border border-neutral-200 dark:border-neutral-800"
              onClick={() => setPage('services')}
            >
              <srv.icon className="w-8 h-8 text-neutral-400 group-hover:text-violet-600 mb-6 transition-colors" />
              <h3 className="font-bold text-xl mb-2">{srv.title}</h3>
              <p className="text-neutral-500 text-sm">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
    </Section>

    {/* 5. CTA */}
    <div className="bg-black text-white py-32 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">READY TO SCALE?</h2>
        <p className="text-xl text-neutral-400 mb-12">Limited slots available for the upcoming month.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button onClick={() => setPage('contact')} className="h-16 px-8 text-lg bg-white text-black hover:bg-neutral-200 border-0">
            Book Consultation
          </Button>
          <Button variant="outline" onClick={() => window.open('https://wa.me/61400123456')} className="h-16 px-8 text-lg border-white text-white hover:bg-white hover:text-black">
            WhatsApp
          </Button>
        </div>
      </div>
    </div>

  </motion.div>
);

const Services = ({ setPage, targetSection }: PageProps) => {
  const [appDevPricingMode, setAppDevPricingMode] = useState<'invoice' | 'cash'>('invoice');
  const [webPricingMode, setWebPricingMode] = useState<'invoice' | 'cash'>('invoice');

  useEffect(() => {
    if (targetSection) {
      const element = document.getElementById(targetSection);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
        window.scrollTo(0, 0);
    }
  }, [targetSection]);

  const webPackages = [
    { 
      name: 'Single Page', 
      price: webPricingMode === 'invoice' ? '$299' : '$199', 
      features: ['1 modern landing page', 'Services section', 'Image gallery', 'Contact form', 'Click-to-call button', 'Google Maps', 'Mobile-responsive', '3 Months FREE Hosting'] 
    },
    { 
      name: 'Multi-Page', 
      price: webPricingMode === 'invoice' ? '$449' : '$349', 
      highlight: true,
      features: ['3–4 pages (Home, About, Services)', 'Gallery & Testimonials', 'Lead contact form', 'SEO-ready structure', 'Mobile-friendly layout', '3 Months FREE Hosting'] 
    },
    { 
      name: 'Premium', 
      price: webPricingMode === 'invoice' ? '$699' : '$549', 
      features: ['Up to 6 pages', 'Premium layout & animations', 'Advanced lead/quote forms', 'Polished branding & visuals', 'SEO structure', '3 Months FREE Hosting'] 
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-24 pb-12">
      <Section>
        {/* HERO SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-none text-sm font-bold mb-8 uppercase tracking-wider">
             <Gift className="w-4 h-4" /> 3 Months FREE Hosting
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-neutral-900 dark:text-white leading-tight tracking-tighter">
            TRANSPARENT. <br /><span className="text-violet-600">POWERFUL.</span>
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto font-light">
             Enterprise-grade digital solutions, priced for growth.
          </p>
        </div>

        {/* WEBSITE PACKAGES */}
        <div className="mb-24" id="web-design">
          <div className="max-w-7xl mx-auto">
             <div className="p-8 md:p-12 bg-black text-white text-center relative overflow-hidden transition-all duration-300 border border-neutral-800">
                <div className="absolute top-0 right-0 w-64 h-64 bg-violet-900/50 blur-[80px]"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <Globe className="w-12 h-12 text-violet-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 uppercase">Web Development</h3>
                  
                  {/* Web Pricing Toggle */}
                  <div className="flex justify-center items-center gap-4 mb-10 bg-neutral-900 w-fit mx-auto p-1 rounded-full border border-neutral-800">
                    <button 
                      onClick={() => setWebPricingMode('invoice')}
                      className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${webPricingMode === 'invoice' ? 'bg-violet-600 text-white shadow-lg' : 'text-neutral-400 hover:text-white'}`}
                    >
                      Standard Invoice
                    </button>
                    <button 
                      onClick={() => setWebPricingMode('cash')}
                      className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${webPricingMode === 'cash' ? 'bg-violet-600 text-white shadow-lg' : 'text-neutral-400 hover:text-white'}`}
                    >
                      Direct Settlement
                    </button>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-0 border border-neutral-800 bg-black text-left">
                    {webPackages.map((pkg, i) => (
                      <div key={pkg.name} className={`p-8 flex flex-col ${pkg.highlight ? 'bg-neutral-900 relative z-10 ring-1 ring-inset ring-violet-500' : 'hover:bg-neutral-900/50'} ${i !== 2 ? 'border-b lg:border-b-0 lg:border-r border-neutral-800' : ''}`}>
                        {pkg.highlight && <div className="absolute top-0 right-0 bg-violet-600 text-white text-[10px] font-bold px-2 py-1 uppercase">Recommended</div>}
                        <h3 className="text-lg font-bold mb-2 uppercase tracking-wide text-neutral-500">{pkg.name}</h3>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={pkg.price}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl font-black mb-6 text-white tracking-tighter"
                          >
                            {pkg.price}
                          </motion.div>
                        </AnimatePresence>
                        <ul className="space-y-4 mb-8 flex-grow">
                          {pkg.features.map(f => (
                            <li key={f} className="flex items-start text-sm gap-3 text-neutral-400">
                              <Check className="w-4 h-4 text-violet-600 mt-0.5 shrink-0" /> {f}
                            </li>
                          ))}
                        </ul>
                        <Button variant={pkg.highlight ? 'primary' : 'outline'} className="w-full" onClick={() => setPage('contact')}>Select Plan</Button>
                      </div>
                    ))}
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* ADVANCED SOLUTIONS */}
        <div className="mb-24">
           <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4 mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-4">
             <div className="flex items-center gap-4">
                <ShoppingBag className="w-8 h-8 text-violet-600" /> 
                <h2 className="text-3xl font-bold uppercase tracking-tight text-white">Advanced Solutions</h2>
             </div>
             {/* Dynamic Text for Advanced Solutions */}
             <div className="text-xs text-neutral-500 font-mono hidden md:block uppercase tracking-wider">
               {webPricingMode === 'invoice' ? 'Standard Invoice Pricing' : 'Direct Settlement Pricing'}
             </div>
           </div>
           <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:border-violet-600 transition-colors">
                 <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold uppercase text-white">E-Commerce</h3>
                    <span className="text-violet-600 font-mono text-sm bg-violet-50 dark:bg-violet-900/20 px-3 py-1">CUSTOM QUOTE</span>
                 </div>
                 <p className="text-neutral-500 text-sm mb-6">Pricing depends on products, payment gateways, inventory systems, and overall complexity.</p>
                 <Button variant="outline" className="w-full" onClick={() => setPage('contact')}>Request Quote</Button>
              </Card>
              <Card className="hover:border-violet-600 transition-colors">
                 <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold uppercase text-white">Restaurant</h3>
                    <AnimatePresence mode="wait">
                      <motion.span 
                        key={webPricingMode}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-2xl font-black text-white"
                      >
                        {webPricingMode === 'invoice' ? '$749' : '$599'}
                      </motion.span>
                    </AnimatePresence>
                 </div>
                 <ul className="space-y-2 mb-6 text-sm text-neutral-300">
                    <li className="flex gap-2"><Check className="w-4 h-4 text-violet-500"/> Digital menu & Gallery</li>
                    <li className="flex gap-2"><Check className="w-4 h-4 text-violet-500"/> Contact & location map</li>
                    <li className="flex gap-2"><Check className="w-4 h-4 text-violet-500"/> Delivery links & Mobile optimized</li>
                    <li className="flex gap-2"><Check className="w-4 h-4 text-violet-500"/> 3 Months FREE Hosting</li>
                 </ul>
                 <Button variant="outline" className="w-full" onClick={() => setPage('contact')}>Get Started</Button>
              </Card>
           </div>
        </div>

        {/* APP DEVELOPMENT */}
        <div className="mb-24" id="app-dev">
           <div className="max-w-4xl mx-auto">
             <div className="p-12 bg-black text-white text-center relative overflow-hidden transition-all duration-300 border border-neutral-800">
                <div className="absolute top-0 right-0 w-64 h-64 bg-violet-900/50 blur-[80px]"></div>
                
                <div className="relative z-10">
                  <Smartphone className="w-12 h-12 text-violet-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-6 uppercase">Custom Mobile App Development</h3>
                  
                  {/* Pricing Toggle */}
                  <div className="flex justify-center items-center gap-4 mb-10 bg-neutral-900 w-fit mx-auto p-1 rounded-full border border-neutral-800">
                    <button 
                      onClick={() => setAppDevPricingMode('invoice')}
                      className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${appDevPricingMode === 'invoice' ? 'bg-violet-600 text-white shadow-lg' : 'text-neutral-400 hover:text-white'}`}
                    >
                      Standard Invoice
                    </button>
                    <button 
                      onClick={() => setAppDevPricingMode('cash')}
                      className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${appDevPricingMode === 'cash' ? 'bg-violet-600 text-white shadow-lg' : 'text-neutral-400 hover:text-white'}`}
                    >
                      Direct Settlement
                    </button>
                  </div>

                  {/* Pricing Display */}
                  <AnimatePresence mode="wait">
                    {appDevPricingMode === 'invoice' ? (
                      <motion.div
                        key="invoice"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mb-8"
                      >
                        <div className="text-6xl font-black mb-4 tracking-tighter">$4,999</div>
                        
                        <div className="grid md:grid-cols-2 gap-4 max-w-lg mx-auto text-left text-sm bg-neutral-900/50 p-6 rounded-lg border border-neutral-800">
                           <div className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-green-500 shrink-0" />
                              <div><strong className="text-white">Tax Invoice Provided</strong><br/><span className="text-neutral-500 text-xs">GST Compliant</span></div>
                           </div>
                           <div className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-green-500 shrink-0" />
                              <div><strong className="text-white">1 Year Free Maintenance</strong><br/><span className="text-neutral-500 text-xs">$2,400 Value included</span></div>
                           </div>
                           <div className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-green-500 shrink-0" />
                              <div><strong className="text-white">Full Training Included</strong><br/><span className="text-neutral-500 text-xs">Handover & Docs</span></div>
                           </div>
                           <div className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-green-500 shrink-0" />
                              <div><strong className="text-white">Secure Payment</strong><br/><span className="text-neutral-500 text-xs">Bank Transfer / Card</span></div>
                           </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="cash"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mb-8"
                      >
                        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                           {/* Base Option */}
                           <div className="bg-neutral-900 p-6 border border-neutral-800 rounded-lg">
                              <div className="text-neutral-400 text-xs font-bold uppercase mb-2">Base Build</div>
                              <div className="text-4xl font-black mb-2 text-white">$2,975</div>
                              <div className="text-xs text-neutral-500 mb-4">No Maintenance Included</div>
                              <ul className="text-left space-y-2 text-sm text-neutral-400">
                                <li className="flex gap-2"><Check className="w-4 h-4 text-violet-500"/> Full Development</li>
                                <li className="flex gap-2"><Check className="w-4 h-4 text-violet-500"/> Training Included</li>
                                <li className="flex gap-2 opacity-50"><X className="w-4 h-4"/> No Invoice</li>
                              </ul>
                           </div>

                           {/* With Maintenance Option */}
                           <div className="bg-neutral-900 p-6 border-2 border-violet-600 rounded-lg relative overflow-hidden">
                              <div className="absolute top-0 right-0 bg-violet-600 text-white text-[10px] font-bold px-2 py-1">BEST VALUE</div>
                              <div className="text-violet-400 text-xs font-bold uppercase mb-2">Build + 1 Year Maintenance</div>
                              <div className="text-4xl font-black mb-2 text-white">$3,275</div>
                              <div className="text-xs text-neutral-500 mb-4">Includes $2,400 worth of maintenance</div>
                              <ul className="text-left space-y-2 text-sm text-neutral-400">
                                <li className="flex gap-2"><Check className="w-4 h-4 text-green-500"/> All Base Features</li>
                                <li className="flex gap-2"><Check className="w-4 h-4 text-green-500"/> 12 Months Support</li>
                                <li className="flex gap-2"><Check className="w-4 h-4 text-green-500"/> Priority Fixes</li>
                              </ul>
                           </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <p className="text-neutral-400 mb-8 max-w-2xl mx-auto border-t border-neutral-800 pt-6 mt-8">
                    One of the most affordable full-scale app development solutions in the industry, without compromising on quality, performance, or security.
                  </p>
                  
                  <Button className="w-full md:w-auto mx-auto border-white text-white hover:bg-white hover:text-black" onClick={() => setPage('contact')}>Discuss Your App Idea</Button>
                </div>
             </div>
           </div>
        </div>

        {/* WEBSITE CARE */}
        <div className="mb-24" id="care-plans">
           <div className="flex items-end gap-4 mb-8 border-b border-neutral-800 pb-4">
             <Shield className="w-8 h-8 text-violet-600" /> 
             <h2 className="text-3xl font-bold uppercase tracking-tight text-white">Care Plans</h2>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                 <h3 className="text-xl font-bold mb-2 uppercase text-white">Web Basic</h3>
                 <div className="text-3xl font-black mb-4 text-white">$30<span className="text-sm font-normal text-neutral-500">/mo</span></div>
                 <ul className="space-y-2 text-sm text-neutral-300 mb-6">
                    <li>• 2 edits per month</li>
                    <li>• Updates & Bug fixes</li>
                    <li>• Priority support</li>
                    <li>• Hosting included (if site built by us)</li>
                 </ul>
                 <Button variant="secondary" className="w-full" onClick={() => setPage('contact')}>Subscribe</Button>
              </Card>
              <Card highlight>
                 <div className="absolute top-0 right-0 bg-violet-600 text-white text-[10px] font-bold px-2 py-1 uppercase">Recommended</div>
                 <h3 className="text-xl font-bold mb-2 uppercase text-white">Web Full Care</h3>
                 <div className="text-3xl font-black mb-4 text-white">$60<span className="text-sm font-normal text-neutral-500">/mo</span></div>
                 <ul className="space-y-2 text-sm text-neutral-300 mb-6">
                    <li>• Unlimited edits & Updates</li>
                    <li>• Bug fixes & Priority support</li>
                    <li>• Hosting included</li>
                    <li>• Ongoing improvements</li>
                 </ul>
                 <Button className="w-full" onClick={() => setPage('contact')}>Subscribe</Button>
              </Card>
              {/* New App Care Plan */}
              <Card className="border-violet-600/50 hover:border-violet-600 transition-colors relative">
                 <div className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold px-2 py-1 uppercase">App Only</div>
                 <h3 className="text-xl font-bold mb-2 uppercase text-white">App Maintenance</h3>
                 <div className="text-3xl font-black mb-1 text-white">$200<span className="text-sm font-normal text-neutral-500">/mo</span></div>
                 <div className="text-xs font-bold text-green-600 mb-4">OR $1,000 / Year (Save $1,400)</div>
                 <ul className="space-y-2 text-sm text-neutral-300 mb-6">
                    <li>• App Store Compliance</li>
                    <li>• iOS & Android Updates</li>
                    <li>• Server & API Maintenance</li>
                    <li>• Critical Bug Fixes</li>
                 </ul>
                 <Button variant="outline" className="w-full" onClick={() => setPage('contact')}>Subscribe</Button>
              </Card>
           </div>
        </div>

        {/* BRANDING & SEO */}
        <div className="grid md:grid-cols-2 gap-12 mb-24" id="branding">
           <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 uppercase text-white"><PenTool className="w-6 h-6 text-violet-600" /> Branding</h2>
              <div className="space-y-4">
                 <div className="flex justify-between items-center p-4 bg-neutral-900 border border-neutral-800">
                    <span className="font-bold text-white">Logo Design</span>
                    <span className="font-mono font-bold text-violet-600">$50</span>
                 </div>
                 <div className="p-4 bg-neutral-900 border border-neutral-800">
                    <div className="flex justify-between items-center mb-2">
                       <span className="font-bold text-white">Complete Branding Kit</span>
                       <span className="font-mono font-bold text-violet-600">$129</span>
                    </div>
                    <p className="text-xs text-neutral-500">Logo, Colours, Fonts, Email signature, Profile pictures, Banners.</p>
                 </div>
              </div>
           </div>
           <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 uppercase text-white"><Search className="w-6 h-6 text-violet-600" /> SEO Services</h2>
              <div className="space-y-4">
                 <div className="p-4 bg-neutral-900 border border-neutral-800">
                    <div className="flex justify-between items-center mb-2">
                       <span className="font-bold text-white">Basic SEO Setup</span>
                       <span className="font-mono font-bold text-violet-600">$50</span>
                    </div>
                    <p className="text-xs text-neutral-500">Meta titles, Local SEO structure, Search engine indexing.</p>
                 </div>
                 <div className="p-4 bg-neutral-900 border border-neutral-800">
                    <div className="flex justify-between items-center mb-2">
                       <span className="font-bold text-white">Monthly SEO</span>
                       <span className="font-mono font-bold text-violet-600">$50/mo</span>
                    </div>
                    <p className="text-xs text-neutral-500">Keyword tracking, Monthly optimisation, Reporting.</p>
                 </div>
              </div>
           </div>
        </div>

        {/* ADD-ONS */}
        <div className="mb-24">
           <h2 className="text-xl font-bold mb-6 text-center uppercase tracking-widest text-neutral-500">Additional Services</h2>
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800 border border-neutral-800">
              {[
                { name: "Domain Setup", price: "$15", note: "Client pays domain cost" },
                { name: "Business Email", price: "$50", note: "Professional setup" },
                { name: "Booking System", price: "$30-$50", note: "Based on complexity" },
                { name: "Extra Pages", price: "$20-$50", note: "Per additional page" },
              ].map((addon, i) => (
                 <div key={i} className="p-6 bg-neutral-900 text-center">
                    <div className="font-bold mb-1 text-white">{addon.name}</div>
                    <div className="text-violet-600 font-bold mb-1">{addon.price}</div>
                    <div className="text-xs text-neutral-500">{addon.note}</div>
                 </div>
              ))}
           </div>
        </div>

        {/* POLICIES & TERMS */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
           <div className="p-8 bg-neutral-900/50 border border-neutral-800">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 uppercase text-white"><Server className="w-5 h-5 text-violet-600" /> Hosting Policy</h3>
              <div className="space-y-4 text-sm text-neutral-300">
                 <p><span className="font-bold text-violet-600">🎁 3 Months FREE Hosting</span> for all simple websites.</p>
                 <p>After 3 months: <strong>$10/mo</strong> (simple) or <strong>$20/mo</strong> (complex).</p>
                 <p className="italic text-xs text-neutral-500">Note: Hosting is NOT free for complex systems like E-commerce or Restaurant platforms.</p>
                 <div className="pt-2 border-t border-neutral-800">
                    <p className="text-xs">Options: Stay with us or use your own provider.</p>
                 </div>
              </div>
           </div>
           <div className="p-8 bg-neutral-900/50 border border-neutral-800">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 uppercase text-white"><CreditCard className="w-5 h-5 text-violet-600" /> Payment Terms</h3>
              <ul className="space-y-3 text-sm text-neutral-300">
                 <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> 50% upfront before work begins</li>
                 <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> 50% on completion</li>
              </ul>
           </div>
        </div>

        {/* CTA */}
        <div className="text-center">
           <Button className="mx-auto h-16 px-10 text-lg" onClick={() => setPage('contact')}>Get Custom Quote</Button>
        </div>

      </Section>
    </motion.div>
  );
};

// --- Portfolio Component (Updated with blurred Work In Progress style) ---
const Portfolio = ({ setPage }: PageProps) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-24 pb-12">
    <Section>
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-white uppercase tracking-tighter">
          Selected Works
        </h1>
        <p className="text-xl text-neutral-500 mb-8 max-w-2xl mx-auto">
          A showcase of our recent digital deployments.
        </p>
      </div>
      
      {/* Portfolio Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
         {[
           "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
           "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
           "https://images.unsplash.com/photo-1481487484168-9b930d5b7d63?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
           "https://images.unsplash.com/photo-1555421689-492a18d9c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
         ].map((imgSrc, i) => (
           <div key={i} className="group relative bg-neutral-800 h-80 overflow-hidden border border-neutral-800">
             {/* The blurred image */}
             <img 
               src={imgSrc} 
               alt="Project" 
               className="w-full h-full object-cover blur-[12px] scale-110 opacity-60 transition-transform duration-700 group-hover:scale-125"
             />
             
             {/* Overlay Content */}
             <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 z-10">
               <div className="bg-black/80 backdrop-blur-md px-6 py-3 border border-white/10 flex items-center gap-3">
                 <EyeOff className="w-4 h-4 text-violet-400" />
                 <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">
                   Work In Progress
                 </span>
               </div>
               <p className="text-white/60 text-xs mt-3 uppercase tracking-wider font-medium">Confidential Client</p>
             </div>

             {/* Hover effect border */}
             <div className="absolute inset-0 border-2 border-transparent group-hover:border-violet-600 transition-colors duration-300 z-20 pointer-events-none"></div>
           </div>
         ))}
      </div>
      
      <div className="bg-white p-12 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-4 text-black">Want to see our live case studies?</h3>
          <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
            Due to NDA agreements with our enterprise clients, some work cannot be displayed publicly. Book a call for a private walkthrough.
          </p>
          <Button className="mx-auto bg-black text-white border-0 hover:bg-neutral-800" onClick={() => setPage('contact')}>Request Private Portfolio</Button>
        </div>
      </div>

    </Section>
  </motion.div>
);

const About = ({ setPage }: PageProps) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-24 pb-12">
    
    {/* 1. New Content Section */}
    <Section>
      <div className="max-w-4xl mx-auto mb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-white uppercase tracking-tighter">About Build50</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-200 mb-6 leading-tight">
            Bridging the gap between high‑priced agencies and low‑quality DIY solutions.
          </h2>
          <p className="text-xl text-neutral-400 leading-relaxed font-light">
             At <span className="font-bold text-white">Build50</span>, we help businesses grow online with <span className="italic">fast, beautiful, and affordable digital solutions</span> — without the stress, hidden fees, or confusing tech jargon. We exist for business owners who want real results without paying $10,000+ and waiting months for delivery.
          </p>
        </div>

        <div className="bg-neutral-900 p-8 md:p-12 border border-neutral-800 relative overflow-hidden">
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
           
           <h3 className="text-3xl font-black mb-8 uppercase tracking-tight relative z-10 text-white">Why It’s Called Build50</h3>
           <p className="text-lg text-neutral-300 mb-8 font-medium relative z-10">
             The name <span className="text-violet-600">Build50</span> represents our core belief: <br/>
             <span className="italic">Build smarter. Build faster. Build for growth.</span>
           </p>
           
           <div className="grid md:grid-cols-2 gap-8 relative z-10">
             <div>
               <h4 className="text-xl font-bold mb-2 uppercase text-white border-l-4 border-violet-600 pl-4">"Build"</h4>
               <p className="text-neutral-400 text-sm leading-relaxed pl-5">
                 Reflects exactly what we do — we build websites, brands, systems, and digital experiences that power real businesses.
               </p>
             </div>
             <div>
               <h4 className="text-xl font-bold mb-2 uppercase text-white border-l-4 border-violet-600 pl-4">"50"</h4>
               <p className="text-neutral-400 text-sm leading-relaxed pl-5">
                 Symbolises speed, efficiency, and value — delivering premium‑quality results at a fraction of traditional agency costs and in a fraction of the time.
               </p>
             </div>
           </div>
           
           <div className="mt-10 pt-8 border-t border-neutral-800 relative z-10">
             <p className="text-lg font-bold text-white text-center">
               Together, Build50 stands for building powerful digital solutions at <span className="text-violet-600">50% faster speed</span> and smarter value for growing businesses.
             </p>
           </div>
        </div>
      </div>
    </Section>

    {/* 2. How We Help */}
    <Section className="bg-neutral-900/30">
       <div className="grid lg:grid-cols-2 gap-16">
         <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 uppercase text-white">
              <Heart className="w-8 h-8 text-violet-600" /> How We Help
            </h2>
            <ul className="space-y-6">
              {[
                "Responsive websites that look premium and convert clients",
                "SEO foundations to rank on Google and bring in customers",
                "Social media systems that keep their brand active",
                "Automation that saves hours of time each week",
                "Monthly support so your site never becomes “outdated” again"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 p-6 bg-black border border-neutral-800">
                  <div className="w-6 h-6 bg-green-900/30 text-green-600 rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-neutral-200 font-medium pt-1">{item}</span>
                </li>
              ))}
            </ul>
         </div>
         <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 uppercase text-white">
              <Briefcase className="w-8 h-8 text-violet-600" /> What We Do
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Monitor, title: "Web Design", desc: "Clean, modern, mobile-first websites built to convert." },
                { icon: Search, title: "SEO & Growth", desc: "Basic to advanced SEO strategies that help you get found." },
                { icon: Layout, title: "Social & Brand", desc: "Content, branding kits, templates, and assets." },
                { icon: Zap, title: "Automation", desc: "CRM setup, lead tracking, automated follow-ups." },
                { icon: Server, title: "Management", desc: "Changes, updates, maintenance, monitoring, security." },
                { icon: Clock, title: "Fast Turnaround", desc: "Most builds delivered within 7–14 days." }
              ].map((service, i) => (
                 <div key={i} className="flex flex-col gap-3 p-6 bg-black border border-neutral-800 hover:border-violet-600 transition-colors">
                    <div className="text-violet-600"><service.icon className="w-6 h-6" /></div>
                    <div>
                      <h4 className="font-bold mb-1 uppercase text-sm text-white">{service.title}</h4>
                      <p className="text-sm text-neutral-500 leading-snug">{service.desc}</p>
                    </div>
                 </div>
              ))}
            </div>
         </div>
       </div>
    </Section>
  </motion.div>
);

const Contact = ({ setPage }: { setPage?: (page: PageType) => void }) => {
  const [formState, setFormState] = useState({ name: '', businessName: '', email: '', phone: '', service: 'Website', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', businessName: '', email: '', phone: '', service: 'Website', message: '' });
    }, 1500);
  };

  const SERVICE_OPTIONS = [
    "Website",
    "E-Commerce",
    "Mobile App",
    "Branding",
    "SEO",
    "Website Maintenance",
    "Other"
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-24 pb-12">
      <Section className="max-w-4xl">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl font-black mb-6 uppercase tracking-tighter text-white">Let's Talk</h1>
            <p className="text-neutral-300 mb-8 text-lg font-light">
              Ready to scale? Fill out the form or use the quick links below.
            </p>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.open('tel:0352345189')}>
                <div className="w-12 h-12 bg-neutral-800 group-hover:bg-violet-900 transition-colors flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white group-hover:text-violet-600" />
                </div>
                <div>
                  <div className="font-bold uppercase text-sm text-white">Call Us</div>
                  <div className="text-sm text-neutral-500">03 5234 5189</div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.open('https://wa.me/61400123456')}>
                <div className="w-12 h-12 bg-neutral-800 group-hover:bg-green-900 transition-colors flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white group-hover:text-green-600" />
                </div>
                <div>
                  <div className="font-bold uppercase text-sm text-white">WhatsApp</div>
                  <div className="text-sm text-neutral-500">0400 123 456</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.open('mailto:hello@build50.com')}>
                <div className="w-12 h-12 bg-neutral-800 group-hover:bg-blue-900 transition-colors flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white group-hover:text-blue-600" />
                </div>
                <div>
                  <div className="font-bold uppercase text-sm text-white">Email Us</div>
                  <div className="text-sm text-neutral-500">hello@build50.com</div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-neutral-800 group-hover:bg-purple-900 transition-colors flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white group-hover:text-purple-600" />
                </div>
                <div>
                  <div className="font-bold uppercase text-sm text-white">Our Location</div>
                  <div className="text-sm text-neutral-500">Wallan 3756</div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-neutral-900/50 border-l-4 border-violet-600">
               <h3 className="font-bold mb-2 uppercase text-sm text-white">Office Hours</h3>
               <p className="text-sm text-neutral-500">Mon-Fri: 9am - 5pm (AEST)</p>
               <p className="text-sm text-neutral-500">Melbourne, Australia</p>
            </div>
          </div>

          <div className="bg-black border border-neutral-800 p-8 shadow-2xl">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Message Sent!</h3>
                <p className="text-neutral-500 mb-6">We'll get back to you within 24 hours.</p>
                <Button onClick={() => setStatus('idle')} variant="outline" className="w-full">Send Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase mb-2 text-neutral-500">Full Name</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full p-4 bg-neutral-900 border border-neutral-800 focus:border-violet-600 outline-none transition-colors text-white"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold uppercase mb-2 text-neutral-500">Business Name (Optional)</label>
                  <input 
                    type="text" 
                    className="w-full p-4 bg-neutral-900 border border-neutral-800 focus:border-violet-600 outline-none transition-colors text-white"
                    value={formState.businessName}
                    onChange={e => setFormState({...formState, businessName: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase mb-2 text-neutral-500">Email Address</label>
                  <input 
                    required 
                    type="email" 
                    className="w-full p-4 bg-neutral-900 border border-neutral-800 focus:border-violet-600 outline-none transition-colors text-white"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase mb-2 text-neutral-500">Phone Number</label>
                  <input 
                    required 
                    type="tel" 
                    className="w-full p-4 bg-neutral-900 border border-neutral-800 focus:border-violet-600 outline-none transition-colors text-white"
                    value={formState.phone}
                    onChange={e => setFormState({...formState, phone: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase mb-2 text-neutral-500">Service Interested In</label>
                  <select 
                    className="w-full p-4 bg-neutral-900 border border-neutral-800 focus:border-violet-600 outline-none transition-colors appearance-none text-white"
                    value={formState.service}
                    onChange={e => setFormState({...formState, service: e.target.value})}
                  >
                    {SERVICE_OPTIONS.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase mb-2 text-neutral-500">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full p-4 bg-neutral-900 border border-neutral-800 focus:border-violet-600 outline-none transition-colors placeholder:text-neutral-600 text-sm text-white"
                    placeholder="Please describe your project in detail, including your budget range and preferred timeline, so we can prepare a tailored and accurate quote for you."
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full h-14" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Get a Free Quote'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

const Privacy = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-24 pb-12">
    <Section className="max-w-3xl prose dark:prose-invert">
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> November 26, 2025</p>
      
      <h3>1. Introduction</h3>
      <p>Build50 ("we", "us", "our") respects your privacy. This policy explains what personal data we collect, how we use it, and your rights.</p>
      
      <h3>2. Information we collect</h3>
      <p>Contact information you provide (name, email, phone, business name) when using our contact or booking forms. Usage data collected via server logs and analytics.</p>
      
      <h3>3. How we use your data</h3>
      <ul>
        <li>To respond to enquiries and provide services.</li>
        <li>To send transactional emails.</li>
        <li>To improve and secure our site.</li>
      </ul>

      <h3>Contact</h3>
      <p>hello@build50.com</p>
    </Section>
  </motion.div>
);

// --- Layout & Main App ---

export default function App() {
  const [page, setPage] = useState<PageType>('home');
  const [targetSection, setTargetSection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cookieAccepted, setCookieAccepted] = useState(false);

  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Set the dynamic favicon
  useEffect(() => {
    // SVG Data URI for B5 logo (Black background, white B, blue 5)
    const faviconSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect width="100" height="100" rx="20" fill="black"/>
        <text x="50" y="75" font-family="Arial" font-weight="bold" font-size="60" text-anchor="middle" fill="white">
          B<tspan fill="#2563eb">5</tspan>
        </text>
      </svg>
    `;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;
    
    // Create/update link element
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = faviconUrl;
  }, []);

  const navLinks: { id: PageType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services & Pricing' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  // Helper function to handle navigation with optional section scroll
  const handleNav = (page: PageType, section?: string) => {
    setPage(page);
    setTargetSection(section || null);
    setMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 dark bg-black text-white`}>
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 bg-black/90 backdrop-blur-md border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-black tracking-tighter cursor-pointer flex items-center gap-3" onClick={() => handleNav('home')}>
             <BrandLogo className="w-8 h-8" />
             <span>BUILD50</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button 
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-sm font-bold uppercase tracking-wider hover:text-violet-600 transition-colors ${page === link.id ? 'text-violet-600' : 'text-neutral-400'}`}
              >
                {link.label}
              </button>
            ))}
            <Button onClick={() => handleNav('contact')} className="text-xs h-10 px-6">Start Your Project</Button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-black border-b border-neutral-900 overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map(link => (
                  <button 
                    key={link.id}
                    onClick={() => handleNav(link.id)}
                    className="text-lg font-bold uppercase tracking-wider text-left text-white"
                  >
                    {link.label}
                  </button>
                ))}
                <Button onClick={() => handleNav('contact')} className="w-full">Book Consult</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content Area */}
      <main className="min-h-screen pt-20">
        <AnimatePresence mode="wait">
          {page === 'home' && <Home key="home" setPage={setPage} />}
          {page === 'services' && <Services key="services" setPage={setPage} targetSection={targetSection} />}
          {page === 'portfolio' && <Portfolio key="portfolio" setPage={setPage} />}
          {page === 'about' && <About key="about" setPage={setPage} />}
          {page === 'contact' && <Contact key="contact" setPage={setPage} />}
          {page === 'privacy' && <Privacy key="privacy" />}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-neutral-900 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-black mb-6 flex items-center gap-2 tracking-tighter text-white">
              <BrandLogo className="w-8 h-8" />
              BUILD50
            </div>
            <p className="text-neutral-500 text-sm mb-6 leading-relaxed">
              Premium digital solutions for Australian businesses. Built to scale.
            </p>
            
            <div className="space-y-3 mb-6 text-sm text-neutral-400">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-violet-600" />
                <a href="tel:0352345189" className="hover:text-violet-600 transition-colors">03 5234 5189</a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-green-500" />
                <a href="https://wa.me/61400123456" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">0400 123 456</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-violet-600" />
                <span>BuildFifty Wallan, 3756</span>
              </div>
            </div>

            <div className="flex gap-4 text-neutral-400">
               <Instagram className="w-5 h-5 hover:text-violet-500 cursor-pointer transition-colors" />
               <Linkedin className="w-5 h-5 hover:text-violet-500 cursor-pointer transition-colors" />
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-neutral-400">Services</h4>
            <ul className="space-y-3 text-sm text-neutral-400 font-medium">
              <li className="hover:text-violet-600 cursor-pointer" onClick={() => handleNav('services', 'web-design')}>Web Design</li>
              <li className="hover:text-violet-600 cursor-pointer" onClick={() => handleNav('services', 'app-dev')}>App Development</li>
              <li className="hover:text-violet-600 cursor-pointer" onClick={() => handleNav('services', 'care-plans')}>Care Plans</li>
              <li className="hover:text-violet-600 cursor-pointer" onClick={() => handleNav('services', 'branding')}>Branding</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-neutral-400">Company</h4>
            <ul className="space-y-3 text-sm text-neutral-400 font-medium">
              <li className="cursor-pointer hover:text-violet-600" onClick={() => handleNav('about')}>About Us</li>
              <li className="cursor-pointer hover:text-violet-600" onClick={() => handleNav('portfolio')}>Portfolio</li>
              <li className="cursor-pointer hover:text-violet-600" onClick={() => handleNav('contact')}>Contact</li>
              <li className="cursor-pointer hover:text-violet-600" onClick={() => handleNav('privacy')}>Privacy Policy</li>
            </ul>
          </div>
          <div>
              <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-neutral-400">Action</h4>
              <Button className="w-full mb-4 text-xs h-12" onClick={() => handleNav('contact')}>Book Free Consult</Button>
              <p className="text-xs text-neutral-500 text-center">No credit card required.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 border-t border-neutral-900 pt-8 text-center text-xs text-neutral-500 font-mono uppercase tracking-widest">
          © 2025 Build50. All rights reserved.
        </div>
      </footer>

      {/* Floating Elements */}
      <a 
        href="https://wa.me/61400123456?text=Hi%20Build50%2C%20I%20want%20a%20website..."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-40"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* Cookie Banner */}
      {!cookieAccepted && (
        <div className="fixed bottom-0 left-0 w-full bg-black border-t border-neutral-900 p-6 z-50">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm text-neutral-400 font-medium">
              We use cookies to improve your experience and analyze traffic.
            </p>
            <div className="flex gap-4">
              <button onClick={() => setCookieAccepted(true)} className="text-sm font-bold uppercase tracking-wider hover:underline text-white">Manage</button>
              <Button onClick={() => setCookieAccepted(true)} className="py-2 px-6 text-xs h-10">Accept</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
