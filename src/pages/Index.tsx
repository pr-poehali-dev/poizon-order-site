import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

type Page = 'home' | 'catalog' | 'calculator' | 'order' | 'profile' | 'auth';

const Index: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [weight, setWeight] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  const calculateDelivery = () => {
    const w = parseFloat(weight) || 0;
    const p = parseFloat(price) || 0;
    const deliveryCost = Math.max(500, w * 50 + p * 0.05);
    return Math.round(deliveryCost);
  };

  const products = [
    {
      id: 1,
      name: "Nike Air Jordan 1",
      price: "15,990",
      originalPrice: "18,500",
      image: "/img/d9310f54-a83e-4f29-bc01-7219924b7360.jpg",
      category: "Кроссовки"
    },
    {
      id: 2,
      name: "Supreme Hoodie",
      price: "8,990",
      originalPrice: "12,000",
      image: "/img/6080711b-57a6-4e59-9f20-beca59a72797.jpg",
      category: "Одежда"
    },
    {
      id: 3,
      name: "Yeezy Boost 350",
      price: "22,990",
      originalPrice: "28,000",
      image: "/img/d9310f54-a83e-4f29-bc01-7219924b7360.jpg",
      category: "Кроссовки"
    }
  ];

  const renderNavigation = () => (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Zap" size={24} className="text-primary" />
            <span className="text-xl font-bold text-gray-900">POIZON DELIVERY</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setCurrentPage('home')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'home' ? 'text-primary' : 'text-gray-600 hover:text-primary'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => setCurrentPage('catalog')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'catalog' ? 'text-primary' : 'text-gray-600 hover:text-primary'
              }`}
            >
              Каталог
            </button>
            <button
              onClick={() => setCurrentPage('calculator')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'calculator' ? 'text-primary' : 'text-gray-600 hover:text-primary'
              }`}
            >
              Калькулятор
            </button>
            <button
              onClick={() => setCurrentPage('order')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'order' ? 'text-primary' : 'text-gray-600 hover:text-primary'
              }`}
            >
              Оформить заказ
            </button>
            <button
              onClick={() => setCurrentPage('profile')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'profile' ? 'text-primary' : 'text-gray-600 hover:text-primary'
              }`}
            >
              Личный кабинет
            </button>
          </div>

          <Button
            onClick={() => setCurrentPage('auth')}
            variant="default"
            size="sm"
            className="bg-primary hover:bg-primary/90"
          >
            Войти
          </Button>
        </div>
      </div>
    </nav>
  );

  const renderHomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Заказывай товары с <span className="text-primary">Poizon</span> легко
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Быстрая доставка оригинальной одежды и обуви из Китая в Россию. 
                Проверенное качество, выгодные цены.
              </p>
              <div className="flex space-x-4">
                <Button
                  onClick={() => setCurrentPage('order')}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 hover-scale"
                >
                  <Icon name="ShoppingBag" size={20} className="mr-2" />
                  Оформить заказ
                </Button>
                <Button
                  onClick={() => setCurrentPage('calculator')}
                  variant="outline"
                  size="lg"
                  className="hover-scale"
                >
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Калькулятор
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-300/20 rounded-3xl transform rotate-3"></div>
              <img
                src="/img/d9310f54-a83e-4f29-bc01-7219924b7360.jpg"
                alt="Товары Poizon"
                className="relative rounded-3xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают нас?</h2>
            <p className="text-lg text-gray-600">Преимущества нашего сервиса</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale transition-all duration-300 border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">100% Оригинал</h3>
                <p className="text-gray-600">Гарантируем подлинность всех товаров</p>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300 border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
                <p className="text-gray-600">Доставка в любой город России за 7-14 дней</p>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300 border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="DollarSign" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Выгодные цены</h3>
                <p className="text-gray-600">Лучшие цены на рынке с честным курсом</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Популярные товары</h2>
            <p className="text-lg text-gray-600">Самые востребованные позиции</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="hover-scale transition-all duration-300 border-none shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary">
                    {product.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-primary">₽{product.price}</span>
                    <span className="text-gray-500 line-through">₽{product.originalPrice}</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Plus" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const renderCalculatorPage = () => (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-xl border-none">
          <CardHeader className="text-center bg-primary text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center justify-center">
              <Icon name="Calculator" size={24} className="mr-3" />
              Калькулятор доставки
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="weight" className="text-lg font-medium">Вес товара (кг)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="Введите вес в килограммах"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="mt-2 text-lg"
                />
              </div>

              <div>
                <Label htmlFor="price" className="text-lg font-medium">Стоимость товара (₽)</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="Введите стоимость в рублях"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="mt-2 text-lg"
                />
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-purple-100 rounded-lg p-6 text-center">
                <p className="text-lg text-gray-700 mb-2">Стоимость доставки</p>
                <p className="text-4xl font-bold text-primary">
                  ₽{weight || price ? calculateDelivery().toLocaleString() : '0'}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Включая таможенное оформление и страховку
                </p>
              </div>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <Icon name="Clock" size={16} className="mr-2 text-primary" />
                  <span>Срок доставки: 7-14 дней</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Shield" size={16} className="mr-2 text-primary" />
                  <span>Страхование включено</span>
                </div>
                <div className="flex items-center">
                  <Icon name="FileCheck" size={16} className="mr-2 text-primary" />
                  <span>Таможенное оформление включено</span>
                </div>
              </div>

              <Button
                onClick={() => setCurrentPage('order')}
                className="w-full bg-primary hover:bg-primary/90 text-lg py-3"
              >
                Оформить заказ
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderOrderPage = () => (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-xl border-none">
          <CardHeader className="text-center bg-primary text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center justify-center">
              <Icon name="ShoppingBag" size={24} className="mr-3" />
              Оформление заказа
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form className="space-y-6">
              <div>
                <Label htmlFor="productUrl" className="text-lg font-medium">Ссылка на товар с Poizon</Label>
                <Input
                  id="productUrl"
                  type="url"
                  placeholder="https://poizon.com/..."
                  className="mt-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="size" className="text-lg font-medium">Размер</Label>
                  <Input
                    id="size"
                    placeholder="EU 42, US 9, XL..."
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="quantity" className="text-lg font-medium">Количество</Label>
                  <Input
                    id="quantity"
                    type="number"
                    placeholder="1"
                    min="1"
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="name" className="text-lg font-medium">Ваше имя</Label>
                <Input
                  id="name"
                  placeholder="Введите ваше имя"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-lg font-medium">Телефон</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (999) 999-99-99"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="address" className="text-lg font-medium">Адрес доставки</Label>
                <Textarea
                  id="address"
                  placeholder="Укажите полный адрес для доставки"
                  className="mt-2"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="comments" className="text-lg font-medium">Комментарии к заказу</Label>
                <Textarea
                  id="comments"
                  placeholder="Дополнительные пожелания или комментарии"
                  className="mt-2"
                  rows={3}
                />
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-purple-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Что дальше?</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                    Мы свяжемся с вами в течение 30 минут
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                    Подтвердим наличие товара и точную стоимость
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                    Оформим заказ и отправим товар в течение 2-3 дней
                  </li>
                </ul>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-lg py-3"
              >
                Отправить заказ
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderAuthPage = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md shadow-xl border-none">
        <CardHeader className="text-center bg-primary text-white rounded-t-lg">
          <CardTitle className="text-2xl flex items-center justify-center">
            <Icon name="User" size={24} className="mr-3" />
            Вход в аккаунт
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <form className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-lg font-medium">Email или телефон</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-lg font-medium">Пароль</Label>
              <Input
                id="password"
                type="password"
                placeholder="Введите пароль"
                className="mt-2"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-lg py-3"
            >
              Войти
            </Button>

            <div className="text-center">
              <Button variant="link" className="text-primary">
                Забыли пароль?
              </Button>
            </div>

            <div className="text-center text-sm text-gray-600">
              Нет аккаунта?{' '}
              <Button variant="link" className="text-primary p-0">
                Зарегистрироваться
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );

  const renderProfilePage = () => (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-xl border-none">
            <CardHeader className="bg-primary text-white rounded-t-lg">
              <CardTitle className="flex items-center">
                <Icon name="User" size={20} className="mr-2" />
                Профиль
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="User" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Иван Петров</h3>
                <p className="text-gray-600">ivan@email.com</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Заказов</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Статус</span>
                  <Badge variant="secondary">VIP клиент</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 shadow-xl border-none">
            <CardHeader className="bg-primary text-white rounded-t-lg">
              <CardTitle className="flex items-center">
                <Icon name="Package" size={20} className="mr-2" />
                Мои заказы
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {[1, 2, 3].map((order) => (
                  <div key={order} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">Заказ #{1000 + order}</h4>
                      <Badge variant={order === 1 ? "default" : "secondary"}>
                        {order === 1 ? "В пути" : "Доставлен"}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-2">Nike Air Jordan 1 Retro High</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>15 сентября 2024</span>
                      <span className="font-semibold">₽15,990</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return renderHomePage();
      case 'calculator':
        return renderCalculatorPage();
      case 'order':
        return renderOrderPage();
      case 'auth':
        return renderAuthPage();
      case 'profile':
        return renderProfilePage();
      default:
        return renderHomePage();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {renderNavigation()}
      {renderCurrentPage()}
    </div>
  );
};

export default Index;