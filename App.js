import React, { useState } from 'react';
import { Mail, ShoppingCart, Menu, X } from 'lucide-react';
import ProductCard from './components/ProductCard';
import CompatibilityModal from './components/CompatibilityModal';
import SiliconeInfoModal from './components/SiliconeInfoModal';

// ... 其余代码保持不变 ...
const App = () => {
  const [currentPage, setCurrentPage] = useState('products');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSiliconeInfo, setShowSiliconeInfo] = useState(false);

  const products = [
    {
      id: 1,
      name: "Sport Bottle Ice Mold - Rose Pink",
      color: "#ebcbbe",
      description: "Designed specifically for sport water bottles, our slim ice mold creates perfect long-lasting ice sticks. Made with premium food-grade silicone for safe and durable use.",
      features: [
        "Premium food-grade silicone material",
        "Perfect fit for sport bottles",
        "Easy to clean and store",
        "Durable and reusable",
      ],
      amazonLink: "#",
      images: Array(6).fill("/api/placeholder/400/300"),
      compatibleBottles: [
        {
          name: "Hydro Flask Standard Mouth",
          image: "/api/placeholder/200/300",
          description: "Perfect fit for 18oz, 21oz, 24oz standard mouth bottles"
        },
        {
          name: "S'well Original",
          image: "/api/placeholder/200/300",
          description: "Compatible with 17oz, 25oz bottles"
        },
        {
          name: "Klean Kanteen Classic",
          image: "/api/placeholder/200/300",
          description: "Fits 20oz, 27oz classic bottles"
        }
      ]
    },
    {
      id: 2,
      name: "Sport Bottle Ice Mold - Sage Green",
      color: "#a1cd9d",
      description: "XL version of our sport bottle ice mold, perfect for larger capacity bottles. Special elongated design ensures long-lasting cooling effect.",
      features: [
        "Larger size design",
        "Extended cooling duration",
        "Leak-proof seal",
        "Easy release design",
      ],
      amazonLink: "#",
      images: Array(6).fill("/api/placeholder/400/300"),
      compatibleBottles: [
        {
          name: "Hydro Flask Wide Mouth",
          image: "/api/placeholder/200/300",
          description: "Perfect for 32oz, 40oz wide mouth bottles"
        },
        {
          name: "YETI Rambler",
          image: "/api/placeholder/200/300",
          description: "Compatible with 26oz, 36oz bottles"
        },
        {
          name: "ThermoFlask",
          image: "/api/placeholder/200/300",
          description: "Fits 24oz, 40oz bottles"
        }
      ]
    }
  ];

  const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
      <div className="relative group">
        <img 
          src={images[currentIndex]} 
          alt={`Product image ${currentIndex + 1}`}
          className="w-full rounded-lg h-64 object-cover"
        />
        <button 
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  const CompatibilityModal = ({ product, onClose }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Compatible Bottles</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.compatibleBottles.map((bottle, index) => (
              <div key={index} className="border rounded-lg p-4">
                <img src={bottle.image} alt={bottle.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="font-bold mb-2">{bottle.name}</h3>
                <p className="text-gray-600">{bottle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const SiliconeInfoModal = ({ onClose }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Why Some Ice Molds Leave White Residue?</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X />
            </button>
          </div>
          <div className="prose max-w-none">
            <h3>Understanding Silicone Quality in Ice Molds</h3>
            <p>
              Not all silicone ice molds are created equal. Some manufacturers use lower-grade silicone or skip crucial manufacturing steps, leading to:
            </p>
            <ul>
              <li>White residue leaching into ice</li>
              <li>Potential harmful chemicals release</li>
              <li>Shorter product lifespan</li>
            </ul>
            <h3>Our Premium Manufacturing Process</h3>
            <p>
              At TOVICE, we use only premium food-grade silicone and follow a rigorous manufacturing process that includes:
            </p>
            <ul>
              <li>Multiple curing cycles</li>
              <li>Thorough quality testing</li>
              <li>Regular third-party lab verification</li>
            </ul>
            <p>
              This ensures our ice molds never leave any residue and remain safe for years of use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const [selectedProduct, setSelectedProduct] = useState(null);

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <ImageCarousel images={product.images} />
        <p className="text-gray-600 my-4">{product.description}</p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        
        <div className="mb-6">
          <button
            onClick={() => setSelectedProduct(product)}
            className="text-sky-600 hover:text-sky-800 mb-2 flex items-center"
          >
            <span className="border-b border-sky-600 hover:border-sky-800">View Compatible Bottles →</span>
          </button>
          <div className="text-sm text-gray-600">
            Compatible with: Hydro Flask, S'well, Klean Kanteen, and more...
          </div>
        </div>

        <a
          href={product.amazonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 w-full justify-center"
        >
          <ShoppingCart className="mr-2" />
          Buy on Amazon
        </a>
      </div>
    </div>
  );

  const Products = () => (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );

  const About = () => (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">About Us</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Why Choose TOVICE?</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Our Story</h3>
            <p className="text-gray-700">
              TOVICE was born from a simple observation: while sports water bottles have evolved significantly, 
              the way we keep drinks cold hasn't changed much. We set out to create the perfect ice mold 
              specifically designed for modern sports bottles, combining innovative design with premium materials.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Our Commitment to Quality</h3>
            <p className="text-gray-700">
              We believe that what goes into your water bottle matters. That's why we:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
              <li>
                Use only premium food-grade silicone - 
                <button 
                  onClick={() => setShowSiliconeInfo(true)}
                  className="text-sky-600 hover:text-sky-800 ml-1"
                >
                  Why do some ice molds leave white residue?
                </button>
              </li>
              <li>Test every batch for quality and safety</li>
              <li>Design products specifically for sports bottles</li>
              <li>Focus on user experience and ease of use</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">The TOVICE Difference</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Professional design for optimal cooling duration</li>
              <li>Easy release design prevents sticking and breaking</li>
              <li>Durable construction for years of use</li>
              <li>Perfect fit for most popular sports bottles</li>
              <li>100% satisfaction guarantee</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            Have questions or suggestions? We'd love to hear from you. Our customer service team will respond within 24 hours.
          </p>
          <div>
            <h3 className="text-lg font-semibold mb-2">Customer Support Hours:</h3>
            <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
          </div>
          <div>
            <a
              href="mailto:contact@tovice.com"
              className="inline-flex items-center text-sky-600 hover:text-sky-800"
            >
              <Mail className="mr-2" />
              contact@tovice.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-gradient-to-r from-sky-700 to-sky-900 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 font-bold text-2xl">TOVICE</div>
            
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => setCurrentPage('products')}
                className={`hover:text-sky-200 ${currentPage === 'products' ? 'text-sky-200' : ''}`}
              >
                Products
              </button>
              <button 
                onClick={() => setCurrentPage('about')}
                className={`hover:text-sky-200 ${currentPage === 'about' ? 'text-sky-200' : ''}`}
              >
                About Us
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <button 
                onClick={() => {
                  setCurrentPage('products');
                  setIsMenuOpen(false);
                }}
                className="block py-2 hover:text-sky-200"
              >
                Products
              </button>
              <button 
                onClick={() => {
                  setCurrentPage('about');
                  setIsMenuOpen(false);
                }}
                className="block py-2 hover:text-sky-200"
              >
                About Us
              </button>
            </div>
          )}
        </div>
      </nav>

      {currentPage === 'products' ? <Products /> : <About />}
      
      {selectedProduct && (
        <CompatibilityModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}

      {showSiliconeInfo && (
        <SiliconeInfoModal onClose={() => setShowSiliconeInfo(false)} />
      )}
    </div>
  );
};

export default App;