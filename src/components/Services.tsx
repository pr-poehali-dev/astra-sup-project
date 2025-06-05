import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      title: "Мотопрогулки",
      description:
        "Откройте для себя красоту природы на мощном мотоцикле. Исследуйте 3 уникальные локации: живописный карьер, заброшенный аэродром и уютную конюшню.",
      features: [
        "Профессиональный инструктор-гид",
        "Современная экипировка включена",
        "Маршруты разной сложности",
        "Фотосессия в живописных местах",
        "Горячий обед на природе",
      ],
      price: "3 500 ₽",
      image:
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Zap",
      color: "adventure" as const,
    },
    {
      title: "САП сплавы",
      description:
        "Насладитесь спокойным сплавом на SUP-доске по живописной реке. Красивые пейзажи и полное единение с природой.",
      features: [
        "Качественные SUP-доски и весла",
        "Гидрокостюмы по размерам",
        "Обучение технике гребли",
        "Водонепроницаемые сумки",
        "Перекус и горячий чай",
      ],
      price: "2 800 ₽",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "Waves",
      color: "ocean" as const,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-dark mb-6">
            Наши услуги
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите свое приключение и окунитесь в мир ярких эмоций и
            незабываемых впечатлений
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
