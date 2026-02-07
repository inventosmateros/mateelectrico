import { useEffect, useRef, useState } from 'react';
import { ShoppingBag, Zap, ChevronDown, ExternalLink, Menu, X, Check, Minus, Images } from 'lucide-react';
import { Carousel } from './components/Carousel';
import { Logo } from './components/Logo';

const mlLinks: Record<string | number, string> = {
  calabaza: "https://www.mercadolibre.com.ar/mate-electrico-inductivo-led-con-base-color-blanco-calabaza/p/MLA54176105",
  rutero: "https://www.mercadolibre.com.ar/mate-electrico-rutero-led--emate-auto--tienda-oficial/up/MLAU3676871796",
  tripode: "https://mercadolibre.com.ar/tienda/emate",
  1: "https://www.mercadolibre.com.ar/mate-electrico-inductivo-led-con-base-color-blanco-calabaza/p/MLA54176105",
  2: "https://www.mercadolibre.com.ar/mate-electrico-rutero-led--emate-auto--tienda-oficial/up/MLAU3676871796",
  3: "https://mercadolibre.com.ar/tienda/emate"
};

interface Product {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  galleryImages: string[];
  glowColor: 'green' | 'warm' | 'white';
  gradientClass: string;
  priority: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'E·Mate Calabaza',
    subtitle: 'iLED Edition',
    description: 'Innovación total en tu escritorio. El E-Mate Inductivo es el primer sistema de mate que cuida tu infusión y tu tecnología. Su base de carga inalámbrica es compatible con smartphones, permitiéndote cargar tu teléfono mientras descansás del mate. 100% sumergible y seguro, es el compañero tecnológico definitivo.',
    image: '/images/emate-iled-calabaza.png',
    galleryImages: [
      '/images/iled-gal/emate-iled (1).jpg',
      '/images/iled-gal/emate-iled (2).jpg',
      '/images/iled-gal/emate-iled (3).jpg',
      '/images/iled-gal/emate-iled (4).jpg',
      '/images/iled-gal/emate-iled (5).jpg',
      '/images/iled-gal/emate-iled (6).jpg',
      '/images/iled-gal/emate-iled (1).png'
    ],
    glowColor: 'green',
    gradientClass: 'bg-gradient-radial',
    priority: 1
  },
  {
    id: 2,
    name: 'E·Mate Rutero',
    subtitle: 'Pro Edition',
    description: 'Tu compañero ideal en la ruta. Olvidate de que el mate se enfríe en medio del viaje. Con un diseño ergonómico pensado para el portavasos de tu auto y conexión directa, el E-Mate Rutero mantiene la yerba a la temperatura exacta desde que salís hasta que llegás',
    image: '/images/rutero-negro.png',
    galleryImages: [
      '/images/rutero-gal/emate-rutero (1).webp',
      '/images/rutero-gal/emate-rutero (1).png',
      '/images/rutero-gal/emate-rutero (1).jpg',
      '/images/rutero-gal/emate-rutero (2).jpg',
      '/images/rutero-gal/emate-rutero (2).png',
      '/images/rutero-gal/emate-rutero (4).jpg',
      '/images/rutero-gal/emate-rutero (3).png'
    ],
    glowColor: 'green',
    gradientClass: 'bg-gradient-radial',
    priority: 2
  },
  {
    id: 3,
    name: 'E·Mate Trípode Eco',
    subtitle: 'Madera Edition',
    description: 'Innovación con conciencia ambiental. El E-Mate Trípode está fabricado con un bioplástico exclusivo de polipropileno y madera reciclada, logrando un diseño sustentable y único. Su luz cálida integrada crea el clima ideal para disfrutar de tu mate, manteniendo siempre la temperatura perfecta con el menor impacto ambiental.',
    image: '/images/tripode-eco-marron.png',
    galleryImages: [
      '/images/tripode-gal/tripode.jpg',
      '/images/tripode-gal/tripode2.jpg'
    ],
    glowColor: 'warm',
    gradientClass: 'bg-gradient-radial-warm',
    priority: 3
  }
];

