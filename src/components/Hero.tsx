import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-ocean via-blue-500 to-adventure">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-white mb-6 leading-tight">
            Astra<span className="text-adventure">_sup</span>
          </h1>
          <p className="font-open-sans text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">
            Захватывающие приключения на воде и земле
          </p>
          <p className="font-open-sans text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Мотопрогулки по живописным маршрутам и сап сплавы по кристально
            чистым водам
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-adventure hover:bg-adventure/90 text-white font-montserrat font-semibold px-8 py-4 text-lg"
            >
              <Icon name="Zap" size={20} className="mr-2" />
              Мотопрогулки
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-ocean font-montserrant font-semibold px-8 py-4 text-lg"
            >
              <Icon name="Waves" size={20} className="mr-2" />
              САП сплавы
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
