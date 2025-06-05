import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  image: string;
  icon: string;
  color: "ocean" | "adventure";
}

const ServiceCard = ({
  title,
  description,
  features,
  price,
  image,
  icon,
  color,
}: ServiceCardProps) => {
  const colorClasses = {
    ocean: "from-ocean to-blue-600",
    adventure: "from-adventure to-orange-600",
  };

  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${colorClasses[color]} opacity-20 group-hover:opacity-30 transition-opacity`}
        ></div>
        <div className="absolute top-4 left-4">
          <div
            className={`w-12 h-12 bg-gradient-to-br ${colorClasses[color]} rounded-xl flex items-center justify-center`}
          >
            <Icon name={icon as any} size={24} className="text-white" />
          </div>
        </div>
      </div>

      <CardHeader className="pb-4">
        <h3 className="font-montserrat font-bold text-2xl text-dark">
          {title}
        </h3>
        <p className="font-open-sans text-gray-600 leading-relaxed">
          {description}
        </p>
      </CardHeader>

      <CardContent className="pt-0">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Icon
                name="Check"
                size={16}
                className="text-green-500 mt-1 flex-shrink-0"
              />
              <span className="font-open-sans text-sm text-gray-700">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="flex items-center justify-between pt-6 border-t">
        <div className="text-left">
          <span className="font-open-sans text-sm text-gray-500">от</span>
          <div className="font-montserrat font-bold text-2xl text-dark">
            {price}
          </div>
        </div>
        <Button
          className={`bg-gradient-to-r ${colorClasses[color]} hover:opacity-90 font-montserrat font-semibold`}
        >
          Забронировать
          <Icon name="ArrowRight" size={16} className="ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
