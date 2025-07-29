const stats = [
  {
    value: "500+",
    label: "Properties Listed",
    description: "Active listings in prime locations"
  },
  {
    value: "95%",
    label: "Customer Satisfaction",
    description: "Happy clients and successful deals"
  },
  {
    value: "50+",
    label: "Expert Agents",
    description: "Professional real estate experts"
  },
  {
    value: "15",
    label: "Years Experience",
    description: "Trusted expertise in real estate"
  }
];

const Stats = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Our track record speaks for itself. Join thousands of satisfied clients 
            who found their perfect home with us.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-primary-foreground mb-2">
                {stat.label}
              </div>
              <div className="text-primary-foreground/70">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;