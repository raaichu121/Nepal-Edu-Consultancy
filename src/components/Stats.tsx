import { Users, Globe, Trophy, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "15,000+",
    label: "Students Placed",
    description: "Successfully studying abroad",
  },
  {
    icon: Globe,
    value: "25+",
    label: "Countries",
    description: "Global education network",
  },
  {
    icon: Trophy,
    value: "98%",
    label: "Visa Success",
    description: "Industry-leading approval rate",
  },
  {
    icon: Clock,
    value: "12+",
    label: "Years Experience",
    description: "Trusted expertise since 2012",
  },
];

const Stats = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground font-semibold text-sm mb-4 border border-primary-foreground/20">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Nepal's Most Trusted
              <span className="block text-secondary">Education Consultancy</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              For over a decade, NepalEdu has been the bridge connecting Nepali students 
              to world-class education. Our personalized approach, expert counselors, and 
              strong university partnerships ensure your success every step of the way.
            </p>
            <ul className="space-y-4">
              {["Personalized counseling for every student", "Direct partnerships with top universities", "Comprehensive test prep and visa support", "Post-arrival assistance and alumni network"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-primary-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-foreground font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-primary-foreground/60">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
