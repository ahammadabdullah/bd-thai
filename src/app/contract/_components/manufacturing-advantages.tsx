import { Clock, Users, FlaskRoundIcon as Flask, Shield } from "lucide-react";
import Image from "next/image";

export function ManufacturingAdvantages() {
  const advantages = [
    {
      title: "Minimum Order Quantities (MOQs) & Competitive Lead Times",
      description: "Designed for large-scale buyers.",
      icon: Clock,
    },
    {
      title: "Full-Service Support",
      description:
        "We handle product development, packaging, regulatory approvals, and export logistics.",
      icon: Users,
    },
    {
      title: "Custom Formulation & R&D",
      description:
        "Develop unique flavors, health-focused ingredients, and market-ready products.",
      icon: Flask,
    },
    {
      title: "Regulatory Compliance & Certifications",
      description:
        "We ensure compliance with HACCP, ISO 22000, BRC, Halal, FDA, and other global standards.",
      icon: Shield,
    },
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Key Advantages</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Partner with BD Thai Food & Beverage Ltd. for reliable, high-quality
            contract manufacturing services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-100 p-6 flex items-start hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                <advantage.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-semibold">Our Facilities & Products</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative aspect-square">
                <Image
                  src={`/placeholder.svg?height=400&width=400`}
                  alt="Manufacturing facility"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
