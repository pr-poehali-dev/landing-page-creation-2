import { Card, CardContent } from "@/components/ui/card";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&q=80",
    alt: "Уютная комната в доме помощи",
  },
  {
    url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&q=80",
    alt: "Столовая с горячим питанием",
  },
  {
    url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&q=80",
    alt: "Консультация специалиста",
  },
  {
    url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
    alt: "Помощь в восстановлении документов",
  },
  {
    url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&q=80",
    alt: "Комната для отдыха и общения",
  },
  {
    url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80",
    alt: "Групповые занятия по адаптации",
  },
];

export default function GallerySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Наша галерея
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Посмотрите, как выглядит наш дом и какие условия мы создаём для
            людей, нуждающихся в помощи
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 text-center">
                    {image.alt}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
