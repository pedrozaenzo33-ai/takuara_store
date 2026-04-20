import React, { useState, useEffect } from "react";

const productsData = [
  { id: 1, name: "Campera hombre rompe viento impermeable c/piel", price: 200000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/TDxCkwZQ/Camperas-rompe-viento-impermeable-con-piel.jpg" },
  { id: 2, name: "Chaleco dama", price: 180000, category: "Chalecos", sizes: "1 al 4", image: "https://i.ibb.co/Y7hB1wgW/chaleco-dama.jpg" },
  { id: 3, name: "Campera dama impermeable reversible", price: 190000, category: "Camperas", sizes: "XS al 4", image: "https://i.ibb.co/rRhg1sB8/CAMPERA-DAMA-IMPERMEABLE-REVERSIBLES-TALLES.jpg" },
  { id: 4, name: "Chaleco hombre color negro", price: 150000, category: "Chalecos", sizes: "2 al 5", image: "https://i.ibb.co/NqjvD23/chaleco-hombre-color-negro.jpg" },
  { id: 5, name: "Campera rompe viento elastizada dama CON marca", price: 190000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/Gfn56stx/campera-rompe-viento-elastizada-dama-CON-marca.jpg" },
  { id: 16, name: "Campera rompe viento elastizada dama SIN marca", price: 180000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/s90g6DDX/campera-rompe-viento-elastizada-dama-SIN-talle.jpg" },
  { id: 6, name: "Remera deportiva hombre", price: 110000, category: "Remeras", sizes: "1 al 5", images: ["https://i.ibb.co/MxX6yXLS/remera-deportiva-hombre.jpg","https://i.ibb.co/ksBYbGPy/remera-deportiva-hombre-2.jpg","https://i.ibb.co/B29RHnTV/remera-deportiva-hombre-3.jpg"] },
  { id: 7, name: "Conjunto hombre tela elastizada CON marca", price: 260000, category: "Conjuntos", sizes: "1 al 5", image: "https://i.ibb.co/9mTwRsK3/conjunto-hombre-tela-elastizada-CON-marca.jpg" },
  { id: 8, name: "Campera dama rompe viento c/forro", price: 150000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/tMkRCX9G/campera-rompeviento-dama-forrada-2.jpg" },
  { id: 9, name: "Conjunto dama dry fit elastizado (4 unidades)", price: 150000, category: "Conjuntos", sizes: "1 al 4", image: "https://i.ibb.co/PzjRTP5Y/conjunto-dama-Dry-Fit-elastizado.jpg" },

  // NUEVOS PRODUCTOS
    { id: 11, name: "Camperas de color negro c/piel hombre", price: 220000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/J9KL5vP/campera-negra-con-piel-hombre.jpg" },
  { id: 12, name: "Campera dama degrade", price: 180000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/ns555fW3/campera-dama-degrade.jpg" },
  { id: 13, name: "Campera tela neoprene", price: 220000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/4RYYyStD/Campera-tela-neoprene.jpg" },
  { id: 14, name: "Remera deportiva dama tela elastizada CON marca", price: 110000, category: "Remeras", sizes: "1 al 5", image: "https://i.ibb.co/Y70KzhGn/remera-deportiva-dama-tela-elastizada.jpg" },
  { id: 21, name: "Remera deportiva dama tela elastizada SIN marca", price: 100000, category: "Remeras", sizes: "1 al 5", image: "https://i.ibb.co/VYL0x0B3/remera-deportiva-dama-tela-elastizada-SIN-marca.jpg" },

  
  
  // CAMPERAS DAMA CON / SIN MARCA
  
  { id: 19, name: "Chaleco dama talles especiales", price: 180000, category: "Chalecos", sizes: "Especiales", image: "https://i.ibb.co/VYHkxdjj/chaleco-dama-talles-especiales.jpg" },
  { id: 20, name: "Conjunto hombre tela elastizada SIN marca", price: 236000, category: "Conjuntos", sizes: "1 al 5", image: "https://i.ibb.co/QvR9tS37/conjunto-hombre-tela-elastizada-SIN-marca.jpg" },
  { id: 22, name: "Campera impermeable CON marca (6 unidades)", price: 185000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/gFXdZ18V/CAMPERA-ROMPE-VIENTO-IMPERMEABLE.jpg" },
  { id: 34, name: "Campera impermeable SIN marca (6 unidades)", price: 160000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/gFXdZ18V/CAMPERA-ROMPE-VIENTO-IMPERMEABLE.jpg" },
  { id: 23, name: "Campera rompeviento dama forrada CON marca", price: 170000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/pvWH33xS/campera-rompe-viento-dama-forrada-CON-marca.jpg" },
  { id: 24, name: "Campera rompeviento dama forrada SIN marca", price: 160000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/7dqJqY8s/campera-rompe-viento-dama-forrada-sin-marca.jpg" },
  { id: 25, name: "Camperas niños canelones", price: 230000, category: "Camperas", sizes: "8 al 16", image: "https://i.ibb.co/gbNLqrrJ/campera-ni-os-canelones.jpg" },
  { id: 26, name: "Chombas importadas Motorsport", price: 100000, category: "Remeras", sizes: "1 al 5", images: [
    "https://i.ibb.co/QvzpYc42/chomba-BMW.jpg",
    "https://i.ibb.co/3yB49cXQ/Chomba-F1-ferrari.jpg",
    "https://i.ibb.co/DDktGzsG/chomba-ferrari.jpg",
    "https://i.ibb.co/wh896SFM/chomba-honda-2.jpg",
    "https://i.ibb.co/ymX3GxMW/chomba-honda.jpg",
    "https://i.ibb.co/jPX0h8f7/chomba-red-bull-2.jpg",
    "https://i.ibb.co/1Gnbgdvz/chomba-red-bull-3.jpg",
    "https://i.ibb.co/zWyn68h3/chomba-red-bull.jpg"
  ] },
  { id: 27, name: "Campera rompeviento importada liviana CON marca", price: 185000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/x8RwhCpk/Campera-rompeviento-importada-liviana-CON-marca.jpg" },
  { id: 28, name: "Campera rompeviento importada liviana SIN marca", price: 170000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/j9GD7wy9/campera-rompe-viento.jpg" },
  { id: 29, name: "Short elastizado", price: 80000, category: "Conjuntos", sizes: "1 al 4", image: "https://i.ibb.co/3YvRswdf/short-elastizado.jpg" },
  { id: 30, name: "Remeras deportivas calidad premium CON marca", price: 120000, category: "Remeras", sizes: "1 al 5", image: "https://i.ibb.co/TxdyCJmW/remera-calidad-premium-CON-marca.jpg" },
  { id: 31, name: "Remeras deportivas calidad premium SIN marca", price: 110000, category: "Remeras", sizes: "1 al 5", image: "https://i.ibb.co/chtBBsG3/remera-calidad-premium-SIN-marca.jpg" },
  { id: 32, name: "Conjunto dama tela elastizada CON marca", price: 262000, category: "Conjuntos", sizes: "1 al 5", image: "https://i.ibb.co/dwsWZv8c/conjunto-dama-tela-elastizada-CON-marca.jpg" },
  { id: 33, name: "Conjunto dama tela elastizada SIN marca", price: 250000, category: "Conjuntos", sizes: "1 al 5", image: "https://i.ibb.co/7xDMy1Zm/conjunto-dama-tela-elastizada.jpg" },
  { id: 35, name: "Camperas impermeables", price: 160000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/j9wvWYY0/campera-impermeables.jpg" },
  { id: 36, name: "Camperas impermeables forradas talles especiales", price: 186000, category: "Camperas", sizes: "Especiales", image: "https://i.ibb.co/TMbXDW4H/campera-impermeable-forrada-t-especial.jpg" },
  { id: 37, name: "Campera rompe viento c/piel dama", price: 200000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/0jGT22PF/campera-rompe-viento-con-piel-dama.jpg" },
  { id: 38, name: "Chaleco c/piel hombre", price: 170000, category: "Chalecos", sizes: "1 al 5", image: "https://i.ibb.co/chvhfdZC/chaleco-con-piel-hombre.jpg" },
  { id: 39, name: "Chombas importadas SIN marca", price: 120000, category: "Remeras", sizes: "1 al 5", image: "https://i.ibb.co/DDxQcjtp/chomba-importada-SIN-marca.jpg" },
  { id: 40, name: "Chombas importadas CON marca", price: 130000, category: "Remeras", sizes: "1 al 5", image: "https://i.ibb.co/MDPwynVj/chomba-importada-CON-marca.jpg" },
  { id: 41, name: "Remeras dama deportivas calidad premium CON marca (6 unidades)", price: 86000, category: "Remeras", sizes: "1 al 4", images: ["https://i.ibb.co/xqQpb4rM/remera-deportiva-mujer-1-con-marca.jpg", "https://i.ibb.co/PZwqSxDm/remera-deportiva-mujer-2-con-marca.jpg"] },
  { id: 42, name: "Remeras dama deportivas calidad premium SIN marca (6 unidades)", price: 81000, category: "Remeras", sizes: "1 al 4", images: ["https://i.ibb.co/LDccfS6F/remera-deportiva-mujer-1-sin-marca.jpg", "https://i.ibb.co/LXW5gdM4/remera-deportiva-mujer-2-sin-marca.jpg"] },
  { id: 43, name: "Conjunto hombre tela elastizada SIN marca", price: 236000, category: "Conjuntos", sizes: "1 al 5", image: "https://i.ibb.co/xtGy0HpB/conjunto-hombre-tela-elastizada-sin-marca.jpg" },
  { id: 44, name: "Campera impermeable forrada", price: 176000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/8ntK9TFv/campera-impermeable-forrada.jpg" },
  { id: 45, name: "Campera adidas rompe viento forrada", price: 168000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/fGTzmqXk/campera-adidas-rompe-viento-forrada.jpg" },
  { id: 46, name: "Campera adidas rompe viento forrada hombre", price: 168000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/RkYrqhvj/campera-adidas-rompe-viento-forrada-hombre.jpg" },
  { id: 47, name: "Campera abrigo hombre", price: 175000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/twG2DbRH/campera-abrigo-hombre.jpg" },
  { id: 48, name: "Campera canelones de abrigo hombre", price: 180000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/XrDWDDsP/campera-canelones-hombre.jpg" },
  { id: 49, name: "Campera dama rompe viento forrada", price: 160000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/zhzxN8Wj/campera-dama-rompe-viento-forrada.jpg" },
  { id: 50, name: "Campera unisex rompe viento elastizada", price: 150000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/0VWywNxN/campera-unisex-rompeviento-elastizada.jpg" },
  { id: 51, name: "Campera unisex elastizada", price: 150000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/tM729Fm1/campera-unisex-elastizada.jpg" },
  { id: 52, name: "Campera rompe viento dama elastizada", price: 150000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/CKM01hDM/campera-rompe-viento-dama-forrada.jpg" },
  { id: 53, name: "Campera rompe viento dama", price: 158000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/fYDzQd9T/campera-rompe-viento-dama.jpg" },
  { id: 54, name: "Campera combinada rompe viento impermeable", price: 170000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/bjSyWh7y/campera-combinada-rompe-viento-impermeable.jpg" },
  { id: 55, name: "Campera combinada rompe viento impermeable", price: 170000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/N6TvSWBj/2da.jpg" },
  { id: 56, name: "Campera dama elastizada", price: 160000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/gbFBxCjp/campera-dama-elastizada.jpg" },
  { id: 57, name: "Campera rompe viento elastizada", price: 155000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/TDrvFfnC/campera-rompe-viento-elastizada.jpg" },
  { id: 58, name: "Remera hombre", price: 120000, category: "Remeras", sizes: "1 al 5", image: "https://i.ibb.co/gLW5rzdB/temera-hombre.jpg" },
  { id: 59, name: "Campera neoprene dama", price: 190000, category: "Camperas", sizes: "1 al 5", image: "https://i.ibb.co/KjgXMHSC/Campera-neoprene-dama.jpg" }
];

export default function Store() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");
  const [view, setView] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showCartOverlay, setShowCartOverlay] = useState(false);
  const [lastAdded, setLastAdded] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerAnimation = () => {
    setAnimating(true);
    setTimeout(() => setAnimating(false), 3600);
  };

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
    setLastAdded(product);
    triggerAnimation();
    setShowCartOverlay(true);
    setTimeout(()=>setShowCartOverlay(false), 2500);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const filteredProducts = productsData.filter((p) =>
    (category === "Todos" || p.category === category) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 relative overflow-hidden">

      {/* fondo decorativo premium */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-black/10 rounded-full blur-3xl top-[-100px] left-[-100px]"></div>
        <div className="absolute w-[500px] h-[500px] bg-gray-500/10 rounded-full blur-3xl bottom-[-100px] right-[-100px]"></div>
      </div>

      {animating && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50 overflow-hidden">
          <div className="absolute text-[8rem] animate-[cartMove_3.6s_ease-in-out]">🛒</div>
          <div className="absolute text-5xl animate-[drop_3.6s_ease-in-out]">👕</div>
        </div>
      )}

      <style jsx>{`
        @keyframes drop {
          0% { transform: translateY(-200%); opacity: 0; }
          30% { opacity: 1; }
          60% { transform: translateY(20%); }
          100% { transform: translateY(0%); opacity: 0; }
        }
        @keyframes cartMove {
          0% { transform: translateX(-150vw); }
          30% { transform: translateX(0); }
          70% { transform: translateX(0); }
          100% { transform: translateX(150vw); }
        }
      `}</style>

      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 text-white transition-all duration-300 ${scrolled ? "bg-black/60 backdrop-blur-md" : "bg-black"}`}>
        <h1 className="text-2xl font-extrabold tracking-widest cursor-pointer" onClick={() => setView("home")}>TAKUARA</h1>
        <button onClick={() => setView("cart")} className="relative flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400 text-black shadow-2xl hover:scale-125 transition-all duration-300 animate-pulse border-2 border-black">
          🛒
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-sm px-3 py-0.5 rounded-full animate-bounce font-bold shadow-md">{cart.length}</span>
          )}
        </button>
      </nav>

      {showCartOverlay && lastAdded && (
        <div className="fixed inset-0 flex items-start justify-center pt-24 z-[60] pointer-events-none">
          <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md animate-[fadeIn_0.3s_ease] border-2 border-black shadow-[0_10px_40px_rgba(0,0,0,0.25)] relative overflow-hidden before:absolute before:inset-0 before:rounded-2xl before:p-[2px] before:bg-gradient-to-r before:from-black before:via-gray-400 before:to-black before:-z-10">
            <h3 className="text-lg font-semibold">
              Se ha agregado "{lastAdded.name}" al carrito
            </h3>
            <div className="mt-2 text-xl font-bold">
              ${lastAdded.price.toLocaleString()}
            </div>
          </div>
        </div>
      )}



      
      {view === "home" && (
        <>
          {/* HERO */}
          <section
            className="relative text-center py-28 text-white overflow-hidden bg-center bg-cover min-h-[60vh] flex items-center justify-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517964603305-11c0f6f66012?q=80&w=1200')" }}
          >
            {/* fallback imagen visible */}
            <img
              src="https://images.unsplash.com/photo-1517964603305-11c0f6f66012?q=80&w=1200"
              className="absolute inset-0 w-full h-full object-cover -z-10"
            />

            {/* overlay oscuro para estilo premium */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10">
              <h1 className="text-8xl font-extrabold tracking-wider">TAKUARA</h1>
              <h2 className="text-2xl mt-2">Ropa Deportiva</h2>
              <p className="mt-4 text-gray-300">Sección mayorista</p>
            </div>
          </section>

          {/* FILTROS */}
          <div className="p-6 flex flex-col md:flex-row gap-4 justify-center">
            <input
              placeholder="Buscar producto..."
              className="p-3 rounded-xl border w-full md:w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              onChange={(e)=>setSearch(e.target.value)}
            />
            <select
              onChange={(e)=>setCategory(e.target.value)}
              className="p-3 rounded-xl border shadow-sm"
            >
              <option>Todos</option>
              <option>Camperas</option>
              <option>Conjuntos</option>
              <option>Remeras</option>
            </select>
          </div>

          {/* PRODUCTOS */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
            {filteredProducts.map(p => (
              <div key={p.id} className="bg-white p-5 rounded-2xl shadow hover:shadow-xl transition duration-300">
                <img src={p.images ? p.images[0] : p.image} onClick={() => { setSelectedProduct(p); setCurrentImageIndex(0); }} className="mb-4 rounded-xl cursor-pointer hover:scale-105 transition" />
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="text-gray-500 text-sm mb-2">Talles: {p.sizes}</p>
                <p className="text-xl font-bold mb-3">${p.price.toLocaleString()} (media docena)</p>

                <button
                  onClick={()=>addToCart(p)}
                  className="w-full bg-black text-white py-2 rounded-xl transform transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg"
                >
                  Añadir al carrito
                </button>
              </div>
            ))}
          </div>

          {selectedProduct && (
            <div onClick={() => setSelectedProduct(null)} className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
              <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-2xl p-3 max-w-md w-[92%] relative shadow-2xl">
                <button onClick={() => setSelectedProduct(null)} className="absolute top-3 right-3 text-xl z-50 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center hover:scale-110">✖</button>
                <div className="relative">
                  <img src={selectedProduct.images ? selectedProduct.images[currentImageIndex] : selectedProduct.image} className="w-full max-h-[360px] object-contain rounded-xl mb-3" />

                  {selectedProduct.images && (
                    <>
                      <button onClick={() => setCurrentImageIndex((currentImageIndex - 1 + selectedProduct.images.length) % selectedProduct.images.length)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full">◀</button>
                      <button onClick={() => setCurrentImageIndex((currentImageIndex + 1) % selectedProduct.images.length)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full">▶</button>
                    </>
                  )}
                </div>
                <h2 className="text-xl font-bold mb-2">{selectedProduct.name}</h2>
                <p className="text-gray-500 mb-2">Talles: {selectedProduct.sizes}</p>
                <p className="text-2xl font-bold mb-4">${selectedProduct.price.toLocaleString()} (media docena)</p>
                <button onClick={() => addToCart(selectedProduct)} className="w-full bg-black text-white py-3 rounded-xl hover:scale-105 transition">
                  Añadir al carrito
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {view === "cart" && (
        <div className="pt-28 p-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Tu carrito</h2>

          {cart.length === 0 ? (
            <p>Tu carrito está vacío</p>
          ) : (
            <>
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-xl shadow">
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500">${item.price.toLocaleString()} (media docena) x {item.qty}</p>
                    </div>

                    <button
                      onClick={() => setCart(cart.filter(p => p.id !== item.id))}
                      className="text-red-500 hover:scale-110 transition"
                    >
                      ❌
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-2xl font-bold">
                Total: ${total.toLocaleString()}
              </div>

              <a
                href={`https://wa.me/5493364661759?text=${encodeURIComponent(
                  "Hola, quiero comprar:\n" +
                  cart.map(i => `- ${i.name} x${i.qty}`).join("\n") +
                  `\nTotal: $${total.toLocaleString()}`
                )}`}
                target="_blank"
                className="block mt-6 text-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl text-lg transition"
              >
                Finalizar compra por WhatsApp
              </a>
            </>
          )}
        </div>
      )}

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href="https://wa.me/5493364661759"
        target="_blank"
        className="fixed bottom-6 right-6 z-[70] bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
        title="Escribinos por WhatsApp"
      >
        <span className="text-3xl">💬</span>
      </a>

    </div>
  );
}
