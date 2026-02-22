import { useEffect, useState } from 'react';
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  MapPin, 
  Ticket, 
  Users, 
  Coffee, 
  Film,
  Heart,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-[#1B1D23]/90 backdrop-blur-sm' : ''}`}>
      <div className="flex items-center justify-between px-6 lg:px-12 py-4">
        <button onClick={() => scrollToSection('hero')} className="font-comic text-2xl text-[#F4F6F8]">
          Stir Trek
        </button>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('speakers')} className="nav-link">Speakers</button>
          <button onClick={() => scrollToSection('sponsors')} className="nav-link">Sponsors</button>
          <button onClick={() => scrollToSection('tickets')} className="nav-link">Tickets</button>
          <button onClick={() => scrollToSection('info')} className="nav-link">Info</button>
        </div>
        
        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#F4F6F8]">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#1B1D23]/95 backdrop-blur-sm px-6 py-4 flex flex-col gap-4">
          <button onClick={() => scrollToSection('speakers')} className="nav-link text-left">Speakers</button>
          <button onClick={() => scrollToSection('sponsors')} className="nav-link text-left">Sponsors</button>
          <button onClick={() => scrollToSection('tickets')} className="nav-link text-left">Tickets</button>
          <button onClick={() => scrollToSection('info')} className="nav-link text-left">Info</button>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="hero" className="min-h-screen bg-[#1B1D23] relative pt-20 lg:pt-0">
      <div className="speed-lines" />
      
      <div className="px-4 lg:px-0 py-8 lg:py-0 lg:h-screen lg:relative">
        {/* Hero Photo Card */}
        <div className="lg:absolute lg:left-[6vw] lg:top-[14vh] w-full lg:w-[56vw] h-[40vh] lg:h-[56vh] comic-panel overflow-hidden mb-4 lg:mb-0">
          <img 
            src="/hero_crowd.jpg" 
            alt="Stir Trek Conference" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Red Headline Panel */}
        <div className="lg:absolute lg:left-[64vw] lg:top-[14vh] w-full lg:w-[30vw] h-auto lg:h-[56vh] bg-[#FF3B3B] comic-panel flex flex-col items-center justify-center p-6 lg:p-8 mb-4 lg:mb-0">
          <h1 className="font-comic text-[15vw] lg:text-[4.5vw] text-white text-center leading-none">
            Tech & a Flick
          </h1>
          <p className="font-ui text-sm lg:text-base text-white/90 mt-4 text-center">
            Columbus, OH • AMC Easton 30
          </p>
        </div>
        
        {/* Date Panel */}
        <div className="lg:absolute lg:left-[6vw] lg:top-[74vh] w-full lg:w-[34vw] h-auto lg:h-[16vh] bg-[#F4F6F8] comic-panel-light flex flex-col items-center justify-center p-4 lg:p-0 mb-4 lg:mb-0">
          <span className="font-comic text-[12vw] lg:text-[3.5vw] text-[#1B1D23]">5/1/2026</span>
          <span className="font-ui text-xs lg:text-sm text-[#1B1D23]/70 mt-1">Doors 7:30am • Sessions 8am–5pm</span>
        </div>
        
        {/* CTA Panel */}
        <div className="lg:absolute lg:left-[64vw] lg:top-[74vh] w-full lg:w-[30vw] h-auto lg:h-[16vh] bg-[#F4F6F8] comic-panel-light flex flex-col items-center justify-center p-4 lg:p-0">
          <button className="btn-comic text-sm lg:text-base">
            <Ticket className="w-4 h-4 mr-2" />
            Get Tickets
          </button>
          <span className="font-ui text-xs text-[#1B1D23]/60 mt-2">On sale Feb 24</span>
        </div>
      </div>
    </section>
  );
}

