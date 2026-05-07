import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LAUNCHPAGE. Studio | Jasa Pembuatan Website & Landing Page Modern',
  description: 'Membangun identitas digital dengan landing page yang cepat, modern, dan didesain untuk konversi tinggi.',
};

export default function Home() {
  const projects = [
    { name: 'Aether Café Web App', type: 'F&B eCommerce', image: 'https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=800', value: '40% Conversion Increase' },
    { name: 'Novatech Innovations', type: 'Tech Startup Landing', image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800', value: '75k+ Leads Generated' },
    { name: 'Chic Thread Co.', type: 'Fashion Boutique Web', image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800', value: 'Seamless Mobile UX' }, 
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased scroll-smooth relative overflow-hidden">
      
      {/* --- BACKGROUND DECORATION (Glow & Grid) --- */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-[-10%] -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-600 opacity-20 blur-[100px]"></div>
      <div className="absolute right-[-5%] top-[15%] -z-10 h-[250px] w-[250px] rounded-full bg-yellow-400 opacity-20 blur-[120px]"></div>

      {/* Navbar Glassmorphism */}
      <nav className="container mx-auto p-4 md:p-5 flex justify-between items-center bg-white/70 backdrop-blur-md border border-white/50 rounded-full shadow-lg shadow-blue-900/5 mt-6 max-w-7xl sticky top-6 z-50">
        <div className="flex items-center gap-3 pl-2">
          <img src="/logo-launchpage.jpg" alt="Launchpage Logo" className="h-9 w-auto rounded-md" />
          <h1 className="text-xl font-black text-blue-950 tracking-tighter hidden sm:block">LAUNCHPAGE.</h1>
        </div>
        
        <ul className="hidden md:flex gap-8 font-medium text-slate-600 text-sm">
          <li><a href="#layanan" className="hover:text-blue-700 hover:font-semibold transition-all">Layanan</a></li>
          <li><a href="#portofolio" className="hover:text-blue-700 hover:font-semibold transition-all">Portofolio</a></li>
          <li><a href="#tim" className="hover:text-blue-700 hover:font-semibold transition-all">Tim Kami</a></li>
        </ul>

        <a href="#kontak" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-950 px-7 py-2.5 rounded-full font-bold hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 transition-all duration-300 text-sm md:text-base">
          Konsultasi Gratis
        </a>
      </nav>

      {/* Hero Section Premium */}
      <section className="container mx-auto px-6 py-28 md:py-40 text-center flex flex-col items-center justify-center max-w-5xl relative">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-sm font-semibold shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
          </span>
          Agency Digital Terbaik di Lamongan
        </div>

        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-blue-950 mb-8 leading-[1.15]">
          Bikin Bisnis kamu <br className="hidden md:block"/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-yellow-500">Terbang Lebih Tinggi</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed">
          Kami membantu UMKM dan startup membangun identitas digital dengan landing page yang cepat, modern, dan didesain khusus untuk melipatgandakan konversi penjualan Anda.
        </p>
        <div className="flex flex-col sm:flex-row gap-5">
          <a href="#portofolio" className="bg-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/40 transition-all duration-300 text-center flex items-center justify-center gap-2">
            Lihat Portofolio
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
          <a href="#layanan" className="bg-white/80 backdrop-blur-sm border-2 border-slate-200 text-slate-800 px-8 py-4 rounded-full font-bold text-lg hover:border-slate-300 hover:bg-white transition-all text-center">
            Pelajari Layanan
          </a>
        </div>
      </section>

      {/* Layanan Section */}
      <section id="layanan" className="py-24 border-y border-slate-200/60 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-extrabold tracking-tighter text-blue-950 mb-4">Apa yang Kami Lakukan?</h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Kami tidak sekadar membuat website, kami menciptakan mesin konversi untuk bisnis Anda.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded-[2rem] bg-white border border-slate-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 text-3xl group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">🎨</div>
              <h4 className="text-2xl font-bold text-blue-950 mb-4">UI/UX Design</h4>
              <p className="text-slate-600 leading-relaxed">Desain antarmuka yang memanjakan mata dan wireframe interaktif menggunakan standar industri terkini.</p>
            </div>
            <div className="p-10 rounded-[2rem] bg-white border border-slate-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/5 transition-all duration-300 group">
              <div className="w-16 h-16 bg-yellow-50 text-yellow-500 rounded-2xl flex items-center justify-center mb-8 text-3xl group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-white transition-all">⚡</div>
              <h4 className="text-2xl font-bold text-blue-950 mb-4">Web Development</h4>
              <p className="text-slate-600 leading-relaxed">Pengembangan website menggunakan teknologi modern yang responsif dan memiliki performa super cepat.</p>
            </div>
            <div className="p-10 rounded-[2rem] bg-white border border-slate-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/5 transition-all duration-300 group">
              <div className="w-16 h-16 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center mb-8 text-3xl group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white transition-all">📈</div>
              <h4 className="text-2xl font-bold text-blue-950 mb-4">SEO & Optimasi</h4>
              <p className="text-slate-600 leading-relaxed">Website dirancang agar mudah ditemukan di pencarian Google dan dioptimasi penuh untuk jangkauan maksimal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Portfolio Section */}
      <section id="portofolio" className="container mx-auto px-6 py-32 max-w-7xl relative">
        <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-blue-950 mb-16 text-center">Proyek yang Pernah Kami Luncurkan</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-[2rem] p-6 md:p-8 border border-slate-100 shadow-xl shadow-slate-200/40 group transition-all duration-300 hover:border-blue-200 hover:-translate-y-2">
              <div className="relative aspect-[4/3] bg-slate-100 rounded-2xl mb-8 flex items-center justify-center overflow-hidden border border-slate-200 group-hover:shadow-lg group-hover:shadow-blue-100/50">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110" />
              </div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">{project.type}</p>
              <h4 className="text-2xl font-bold tracking-tight text-blue-950 mb-3">{project.name}</h4>
              <p className="text-slate-500 leading-relaxed mb-8 text-sm">Membangun platform digital terintegrasi untuk mengoptimalkan operasional dan skala penjualan klien.</p>
              <div className="flex justify-between items-center border-t border-slate-100 pt-6 mt-auto">
                  <div className='flex flex-col'>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Mencapai</span>
                    <span className="text-lg font-extrabold text-blue-950">{project.value}</span>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </section>

{/* Tim Section - Versi Upgrade Profesional */}
      <section id="tim" className="bg-slate-900 py-32 text-white relative overflow-hidden">
        {/* Efek grid tipis di background gelap */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-6 max-w-7xl text-center relative z-10">
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 text-white">Tim di Balik <span className="text-yellow-400">Launchpage</span></h3>
          <p className="text-slate-400 max-w-2xl mx-auto mb-20 text-lg">Tiga pengembang kreatif yang siap mengubah ide bisnis Anda menjadi produk digital nyata.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {/* Anggota 1 (Arya) */}
            <div className="bg-slate-800/40 p-8 rounded-[2.5rem] border border-slate-700 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-yellow-400 group-hover:rotate-180 transition-all duration-700">
                <img src="/logo-launchpage.jpg" alt="Arya" className="w-full h-full object-cover rounded-full group-hover:-rotate-180 transition-all duration-700 grayscale hover:grayscale-0" />
              </div>
              <h4 className="text-2xl font-bold mb-1">Arya</h4>
              <p className="text-blue-400 font-semibold text-sm mb-4">Frontend & UI/UX</p>
              <p className="text-slate-400 text-sm leading-relaxed">Fokus pada pengalaman pengguna dan merancang antarmuka visual yang memanjakan mata.</p>
            </div>

            {/* Anggota 2 (Febri) */}
            <div className="bg-slate-800/40 p-8 rounded-[2.5rem] border border-slate-700 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-yellow-400 group-hover:rotate-180 transition-all duration-700">
                <img src="/logo-launchpage.jpg" alt="Febri" className="w-full h-full object-cover rounded-full group-hover:-rotate-180 transition-all duration-700 grayscale hover:grayscale-0" />
              </div>
              <h4 className="text-2xl font-bold mb-1">Febri</h4>
              <p className="text-blue-400 font-semibold text-sm mb-4">Backend Developer</p>
              <p className="text-slate-400 text-sm leading-relaxed">Arsitek di balik layar. Memastikan sistem berjalan dengan cepat, aman, dan tanpa celah.</p>
            </div>

            {/* Anggota 3 (Risa) */}
            <div className="bg-slate-800/40 p-8 rounded-[2.5rem] border border-slate-700 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-yellow-400 group-hover:rotate-180 transition-all duration-700">
                <img src="/logo-launchpage.jpg" alt="Risa" className="w-full h-full object-cover rounded-full group-hover:-rotate-180 transition-all duration-700 grayscale hover:grayscale-0" />
              </div>
              <h4 className="text-2xl font-bold mb-1">Risa</h4>
              <p className="text-blue-400 font-semibold text-sm mb-4">Project Manager / QA</p>
              <p className="text-slate-400 text-sm leading-relaxed">Menjaga kualitas produk dan memastikan seluruh proyek selesai tepat waktu sesuai target.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Kontak */}
      <footer id="kontak" className="bg-slate-950 py-24 text-center text-slate-400 border-t border-slate-800/50">
        <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Siap Memulai Proyek Anda?</h2>
            <p className="text-lg text-slate-500 mb-10">Jangan biarkan ide hebat Anda hanya menjadi angan. Mari berdiskusi dan wujudkan bersama tim kami.</p>
            <a href="https://wa.me/6281230813044" target="_blank" rel="noreferrer" className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 mb-16">
              Hubungi Kami via WhatsApp
            </a>
            
            <div className="border-t border-slate-800/80 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                  <img src="/logo-launchpage.jpg" alt="Logo" className="h-6 w-auto rounded opacity-50 grayscale" />
                  <span className="text-sm font-semibold text-slate-500">LAUNCHPAGE.</span>
                </div>
                <p className="text-sm font-medium text-slate-600">© 2026 Launchpage Studio. Tugas Kewirausahaan PENS.</p>
            </div>
        </div>
      </footer>

    </main>
  );
}