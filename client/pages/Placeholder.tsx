import { Layout } from "@/components/Layout";
import { ArrowRight } from "lucide-react";

interface PlaceholderProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const Placeholder = ({ title, description, icon }: PlaceholderProps) => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center floating-card p-12">
          {icon && <div className="mb-6 flex justify-center text-accent text-5xl">{icon}</div>}
          <h1 className="text-heading mb-4">{title}</h1>
          <p className="text-muted-foreground mb-8">{description}</p>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <ArrowRight className="w-4 h-4" />
            Keep building... this page is coming soon!
          </p>
        </div>
      </div>
    </Layout>
  );
};