// What Is Stir Trek Section
function WhatIsSection() {
  return (
    <section className="min-h-screen bg-[#1B1D23] relative py-16 lg:py-0 lg:h-screen">
      <div className="px-4 lg:px-0 lg:h-full lg:relative">
        {/* Red Text Panel */}
        <div className="lg:absolute lg:left-[6vw] lg:top-[14vh] w-full lg:w-[46vw] h-auto lg:h-[72vh] bg-[#FF3B3B] comic-panel p-6 lg:p-10 flex flex-col justify-between mb-4 lg:mb-0">
          <h2 className="font-comic text-[12vw] lg:text-[4vw] text-white">
            What is Stir Trek?
          </h2>
          <p className="font-ui text-base lg:text-lg text-white/90 leading-relaxed my-6 lg:my-0">
            A full day of sessions for developers, designers, and tech leaders—followed by a blockbuster screening. No fluff. No sales pitches. Just solid learning, then popcorn.
          </p>
          <span className="font-ui text-xs text-white/60">Photo: Nate Lovett</span>
        </div>
        
        {/* Photo Panel */}
        <div className="lg:absolute lg:left-[54vw] lg:top-[14vh] w-full lg:w-[40vw] h-[50vh] lg:h-[72vh] comic-panel overflow-hidden">
          <img 
            src="/whatis_speaker.jpg" 
            alt="Speaker at Stir Trek" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

// What Do You Get Section
function WhatYouGetSection() {
  const benefits = [
    { icon: Users, text: '50+ sessions (code, architecture, UX, leadership)' },
    { icon: Users, text: 'Regional & national speakers' },
    { icon: Users, text: 'Panel discussions + open Q&A' },
    { icon: Coffee, text: 'Breakfast, lunch, snacks' },
    { icon: Film, text: 'Movie screening + swag box' },
  ];

  return (
    <section className="min-h-screen bg-[#1B1D23] relative py-16 lg:py-0 lg:h-screen">
      <div className="px-4 lg:px-0 lg:h-full lg:relative">
        <div className="lg:absolute lg:left-[6vw] lg:top-[14vh] w-full lg:w-[88vw] h-auto lg:h-[72vh] bg-[#F4F6F8] comic-panel-light p-6 lg:p-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 h-full">
            {/* Left Column */}
            <div className="flex-1">
              <h2 className="font-comic text-[14vw] lg:text-[5vw] text-[#1B1D23]">
                What Do Ya Get?
              </h2>
              <p className="font-ui text-lg lg:text-xl text-[#1B1D23]/70 mt-4">
                A day built for practitioners.
              </p>
            </div>
            
            {/* Right Column - Benefits */}
            <div className="flex-1 flex flex-col justify-center">
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <benefit.icon className="w-6 h-6 text-[#FF3B3B] mt-0.5 flex-shrink-0" />
                    <span className="font-ui text-base lg:text-lg text-[#1B1D23]">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Ticket Dates Section
function TicketDatesSection() {
  const ticketTiers = [
    { name: 'Super Early Bird', price: '$165', note: 'First 50 tickets', date: 'On sale Feb 24', highlight: true },
    { name: 'Early Bird', price: '$185', note: 'Next batch', date: 'On sale Feb 24', highlight: false },
    { name: 'Standard', price: '$215', note: 'Until Apr 30', date: 'Includes swag box', highlight: false },
  ];

  return (
    <section id="tickets" className="min-h-screen bg-[#1B1D23] relative py-16 lg:py-0 lg:h-screen">
      <div className="px-4 lg:px-0 lg:h-full lg:relative">
        <div className="lg:absolute lg:left-[6vw] lg:top-[10vh]">
          <h2 className="font-comic text-[10vw] lg:text-[4vw] text-[#F4F6F8]">Ticket Dates</h2>
          <p className="font-ui text-sm lg:text-base text-[#B8BDC7] mt-2">Prices go up as the event gets closer.</p>
        </div>
        
        <div className="lg:absolute lg:top-[22vh] lg:left-[6vw] lg:right-[6vw] flex flex-col lg:flex-row gap-4 lg:gap-[3vw] mt-8 lg:mt-0">
          {ticketTiers.map((tier, index) => (
            <div
              key={index}
              className={`w-full lg:w-[26vw] h-auto lg:h-[62vh] ${tier.highlight ? 'bg-[#FFD36E]' : 'bg-[#F4F6F8]'} comic-panel-light p-6 lg:p-8 flex flex-col justify-between`}
            >
              <div>
                <span className="font-ui text-xs lg:text-sm uppercase tracking-wider text-[#1B1D23]/60">
                  {tier.name}
                </span>
                <div className="font-comic text-[20vw] lg:text-[5vw] text-[#1B1D23] mt-2">
                  {tier.price}
                </div>
              </div>
              <div>
                <p className="font-ui text-base lg:text-lg text-[#1B1D23]">{tier.note}</p>
                <p className="font-ui text-sm text-[#1B1D23]/60 mt-1">{tier.date}</p>
                <button className={`btn-comic w-full mt-4 ${tier.highlight ? '' : 'bg-[#1B1D23]'}`}>
                  Get Notified
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Food Drive Section
function FoodDriveSection() {
  return (
    <section className="min-h-screen bg-[#1B1D23] relative py-16 lg:py-0 lg:h-screen flex flex-col justify-center">
      <div className="px-4 lg:px-0 lg:relative lg:h-full">
        <div className="lg:absolute lg:left-[6vw] lg:top-[22vh] w-full lg:w-[88vw] h-auto lg:h-[56vh] bg-[#FF3B3B] comic-panel p-6 lg:p-12 flex flex-col justify-center">
          <h2 className="font-comic text-[16vw] lg:text-[7vw] text-white">
            Mega Food Drive
          </h2>
          <p className="font-ui text-lg lg:text-2xl text-white/90 mt-4 max-w-2xl">
            Be awesome. Bring non-perishables. Donate. Maybe win something.
          </p>
        </div>
        <div className="lg:absolute lg:left-[6vw] lg:top-[80vh] mt-4 lg:mt-0">
          <p className="font-ui text-sm text-[#B8BDC7]">
            Priority: shampoo, conditioner, canned tomatoes, beans, cereal.
          </p>
        </div>
      </div>
    </section>
  );
}

// Speakers Section
function SpeakersSection() {
  const speakers = [
    { name: 'Alex R.', topic: 'Frontend Performance', image: '/speaker_a.jpg' },
    { name: 'Sam T.', topic: 'Systems & Scale', image: '/speaker_b.jpg' },
    { name: 'Jordan P.', topic: 'UX & Accessibility', image: '/speaker_c.jpg' },
  ];

  return (
    <section id="speakers" className="min-h-screen bg-[#1B1D23] relative py-16 lg:py-0 lg:h-screen">
      <div className="px-4 lg:px-0 lg:h-full lg:relative">
        <div className="lg:absolute lg:left-[6vw] lg:top-[10vh]">
          <h2 className="font-comic text-[10vw] lg:text-[4vw] text-[#F4F6F8]">Speakers</h2>
          <p className="font-ui text-sm lg:text-base text-[#B8BDC7] mt-2">Practitioners who ship.</p>
        </div>
        
        <div className="lg:absolute lg:top-[24vh] lg:left-[6vw] lg:right-[6vw] flex flex-col lg:flex-row gap-4 lg:gap-[3vw] mt-8 lg:mt-0">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="w-full lg:w-[26vw] h-auto lg:h-[62vh] bg-[#F4F6F8] comic-panel-light overflow-hidden flex flex-col"
            >
              <div className="h-[40vh] lg:flex-1 overflow-hidden">
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 lg:p-6 bg-[#F4F6F8]">
                <h3 className="font-comic text-2xl lg:text-3xl text-[#1B1D23]">{speaker.name}</h3>
                <p className="font-ui text-sm text-[#1B1D23]/70 mt-1">{speaker.topic}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="lg:absolute lg:bottom-[8vh] left-1/2 -translate-x-1/2 mt-8 lg:mt-0 text-center">
          <button className="font-ui text-sm text-[#FFD36E] hover:text-[#FF3B3B] transition-colors flex items-center gap-2">
            See all speakers <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

// Sponsors Section
function SponsorsSection() {
  const sponsors = [
    { name: 'Revel IT', tier: 'Silver' },
    { name: 'BPS Technologies', tier: 'Silver' },
    { name: 'Your Company', tier: '?' },
  ];

  return (
    <section id="sponsors" className="min-h-screen bg-[#1B1D23] relative py-16 lg:py-0 lg:h-screen">
      <div className="px-4 lg:px-0 lg:h-full lg:relative">
        <div className="lg:absolute lg:left-[6vw] lg:top-[14vh] w-full lg:w-[88vw] h-auto lg:h-[72vh] bg-[#F4F6F8] comic-panel-light p-6 lg:p-12">
          <h2 className="font-comic text-[10vw] lg:text-[4vw] text-[#1B1D23]">Sponsors</h2>
          <p className="font-ui text-base lg:text-lg text-[#1B1D23]/70 mt-2">
            Thanks to the teams who make this possible.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-8 lg:mt-12">
            {sponsors.map((sponsor, index) => (
              <div 
                key={index}
                className="aspect-video border-2 border-[#1B1D23]/20 flex flex-col items-center justify-center p-4 hover:border-[#FF3B3B] transition-colors"
              >
                <span className="font-comic text-xl lg:text-2xl text-[#1B1D23]">{sponsor.name}</span>
                <span className="font-ui text-xs text-[#1B1D23]/50 mt-1">{sponsor.tier}</span>
              </div>
            ))}
          </div>
          
          <div className="absolute bottom-6 lg:bottom-12 right-6 lg:right-12">
            <button className="font-ui text-sm text-[#FF3B3B] hover:text-[#1B1D23] transition-colors flex items-center gap-2">
              Become a sponsor <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section className="min-h-screen bg-[#1B1D23] relative py-16 lg:py-0 lg:h-screen">
      <div className="px-4 lg:px-0 lg:h-full lg:relative">
        <div className="lg:absolute lg:left-[6vw] lg:top-[14vh] w-full lg:w-[88vw] h-auto lg:h-[72vh] bg-[#FFD36E] comic-panel p-6 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="font-comic text-[14vw] lg:text-[5vw] text-[#1B1D23]">
              Let's Get Connected.
            </h2>
          </div>
          
          <div className="flex-1 flex flex-col justify-center gap-6">
            <a 
              href="mailto:info@stirtrek.com" 
              className="flex items-center gap-3 font-ui text-lg lg:text-xl text-[#1B1D23] hover:text-[#FF3B3B] transition-colors"
            >
              <Mail className="w-6 h-6" />
              info@stirtrek.com
            </a>
            <a 
              href="#" 
              className="flex items-center gap-3 font-ui text-lg lg:text-xl text-[#1B1D23] hover:text-[#FF3B3B] transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              LinkedIn
            </a>
            <a 
              href="#" 
              className="flex items-center gap-3 font-ui text-lg lg:text-xl text-[#1B1D23] hover:text-[#FF3B3B] transition-colors"
            >
              <Twitter className="w-6 h-6" />
              Bluesky
            </a>
            <p className="font-ui text-sm text-[#1B1D23]/60 mt-4">
              For sponsorships: sponsors@stirtrek.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Closing Image Section
function ClosingSection() {
  return (
    <section className="h-screen relative">
      <div className="absolute inset-0">
        <img 
          src="/closing_audience.jpg" 
          alt="Audience at Stir Trek" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1D23]/60 to-transparent" />
      </div>
      
      <div className="absolute left-0 bottom-0 w-full bg-[#1B1D23]/55 backdrop-blur-sm p-6 lg:p-12">
        <h2 className="font-comic text-[14vw] lg:text-[6vw] text-white">
          See You There.
        </h2>
        <p className="font-ui text-lg lg:text-xl text-white/80 mt-2">
          Columbus • May 1, 2026
        </p>
      </div>
    </section>
  );
}

// Info Section
function InfoSection() {
  const schedule = [
    { time: '7:30am', event: 'Doors / breakfast' },
    { time: '8:00am', event: 'Sessions begin' },
    { time: '12:00pm', event: 'Lunch' },
    { time: '5:00pm', event: 'Movie screening' },
  ];

  const faqs = [
    { q: 'Can I get a refund?', a: 'Tickets are refundable up to 30 days before the event.' },
    { q: 'Is the venue accessible?', a: 'Yes, AMC Easton 30 is fully wheelchair accessible.' },
    { q: 'What should I bring?', a: 'Just your ticket and your appetite for learning (and popcorn).' },
  ];

  return (
    <section id="info" className="bg-[#1B1D23] py-16 lg:py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-comic text-[10vw] lg:text-[4vw] text-[#F4F6F8]">Info</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Venue & Schedule */}
          <div>
            <div className="flex items-start gap-3 mb-8">
              <MapPin className="w-6 h-6 text-[#FF3B3B] mt-1" />
              <div>
                <h3 className="font-ui font-semibold text-lg text-[#F4F6F8]">AMC Easton 30</h3>
                <p className="font-ui text-[#B8BDC7]">275 Easton Town Center, Columbus, OH</p>
              </div>
            </div>
            
            <h3 className="font-ui font-semibold text-lg text-[#F4F6F8] mb-4">Schedule</h3>
            <ul className="space-y-3">
              {schedule.map((item, index) => (
                <li key={index} className="flex gap-4">
                  <span className="font-ui font-medium text-[#FFD36E] w-20">{item.time}</span>
                  <span className="font-ui text-[#F4F6F8]">{item.event}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* FAQ */}
          <div>
            <h3 className="font-ui font-semibold text-lg text-[#F4F6F8] mb-4">FAQ</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-l-2 border-[#FF3B3B] pl-4">
                  <h4 className="font-ui font-medium text-[#F4F6F8]">{faq.q}</h4>
                  <p className="font-ui text-sm text-[#B8BDC7] mt-1">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Newsletter Section
function NewsletterSection() {
  return (
    <section className="bg-[#1B1D23] py-16 lg:py-24 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#F4F6F8] comic-panel-light p-8 lg:p-12">
          <h2 className="font-comic text-[10vw] lg:text-[3vw] text-[#1B1D23]">Get Updates</h2>
          <p className="font-ui text-[#1B1D23]/70 mt-2">
            Announcements, speaker drops, and ticket reminders.
          </p>
          
          <form className="mt-6 flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 border-2 border-[#1B1D23] font-ui text-[#1B1D23] focus:outline-none focus:border-[#FF3B3B]"
            />
            <button type="submit" className="btn-comic">
              Subscribe
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <button className="btn-comic bg-[#1B1D23]">
              <Ticket className="w-4 h-4 mr-2" />
              View Tickets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#1B1D23] py-12 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="text-center lg:text-left">
          <p className="font-ui text-sm text-[#B8BDC7]">
            © 2026 Stir Trek Conference
          </p>
          <p className="font-ui text-xs text-[#B8BDC7]/60 mt-1">
            Art by Nate Lovett
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="font-ui text-sm text-[#B8BDC7] hover:text-[#FFD36E] transition-colors">
            Code of Conduct
          </a>
          <a href="#" className="text-[#B8BDC7] hover:text-[#FFD36E] transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-[#B8BDC7] hover:text-[#FFD36E] transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="font-ui text-xs text-[#B8BDC7]/40 flex items-center justify-center gap-1">
          Made with <Heart className="w-3 h-3 text-[#FF3B3B]" /> in Columbus
        </p>
      </div>
    </footer>
  );
}

// Main App
function App() {
  return (
    <div className="relative">
      <div className="halftone-overlay" />
      <Navigation />
      
      <main>
        <HeroSection />
        <WhatIsSection />
        <WhatYouGetSection />
        <TicketDatesSection />
        <FoodDriveSection />
        <SpeakersSection />
        <SponsorsSection />
        <ContactSection />
        <ClosingSection />
        <InfoSection />
        <NewsletterSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