// ... (Rest of ComparisonSection and WhatsAppIcon and MobileMenu remains unchanged, I will skip them in replacement to avoid huge block) ...
// Wait, I cannot skip with replace_file_content. I need to use the right ranges.
// The previous tool call view_file showed lines.
// Imports are lines 1-2.
// Product interface is lines 13-22.
// Products array is lines 24-55. 
// Rendering of products is around line 413.

// Let's split this into smaller chunks or use the full file replacement if needed, but replace_file_content is better for contiguous blocks.
// I'll do this in two steps if needed, or valid range.
// 
// Step 1: Update imports and interfaces/data (lines 1-55)
// Step 2: Add state to App (around line 280)
// Step 3: Integrate logic in render (around line 413)

// Wait, I can't do multiple replace_file_content calls in parallel. I have to do one. 
// OR use multi_replace.
// I will use multi_replace for this.

// Re-planning the tool call to use `multi_replace_file_content`.

const comparisonData = [
  { feature: 'IDEAL PARA', calabaza: 'Oficina', rutero: 'Vehículos', tripode: 'Casa' },
  { feature: 'Material exterior', calabaza: 'Acero esmaltado a fuego Blanco Brillante', rutero: 'Acero esmaltado a fuego Negro Microtexturado', tripode: 'Polipropileno especial con madera reciclada' },
  { feature: 'Consumo energético', calabaza: '8W / hora', rutero: '7W / hora', tripode: '6W / hora' },
  { feature: 'Capacidad líquida (sin yerba)', calabaza: '168ml', rutero: '168ml', tripode: '168ml' },
  { feature: 'Carga de yerba seca', calabaza: '35-40g', rutero: '35-40g', tripode: '35-40g' },
  { feature: 'Impermeable 100%', calabaza: true, rutero: false, tripode: false },
  { feature: 'Voltaje', calabaza: '5V USB', rutero: '5V USB', tripode: '5V USB' },
  { feature: 'Carga celular QI', calabaza: true, rutero: false, tripode: false },
  { feature: 'Longitud cable', calabaza: '1.2m', rutero: '1m', tripode: '2m' },
  { feature: 'Interior', calabaza: 'Acero inox 430 apto alimento', rutero: 'Acero inox 430 apto alimento', tripode: 'Acero inox 430 apto alimento' },
  { feature: 'Bombilla incluida', calabaza: true, rutero: true, tripode: true },
  { feature: 'Mantiene yerba caliente', calabaza: '24hs', rutero: '24hs', tripode: '24hs' },
  { feature: 'Calienta agua fría', calabaza: false, rutero: false, tripode: false },
  { feature: 'Requiere agua a 75°', calabaza: true, rutero: true, tripode: true },
  { feature: 'Apto PC / Notebook', calabaza: true, rutero: true, tripode: true },
  { feature: 'Apto cualquier USB', calabaza: true, rutero: true, tripode: true },
  { feature: 'Apto AUTO', calabaza: false, rutero: true, tripode: false },
  { feature: 'Incluye adaptador auto', calabaza: false, rutero: true, tripode: false },
  { feature: 'Incluye adaptador 220V', calabaza: true, rutero: false, tripode: false },
  { feature: 'Personalizable', calabaza: 'Sí - Láser (mín. 6u)', rutero: 'No', tripode: 'Sí - Tampografía (mín. 50u)' },
  { feature: 'Ahorro yerba mensual', calabaza: '~2kg', rutero: '~2kg', tripode: '~2kg' },
  { feature: 'Garantía', calabaza: '2 años', rutero: '1 año', tripode: '1 año' },
];

