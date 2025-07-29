import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Bed, Bath, Square, MapPin } from "lucide-react";

interface PropertyCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  featured?: boolean;
  type: string;
}

const PropertyCard = ({ 
  title, 
  price, 
  location, 
  bedrooms, 
  bathrooms, 
  area, 
  image, 
  featured = false,
  type 
}: PropertyCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 cursor-pointer">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {featured && (
            <Badge className="bg-luxury text-luxury-foreground">Featured</Badge>
          )}
          <Badge variant="secondary">{type}</Badge>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-4 right-4 bg-white/80 hover:bg-white text-foreground"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          {location}
        </div>
        
        <h3 className="font-semibold text-lg text-foreground mb-3 line-clamp-2">
          {title}
        </h3>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-primary">{price}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{bedrooms} beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{bathrooms} baths</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{area} sqft</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;