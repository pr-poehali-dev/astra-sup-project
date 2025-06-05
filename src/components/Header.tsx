import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-ocean to-adventure rounded-xl flex items-center justify-center">
            <span className="text-white font-montserrat font-bold text-lg">
              A
            </span>
          </div>
          <span className="font-montserrat font-bold text-xl text-dark">
            Astra_sup
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="font-open-sans text-gray-700 hover:text-ocean transition-colors"
          >
            Услуги
          </a>
          <a
            href="#about"
            className="font-open-sans text-gray-700 hover:text-ocean transition-colors"
          >
            О нас
          </a>
          <a
            href="#contact"
            className="font-open-sans text-gray-700 hover:text-ocean transition-colors"
          >
            Контакты
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Icon name="Phone" size={16} className="mr-2" />
            Позвонить
          </Button>
          <Button size="sm" className="bg-ocean hover:bg-ocean/90">
            Забронировать
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