const menuItems = [
  { label: 'WHATSAPP', href: 'https://wa.me/5491122549603', isWhatsApp: true },
  { label: 'MAYORISTAS', href: 'https://wa.me/5491122549603?text=Hola,%20quisiera%20saber%20como%20comprar%20emates%20al%20mayor%20para%20vender%20en%20mi%20comercio.' },
  { label: 'CORPORATIVOS', href: 'https://wa.me/5491122549603?text=Hola,%20quisiera%20mates%20corporativos%20para%20merchandising.%0AEl%20modelo%20que%20me%20interesa%20es%20el:%20_______%0ALa%20cantidad%20a%20cotizar:%20_________________%0ACon%20o%20sin%20logo?%20______%0AFecha%20estimada%20de%20entrega:%20___________%0AMi%20mail%20para%20enviar%20el%20presupuesto%20formal%20es:%20______' },
  { label: 'SOPORTE', href: 'https://wa.me/5491122549603?text=Necesito%20soporte%20tecnico,%20tengo%20un%20problema%20con%20mi%20mate.' },
  { label: 'CONTACTO', href: 'https://wa.me/5491122549603?text=Por%20el%20momento%20pod%C3%A9s%20escribirnos%20por%20este%20canal%20de%20whatsapp%20o%20al%20mail%20hola@mateelectrico.com' },
  { label: 'PRENSA', href: 'https://wa.me/5491122549603' },
  { label: 'DONDE COMPRAR', href: 'https://wa.me/5491122549603?text=Hola,%20vivo%20en%20______________%0AQuisiera%20saber%20en%20que%20tienda%20cercana%20puedo%20conseguir%20sus%20emates' },
  { label: 'MÁS PRODUCTOS', href: 'https://mercadolibre.com.ar/tienda/emate' },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ComparisonSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const renderValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-500 mx-auto" />
      ) : (
        <Minus className="w-5 h-5 text-zinc-600 mx-auto" />
      );
    }
    return <span className="text-zinc-300 text-sm">{value}</span>;
  };

  return (
    <section ref={sectionRef} className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease'
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Compará los Modelos
          </h2>
          <p className="text-zinc-400 text-lg">
            Encontrá el E-Mate perfecto para vos
          </p>
        </div>

        <div
          className={`overflow-x-auto ${isVisible ? 'animate-pista-scroll' : 'opacity-0'}`}
        >
          <div className="min-w-[800px]">
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="text-zinc-500 font-medium text-sm uppercase tracking-wider">
                Característica
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded-2xl overflow-hidden bg-zinc-900/50 border border-green-500/30">
                  <img src="/images/emate-iled-calabaza.png" alt="Calabaza" className="w-full h-full object-contain p-2" />
                </div>
                <p className="text-white font-semibold text-sm">Calabaza</p>
                <p className="text-green-400 text-xs">iLED</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded-2xl overflow-hidden bg-zinc-900/50 border border-green-500/30">
                  <img src="/images/rutero-negro.png" alt="Rutero" className="w-full h-full object-contain p-2" />
                </div>
                <p className="text-white font-semibold text-sm">Rutero</p>
                <p className="text-green-400 text-xs">Pro</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded-2xl overflow-hidden bg-zinc-900/50 border border-orange-500/30">
                  <img src="/images/tripode-eco-marron.png" alt="Trípode" className="w-full h-full object-contain p-2" />
                </div>
                <p className="text-white font-semibold text-sm">Trípode Eco</p>
                <p className="text-orange-400 text-xs">Madera</p>
              </div>
            </div>

            <div className="space-y-1">
              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-4 gap-4 py-3 px-4 rounded-lg ${index % 2 === 0 ? 'bg-zinc-900/30' : ''
                    }`}
                >
                  <div className="text-zinc-400 text-sm flex items-center">
                    {row.feature}
                  </div>
                  <div className="text-center flex items-center justify-center">
                    {renderValue(row.calabaza)}
                  </div>
                  <div className="text-center flex items-center justify-center">
                    {renderValue(row.rutero)}
                  </div>
                  <div className="text-center flex items-center justify-center">
                    {renderValue(row.tripode)}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t border-zinc-800">
              <div className="text-zinc-500 font-medium text-sm flex items-center">
                Precio
              </div>
              {['calabaza', 'rutero', 'tripode'].map((model) => (
                <div key={model} className="text-center">
                  <a
                    // Aquí es donde sucede la magia: busca el link en el objeto usando el nombre del modelo
                    href={mlLinks[model as keyof typeof mlLinks]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-green-400 hover:text-green-300 text-sm font-medium transition-colors"
                  >
                    Ver en ML
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-black" />
        ) : (
          <Menu className="w-6 h-6 text-black" />
        )}
      </button>

      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {menuItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`text-2xl font-medium transition-colors flex items-center gap-3 ${item.isWhatsApp ? 'text-green-400 hover:text-green-300' : 'text-zinc-300 hover:text-green-400'
                }`}
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.4s ease ${index * 0.05}s`
              }}
            >
              {item.isWhatsApp && <WhatsAppIcon className="w-6 h-6" />}
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState<Set<number>>(new Set());
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);

  const openGallery = (product: Product) => setActiveProduct(product);
  const closeGallery = () => setActiveProduct(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = Number(entry.target.getAttribute('data-product-id'));
          if (entry.isIntersecting) {
            setVisibleProducts((prev) => new Set([...prev, id]));
          }
        });
      },
      {
        threshold: 0.05,    // Se activa apenas se asoma un 5% (antes era 0.3)
        rootMargin: '50px' // Se activa 150px ANTES de que llegue a la vista (antes era -50px)
      }
    );

    productRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const getGlowClass = (glowColor: string) => {
    switch (glowColor) {
      case 'green':
        return 'glow-green';
      case 'warm':
        return 'glow-warm';
      case 'white':
        return 'glow-white';
      default:
        return 'glow-green';
    }
  };

  const getRingGlowClass = (glowColor: string) => {
    switch (glowColor) {
      case 'green':
        return 'ring-glow-green';
      case 'warm':
        return 'ring-glow-warm';
      case 'white':
        return 'ring-glow-white';
      default:
        return 'ring-glow-green';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="noise-overlay" />
      <MobileMenu />

      <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
        <div
          className="absolute inset-0 bg-gradient-radial opacity-50"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-500/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center mb-8">
          <div className="flex items-center justify-center gap-3">
            <Logo />
          </div>
          {/* <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-2">
            <span className="text-gradient">E·Mate</span>
          </h1> */}
          <p className="text-xl md:text-2xl text-zinc-400 font-light tracking-wide -mt-12 md:-mt-20">
            Mate Eléctrico
          </p>
        </div>

        <div className="relative z-10 text-center max-w-xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
            La revolución del mate llegó a tu hogar.
            <br />
            <span className="text-green-400">Mantén tu mate siempre a la temperatura perfecta.</span>
          </p>
        </div>

        <a
          href="https://mercadolibre.com.ar/tienda/emate"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 btn-iphone flex items-center gap-2"
        >
          <ShoppingBag className="w-5 h-5" />
          Ver en Mercado Libre
          <ExternalLink className="w-4 h-4" />
        </a>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-zinc-500" />
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Nuestra Colección
            </h2>
            <p className="text-zinc-400 text-lg">
              Elegí el modelo que mejor se adapte a tu estilo
            </p>
          </div>

          <div className="space-y-32">
            {products.map((product, index) => (
              <div
                key={product.id}
                ref={(el) => { productRefs.current[index] = el; }}
                data-product-id={product.id}
                className={`product-card relative rounded-3xl overflow-hidden ${getGlowClass(product.glowColor)} ${getRingGlowClass(product.glowColor)}`}
                style={{
                  opacity: visibleProducts.has(product.id) ? 1 : 0,
                  transform: visibleProducts.has(product.id)
                    ? 'translateY(0)'
                    : 'translateY(50px)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <div className={`absolute inset-0 ${product.gradientClass}`} />

                <div className={`relative z-10 grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}>
                  <div className={`relative flex items-center justify-center ${index % 2 === 1 ? 'md:order-2' : ''
                    }`}>
                    <div
                      className="relative cursor-pointer group"
                      onClick={() => openGallery(product)}
                    >
                      <div
                        className={`absolute inset-0 blur-3xl scale-150 pulse-glow ${product.glowColor === 'warm' ? 'bg-orange-500/30' : 'bg-green-500/30'
                          }`}
                      />
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`relative z-10 w-full max-w-md h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105 ${index === 0 ? 'animate-float' : index === 1 ? 'animate-float-delayed' : 'animate-float-delayed-2'
                          }`}
                      />
                      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm font-medium flex items-center gap-2">
                          <Images className="w-4 h-4" />
                          Ver Galería
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${product.priority === 1
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : product.priority === 2
                          ? 'bg-zinc-700/50 text-zinc-300 border border-zinc-600/30'
                          : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                        }`}>
                        {product.priority === 1 ? 'MÁS VENDIDO' : product.priority === 2 ? 'POPULAR' : 'ECO-FRIENDLY'}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-1">
                        {product.name}
                      </h3>
                      <p className={`text-lg font-medium ${product.glowColor === 'warm' ? 'text-orange-400' : 'text-green-400'
                        }`}>
                        {product.subtitle}
                      </p>
                    </div>

                    <p className="text-zinc-300 text-lg leading-relaxed">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {['Luz LED', 'Temperatura controlada', 'Diseño premium'].map((feature) => (
                        <span
                          key={feature}
                          className="px-4 py-2 bg-zinc-800/50 rounded-full text-sm text-zinc-300 border border-zinc-700/50"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 mt-4">
                      <a
                        href={mlLinks[product.id]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 btn-iphone"
                      >
                        <ShoppingBag className="w-5 h-5" />
                        Ver en ML
                        <ExternalLink className="w-4 h-4" />
                      </a>

                      <button
                        onClick={() => openGallery(product)}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 border ${product.glowColor === 'warm'
                          ? 'border-orange-500/50 text-orange-400 hover:bg-orange-500/10'
                          : 'border-green-500/50 text-green-400 hover:bg-green-500/10'
                          }`}
                      >
                        <Images className="w-5 h-5" />
                        GALERIA DE FOTOS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ComparisonSection />

      <footer className="relative py-20 px-6 border-t border-zinc-900/50 bg-black">
        <div className="max-w-6xl mx-auto">
          {/* Primera Fila: 3 Columnas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-center md:text-left">

            {/* Columna 1: Branding */}
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Zap className="w-8 h-8 text-green-500" />
                <span className="text-2xl font-bold text-gradient">E-Mate</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Innovación argentina aplicada al ritual de siempre.
              </p>
            </div>

            {/* Columna 2: Enlaces Rápidos */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold uppercase text-xs tracking-widest">Tienda</h4>
              <a
                href="https://mercadolibre.com.ar/tienda/emate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-green-400 transition-colors flex items-center justify-center md:justify-start gap-2 text-sm"
              >
                Tienda Oficial Mercado Libre
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Columna 3: Legal */}
            <div className="space-y-2">
              <h4 className="text-white font-semibold uppercase text-xs tracking-widest mb-4">Legal</h4>
              <p className="text-zinc-500 text-xs">
                © 2019-2026 E-Mate. <br /> Todos los derechos reservados.
              </p>
              <p className="text-zinc-500 text-xs font-mono">
                Mate Eléctrico SAS <br /> CUIT 30-71634468-8
              </p>
            </div>
          </div>

          {/* Segunda Fila: Créditos (InventosArgentinos.com) */}
          <div className="mt-16 pt-8 border-t border-zinc-900/50 flex flex-col items-center gap-2">
            <p className="text-zinc-500 text-sm">
              Desarrollado por:{" "}
              <a
                href="https://inventosargentinos.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors font-medium decoration-zinc-800 underline-offset-4 hover:underline"
              >
                InventosArgentinos.com
              </a>
            </p>
            <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em]">
              Innovación & Propiedad Intelectual
            </p>
          </div>
        </div>
      </footer>
      <Carousel
        isOpen={!!activeProduct}
        onClose={closeGallery}
        images={activeProduct?.galleryImages || []}
      />
    </div>
  );
}

export default App;
