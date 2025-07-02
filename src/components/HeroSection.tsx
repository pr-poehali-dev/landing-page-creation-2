import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
              Дом Помощи
              <span className="text-blue-600">
                {" "}
                людям в трудной жизненной ситуации
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Мы помогаем людям восстановить свою жизнь, найти работу, получить
              документы и вернуться в общество с достоинством.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Обратиться за помощью
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4">
                <Icon name="Heart" className="mr-2" size={20} />
                Стать волонтёром
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Home"
                  size={40}
                  className="mx-auto mb-4 text-blue-600"
                />
                <h3 className="font-semibold text-gray-800 mb-2">
                  Предоставление жилья
                </h3>
                <p className="text-sm text-gray-600">
                  Койко-место и временное проживание
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Briefcase"
                  size={40}
                  className="mx-auto mb-4 text-green-600"
                />
                <h3 className="font-semibold text-gray-800 mb-2">
                  Трудоустройство
                </h3>
                <p className="text-sm text-gray-600">
                  Помощь в поиске работы и рабочая одежда
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Icon
                  name="FileText"
                  size={40}
                  className="mx-auto mb-4 text-purple-600"
                />
                <h3 className="font-semibold text-gray-800 mb-2">Документы</h3>
                <p className="text-sm text-gray-600">
                  Восстановление всех необходимых документов
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Users"
                  size={40}
                  className="mx-auto mb-4 text-orange-600"
                />
                <h3 className="font-semibold text-gray-800 mb-2">Адаптация</h3>
                <p className="text-sm text-gray-600">
                  Помощь в адаптации в обществе
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
