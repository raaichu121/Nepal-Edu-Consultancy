import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    university: "University of Melbourne",
    country: "Australia",
    image: "PS",
    quote: "NepalEdu made my dream of studying in Australia a reality. Their counselors guided me through every step, from university selection to visa approval.",
    rating: 5,
  },
  {
    name: "Rohan Thapa",
    university: "University of Toronto",
    country: "Canada",
    image: "RT",
    quote: "The IELTS preparation classes were excellent. I scored 7.5 bands and got admission to my dream university. Highly recommended!",
    rating: 5,
  },
  {
    name: "Anisha Gurung",
    university: "University of Manchester",
    country: "UK",
    image: "AG",
    quote: "What impressed me most was their personalized approach. They understood my goals and helped me find the perfect scholarship opportunity.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our
            <span className="text-gradient"> Students Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of successful students who have achieved their international education dreams with NepalEdu.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 right-8 w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Quote className="w-5 h-5 text-secondary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-hero-gradient flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.university}, {testimonial.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
