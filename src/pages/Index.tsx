
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Layout/Navbar";
import { Calendar, Book, Image } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 font-bold">News that adapts to you, not the other way around</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-100">
            Consume news in a format you actually enjoy. No more endless scrolling or dry articles.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="text-lg px-8">
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white/20">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-16">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="mb-6 bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Choose Your Topics</h3>
              <p className="text-gray-600">Select the news categories that matter to you. Politics, tech, sports, culture - you decide.</p>
            </div>
            
            <div className="text-center">
              <div className="mb-6 bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
                <Image className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Pick Your Format</h3>
              <p className="text-gray-600">How do you prefer your news? Comics, Instagram-style posts, bullet points, or traditional articles.</p>
            </div>
            
            <div className="text-center">
              <div className="mb-6 bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
                <Book className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Enjoy Daily Updates</h3>
              <p className="text-gray-600">Get personalized news delivered daily in your preferred format, making staying informed enjoyable.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Format Examples */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-6">News Your Way</h2>
          <p className="text-center text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Choose from multiple formats that make consuming news more engaging and enjoyable
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="format-card bg-white">
              <h3 className="text-lg font-semibold mb-2">Visual Stories</h3>
              <p className="text-gray-600 mb-4">Instagram-style visual cards with key points.</p>
              <div className="bg-gray-100 h-40 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Story Format Preview</span>
              </div>
            </div>
            
            <div className="format-card bg-white">
              <h3 className="text-lg font-semibold mb-2">Comic Strips</h3>
              <p className="text-gray-600 mb-4">News stories converted into engaging comic strips.</p>
              <div className="bg-gray-100 h-40 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Comic Format Preview</span>
              </div>
            </div>
            
            <div className="format-card bg-white">
              <h3 className="text-lg font-semibold mb-2">Bullet Points</h3>
              <p className="text-gray-600 mb-4">Concise bullet points summarizing key news.</p>
              <div className="bg-gray-100 h-40 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Bullet Points Preview</span>
              </div>
            </div>
            
            <div className="format-card bg-white">
              <h3 className="text-lg font-semibold mb-2">Traditional Articles</h3>
              <p className="text-gray-600 mb-4">Classic news articles for traditional readers.</p>
              <div className="bg-gray-100 h-40 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Article Format Preview</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Ready to transform how you consume news?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-blue-100">
            Join thousands of readers who enjoy staying informed their way.
          </p>
          <Button size="lg" asChild className="text-lg px-8 bg-white text-blue-600 hover:bg-blue-50">
            <Link to="/signup">Get Started Free</Link>
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-white text-xl font-bold mb-4">NewsUnwrap</h3>
              <p className="max-w-md">Making news consumption personalized and enjoyable.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-semibold mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
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
