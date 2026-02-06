import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import DestinationDialog, { DestinationData } from "./DestinationDialog";

const destinations: DestinationData[] = [
  {
    country: "Australia",
    flag: "🇦🇺",
    universities: "45+",
    programs: "500+",
    highlight: "Post-study work visa",
    description: "Australia offers world-class education with a multicultural environment. Known for its high quality of life, excellent research opportunities, and welcoming attitude towards international students.",
    requirements: [
      "IELTS 6.0-7.0 or equivalent",
      "Academic transcripts and certificates",
      "Statement of Purpose (SOP)",
      "Financial proof (tuition + living expenses)",
      "Health insurance (OSHC)",
    ],
    popularCourses: ["Business & Management", "Engineering", "IT & Computer Science", "Healthcare", "Hospitality"],
    avgTuition: "AUD 20,000 - 45,000/year",
    visaInfo: "Student visa (subclass 500) allows you to stay in Australia for the duration of your course. Processing time: 4-6 weeks.",
    workOpportunity: "20 hours/week during studies, unlimited during breaks. Post-study work visa up to 4 years.",
  },
  {
    country: "United States",
    flag: "🇺🇸",
    universities: "100+",
    programs: "1000+",
    highlight: "OPT opportunities",
    description: "The USA hosts some of the world's top-ranked universities and offers diverse academic programs. It's a hub for innovation, research, and career opportunities across various industries.",
    requirements: [
      "TOEFL/IELTS scores",
      "SAT/GRE/GMAT (program dependent)",
      "Academic transcripts",
      "Letters of recommendation",
      "Statement of Purpose",
      "Financial documentation (I-20)",
    ],
    popularCourses: ["Computer Science", "Business Administration", "Engineering", "Medicine", "Law"],
    avgTuition: "USD 25,000 - 55,000/year",
    visaInfo: "F-1 Student Visa required. Processing time: 3-5 weeks. Interview at US Embassy mandatory.",
    workOpportunity: "20 hours/week on-campus. OPT allows 12-36 months of post-study work.",
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    universities: "60+",
    programs: "600+",
    highlight: "Graduate Route visa",
    description: "The UK is home to prestigious universities like Oxford and Cambridge. With shorter course durations and a rich cultural heritage, it's a popular choice for Nepali students.",
    requirements: [
      "IELTS 6.0-7.0 (UKVI approved)",
      "Academic certificates",
      "Statement of Purpose",
      "Financial proof (28 days)",
      "TB test certificate",
    ],
    popularCourses: ["Business & Finance", "Engineering", "Law", "Arts & Design", "Medicine"],
    avgTuition: "GBP 12,000 - 38,000/year",
    visaInfo: "Student Visa allows study in UK. CAS letter required from university. Processing: 3-4 weeks.",
    workOpportunity: "20 hours/week during term. Graduate Route visa offers 2 years post-study work.",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    universities: "50+",
    programs: "400+",
    highlight: "PGWP eligibility",
    description: "Canada is known for affordable education, safe environment, and excellent immigration pathways. It offers high-quality education with a clear path to permanent residency.",
    requirements: [
      "IELTS 6.0-6.5 or equivalent",
      "Academic transcripts",
      "Statement of Purpose",
      "Proof of funds",
      "Medical examination",
    ],
    popularCourses: ["Business Analytics", "Computer Science", "Engineering", "Healthcare", "Hospitality"],
    avgTuition: "CAD 15,000 - 35,000/year",
    visaInfo: "Study Permit required. Processing time: 8-12 weeks. Biometrics required.",
    workOpportunity: "20 hours/week off-campus. PGWP offers up to 3 years post-study work permit.",
  },
  {
    country: "Japan",
    flag: "🇯🇵",
    universities: "30+",
    programs: "200+",
    highlight: "Scholarships available",
    description: "Japan combines traditional culture with cutting-edge technology. It offers unique educational experiences with various scholarship opportunities for international students.",
    requirements: [
      "JLPT N2-N1 (for Japanese programs)",
      "IELTS/TOEFL (for English programs)",
      "Academic certificates",
      "Certificate of Eligibility (COE)",
      "Financial proof",
    ],
    popularCourses: ["Engineering", "Technology", "Japanese Studies", "Animation & Design", "Business"],
    avgTuition: "JPY 500,000 - 1,500,000/year",
    visaInfo: "Student Visa (Ryugaku). COE required first. Processing: 1-3 months.",
    workOpportunity: "28 hours/week during studies. Various work visa options after graduation.",
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    universities: "40+",
    programs: "350+",
    highlight: "Low tuition fees",
    description: "Germany offers tuition-free education at public universities. Known for engineering excellence and strong industry connections, it's ideal for students seeking quality education affordably.",
    requirements: [
      "German A2-B2 or IELTS 6.0+ (English programs)",
      "Academic certificates with APS verification",
      "Motivation letter",
      "Blocked account (€11,208/year)",
      "Health insurance",
    ],
    popularCourses: ["Engineering", "Computer Science", "Business", "Natural Sciences", "Automotive"],
    avgTuition: "€0 - 3,000/semester (public universities)",
    visaInfo: "National Visa for studies required. Processing: 6-12 weeks. Interview at German Embassy.",
    workOpportunity: "20 hours/week during studies. 18-month job seeker visa after graduation.",
  },
];

const Destinations = () => {
  const [selectedDestination, setSelectedDestination] = useState<DestinationData | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDestinationClick = (destination: DestinationData) => {
    setSelectedDestination(destination);
    setDialogOpen(true);
  };

  return (
    <section id="destinations" className="py-20 lg:py-32 bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
            Study Destinations
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Explore Top
            <span className="text-gradient"> Study Destinations</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We have partnerships with leading universities across the globe. 
            Choose your dream destination and start your journey today.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {destinations.map((dest) => (
            <div
              key={dest.country}
              onClick={() => handleDestinationClick(dest)}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-secondary transition-all duration-300 cursor-pointer hover:shadow-lg"
            >
              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{dest.flag}</span>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{dest.country}</h3>
                      <p className="text-sm text-secondary font-medium">{dest.highlight}</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex gap-6 pt-4 border-t border-border">
                  <div>
                    <p className="text-2xl font-bold text-foreground">{dest.universities}</p>
                    <p className="text-sm text-muted-foreground">Universities</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{dest.programs}</p>
                    <p className="text-sm text-muted-foreground">Programs</p>
                  </div>
                </div>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="default" size="lg">
            View All Destinations
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Destination Detail Dialog */}
      <DestinationDialog
        destination={selectedDestination}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </section>
  );
};

export default Destinations;
