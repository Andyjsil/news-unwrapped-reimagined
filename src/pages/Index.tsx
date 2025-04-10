
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Layout/Navbar";
import { Book, BookOpen, Image } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-black py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="mb-6 font-display font-bold text-white animate-fade-in">News that adapts to you, <br/>not the other way around</h1>
          <div className="nyt-divider max-w-md mx-auto bg-gray-500"></div>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-300 font-light animate-slide-up italic">
            Consume news in a format you actually enjoy. No more endless scrolling or dry articles.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="text-lg bg-white text-black hover:bg-gray-100 border border-black rounded-none animate-fade-in">
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg rounded-none border-white text-white hover:bg-white/10 animate-fade-in">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display">How It Works</h2>
            <div className="nyt-divider max-w-xs mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="text-center p-8 nyt-card">
              <div className="mb-6 w-20 h-20 mx-auto rounded-full border flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-display mb-4">Choose Your Topics</h3>
              <p className="text-gray-600">Select the news categories that matter to you. Politics, tech, sports, culture - you decide.</p>
            </div>
            
            <div className="text-center p-8 nyt-card">
              <div className="mb-6 w-20 h-20 mx-auto rounded-full border flex items-center justify-center">
                <Image className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-display mb-4">Pick Your Format</h3>
              <p className="text-gray-600">How do you prefer your news? Comics, Instagram-style posts, bullet points, or traditional articles.</p>
            </div>
            
            <div className="text-center p-8 nyt-card">
              <div className="mb-6 w-20 h-20 mx-auto rounded-full border flex items-center justify-center">
                <Book className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-display mb-4">Enjoy Daily Updates</h3>
              <p className="text-gray-600">Get personalized news delivered daily in your preferred format, making staying informed enjoyable.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Format Examples */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-center mb-4 font-display">News Your Way</h2>
            <div className="nyt-divider max-w-xs mx-auto"></div>
            <p className="text-center text-xl text-gray-600 mt-6 max-w-3xl mx-auto italic">
              Choose from multiple formats that make consuming news more engaging and enjoyable
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 border-t-4 border-black">
              <h3 className="text-lg font-display mb-2">Visual Stories</h3>
              <p className="text-gray-600 mb-4">Instagram-style visual cards with key points.</p>
              <div className="bg-gray-100 h-40 flex items-center justify-center">
                <span className="text-gray-500">Story Format Preview</span>
              </div>
            </div>
            
            <div className="bg-white p-6 border-t-4 border-black">
              <h3 className="text-lg font-display mb-2">Comic Strips</h3>
              <p className="text-gray-600 mb-4">News stories converted into engaging comic strips.</p>
              <div className="bg-gray-100 h-40 flex items-center justify-center">
                <span className="text-gray-500">Comic Format Preview</span>
              </div>
            </div>
            
            <div className="bg-white p-6 border-t-4 border-black">
              <h3 className="text-lg font-display mb-2">Bullet Points</h3>
              <p className="text-gray-600 mb-4">Concise bullet points summarizing key news.</p>
              <div className="bg-gray-100 h-40 flex items-center justify-center">
                <span className="text-gray-500">Bullet Points Preview</span>
              </div>
            </div>
            
            <div className="bg-white p-6 border-t-4 border-black">
              <h3 className="text-lg font-display mb-2">Traditional Articles</h3>
              <p className="text-gray-600 mb-4">Classic news articles for traditional readers.</p>
              <div className="bg-gray-100 h-40 flex items-center justify-center">
                <span className="text-gray-500">Article Format Preview</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 font-display">Ready to transform how you consume news?</h2>
          <div className="nyt-divider max-w-xs mx-auto bg-gray-500"></div>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-300 mt-6 italic">
            Join thousands of readers who enjoy staying informed their way.
          </p>
          <Button size="lg" asChild className="text-lg bg-white text-black hover:bg-gray-100 border border-black rounded-none">
            <Link to="/signup">Get Started Free</Link>
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-16 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-white text-xl font-display mb-4">NewsUnwrap</h3>
              <p className="max-w-md">Making news consumption personalized and enjoyable.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-display mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-display mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-display mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} NewsUnwrap. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
