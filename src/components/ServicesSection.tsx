import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Heart",
    title: "Психологическая помощь",
    description:
      "Профессиональная поддержка и консультации для преодоления жизненных трудностей",
    color: "text-red-500",
  },
  {
    icon: "Scale",
    title: "Постпенитенциарная пробация",
    description:
      "Помощь в адаптации после отбывания наказания, поддержка в интеграции в общество",
    color: "text-blue-500",
  },
  {
    icon: "Utensils",
    title: "4-разовое питание",
    description:
      "Полноценное питание для восстановления сил и поддержания здоровья",
    color: "text-green-500",
  },
  {
    icon: "Shirt",
    title: "Рабочая одежда",
    description:
      "Предоставление необходимой одежды для трудоустройства и работы",
    color: "text-purple-500",
  },
  {
    icon: "FileCheck",
    title: "Восстановление документов",
    description:
      "Помощь в получении паспорта, трудовой книжки и других важных документов",
    color: "text-orange-500",
  },
  {
    icon: "UserCheck",
    title: "Адаптация в обществе",
    description: "Комплексная программа социальной адаптации и реинтеграции",
    color: "text-teal-500",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Комплексная поддержка для людей, оказавшихся в трудной жизненной
            ситуации
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="text-center pb-4">
                <Icon
                  name={service.icon as any}
                  size={48}
                  className={`mx-auto mb-4 ${service.color}`}
                />
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
