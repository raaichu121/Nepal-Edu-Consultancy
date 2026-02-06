import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GraduationCap, Building, Clock, DollarSign, FileText, Briefcase } from "lucide-react";

export interface DestinationData {
  country: string;
  flag: string;
  universities: string;
  programs: string;
  highlight: string;
  description: string;
  requirements: string[];
  popularCourses: string[];
  avgTuition: string;
  visaInfo: string;
  workOpportunity: string;
}

interface DestinationDialogProps {
  destination: DestinationData | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DestinationDialog = ({ destination, open, onOpenChange }: DestinationDialogProps) => {
  if (!destination) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-5xl">{destination.flag}</span>
            <div>
              <DialogTitle className="text-2xl font-bold">{destination.country}</DialogTitle>
              <DialogDescription className="text-secondary font-medium">
                {destination.highlight}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Overview */}
          <p className="text-muted-foreground">{destination.description}</p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted/50 rounded-xl p-4">
              <div className="flex items-center gap-2 text-secondary mb-1">
                <Building className="w-4 h-4" />
                <span className="text-sm font-medium">Universities</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{destination.universities}</p>
            </div>
            <div className="bg-muted/50 rounded-xl p-4">
              <div className="flex items-center gap-2 text-secondary mb-1">
                <GraduationCap className="w-4 h-4" />
                <span className="text-sm font-medium">Programs</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{destination.programs}</p>
            </div>
          </div>

          {/* Tuition & Work */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 border border-border rounded-xl">
              <DollarSign className="w-5 h-5 text-secondary mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground">Average Tuition</h4>
                <p className="text-sm text-muted-foreground">{destination.avgTuition}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 border border-border rounded-xl">
              <Briefcase className="w-5 h-5 text-secondary mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground">Work Opportunity</h4>
                <p className="text-sm text-muted-foreground">{destination.workOpportunity}</p>
              </div>
            </div>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-secondary" />
              Popular Courses
            </h4>
            <div className="flex flex-wrap gap-2">
              {destination.popularCourses.map((course, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-secondary" />
              Basic Requirements
            </h4>
            <ul className="space-y-2">
              {destination.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* Visa Info */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground">Visa Information</h4>
                <p className="text-sm text-muted-foreground">{destination.visaInfo}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Button 
            className="w-full" 
            size="lg" 
            onClick={() => {
              onOpenChange(false);
              setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
            }}
          >
            Get Free Consultation for {destination.country}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DestinationDialog;
