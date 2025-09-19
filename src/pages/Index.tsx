import React, { useState, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import SneakerModel from '@/components/SneakerModel';

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

  const renderNavigation = () => (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-foreground">SemStore</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setCurrentPage('home')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'home' ? 'text-primary' : 'text-foreground/70 hover:text-primary'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => setCurrentPage('profile')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'profile' ? 'text-primary' : 'text-foreground/70 hover:text-primary'
              }`}
            >
              Личный кабинет
            </button>
            <button
              onClick={() => setCurrentPage('calculator')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'calculator' ? 'text-primary' : 'text-foreground/70 hover:text-primary'
              }`}
            >
              Калькулятор
            </button>
            <button
              onClick={() => setCurrentPage('order')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'order' ? 'text-primary' : 'text-foreground/70 hover:text-primary'
              }`}
            >
              Оформить заказ
            </button>
            <button
              onClick={() => setCurrentPage('auth')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'auth' ? 'text-primary' : 'text-foreground/70 hover:text-primary'
              }`}
            >
              Авторизация
            </button>
          </div>

          <Button
            onClick={() => setCurrentPage('order')}
            variant="default"
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Сделать заказ
          </Button>
        </div>
      </div>
    </nav>
  );

  const renderHomePage = () => (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-background/80 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
                SemStore — доставка одежды и обуви с <span className="text-primary">Poizon</span> в Россию.
              </h1>
              <p className="text-xl text-foreground/70 mb-8">
                Быстро, удобно, без лишних хлопот.
              </p>
              <div className="flex space-x-4">
                <Button
                  onClick={() => setCurrentPage('order')}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 hover-scale text-primary-foreground rounded-2xl px-8 py-4 text-lg"
                >
                  Оформить заказ
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in h-96">
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              }>
                <SneakerModel />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mb-4">
                <Icon name="Clock" size={32} className="text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Быстрая доставка</h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mb-4">
                <Icon name="Package" size={32} className="text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Оригинальные товары с Poizon</h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mb-4">
                <Icon name="CreditCard" size={32} className="text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Удобная оплата</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderCalculatorPage = () => (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-xl border border-border bg-card">
          <CardHeader className="text-center bg-primary text-primary-foreground rounded-t-lg">
            <CardTitle className="text-2xl flex items-center justify-center">
              <Icon name="Calculator" size={24} className="mr-3" />
              Калькулятор доставки
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="weight" className="text-lg font-medium text-card-foreground">Вес товара (кг)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="Введите вес в килограммах"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="mt-2 text-lg bg-background border-border"
                />
              </div>

              <div>
                <Label htmlFor="price" className="text-lg font-medium text-card-foreground">Стоимость товара (₽)</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="Введите стоимость в рублях"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="mt-2 text-lg bg-background border-border"
                />
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-primary/20 rounded-lg p-6 text-center">
                <p className="text-lg text-card-foreground mb-2">Стоимость доставки</p>
                <p className="text-4xl font-bold text-primary">
                  ₽{weight || price ? calculateDelivery().toLocaleString() : '0'}
                </p>
                <p className="text-sm text-card-foreground/70 mt-2">
                  Включая таможенное оформление и страховку
                </p>
              </div>

              <div className="space-y-3 text-sm text-card-foreground/70">
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
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3"
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
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-xl border border-border bg-card">
          <CardHeader className="text-center bg-primary text-primary-foreground rounded-t-lg">
            <CardTitle className="text-2xl flex items-center justify-center">
              <Icon name="ShoppingBag" size={24} className="mr-3" />
              Оформление заказа
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form className="space-y-6">
              <div>
                <Label htmlFor="productUrl" className="text-lg font-medium text-card-foreground">Ссылка на товар с Poizon</Label>
                <Input
                  id="productUrl"
                  type="url"
                  placeholder="https://poizon.com/..."
                  className="mt-2 bg-background border-border"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="size" className="text-lg font-medium text-card-foreground">Размер</Label>
                  <Input
                    id="size"
                    placeholder="EU 42, US 9, XL..."
                    className="mt-2 bg-background border-border"
                  />
                </div>
                <div>
                  <Label htmlFor="quantity" className="text-lg font-medium text-card-foreground">Количество</Label>
                  <Input
                    id="quantity"
                    type="number"
                    placeholder="1"
                    min="1"
                    className="mt-2 bg-background border-border"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="name" className="text-lg font-medium text-card-foreground">Ваше имя</Label>
                <Input
                  id="name"
                  placeholder="Введите ваше имя"
                  className="mt-2 bg-background border-border"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-lg font-medium text-card-foreground">Телефон</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (999) 999-99-99"
                  className="mt-2 bg-background border-border"
                />
              </div>

              <div>
                <Label htmlFor="address" className="text-lg font-medium text-card-foreground">Адрес доставки</Label>
                <Textarea
                  id="address"
                  placeholder="Укажите полный адрес для доставки"
                  className="mt-2 bg-background border-border"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="comments" className="text-lg font-medium text-card-foreground">Комментарии к заказу</Label>
                <Textarea
                  id="comments"
                  placeholder="Дополнительные пожелания или комментарии"
                  className="mt-2 bg-background border-border"
                  rows={3}
                />
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-primary/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-card-foreground">Что дальше?</h3>
                <ul className="space-y-2 text-sm text-card-foreground/70">
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
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3"
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
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md shadow-xl border border-border bg-card">
        <CardHeader className="text-center bg-primary text-primary-foreground rounded-t-lg">
          <CardTitle className="text-2xl">
            Авторизация
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <form className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-lg font-medium text-card-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                className="mt-2 bg-background border-border rounded-2xl h-12"
              />
            </div>

            <div>
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="text-lg font-medium text-card-foreground">Пароль</Label>
                <Button variant="link" className="text-primary p-0 h-auto text-sm">
                  Забыли пароль?
                </Button>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Пароль"
                className="mt-2 bg-background border-border rounded-2xl h-12"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-4 rounded-2xl"
            >
              Войти
            </Button>

            <div className="text-center text-sm text-card-foreground/70">
              Нет аккаунта?{' '}
              <Button variant="link" className="text-primary p-0 text-sm">
                Зарегистрироваться
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );

  const renderProfilePage = () => (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-xl border border-border bg-card">
            <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
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
                <h3 className="text-xl font-semibold text-card-foreground">Иван Петров</h3>
                <p className="text-card-foreground/70">ivan@email.com</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm text-card-foreground/70">Заказов</span>
                  <span className="font-semibold text-card-foreground">12</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm text-card-foreground/70">Статус</span>
                  <Badge variant="secondary">VIP клиент</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 shadow-xl border border-border bg-card">
            <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
              <CardTitle className="flex items-center">
                <Icon name="Package" size={20} className="mr-2" />
                Мои заказы
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {[1, 2, 3].map((order) => (
                  <div key={order} className="border border-border rounded-lg p-4 hover:bg-background/50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-card-foreground">Заказ #{1000 + order}</h4>
                      <Badge variant={order === 1 ? "default" : "secondary"}>
                        {order === 1 ? "В пути" : "Доставлен"}
                      </Badge>
                    </div>
                    <p className="text-card-foreground/70 mb-2">Nike Air Jordan 1 Retro High</p>
                    <div className="flex justify-between items-center text-sm text-card-foreground/70">
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
    <div className="min-h-screen bg-background">
      {renderNavigation()}
      {renderCurrentPage()}
    </div>
  );
};

export default Index;