import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Shield",
      title: "Безопасность",
      description:
        "Современное оборудование и опытные инструкторы гарантируют вашу безопасность",
    },
    {
      icon: "Users",
      title: "Профессионалы",
      description: "Команда сертифицированных гидов с многолетним опытом",
    },
    {
      icon: "MapPin",
      title: "Уникальные маршруты",
      description: "Тщательно подобранные локации с потрясающими пейзажами",
    },
    {
      icon: "Camera",
      title: "Фото и видео",
      description: "Профессиональная съемка ваших приключений в подарок",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-dark mb-6">
            Почему выбирают нас
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-2xl mx-auto">
            Мы создаем незабываемые приключения с заботой о каждой детали
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-ocean to-adventure rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon
                  name={feature.icon as any}
                  size={28}
                  className="text-white"
                />
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-dark mb-4">
                {feature.title}
              </h3>
              <p className="font-open-sans text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
