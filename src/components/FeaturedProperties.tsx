import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const featuredProperties = [
  {
    id: "1",
    title: "Modern Downtown Apartment",
    price: "$750,000",
    location: "Downtown, New York",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: property1,
    featured: true,
    type: "Apartment"
  },
  {
    id: "2",
    title: "Cozy Family Home",
    price: "$950,000",
    location: "Suburbs, California",
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    image: property2,
    featured: true,
    type: "House"
  },
  {
    id: "3",
    title: "Luxury Villa with Pool",
    price: "$2,200,000",
    location: "Miami Beach, Florida",
    bedrooms: 5,
    bathrooms: 4,
    area: 4200,
    image: property3,
    featured: true,
    type: "Villa"
  }
];

const FeaturedProperties = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties that offer 
            exceptional value and quality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;