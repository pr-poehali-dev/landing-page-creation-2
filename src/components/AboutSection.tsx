import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80"
                alt="Уютный интерьер дома помощи"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=200&q=80"
                  alt="Консультация специалиста"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              О нашем доме
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Наш дом — это место, где каждый человек может найти поддержку,
              понимание и реальную помощь в самые трудные моменты жизни. Мы
              верим, что каждый человек заслуживает второй шанс.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Icon name="Shield" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Безопасность и поддержка
                  </h3>
                  <p className="text-gray-600">
                    Создаём безопасную среду для восстановления
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Icon name="Users" size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Профессиональная команда
                  </h3>
                  <p className="text-gray-600">
                    Опытные специалисты и волонтёры
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Icon name="Target" size={24} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Индивидуальный подход
                  </h3>
                  <p className="text-gray-600">
                    Учитываем особенности каждого человека
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  500+
                </div>
                <p className="text-sm text-gray-700">Людей получили помощь</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  85%
                </div>
                <p className="text-sm text-gray-700">Успешно трудоустроены</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  24/7
                </div>
                <p className="text-sm text-gray-700">
                  Круглосуточная поддержка
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-0">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  5 лет
                </div>
                <p className="text-sm text-gray-700">Опыт работы</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
