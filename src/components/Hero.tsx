import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container-custom relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6 animate-fade-in">
              <Star className="w-4 h-4 text-secondary fill-secondary" />
              <span className="text-sm font-medium">Nepal's Trusted Education Partner</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Your Gateway to
              <span className="block text-gradient">Global Education</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Expert guidance for studying abroad. From university selection to visa approval, 
              we make your international education dreams a reality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="lg" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                <Play className="w-5 h-5" />
                Watch Success Stories
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {[
                { value: "15K+", label: "Students Placed" },
                { value: "50+", label: "Partner Universities" },
                { value: "98%", label: "Visa Success" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-secondary">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div className="relative hidden lg:block animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="w-full aspect-square rounded-3xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 p-8 animate-float">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-secondary/20 to-primary-foreground/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-accent-gradient flex items-center justify-center shadow-glow">
                      <span className="text-5xl">🎓</span>
                    </div>
                    <p className="text-primary-foreground/90 font-semibold text-lg">Study Abroad Made Easy</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 p-4 rounded-xl bg-card shadow-card animate-pulse-glow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-xl">🇦🇺</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Australia</p>
                    <p className="text-xs text-muted-foreground">Top Destination</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 p-4 rounded-xl bg-card shadow-card">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-xl">✅</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Visa Approved!</p>
                    <p className="text-xs text-muted-foreground">Just now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
