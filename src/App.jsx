import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Play, Check } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreenshot(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: "📿",
      title: "Mantra Counting",
      desc: "Track repetitions with a traditional target of 108"
    },
    {
      icon: "🎶",
      title: "Background Audio",
      desc: "Chant along with soothing mantra tracks"
    },
    {
      icon: "🎨",
      title: "Dynamic UI",
      desc: "Unique theme for each mantra"
    },
    {
      icon: "📈",
      title: "Progress & History",
      desc: "Monitor counts, malas & streaks"
    },
    {
      icon: "🔄",
      title: "Interactive Counting",
      desc: "Tap anywhere on the screen"
    },
    {
      icon: "🔔",
      title: "Notifications",
      desc: "Gentle reminders to keep your streak alive"
    }
  ];

  const mantras = [
    { name: "Radhe Radhe", color: "from-amber-600 to-amber-400" },
    { name: "Om Namah Shivay", color: "from-blue-600 to-blue-400" },
    { name: "Shree Ram Jay Ram", color: "from-orange-600 to-orange-400" },
    { name: "Om Namo Bhagwate", color: "from-purple-600 to-purple-400" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="text-4xl"><img src='./logo.png' width={40}></img></div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                JapAura
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Features</a>
              <a href="#mantras" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Mantras</a>
              <a href="#download" className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                Coming Soon
              </a>
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
              <a href="#download" className="block bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-3 rounded-full text-center font-semibold">
                Coming Soon
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50 opacity-60" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-100 to-transparent opacity-40" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full">
                <span className="text-2xl">🌸</span>
                <span className="text-orange-700 font-semibold">Your Daily Nam Jap Companion</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Track Malas.{' '}
                <span className="block text-orange-600">Stay Consistent.</span>
                <span className="block text-orange-600">Stay Spiritual.</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                In a world full of distractions, staying connected to spirituality can be challenging. JapAura makes daily mantra chanting simple, mindful, and trackable.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#download" className="group inline-flex items-center justify-center bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all">
                  Download Now
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#features" className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-orange-500 hover:text-orange-600 transition-all">
                  Learn More
                </a>
              </div>
            </div>

 {/* Right - App Screenshots */}
{/* Right - Single App Screenshot */}
<div className="relative">
  <div className="relative rounded-[2.5rem] p-3 shadow-2xl overflow-hidden w-full max-w-xxl mx-auto">
    <img
      src="/public/poster.png" // Replace with your screenshot path
      alt="App Screenshot"
      className="w-full h-full object-cover rounded-[2.2rem]"
    />
  </div>

  {/* Decorative Elements */}
  <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-50" />
  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-300 rounded-full blur-3xl opacity-50" />
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
              JapAura blends tradition with technology, making spiritual practice more accessible
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              App Experience
            </h2>
            <p className="text-xl text-gray-600">
              See JapAura in action
            </p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={activeScreenshot === 0 ? "/p1.png" : "/p2.png"}
                alt={`App Screenshot ${activeScreenshot + 1}`}
                className="w-full h-[500px] object-cover transition-all duration-700"
              />
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {[0, 1].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveScreenshot(idx)}
                  className={`w-4 h-4 rounded-full transition-all ${
                    idx === activeScreenshot 
                      ? "bg-orange-600 scale-110" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
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
              Dynamic UI for Each Mantra
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each mantra comes with its own unique visual theme and background audio
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mantras.map((mantra, idx) => (
              <div key={idx} className={`relative overflow-hidden rounded-3xl p-8 min-h-[300px] flex items-center justify-center bg-gradient-to-br ${mantra.color} text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer group`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all" />
                <div className="relative z-10 text-center">
                  <div className="text-3xl font-bold mb-2">{mantra.name}</div>
                  <div className="opacity-90 text-sm">Tap to start counting</div>
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
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12">
            Built with Modern Tech Stack
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            {["Flutter", "Shared Preferences", "Modern UI/UX", "Cross-Platform"].map((tech, idx) => (
              <div key={idx} className="bg-white px-8 py-4 rounded-2xl shadow-md border border-gray-100 font-semibold text-gray-700 hover:border-orange-500 hover:text-orange-600 transition-all">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-24 px-6 bg-gradient-to-br from-orange-600 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Start Your Spiritual Journey Today
          </h2>
          <p className="text-xl mb-4 opacity-95">
            Join thousands practicing mindful mantra chanting daily
          </p>

          

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold">JapAura</span>
            </div>
            
            <div className="flex space-x-8">
              <a href="/privacy.html" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#mantras" className="text-gray-400 hover:text-white transition-colors">Mantras</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 JapAura. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}



// import React, { useState, useEffect } from "react";
// import { Menu, X, ChevronRight } from "lucide-react";

// export default function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeScreenshot, setActiveScreenshot] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Auto slide carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveScreenshot((prev) => (prev + 1) % 2); // only 2 images
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const features = [
//     { icon: "📿", title: "Mantra Counting", desc: "Track repetitions with a traditional target of 108" },
//     { icon: "🎶", title: "Background Audio", desc: "Chant along with soothing mantra tracks" },
//     { icon: "🎨", title: "Dynamic UI", desc: "Unique theme for each mantra" },
//     { icon: "📈", title: "Progress & History", desc: "Monitor counts, malas & streaks" },
//     { icon: "🔄", title: "Interactive Counting", desc: "Tap anywhere on the screen" },
//     { icon: "🔔", title: "Notifications", desc: "Gentle reminders to keep your streak alive" },
//   ];

//   const mantras = [
//     { name: "Radhe Radhe", color: "from-amber-600 to-amber-400" },
//     { name: "Om Namah Shivay", color: "from-blue-600 to-blue-400" },
//     { name: "Shree Ram Jay Ram", color: "from-orange-600 to-orange-400" },
//     { name: "Om Namo Bhagwate", color: "from-purple-600 to-purple-400" },
//   ];

//   const screenshots = ["/p1.png", "/p2.png"];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation */}
//       <nav
//         className={`fixed w-full z-50 transition-all duration-300 ${
//           scrolled ? "bg-white shadow-lg" : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             <div className="flex items-center space-x-3">
//               <div className="text-4xl">🕉️</div>
//               <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
//                 JapAura
//               </span>
//             </div>

//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#features" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
//                 Features
//               </a>
//               <a href="#mantras" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
//                 Mantras
//               </a>
//               <a
//                 href="#download"
//                 className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
//               >
//                 Coming Soon
//               </a>
//             </div>

//             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
//               {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>

//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-t shadow-lg">
//             <div className="px-6 py-6 space-y-4">
//               <a href="#features" className="block text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>
//                 Features
//               </a>
//               <a href="#mantras" className="block text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>
//                 Mantras
//               </a>
//               <a
//                 href="#download"
//                 className="block bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-3 rounded-full text-center font-semibold"
//               >
//                 Coming Soon
//               </a>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 px-6 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50 opacity-60" />
//         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-100 to-transparent opacity-40" />

//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div className="space-y-8">
//               <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full">
//                 <span className="text-2xl">🌸</span>
//                 <span className="text-orange-700 font-semibold">Your Daily Nam Jap Companion</span>
//               </div>

//               <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
//                 Track Malas.{" "}
//                 <span className="block text-orange-600">Stay Consistent.</span>
//                 <span className="block text-orange-600">Stay Spiritual.</span>
//               </h1>

//               <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
//                 In a world full of distractions, staying connected to spirituality can be challenging. JapAura makes daily
//                 mantra chanting simple, mindful, and trackable.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                 <a
//                   href="#download"
//                   className="group inline-flex items-center justify-center bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
//                 >
//                   Download Now
//                   <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//                 </a>
//                 <a
//                   href="#features"
//                   className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-orange-500 hover:text-orange-600 transition-all"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             </div>

//             {/* Right - App Screenshot */}
//             <div className="relative">
//               <div className="relative rounded-[2.5rem] p-3 shadow-2xl overflow-hidden w-full max-w-xxl mx-auto">
//                 <img src="/poster.png" alt="App Screenshot" className="w-full h-full object-cover rounded-[2.2rem]" />
//               </div>
//               <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-50" />
//               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-300 rounded-full blur-3xl opacity-50" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section id="features" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
//               POWERFUL FEATURES
//             </span>
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Everything You Need for Daily Practice</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               JapAura blends tradition with technology, making spiritual practice more accessible
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, idx) => (
//               <div
//                 key={idx}
//                 className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
//               >
//                 <div className="text-5xl mb-4">{feature.icon}</div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Carousel Section */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-4xl mx-auto relative">
//           <div className="overflow-hidden rounded-3xl shadow-2xl">
//             <img
//               src={screenshots[activeScreenshot]}
//               alt={`screenshot-${activeScreenshot}`}
//               className="w-full h-[500px] object-cover transition-all duration-700"
//             />
//           </div>
//           {/* Dots */}
//           <div className="flex justify-center mt-6 space-x-3">
//             {screenshots.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setActiveScreenshot(idx)}
//                 className={`w-4 h-4 rounded-full transition-all ${
//                   idx === activeScreenshot ? "bg-orange-600 scale-110" : "bg-gray-300"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mantras Showcase */}
//       <section id="mantras" className="py-24 px-6 bg-white">
//         <div className="max-w-7xl mx-auto text-center mb-16">
//           <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">SACRED MANTRAS</span>
//           <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Dynamic UI for Each Mantra</h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Each mantra comes with its own unique visual theme and background audio
//           </p>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {mantras.map((mantra, idx) => (
//             <div
//               key={idx}
//               className={`relative overflow-hidden rounded-3xl p-8 min-h-[300px] flex items-center justify-center bg-gradient-to-br ${mantra.color} text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer group`}
//             >
//               <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all" />
//               <div className="relative z-10 text-center">
//                 <div className="text-3xl font-bold mb-2">{mantra.name}</div>
//                 <div className="opacity-90 text-sm">Tap to start counting</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12 px-6">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
//           <span className="text-2xl font-bold">JapAura</span>
//           <div className="flex space-x-8">
//             <a href="/privacy.html" className="text-gray-400 hover:text-white transition-colors">
//               Privacy Policy
//             </a>
//             <a href="#features" className="text-gray-400 hover:text-white transition-colors">
//               Features
//             </a>
//             <a href="#mantras" className="text-gray-400 hover:text-white transition-colors">
//               Mantras
//             </a>
//           </div>
//         </div>
//         <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
//           <p>&copy; 2025 JapAura. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }
