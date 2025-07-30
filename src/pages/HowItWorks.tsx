import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';
import { FileText, CreditCard, Shield, CheckCircle, UserCheck, Clock, AlertTriangle, Smartphone } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Create Escrow Agreement",
      description: "Set up your transaction details, terms, and conditions. Invite the other party to participate.",
      details: [
        "Define transaction amount and terms",
        "Set milestone and delivery conditions", 
        "Invite buyer/seller to join",
        "Review and finalize agreement"
      ]
    },
    {
      number: "02",
      icon: CreditCard,
      title: "Secure Payment",
      description: "Buyer funds the escrow account. Money is held securely until all conditions are met.",
      details: [
        "Multiple payment methods accepted",
        "Funds held in secure escrow account",
        "Bank-level encryption and security",
        "Real-time payment confirmation"
      ]
    },
    {
      number: "03",
      icon: UserCheck,
      title: "Fulfill Obligations",
      description: "Both parties complete their obligations as outlined in the escrow agreement.",
      details: [
        "Seller delivers goods/services",
        "Buyer inspects and approves",
        "Upload verification documents",
        "Communicate through secure platform"
      ]
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Release Funds",
      description: "Once all conditions are met and verified, funds are released to the appropriate parties.",
      details: [
        "Automatic or manual approval process",
        "Instant fund transfer",
        "Transaction completion certificate",
        "Rating and feedback system"
      ]
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "256-bit SSL encryption, PCI DSS compliance, and multi-factor authentication protect every transaction."
    },
    {
      icon: Clock,
      title: "Real-Time Tracking",
      description: "Monitor your transaction status 24/7 with instant notifications and updates via email and SMS."
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Access your escrow transactions anywhere with our fully responsive web platform."
    },
    {
      icon: AlertTriangle,
      title: "Dispute Resolution",
      description: "Professional mediation services available if issues arise during the transaction process."
    }
  ];

  const useCases = [
    {
      title: "Real Estate Transactions",
      description: "Secure property purchases, deposits, and closing procedures",
      icon: "🏠"
    },
    {
      title: "Business Acquisitions",
      description: "M&A transactions, asset purchases, and equity transfers",
      icon: "🏢"
    },
    {
      title: "Freelance Projects",
      description: "Project milestones, deliverables, and service payments",
      icon: "💼"
    },
    {
      title: "Vehicle Sales",
      description: "Car, boat, and equipment purchases with inspection periods",
      icon: "🚗"
    },
    {
      title: "Domain Names",
      description: "Website domain transfers and intellectual property sales",
      icon: "🌐"
    },
    {
      title: "Artwork & Collectibles",
      description: "High-value art, antiques, and collectible transactions",
      icon: "🎨"
    }
  ];

  const faqs = [
    {
      question: "How long does the escrow process take?",
      answer: "The timeline depends on your specific transaction terms. Simple transactions can be completed in minutes, while complex deals may take several days or weeks."
    },
    {
      question: "What fees does SecureEscrow charge?",
      answer: "Our fees start at 1.5% of the transaction amount, with competitive rates for high-volume users. No hidden fees or surprise charges."
    },
    {
      question: "Is my money safe during the escrow process?",
      answer: "Yes, your funds are held in segregated accounts at FDIC-insured banks and are never commingled with our operating funds."
    },
    {
      question: "What happens if there's a dispute?",
      answer: "We offer professional mediation services to help resolve disputes fairly. If needed, funds can be returned to the buyer or released to the seller based on the agreement terms."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Simple & Secure Process
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">How SecureEscrow Works</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Our proven 4-step process protects both buyers and sellers in every transaction.
            </p>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Start Your First Transaction
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple 4-Step Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process makes secure transactions easy for everyone involved.
            </p>
          </div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <Card className="shadow-medium hover:shadow-strong transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-24 h-24 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-6">
                        <step.icon className="h-12 w-12 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold mb-4">Step {step.number}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Platform?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced features that make your transactions safer and more convenient.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect for Any Transaction</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our escrow services work for a wide variety of transaction types and industries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common questions about our escrow process and services.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of users who trust SecureEscrow for their secure transactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Create Your First Escrow
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;