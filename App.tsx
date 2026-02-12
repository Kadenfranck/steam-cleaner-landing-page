
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import ValueAdd from './components/ValueAdd';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import { GoogleGenAI } from "@google/genai";

const App: React.FC = () => {
  const [heroImageUrl, setHeroImageUrl] = useState<string>('https://picsum.photos/1200/675?grayscale'); // Default placeholder
  const [isGenerating, setIsGenerating] = useState<boolean>(true);

  useEffect(() => {
    const generateHeroImage = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
        const prompt = `Ultra-realistic wide-angle photo of a bright, modern living room with freshly steam-cleaned beige carpet.

Large floor-to-ceiling windows with sheer white curtains allow warm natural sunlight to stream in, casting long soft shadows across the carpet.

Minimalist Scandinavian interior design:
- Light neutral color palette (cream, beige, soft gray)
- Modern light gray sofa with textured throw pillows
- Natural wood coffee table with simple decor (books, small plant, vase)
- Accent chair with slim black metal frame
- Soft area lighting with modern lamps

The carpet should look freshly cleaned, plush, bright, and soft, with visible sunlight highlighting the texture and cleanliness.

Atmosphere:
- Calm
- Airy
- Clean
- High-end
- Inviting

Camera style:
- Professional real estate photography
- Wide angle lens (24mm)
- High dynamic range
- Ultra sharp
- Natural lighting
- 8K detail
- No people
- No clutter

Composition:
- Centered room view
- Symmetrical balance
- Strong sunlight beams across carpet
- Clean modern aesthetic

Designed specifically as a website hero image for a professional steam cleaning service.

--aspect 16:9`;
        
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: prompt }]
          },
          config: {
            imageConfig: {
              aspectRatio: "16:9"
            }
          }
        });

        const imagePart = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
        if (imagePart?.inlineData?.data) {
          setHeroImageUrl(`data:image/png;base64,${imagePart.inlineData.data}`);
        }
      } catch (error) {
        console.error("Failed to generate hero image:", error);
        // Fallback to a high-quality placeholder if API fails
        setHeroImageUrl('https://picsum.photos/seed/steamclean/1600/900');
      } finally {
        setIsGenerating(false);
      }
    };

    generateHeroImage();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero imageUrl={heroImageUrl} isLoading={isGenerating} />
        <Pricing />
        <ValueAdd />
        <Testimonials />
        <HowItWorks />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;
