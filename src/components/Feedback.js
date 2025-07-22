import React, { useState, useEffect } from 'react';
import { productsData } from '../config/content';
import { useNavigate } from 'react-router-dom';

const amazonReviewUrl = 'https://www.amazon.com/review/review-your-purchases';

// Formspree 配置 - 需要替换为你的实际表单ID
const FORMSPREE_ENDPOINT = 'https://formcarry.com/s/KpDpECAAgjX';

const Feedback = ({ setCurrentPage }) => {
  const [step, setStep] = useState(1); // 1: Purchased, 2: Product, 3: Satisfaction, 4: Suggestion/Review
  const [hasPurchased, setHasPurchased] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isSatisfied, setIsSatisfied] = useState(null);
  const [suggestion, setSuggestion] = useState('');
  const [improve, setImprove] = useState('');
  const [orderId, setOrderId] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactEmail2, setContactEmail2] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (setCurrentPage) setCurrentPage('feedback');
  }, [setCurrentPage]);

  // Go back to previous step
  const handleBack = () => {
    if (step === 2) {
      setHasPurchased(null);
      setStep(1);
    } else if (step === 3) {
      setSelectedProductId(null);
      setStep(2);
    } else if (step === 4) {
      if (hasPurchased === false) {
        setHasPurchased(null);
        setStep(1);
      } else if (hasPurchased === true && isSatisfied === false) {
        setIsSatisfied(null);
        setStep(3);
      } else if (hasPurchased === true && isSatisfied === true) {
        setIsSatisfied(null);
        setStep(3);
      }
    }
  };

  // Step handlers
  const handlePurchase = (val) => {
    setHasPurchased(val);
    setStep(val ? 2 : 4);
  };
  const handleProductSelect = (id) => {
    setSelectedProductId(id);
    setStep(3);
  };
  const handleSatisfaction = (val) => {
    setIsSatisfied(val);
    setStep(4);
  };

  // 提交表单到 Formspree
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 准备表单数据
      const formData = new FormData();
      
      // 基础信息
      formData.append('feedback_type', hasPurchased ? 'purchased_customer' : 'potential_customer');
      formData.append('satisfaction_level', isSatisfied ? 'satisfied' : 'not_satisfied');
      
      // 产品信息
      if (selectedProductId) {
        const selectedProduct = productsData.find(p => p.id === selectedProductId);
        formData.append('product_name', selectedProduct ? selectedProduct.name : 'Unknown');
        formData.append('product_id', selectedProductId);
      }
      
      // 根据场景添加不同字段
      if (hasPurchased === false) {
        // 未购买用户
        formData.append('suggestion', suggestion);
        formData.append('contact_email', contactEmail);
        formData.append('subject', 'New Customer Suggestion');
      } else if (hasPurchased === true && isSatisfied === false) {
        // 购买但不满意用户
        formData.append('improvement_suggestion', improve);
        formData.append('order_id', orderId);
        formData.append('contact_email', contactEmail2);
        formData.append('subject', 'Customer Feedback - Improvement Request');
      }

      // 发送到 Formspree
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('提交失败，请稍后重试');
      }
    } catch (error) {
      console.error('提交错误:', error);
      alert('提交失败，请稍后重试或直接发送邮件到 hi.tovice@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Friendly, light humor step titles
  const stepTitles = [
    '',
    "Have you purchased our product? (No pressure, just curious!)",
    "Which product did you purchase? (It's okay if you don't remember exactly)",
    "How satisfied are you with the product? (Honesty is appreciated)",
    "We take your feedback seriously! ",
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 flex flex-col items-center">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-md p-8 flex flex-col justify-center min-h-[500px]">
        <h1 className="text-3xl font-bold text-brand-primary mb-8 text-left">Feedback</h1>
        {/* Step title and back button */}
        {step > 1 && !submitted && (
          <button
            onClick={handleBack}
            className="mb-6 text-brand-primary/70 hover:text-brand-primary text-sm flex items-center gap-2"
          >
            ← Back
          </button>
        )}
        <div className="text-2xl font-bold text-brand-primary mb-8 text-center">{stepTitles[step]}</div>
        {/* Step 1: Purchased? */}
        {step === 1 && (
          <div className="flex flex-col items-center justify-center min-h-[220px] w-full">
            <div className="flex flex-row w-full max-w-md gap-6 mb-4 sm:flex-col sm:gap-4">
              <button
                className={`flex-1 px-0 py-6 rounded-xl font-bold text-xl border-2 transition-all w-1/2 sm:w-full ${hasPurchased === true ? 'bg-brand-primary text-white border-brand-primary' : 'bg-white text-brand-primary border-brand-primary/30 hover:border-brand-primary'}`}
                onClick={() => handlePurchase(true)}
              >
                Yes, I have
              </button>
              <button
                className={`flex-1 px-0 py-6 rounded-xl font-bold text-xl border-2 transition-all w-1/2 sm:w-full ${hasPurchased === false ? 'bg-brand-primary text-white border-brand-primary' : 'bg-white text-brand-primary border-brand-primary/30 hover:border-brand-primary'}`}
                onClick={() => handlePurchase(false)}
              >
                Not yet
              </button>
            </div>
          </div>
        )}
        {/* Step 2: Select product */}
        {step === 2 && (
          <div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {productsData.map(product => (
                <button
                  key={product.id}
                  className={`border-2 rounded-2xl p-2 flex flex-col items-center transition-all focus:outline-none ${selectedProductId === product.id ? 'border-brand-primary bg-brand-light' : 'border-gray-200 hover:border-brand-primary/60'}`}
                  onClick={() => handleProductSelect(product.id)}
                >
                  <img src={product.images[0]} alt={product.name} className="w-20 h-20 object-contain mb-2" />
                  <span className="text-sm text-brand-primary font-semibold text-center line-clamp-2">{product.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
        {/* Step 3: Satisfaction */}
        {step === 3 && (
          <div className="flex flex-col items-center justify-center min-h-[220px] w-full">
            <div className="flex flex-row w-full max-w-md gap-6 mb-4 sm:flex-col sm:gap-4">
              <button
                className={`flex-1 px-0 py-6 rounded-xl font-bold text-xl border-2 transition-all w-1/2 sm:w-full ${isSatisfied === true ? 'bg-brand-primary text-white border-brand-primary' : 'bg-white text-brand-primary border-brand-primary/30 hover:border-brand-primary'}`}
                onClick={() => handleSatisfaction(true)}
              >
                Very satisfied
              </button>
              <button
                className={`flex-1 px-0 py-6 rounded-xl font-bold text-xl border-2 transition-all w-1/2 sm:w-full ${isSatisfied === false ? 'bg-brand-primary text-white border-brand-primary' : 'bg-white text-brand-primary border-brand-primary/30 hover:border-brand-primary'}`}
                onClick={() => handleSatisfaction(false)}
              >
                Not quite satisfied
              </button>
            </div>
          </div>
        )}
        {/* Step 4: Suggestions / Review / Not satisfied */}
        {step === 4 && !submitted && (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Not purchased: suggestion */}
            {hasPurchased === false && (
              <>
                <div>
                  <label className="block text-brand-primary font-semibold mb-2">We'd love to hear your suggestions (the more creative, the better!)</label>
                  <textarea
                    className="w-full border border-gray-200 rounded-xl p-3 min-h-[80px] focus:outline-none focus:border-brand-primary"
                    value={suggestion}
                    onChange={e => setSuggestion(e.target.value)}
                    required
                    placeholder="For example: It would be amazing if your product could do the dishes for me..."
                  />
                </div>
                <div>
                  <label className="block text-brand-primary font-semibold mb-2">Contact Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-brand-primary"
                    value={contactEmail}
                    onChange={e => setContactEmail(e.target.value)}
                    required
                    placeholder="Please leave your email so we can get in touch with you."
                  />
                </div>
              </>
            )}
            {/* Purchased but not satisfied */}
            {hasPurchased === true && isSatisfied === false && (
              <>
                <div>
                  <label className="block text-brand-primary font-semibold mb-2">What could we improve? (Feel free to be honest!)</label>
                  <textarea
                    className="w-full border border-gray-200 rounded-xl p-3 min-h-[80px] focus:outline-none focus:border-brand-primary"
                    value={improve}
                    onChange={e => setImprove(e.target.value)}
                    required
                    placeholder="For example: The ice melts too quickly, maybe a perpetual motion version?"
                  />
                </div>
                <div>
                  <label className="block text-brand-primary font-semibold mb-2">Your Amazon order number (for refund verification only)</label>
                  <input
                    className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-brand-primary"
                    value={orderId}
                    onChange={e => setOrderId(e.target.value)}
                    required
                    placeholder="17-digit order number, e.g. 123-1234567-1234567"
                  />
                  <div className="text-xs text-brand-primary/70 mt-2">We'll review your case and issue a refund if the problem is confirmed.</div>
                </div>
                <div>
                  <label className="block text-brand-primary font-semibold mb-2">Contact Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-brand-primary"
                    value={contactEmail2}
                    onChange={e => setContactEmail2(e.target.value)}
                    required
                    placeholder="Please leave your email so we can get in touch with you."
                  />
                </div>
              </>
            )}
            {/* Purchased and satisfied */}
            {hasPurchased === true && isSatisfied === true && (
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="text-brand-primary font-semibold mb-2 text-center">
                  If you have a moment, would you consider leaving us a review on Amazon? <span className="text-brand-primary font-bold italic">Your words really mean a lot to us!</span>
                </div>
                <div className="flex justify-center w-full">
                  <a
                    href={amazonReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-md bg-brand-primary text-white font-bold px-8 py-3 rounded-xl uppercase tracking-wider hover:bg-brand-primary/90 transition-colors shadow-md text-center"
                  >
                    Write a review on Amazon
                  </a>
                </div>
              </div>
            )}
            {/* Submit button (only for not purchased or not satisfied) */}
            {(hasPurchased === false || (hasPurchased === true && isSatisfied === false)) && (
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-brand-primary text-white font-bold px-8 py-3 rounded-xl uppercase tracking-wider transition-colors shadow-md ${
                  isSubmitting 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-brand-primary/90'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
              </button>
            )}
          </form>
        )}
        {/* Thank you after submit */}
        {submitted && (
          <div className="text-xl text-brand-primary font-semibold text-center py-12">
            {hasPurchased === false && (
              <>Thank you for your interest and suggestion!</>
            )}
            {hasPurchased === true && isSatisfied === false && (
              <>Thank you for your feedback! We will review your case and get in touch soon.</>
            )}
            {hasPurchased === true && isSatisfied === true && (
              <>Thank you for enjoying our product!</>
            )}
            <div className="mt-8 flex justify-center">
              <button
                className="w-full max-w-xs bg-brand-primary text-white font-bold px-8 py-3 rounded-xl uppercase tracking-wider hover:bg-brand-primary/90 transition-colors shadow-md"
                onClick={() => {
                  if (setCurrentPage) setCurrentPage('home');
                  navigate('/');
                }}
              >
                Back to Home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback; 