import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Toy {
  id: number;
  name: string;
  price: number;
  image: string;
  age: string;
  gender: string;
  type: string;
  isNew?: boolean;
}

const Index = () => {
  const [selectedAge, setSelectedAge] = useState<string>('all');
  const [selectedGender, setSelectedGender] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const toys: Toy[] = [
    { id: 1, name: 'Мягкий мишка', price: 1299, image: 'https://cdn.poehali.dev/projects/5d0d8591-82f5-434d-bdf9-0af84ce6dddf/files/57a10aeb-4257-4222-b9c9-f9736306038f.jpg', age: '0-3', gender: 'unisex', type: 'soft', isNew: true },
    { id: 2, name: 'Конструктор LEGO', price: 3499, image: 'https://cdn.poehali.dev/projects/5d0d8591-82f5-434d-bdf9-0af84ce6dddf/files/2626aa08-cf46-41eb-a682-e68a85857912.jpg', age: '6-9', gender: 'unisex', type: 'constructor' },
    { id: 3, name: 'Кукла Барби', price: 2199, image: 'https://cdn.poehali.dev/projects/5d0d8591-82f5-434d-bdf9-0af84ce6dddf/files/867e4b4e-efb8-4d6b-b367-251b70f5dff9.jpg', age: '3-6', gender: 'girls', type: 'dolls', isNew: true },
    { id: 4, name: 'Машинка на пульте', price: 2899, image: '/placeholder.svg', age: '6-9', gender: 'boys', type: 'rc' },
    { id: 5, name: 'Пазл 500 деталей', price: 799, image: '/placeholder.svg', age: '9+', gender: 'unisex', type: 'puzzles' },
    { id: 6, name: 'Набор для творчества', price: 1599, image: '/placeholder.svg', age: '3-6', gender: 'unisex', type: 'creative', isNew: true },
    { id: 7, name: 'Робот-трансформер', price: 4299, image: '/placeholder.svg', age: '6-9', gender: 'boys', type: 'robots' },
    { id: 8, name: 'Кухня игрушечная', price: 5499, image: '/placeholder.svg', age: '3-6', gender: 'girls', type: 'roleplay' },
  ];

  const filteredToys = toys.filter(toy => {
    if (selectedAge !== 'all' && toy.age !== selectedAge) return false;
    if (selectedGender !== 'all' && toy.gender !== selectedGender && toy.gender !== 'unisex') return false;
    if (selectedType !== 'all' && toy.type !== selectedType) return false;
    return true;
  });

  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-r from-toy-pink via-toy-purple to-toy-blue text-white py-6 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-montserrat font-extrabold animate-bounce-in">
              🧸 ИгроМир
            </h1>
            <nav className="hidden md:flex gap-6">
              <a href="#catalog" className="hover:text-toy-yellow transition-colors font-semibold">Каталог</a>
              <a href="#ages" className="hover:text-toy-yellow transition-colors font-semibold">По возрастам</a>
              <a href="#new" className="hover:text-toy-yellow transition-colors font-semibold">Новинки</a>
              <a href="#contact" className="hover:text-toy-yellow transition-colors font-semibold">Контакты</a>
            </nav>
            <Button className="bg-toy-yellow text-gray-900 hover:bg-toy-peach font-bold">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-toy-peach/30 via-toy-yellow/20 to-toy-green/30 py-20 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-montserrat font-extrabold mb-6 text-gray-800">
            Мир детских мечтаний! ✨
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 font-open">
            Лучшие игрушки для развития и радости вашего ребенка
          </p>
          <Button size="lg" className="bg-toy-pink hover:bg-toy-purple text-white font-bold text-lg px-8 py-6 rounded-full shadow-xl hover-scale">
            <Icon name="Sparkles" size={24} className="mr-2" />
            Смотреть каталог
          </Button>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-12 text-gray-800">
            🎪 Каталог игрушек
          </h2>

          <div className="mb-12 bg-gradient-to-r from-toy-blue/10 to-toy-purple/10 p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold mb-6 text-gray-800">Фильтры</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-700">Возраст</label>
                <div className="flex flex-wrap gap-2">
                  {['all', '0-3', '3-6', '6-9', '9+'].map(age => (
                    <Button
                      key={age}
                      variant={selectedAge === age ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedAge(age)}
                      className={`rounded-full font-semibold ${selectedAge === age ? 'bg-toy-pink text-white' : 'hover:bg-toy-pink/20'}`}
                    >
                      {age === 'all' ? 'Все' : age === '9+' ? '9+ лет' : `${age} лет`}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-700">Пол</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: 'all', label: 'Все', icon: 'Users' },
                    { value: 'boys', label: 'Мальчики', icon: 'User' },
                    { value: 'girls', label: 'Девочки', icon: 'User' }
                  ].map(gender => (
                    <Button
                      key={gender.value}
                      variant={selectedGender === gender.value ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedGender(gender.value)}
                      className={`rounded-full font-semibold ${selectedGender === gender.value ? 'bg-toy-blue text-white' : 'hover:bg-toy-blue/20'}`}
                    >
                      <Icon name={gender.icon as any} size={16} className="mr-1" />
                      {gender.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-700">Тип игрушки</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: 'all', label: 'Все' },
                    { value: 'soft', label: 'Мягкие' },
                    { value: 'constructor', label: 'Конструкторы' },
                    { value: 'dolls', label: 'Куклы' },
                    { value: 'rc', label: 'Радиоуправляемые' },
                    { value: 'puzzles', label: 'Пазлы' },
                    { value: 'creative', label: 'Творчество' },
                  ].map(type => (
                    <Button
                      key={type.value}
                      variant={selectedType === type.value ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedType(type.value)}
                      className={`rounded-full font-semibold ${selectedType === type.value ? 'bg-toy-green text-white' : 'hover:bg-toy-green/20'}`}
                    >
                      {type.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredToys.map((toy, index) => (
              <Card 
                key={toy.id} 
                className="overflow-hidden hover-scale cursor-pointer border-2 border-transparent hover:border-toy-pink transition-all animate-fade-in rounded-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={toy.image} 
                    alt={toy.name}
                    className="w-full h-48 object-cover bg-gradient-to-br from-toy-peach/30 to-toy-yellow/30"
                  />
                  {toy.isNew && (
                    <Badge className="absolute top-3 right-3 bg-toy-yellow text-gray-900 font-bold animate-bounce-in">
                      <Icon name="Sparkles" size={14} className="mr-1" />
                      НОВИНКА
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-montserrat font-bold text-lg mb-2 text-gray-800">{toy.name}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-toy-pink">{toy.price} ₽</span>
                    <Badge variant="outline" className="text-xs">
                      {toy.age === '9+' ? '9+ лет' : `${toy.age} лет`}
                    </Badge>
                  </div>
                  <Button className="w-full bg-toy-purple hover:bg-toy-blue text-white font-bold rounded-full">
                    <Icon name="ShoppingBag" size={18} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredToys.length === 0 && (
            <div className="text-center py-16">
              <p className="text-2xl text-gray-500 font-open">
                😢 По выбранным фильтрам ничего не найдено
              </p>
            </div>
          )}
        </div>
      </section>

      <section id="ages" className="py-16 bg-gradient-to-br from-toy-purple/10 to-toy-pink/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-12 text-gray-800">
            🎯 Игрушки по возрастам
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { age: '0-3', title: '0-3 года', emoji: '👶', color: 'from-toy-peach to-toy-yellow' },
              { age: '3-6', title: '3-6 лет', emoji: '🧒', color: 'from-toy-yellow to-toy-green' },
              { age: '6-9', title: '6-9 лет', emoji: '👦', color: 'from-toy-green to-toy-blue' },
              { age: '9+', title: '9+ лет', emoji: '👨', color: 'from-toy-blue to-toy-purple' }
            ].map((category) => (
              <Card 
                key={category.age}
                className="text-center p-8 hover-bounce cursor-pointer border-2 hover:border-toy-pink transition-all bg-white rounded-2xl"
                onClick={() => {
                  setSelectedAge(category.age);
                  document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className={`text-6xl mb-4 bg-gradient-to-br ${category.color} w-24 h-24 rounded-full flex items-center justify-center mx-auto`}>
                  {category.emoji}
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-gray-800">{category.title}</h3>
                <p className="text-gray-600 mt-2 font-open">
                  {toys.filter(t => t.age === category.age).length} товаров
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="new" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-12 text-gray-800">
            ✨ Новинки месяца
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {toys.filter(toy => toy.isNew).map((toy, index) => (
              <Card 
                key={toy.id}
                className="overflow-hidden hover-scale cursor-pointer border-2 border-transparent hover:border-toy-yellow transition-all animate-scale-in rounded-2xl"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative">
                  <img 
                    src={toy.image} 
                    alt={toy.name}
                    className="w-full h-56 object-cover bg-gradient-to-br from-toy-pink/30 to-toy-purple/30"
                  />
                  <Badge className="absolute top-3 right-3 bg-toy-yellow text-gray-900 font-bold">
                    NEW!
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-bold text-xl mb-3 text-gray-800">{toy.name}</h3>
                  <p className="text-3xl font-bold text-toy-pink mb-4">{toy.price} ₽</p>
                  <Button className="w-full bg-gradient-to-r from-toy-pink to-toy-purple hover:from-toy-purple hover:to-toy-blue text-white font-bold rounded-full">
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gradient-to-br from-toy-blue/20 to-toy-green/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-montserrat font-bold mb-8 text-gray-800">
            📞 Контакты
          </h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-lg">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-lg">
                <Icon name="Phone" size={24} className="text-toy-blue" />
                <span className="font-semibold">+7 (800) 555-35-35</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-lg">
                <Icon name="Mail" size={24} className="text-toy-purple" />
                <span className="font-semibold">info@igromir.ru</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-lg">
                <Icon name="MapPin" size={24} className="text-toy-pink" />
                <span className="font-semibold">г. Москва, ул. Детская, д. 1</span>
              </div>
            </div>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" className="bg-toy-blue hover:bg-toy-purple text-white font-bold rounded-full">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в чат
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-toy-purple to-toy-blue text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-montserrat font-semibold">
            🧸 ИгроМир - счастливое детство начинается здесь!
          </p>
          <p className="mt-2 text-sm opacity-90">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;