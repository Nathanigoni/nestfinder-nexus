import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Settings, Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="relative backdrop-blur-md bg-white/20 border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-lg">☀</span>
            </div>
            <div>
              <span className="font-bold text-xl text-foreground">WeatherApp</span>
              <p className="text-sm text-muted-foreground -mt-1">Live forecasts</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search for cities..." 
                className="pl-10 bg-white/30 border-white/30 backdrop-blur-sm placeholder:text-muted-foreground/70"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-foreground hover:bg-white/20">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:bg-white/20">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-foreground hover:bg-white/20">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;