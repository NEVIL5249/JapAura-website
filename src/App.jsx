import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, Download, Star, Users, TrendingUp } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [downloadCount, setDownloadCount] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const screenshots = ['/p1.png', '/p2.png'];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreenshot(prev => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [screenshots.length]);

  useEffect(() => {
    const target = 1247;
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setDownloadCount(target);
        clearInterval(timer);
      } else {
        setDownloadCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, []);

  const features = [
    { icon: "📿", title: "Mantra Counting", desc: "Track repetitions with the traditional 108 bead mala system" },
    { icon: "🎶", title: "Background Audio", desc: "Immerse yourself with soothing mantra soundtracks" },
    { icon: "🎨", title: "Dynamic Themes", desc: "Each mantra has its own beautiful, unique interface" },
    { icon: "📈", title: "Progress Tracking", desc: "Monitor your daily counts, completed malas, and streaks" },
    { icon: "🔄", title: "Simple Interaction", desc: "Just tap anywhere on screen to count - no complicated buttons" },
    { icon: "🔔", title: "Smart Reminders", desc: "Gentle notifications to maintain your spiritual practice" }
  ];

  const mantras = [
    { name: "Radhe Radhe", color: "from-amber-600 to-amber-400", desc: "Divine love" },
    { name: "Om Namah Shivay", color: "from-blue-600 to-blue-400", desc: "Inner peace" },
    { name: "Shree Ram Jay Ram", color: "from-orange-600 to-orange-400", desc: "Devotion" },
    { name: "Om Namo Bhagwate", color: "from-purple-600 to-purple-400", desc: "Surrender" }
  ];


  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/downloads/app-release.apk';
    link.download = 'JapAura.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="text-4xl"><img src='./logo.png' width={40} height={40} alt="JapAura Logo" /></div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                JapAura
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Features</a>
              <a href="#mantras" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Mantras</a>
              <a href="#experience" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">App Experience</a>
              <button onClick={handleDownload} className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                <Download size={18} />
                Download Now
              </button>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-6 py-6 space-y-4">
              <a href="#features" className="block text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#mantras" className="block text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>Mantras</a>
              <a href="#experience" className="block text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>Screenshots</a>
              <button onClick={() => { handleDownload(); setIsMenuOpen(false); }} className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-3 rounded-full text-center font-semibold flex items-center justify-center gap-2">
                <Download size={18} />
                Download Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50 opacity-60" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-100 to-transparent opacity-40" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full">
                <span className="text-2xl">🌸</span>
                <span className="text-orange-700 font-semibold">Your Daily Nam Jap Companion</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Track Malas. <span className="block text-orange-600">Stay Consistent.</span> <span className="block text-orange-600">Stay Spiritual.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                In a world full of distractions, staying connected to spirituality can be challenging. JapAura makes daily mantra chanting simple, mindful, and trackable.
              </p>
              
              {/* Stats Row */}
              {/* <div className="grid grid-cols-3 gap-4 py-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="flex justify-center text-orange-600 mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div> */}

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button onClick={handleDownload} className="group inline-flex items-center justify-center bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all">
                  <Download className="mr-2" size={20} />
                  Download Now (Free)
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <a href="#features" className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-orange-500 hover:text-orange-600 transition-all">
                  Learn More
                </a>
              </div>

              <p className="text-sm text-gray-500">
                ✓ No login required  ✓ Completely free  ✓ No ads  ✓ Works offline
              </p>
            </div>
            <div className="relative">
              <div className="relative rounded-[2.5rem] p-3 shadow-2xl overflow-hidden w-full max-w-md mx-auto bg-gradient-to-br from-gray-100 to-white">
                <img
                  src="/pp.png"
                  alt="JapAura App Interface"
                  className="w-full h-full object-cover rounded-[2.2rem]"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-70" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-300 rounded-full blur-3xl opacity-70" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                POWERFUL FEATURES
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need for Daily Practice
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              JapAura blends ancient tradition with modern technology for a seamless spiritual experience
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Experience Carousel */}
      <section id="experience" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                APP PREVIEW
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Experience JapAura</h2>
            <p className="text-xl text-gray-600">See the beautiful interface in action</p>
          </div>
          <div
            className="relative overflow-hidden rounded-3xl shadow-2xl bg-gray-900"
            onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
            onTouchMove={(e) => (touchEndX.current = e.touches[0].clientX)}
            onTouchEnd={() => {
              if (touchStartX.current - touchEndX.current > 50) {
                setActiveScreenshot((prev) => (prev + 1) % screenshots.length);
              }
              if (touchStartX.current - touchEndX.current < -50) {
                setActiveScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length);
              }
            }}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeScreenshot * 100}%)` }}
            >
              {screenshots.map((src, idx) => (
                <img key={idx} src={src} alt={`JapAura App Screenshot ${idx + 1}`} className="w-full h-[500px] object-cover flex-shrink-0" />
              ))}
            </div>
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {screenshots.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveScreenshot(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${idx === activeScreenshot ? "bg-orange-600 w-8" : "bg-white/50 hover:bg-white/75"}`}
                  aria-label={`View screenshot ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mantras Showcase */}
      <section id="mantras" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                SACRED MANTRAS
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Unique Themes for Each Mantra
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every mantra features its own carefully crafted visual theme and audio backdrop
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mantras.map((mantra, idx) => (
              <div key={idx} className={`relative overflow-hidden rounded-3xl p-8 min-h-[280px] flex flex-col items-center justify-center bg-gradient-to-br ${mantra.color} text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer group`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                <div className="relative z-10 text-center">
                  <div className="text-2xl font-bold mb-3">{mantra.name}</div>
                  <div className="opacity-90 text-sm mb-4 italic">{mantra.desc}</div>
                  <div className="text-xs opacity-75">Tap to begin counting</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-4">
            <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
              TECHNOLOGY
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Built with Modern Tech
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Powered by cutting-edge technologies for a smooth, reliable experience
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {["Flutter", "Shared Preferences", "Modern UI/UX", "Cross-Platform", "Offline Support"].map((tech, idx) => (
              <div key={idx} className="bg-white px-8 py-4 rounded-2xl shadow-md border border-gray-100 font-semibold text-gray-700 hover:border-orange-500 hover:text-orange-600 hover:scale-105 transition-all">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-24 px-6 bg-gradient-to-br from-orange-600 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} />
        </div>
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Start Your Spiritual Journey Today
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Join thousands practicing mindful mantra chanting daily with JapAura
          </p>
          <button onClick={handleDownload} className="group inline-flex items-center justify-center bg-white text-orange-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all">
            <Download className="mr-3" size={24} />
            Download JapAura Now
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
          </button>
          <p className="mt-6 text-sm opacity-90">
            Free Forever • No Ads • No Sign-up Required
          </p>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              <img src='./logo.png' width={32} height={32} alt="JapAura" />
              <span className="text-2xl font-bold">JapAura</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="/privacy.html" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#mantras" className="text-gray-400 hover:text-white transition-colors">Mantras</a>
              <a href="#download" className="text-gray-400 hover:text-white transition-colors">Download</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 JapAura. All rights reserved. Made with devotion 🙏 for spiritual seekers.</p>
          </div>
        </div>
      </footer> */}

      <footer className="bg-gray-900 text-white py-12 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
      <div className="flex items-center space-x-3">
        <img src='./logo.png' width={32} height={32} alt="JapAura" />
        <span className="text-2xl font-bold">JapAura</span>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <a href="/privacy.html" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
        <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
        <a href="#mantras" className="text-gray-400 hover:text-white transition-colors">Mantras</a>
        <a href="#download" className="text-gray-400 hover:text-white transition-colors">Download</a>
      </div>
    </div>
    <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
      {/* --- MODIFIED LINE BELOW --- */}
      <p>
        &copy; 2025 JapAura. All rights reserved. Made with devotion 🙏 by{' '}
        <a
          href="https://nevilgadhia.in" // <-- Put your website link here
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-gray-300 hover:text-white transition-colors"
        >
          NEVIL{/* <-- Put your name or company name here */}
        </a>
        .
      </p>
    </div>
  </div>
</footer>
    </div>
  );
}