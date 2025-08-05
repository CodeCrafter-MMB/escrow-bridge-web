import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';
import { Gift, Heart, Share2, Edit3, Sparkles, Users, CheckCircle, Star } from 'lucide-react';
import heroImage from '@/assets/hero-birthday.jpg';

const Index = () => {
  const features = [
    {
      icon: Edit3,
      title: "Custom Messages",
      description: "Write personalized birthday messages with beautiful fonts and colors that capture your feelings."
    },
    {
      icon: Share2,
      title: "Shareable Links",
      description: "Generate unique links to share your birthday wishes on social media or via text message."
    },
    {
      icon: Sparkles,
      title: "Beautiful Templates",
      description: "Choose from dozens of stunning templates with animations, themes, and decorative elements."
    },
    {
      icon: Heart,
      title: "No Login Required",
      description: "Create and share birthday wishes instantly without the hassle of creating an account."
    },
    {
      icon: Users,
      title: "Group Wishes",
      description: "Collaborate with friends and family to create group birthday messages and cards."
    },
    {
      icon: Gift,
      title: "Surprise Elements",
      description: "Add surprise animations, music, and interactive elements to make wishes extra special."
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Write Your Wish",
      description: "Type your heartfelt birthday message and choose your favorite colors and fonts."
    },
    {
      step: "02", 
      title: "Customize & Decorate",
      description: "Select beautiful templates, add animations, and personalize with photos or stickers."
    },
    {
      step: "03",
      title: "Share the Joy",
      description: "Get your unique link and share the birthday wish via social media, text, or email."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Mom of 3",
      content: "My kids were absolutely delighted with the animated birthday wish I created! So easy to use and beautiful results.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Party Planner", 
      content: "I use this for all my client celebrations. The templates are gorgeous and everyone loves the personalized touch.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "College Student",
      content: "Perfect for sending birthday wishes to friends! No signup needed and the sharing is super convenient.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              ✨ Over 50,000 birthday wishes created!
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Send Beautiful Birthday
              <span className="block text-accent">Wishes Online</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Create personalized, animated birthday cards and messages that bring joy and smiles. Share the celebration with beautiful, customizable wishes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" variant="hero" className="text-lg px-8 py-6 animate-pulse">
                  🎉 Create a Wish
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                  See Examples
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose WishCelebrate? 🎂</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create magical birthday moments with our easy-to-use platform packed with beautiful features and endless customization.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:transform hover:scale-105 bg-gradient-card border-none">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-gradient-birthday rounded-full flex items-center justify-center mb-4 animate-pulse">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works ✨</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create beautiful birthday wishes in just three simple steps. No account needed, just pure celebration!
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="mx-auto w-16 h-16 bg-gradient-birthday rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-birthday opacity-30 transform -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20 bg-gradient-birthday text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">🎉 See What You Can Create</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Beautiful, animated birthday cards that bring smiles and create lasting memories.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-6xl mb-4">🎂</div>
                <h3 className="text-xl font-semibold mb-2">Classic Birthday Card</h3>
                <p className="opacity-90">Traditional design with balloons and cake animations</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-6xl mb-4">🌟</div>
                <h3 className="text-xl font-semibold mb-2">Sparkle & Shine</h3>
                <p className="opacity-90">Glittery effects with star animations and confetti</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-6xl mb-4">🎈</div>
                <h3 className="text-xl font-semibold mb-2">Fun & Playful</h3>
                <p className="opacity-90">Colorful balloons with bouncing animations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">💝 What People Are Saying</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of happy users who create magical birthday moments with WishCelebrate.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">🎊 Ready to Spread Some Joy?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start creating beautiful birthday wishes that will make someone's special day unforgettable!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" variant="hero" className="text-lg px-8 py-6 animate-pulse">
                🎉 Create Your First Wish
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Browse Templates
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Gift className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">WishCelebrate</span>
              </div>
              <p className="text-gray-300">
                Spreading joy and celebration with beautiful, personalized birthday wishes that create lasting memories.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/how-it-works" className="hover:text-primary">How It Works</Link></li>
                <li><Link to="/dashboard" className="hover:text-primary">Create Wish</Link></li>
                <li><a href="#" className="hover:text-primary">Templates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-primary">Help Center</a></li>
                <li><a href="#" className="hover:text-primary">Templates Guide</a></li>
                <li><a href="#" className="hover:text-primary">Share Tips</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 WishCelebrate. Made with 💝 for spreading birthday joy!</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
