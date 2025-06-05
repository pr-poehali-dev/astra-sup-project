import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-dark text-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-ocean rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-adventure rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            Готовы к приключению?
          </h2>
          <p className="font-open-sans text-xl text-gray-300 max-w-2xl mx-auto">
            Свяжитесь с нами для бронирования или получения дополнительной
            информации
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-ocean to-adventure rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">
                Телефон
              </h3>
              <p className="font-open-sans text-gray-300">+7 (999) 123-45-67</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-ocean to-adventure rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} className="text-white" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">
                Email
              </h3>
              <p className="font-open-sans text-gray-300">info@astrasup.ru</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-ocean to-adventure rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" size={24} className="text-white" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">
                Telegram
              </h3>
              <p className="font-open-sans text-gray-300">@astra_sup</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-ocean to-adventure hover:opacity-90 font-montserrat font-semibold px-12 py-4 text-lg"
          >
            <Icon name="Calendar" size={20} className="mr-2" />
            Забронировать сейчас
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
