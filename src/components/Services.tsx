import { GraduationCap, FileCheck, Plane, BookOpen, Users, Award } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "University Counseling",
    description: "Expert guidance to find the perfect university matching your academic goals and budget.",
  },
  {
    icon: FileCheck,
    title: "Visa Assistance",
    description: "Complete visa documentation support with 98% success rate across all countries.",
  },
  {
    icon: BookOpen,
    title: "Test Preparation",
    description: "Comprehensive IELTS, TOEFL, PTE, GRE & SAT coaching with experienced instructors.",
  },
  {
    icon: Plane,
    title: "Pre-Departure Support",
    description: "Travel arrangements, accommodation guidance, and cultural orientation sessions.",
  },
  {
    icon: Users,
    title: "Career Counseling",
    description: "Professional career assessment to align your study choices with future opportunities.",
  },
  {
    icon: Award,
    title: "Scholarship Guidance",
    description: "Help finding and applying for scholarships to make education affordable.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Support for Your
            <span className="text-gradient"> Study Abroad Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From initial counseling to post-arrival support, we provide end-to-end assistance 
            to make your international education experience seamless.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-secondary/50 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-hero-gradient flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
