import React, { useState } from 'react';
import { Mail, ShoppingCart, Menu, X } from 'lucide-react';
import ProductCard from './components/ProductCard';
import CompatibilityModal from './components/CompatibilityModal';
import SiliconeInfoModal from './components/SiliconeInfoModal';

const App = () => {
  const [currentPage, setCurrentPage] = useState('products');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSiliconeInfo, setShowSiliconeInfo] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Ice Molds for Owala 24-40oz, Set of 3 - Rose Pink",
      color: "#ebcbbe",
      description: "Designed specifically for Owala water bottle, our off-centered ice mold creates perfect long-lasting ice cubes. Made with premium food-grade silicone for safe and durable use.",
      features: [
        "Off center design, straw sits to one side",
        "Side wing design, easy to release",
        "Extended cooling duration",
        "Leak-proof seal",
      ],
      amazonLink: "https://www.amazon.com/Ice-Mold-Accessories-Placement-Compatible/dp/B0DHNTM3J7",
      // images: Array(6).fill("/api/placeholder/400/300"),
      images: [
        "/assets/images/products/pink-mold/1.jpg",
        "/assets/images/products/pink-mold/2.jpg",
        "/assets/images/products/pink-mold/3.jpg",
        "/assets/images/products/pink-mold/4.jpg",
        "/assets/images/products/pink-mold/5.jpg",
        "/assets/images/products/pink-mold/6.jpg",
        "/assets/images/products/pink-mold/7.jpg",
     
      ],
      compatibleBottles: [
        {
          name: "Owala Freesip",
          image:  "/assets/images/bottles/Owala_Freesip.png",
          description: "Perfect for 24oz, 32oz, 40oz wide mouth bottles"
        },
        {
          name: "Stanley Cup",
          image:  "/assets/images/bottles/Stanley_Cup.png",
          description: "Compatible with 30oz, 40oz bottles"
        }
      ]
    },
    {
      id: 2,
      name: "Ice Molds for Owala 24-40oz, Set of 3 - Sage Green",
      color: "#a1cd9d",
      description: "Designed specifically for Owala water bottle, our off-centered ice mold creates perfect long-lasting ice cubes. Made with premium food-grade silicone for safe and durable use.",
      features: [
        "Off center design, straw sits to one side",
        "Side wing design, easy to release",
        "Extended cooling duration",
        "Leak-proof seal"
      ],
      amazonLink: "https://www.amazon.com/Ice-Food-Grade-Silicone-Placement-Compatible/dp/B0DJ33LBHG",
      images: [
        "/assets/images/products/green-mold/1.jpg",
        "/assets/images/products/green-mold/2.jpg",
        "/assets/images/products/green-mold/3.jpg",
        "/assets/images/products/green-mold/4.jpg",
        "/assets/images/products/green-mold/5.jpg",
        "/assets/images/products/green-mold/6.jpg",
        "/assets/images/products/green-mold/7.jpg",
     
      ],
      compatibleBottles: [
        {
          name: "Owala Freesip",
          image:  "/assets/images/bottles/Owala_Freesip.png",
          description: "Perfect for 24oz, 32oz, 40oz wide mouth bottles"
        },
        {
          name: "Stanley Cup",
          image:  "/assets/images/bottles/Stanley_Cup.png",
          description: "Compatible with 30oz, 40oz bottles"
        }
      ]
    }
  ];

  const Products = () => (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product}
            onShowCompatibility={setSelectedProduct}
          />
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
            <h4 className="text-base font-semibold mb-3">Chill Smarter: Perfect Ice, Perfect Fit, Every Sip!</h4>
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
              <li>Off-Center Design: Fits water bottles with side-positioned straws without bending or blocking.  </li>
              <li>Easy release design: no more frustration poping ice out</li>
              <li>Efficient & Space-Saving:Larger ice fills bottles faster, lasts longer, and stacks easily in your freezer.  
              </li>
              <li>Perfect fit: Specifically crafted to work seamlessly with popular water bottles like Owala.</li>
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
            
              <a href="mailto:contact@tovice.com"
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