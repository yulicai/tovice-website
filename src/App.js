import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Mail, ShoppingCart, Menu, X, Star, Heart, Search } from 'lucide-react';
import ProductCard from './components/ProductCard';
import CompatibilityModal from './components/CompatibilityModal';
import SiliconeInfoModal from './components/SiliconeInfoModal';
import { siteConfig, productsData } from './config/content';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Feedback from './components/Feedback';
import ZenWaterCanvas from './components/ZenWaterCanvas';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSiliconeInfo, setShowSiliconeInfo] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const productCategories = [
    {
      id: 'carry',
      name: siteConfig.categories.carry.name,
      description: siteConfig.categories.carry.description
    },
    {
      id: 'iceMold',
      name: siteConfig.categories.iceMold.name,
      description: siteConfig.categories.iceMold.description
    },
    {
      id: 'accessories',
      name: siteConfig.categories.accessories.name,
      description: siteConfig.categories.accessories.description
    }
  ];

  const products = productsData;

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const Home = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-secondary to-brand-light py-32 overflow-hidden">
        <ZenWaterCanvas />
        {/* 只保留mint green背景和水波纹动画，移除图片和深蓝色渐变 */}
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-light text-brand-primary mb-8 leading-tight">
            {siteConfig.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-brand-primary/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.hero.subtitle}
          </p>
          <button 
            onClick={() => setCurrentPage('products')}
            className="bg-brand-primary text-white px-10 py-4 rounded-full hover:bg-brand-primary/90 transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {siteConfig.hero.cta}
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-light text-brand-primary text-center mb-16">
            {siteConfig.categories.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map(category => (
              <div 
                key={category.id}
                className="bg-brand-light rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                onClick={() => {
                  setSelectedCategory(category.id);
                  setCurrentPage('products');
                }}
              >
                <h3 className="text-2xl font-light text-brand-primary mb-4">
                  {category.name}
                </h3>
                <p className="text-brand-primary/70 leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products by Category */}
      <div className="w-full bg-white">
        {/* Best Sellers Section */}
        <section className="w-full">
          <div className="max-w-6xl mx-auto product-section">
            <div className="text-left mb-16">
              <h2 className="product-section-title">
                {siteConfig.categories.bestSellers.slogan}
              </h2>
              <p className="product-section-subtitle">
                {siteConfig.categories.bestSellers.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.filter(p => p.isBestSeller).map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product}
                  onShowCompatibility={setSelectedProduct}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <button 
                onClick={() => {
                  setSelectedCategory('carry');
                  setCurrentPage('products');
                }}
                className="text-brand-primary hover:text-brand-primary/80 text-lg font-medium underline"
              >
                View All Best Sellers →
              </button>
            </div>
          </div>
        </section>

        {/* Carry Series Section */}
        <section className="w-full">
          <div className="max-w-6xl mx-auto product-section">
            <div className="text-left mb-16">
              <h2 className="product-section-title">
                {siteConfig.categories.carry.slogan}
              </h2>
              <p className="product-section-subtitle">
                {siteConfig.categories.carry.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.filter(p => p.category === 'carry').map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product}
                  onShowCompatibility={setSelectedProduct}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <button 
                onClick={() => {
                  setSelectedCategory('carry');
                  setCurrentPage('products');
                }}
                className="text-brand-primary hover:text-brand-primary/80 text-lg font-medium underline"
              >
                View All Carry Series →
              </button>
            </div>
          </div>
        </section>

        {/* Ice Mold Section */}
        <section className="w-full">
          <div className="max-w-6xl mx-auto product-section">
            <div className="text-left mb-16">
              <h2 className="product-section-title">
                {siteConfig.categories.iceMold.slogan}
              </h2>
              <p className="product-section-subtitle">
                {siteConfig.categories.iceMold.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.filter(p => p.category === 'iceMold').map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product}
                  onShowCompatibility={setSelectedProduct}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <button 
                onClick={() => {
                  setSelectedCategory('iceMold');
                  setCurrentPage('products');
                }}
                className="text-brand-primary hover:text-brand-primary/80 text-lg font-medium underline"
              >
                View All Ice Mold →
              </button>
            </div>
          </div>
        </section>

        {/* Accessories Section */}
        <section className="w-full">
          <div className="max-w-6xl mx-auto product-section">
            <div className="text-left mb-16">
              <h2 className="product-section-title">
                {siteConfig.categories.accessories.slogan}
              </h2>
              <p className="product-section-subtitle">
                {siteConfig.categories.accessories.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.filter(p => p.category === 'accessories').map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product}
                  onShowCompatibility={setSelectedProduct}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <button 
                onClick={() => {
                  setSelectedCategory('accessories');
                  setCurrentPage('products');
                }}
                className="text-brand-primary hover:text-brand-primary/80 text-lg font-medium underline"
              >
                View All Accessories →
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  const Products = () => (
    <div className="min-h-screen bg-brand-light">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-light text-brand-primary text-center mb-12">
          {siteConfig.products.title}
        </h1>
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-8 py-3 rounded-full transition-all duration-300 font-medium ${
              selectedCategory === 'all' 
                ? 'bg-brand-primary text-white shadow-lg' 
                : 'bg-white text-brand-primary hover:bg-brand-secondary shadow-md hover:shadow-lg'
            }`}
          >
            {siteConfig.products.allProducts}
          </button>
          {productCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-8 py-3 rounded-full transition-all duration-300 font-medium ${
                selectedCategory === category.id 
                  ? 'bg-brand-primary text-white shadow-lg' 
                  : 'bg-white text-brand-primary hover:bg-brand-secondary shadow-md hover:shadow-lg'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product}
            onShowCompatibility={setSelectedProduct}
          />
        ))}
        </div>
      </div>
    </div>
  );

  const About = () => (
    <div className="min-h-screen bg-brand-light">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-light text-brand-primary text-center mb-16">
          About Us
        </h1>
        
        <div className="bg-white rounded-xl shadow-lg p-10">
          <h2 className="text-4xl font-light text-brand-primary mb-8">Why Choose TOVICE?</h2>
          <div className="space-y-10">
          <div>
              <h3 className="text-2xl font-light text-brand-primary mb-4">Our Story</h3>
              <h4 className="text-xl font-medium text-brand-primary mb-6">
                Water is everywhere in our lives, and we're here to make it more fun!
              </h4>
              <p className="text-brand-primary/80 leading-relaxed text-lg">
                Think about it - we carry water bottles everywhere: to the gym, to work, on hikes, even to bed (because hydration never sleeps, right?). But here's the thing: while our water bottles have gotten super fancy with straws, handles, and all the bells and whistles, the way we keep our drinks cold and carry them around hasn't really evolved much. It's like we're still using the same old ice cube trays and basic bags our grandparents used!
            </p>
          </div>
          
          <div>
              <h3 className="text-2xl font-light text-brand-primary mb-4">The Problems We Solved</h3>
              <p className="text-brand-primary/80 leading-relaxed text-lg">
                Ever tried to put regular ice cubes in your fancy water bottle with a straw? It's like trying to fit a square peg in a round hole - the ice gets in the way of your straw, melts too quickly, and honestly, it's just not cool (pun intended). And what about carrying your precious Stanley Cup or Owala bottle around? Regular bags don't understand the struggle - bottles tip over, spill everywhere, and your expensive hydration companion ends up rolling around like it's having a party without you.
              </p>
          </div>

          <div>
              <h3 className="text-2xl font-light text-brand-primary mb-4">Our Complete Solution</h3>
              <p className="text-brand-primary/80 leading-relaxed text-lg">
                That's where TOVICE comes in! We're not just another accessories company - we're your hydration lifestyle partners. Our smart ice molds are specifically designed for modern water bottles with straws, sitting perfectly to one side so your straw can do its job without fighting with ice cubes. Our carry solutions - from magnetic gym bags that free your hands to stylish totes with dedicated bottle holders - keep your bottles secure, upright, and ready for action. And our personalized letter charms? They make your bottle uniquely yours while serving as functional handle straps.
              </p>
      </div>

            <div>
              <h3 className="text-2xl font-light text-brand-primary mb-4">What Makes Us Different</h3>
              <p className="text-brand-primary/80 leading-relaxed text-lg">
                We're a team of people who actually use water bottles every day and understand the real struggles. We've tested our products in real situations - from morning workouts where you need your hands free, to afternoon meetings where your bottle needs to look professional, to weekend adventures where everything needs to stay organized. Every design decision we make is based on one simple question: "Does this make the water bottle lifestyle more fun, convenient, and stylish?"
              </p>
          </div>
            
            <div>
              <h3 className="text-2xl font-light text-brand-primary mb-4">Our Promise</h3>
              <p className="text-brand-primary/80 leading-relaxed text-lg">
                We promise to keep innovating, keep listening to our customers, and keep making products that actually solve real problems. Because at the end of the day, we believe that staying hydrated should be easy, enjoyable, and maybe even a little bit fun. Whether it's ice that doesn't fight with your straw, bags that actually understand your bottle's needs, or accessories that make your bottle uniquely yours - we're here to make sure your hydration game is always on point.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // 用于产品详情页的数据查找
  const getProductById = (id) => products.find(p => String(p.id) === String(id));

  const Navigation = ({ currentPage, setCurrentPage, setIsMenuOpen }) => {
    const navigate = useNavigate();
  return (
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 font-light text-3xl text-brand-primary">
              TOVICE
            </div>
            <div className="hidden md:flex space-x-10">
              <button
                onClick={() => {
                  setCurrentPage('home');
                  navigate('/');
                }}
                className={`hover:text-brand-primary/80 transition-colors text-lg font-medium ${currentPage === 'home' ? 'text-brand-primary' : 'text-brand-primary/60'}`}
              >
                Home
              </button>
              <button 
                onClick={() => {
                  setCurrentPage('products');
                  navigate('/');
                }}
                className={`hover:text-brand-primary/80 transition-colors text-lg font-medium ${currentPage === 'products' ? 'text-brand-primary' : 'text-brand-primary/60'}`}
              >
                Products
              </button>
              <button 
                onClick={() => {
                  setCurrentPage('about');
                  navigate('/');
                }}
                className={`hover:text-brand-primary/80 transition-colors text-lg font-medium ${currentPage === 'about' ? 'text-brand-primary' : 'text-brand-primary/60'}`}
              >
                About Us
              </button>
              <button
                onClick={() => {
                  setCurrentPage('feedback');
                  navigate('/feedback');
                }}
                className={`hover:text-brand-primary/80 transition-colors text-lg font-medium ${currentPage === 'feedback' ? 'text-brand-primary' : 'text-brand-primary/60'}`}
              >
                Feedback
              </button>
            </div>
            <div className="flex items-center space-x-6">
            <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(prev => !prev)}>
                  {/* ...icon... */}
              </button>
              </div>
            </div>
          </div>
          {/* Mobile menu */}
          {setIsMenuOpen && (
            <div className="md:hidden pb-6 border-t border-brand-secondary">
              <button
                onClick={() => {
                  setCurrentPage('home');
                  setIsMenuOpen(false);
                  navigate('/');
                }}
                className="block py-3 text-brand-primary hover:text-brand-primary/80 text-lg font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => {
                  setCurrentPage('products');
                  setIsMenuOpen(false);
                  navigate('/');
                }}
                className="block py-3 text-brand-primary hover:text-brand-primary/80 text-lg font-medium"
              >
                Products
              </button>
              <button 
                onClick={() => {
                  setCurrentPage('about');
                  setIsMenuOpen(false);
                  navigate('/');
                }}
                className="block py-3 text-brand-primary hover:text-brand-primary/80 text-lg font-medium"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  setCurrentPage('feedback');
                  setIsMenuOpen(false);
                  navigate('/feedback');
                }}
                className="block py-3 text-brand-primary hover:text-brand-primary/80 text-lg font-medium"
              >
                Feedback
              </button>
            </div>
          )}
        </div>
      </nav>
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} setIsMenuOpen={setIsMenuOpen} />

        <Routes>
          <Route path="/" element={
            <>
              {currentPage === 'home' && <Home />}
              {currentPage === 'products' && <Products />}
              {currentPage === 'about' && <About />}
      {selectedProduct && (
                <CompatibilityModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
      {showSiliconeInfo && (
        <SiliconeInfoModal onClose={() => setShowSiliconeInfo(false)} />
      )}
            </>
          } />
          <Route path="/product/:id" element={<ProductDetail getProductById={getProductById} />} />
          <Route path="/feedback" element={<Feedback setCurrentPage={setCurrentPage} />} />
        </Routes>
        <Footer />
    </div>
    </Router>
  );
};

export default App;