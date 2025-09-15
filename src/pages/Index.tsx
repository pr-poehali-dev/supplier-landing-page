import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [counters, setCounters] = useState({
    years: 0,
    tonnage: 0,
    clients: 0,
    products: 0
  });

  useEffect(() => {
    const animateCounter = (target: number, current: number, setter: (val: number) => void) => {
      if (current < target) {
        const increment = Math.ceil(target / 50);
        setTimeout(() => {
          const nextValue = Math.min(current + increment, target);
          setter(nextValue);
          animateCounter(target, nextValue, setter);
        }, 50);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(10, 0, (val) => setCounters(prev => ({ ...prev, years: val })));
          animateCounter(15, 0, (val) => setCounters(prev => ({ ...prev, tonnage: val })));
          animateCounter(1000, 0, (val) => setCounters(prev => ({ ...prev, clients: val })));
          animateCounter(5000, 0, (val) => setCounters(prev => ({ ...prev, products: val })));
        }
      });
    });

    const statsSection = document.getElementById('stats-section');
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  const categories = [
    { name: 'Электрооборудование', icon: 'Zap', count: '850+ товаров' },
    { name: 'Промышленная автоматика', icon: 'Settings', count: '620+ товаров' },
    { name: 'Кабельно-проводниковая продукция', icon: 'Cable', count: '1200+ товаров' },
    { name: 'Измерительные приборы', icon: 'Gauge', count: '340+ товаров' },
    { name: 'Светотехника', icon: 'Lightbulb', count: '780+ товаров' },
    { name: 'Системы безопасности', icon: 'Shield', count: '450+ товаров' }
  ];

  const activePurchases = [
    {
      title: 'Частотные преобразователи ABB',
      quantity: '25 шт.',
      budget: 'до 850 000 ₽',
      deadline: 'до 20 сентября',
      specs: 'Мощность 3-7.5 кВт, IP20'
    },
    {
      title: 'Кабель ВВГнг-LS 3х2.5',
      quantity: '2000 м',
      budget: 'до 180 000 ₽',
      deadline: 'до 25 сентября',
      specs: 'ГОСТ 31996-2012, с медной жилой'
    },
    {
      title: 'Контакторы Schneider Electric',
      quantity: '50 шт.',
      budget: 'до 320 000 ₽',
      deadline: 'до 30 сентября',
      specs: 'Серия TeSys D, 25-40А'
    }
  ];

  const testimonials = [
    {
      company: 'ОАО "Нефтехимпром"',
      author: 'Сергей Петрович Иванов',
      position: 'Главный инженер',
      text: 'Сотрудничаем с Вектором уже 5 лет. Всегда качественное оборудование и своевременные поставки.',
      rating: 5
    },
    {
      company: 'ООО "СтройИндустрия"',
      author: 'Марина Владимировна Козлова',
      position: 'Начальник отдела снабжения',
      text: 'Отличный поставщик! Конкурентные цены и профессиональная техническая поддержка.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Floating Return Button */}
      <div className="fixed top-4 right-4 z-50">
        <Button variant="outline" className="bg-white shadow-lg border-primary text-primary hover:bg-primary hover:text-white">
          <Icon name="ArrowLeft" size={16} className="mr-2" />
          В Росдекс
        </Button>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-slate-50 to-blue-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <img 
                src="/img/00a76913-d44f-4dbf-a746-5d2c4e078cc7.jpg" 
                alt="Логотип ООО Вектор" 
                className="w-16 h-16 rounded-lg shadow-md"
              />
              <div>
                <h1 className="text-2xl font-montserrat font-bold text-foreground">ООО «Вектор»</h1>
                <p className="text-muted-foreground">Надежный поставщик с 2010 года</p>
              </div>
            </div>
            <Badge className="bg-accent text-accent-foreground">
              <Icon name="Shield" size={16} className="mr-2" />
              Проверено по ЭДО
            </Badge>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">
                  Промышленное электрооборудование от проверенного поставщика
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Комплексные поставки электротехнической продукции для промышленных предприятий. 
                  Работаем с ведущими производителями и гарантируем качество каждой позиции.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <span className="text-sm">Отгружаем от 1 дня</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="User" size={20} className="text-primary" />
                  <span className="text-sm">Персональный менеджер</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={20} className="text-primary" />
                  <span className="text-sm">Гарантия 36 месяцев</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Truck" size={20} className="text-primary" />
                  <span className="text-sm">Доставка по России</span>
                </div>
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>

            <div className="hidden lg:block">
              <img 
                src="/placeholder.svg" 
                alt="Промышленное оборудование" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </header>

      {/* About Company */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold mb-4">О компании</h2>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Badge className="bg-accent text-accent-foreground">
                <Icon name="ShieldCheck" size={16} className="mr-2" />
                Компания проверена по ЭДО
              </Badge>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Руководитель компании" 
                className="w-full h-80 object-cover rounded-lg shadow-lg mb-6"
              />
              <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-4">
                "Мы строим долгосрочные партнерские отношения, предлагая не просто товары, 
                а комплексные решения для вашего бизнеса."
                <footer className="mt-2 font-semibold text-foreground">— Александр Петров, Генеральный директор</footer>
              </blockquote>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                ООО «Вектор» — динамично развивающаяся компания, специализирующаяся на поставках 
                промышленного электрооборудования. За годы работы мы зарекомендовали себя как 
                надежный партнер для предприятий различных отраслей.
              </p>
              
              <div className="grid grid-cols-2 gap-6" id="stats-section">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-3xl font-montserrat font-bold text-primary animate-counter">
                    {counters.years}+
                  </div>
                  <div className="text-sm text-muted-foreground">лет на рынке</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-3xl font-montserrat font-bold text-primary animate-counter">
                    {counters.tonnage}
                  </div>
                  <div className="text-sm text-muted-foreground">тонн продукции в день</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-3xl font-montserrat font-bold text-primary animate-counter">
                    {counters.clients}+
                  </div>
                  <div className="text-sm text-muted-foreground">довольных клиентов</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-3xl font-montserrat font-bold text-primary animate-counter">
                    {counters.products}+
                  </div>
                  <div className="text-sm text-muted-foreground">наименований в каталоге</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold mb-4">Наша продукция</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент электротехнического оборудования от ведущих мировых производителей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {categories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon name={category.icon as any} size={24} />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-foreground">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.count}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                    Перейти в каталог
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Best Sellers */}
          <div>
            <h3 className="text-2xl font-montserrat font-bold text-center mb-8">Хиты продаж</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: 'Частотный преобразователь ABB ACS580',
                  model: 'ACS580-01-023A-4',
                  price: '45 890 ₽',
                  oldPrice: '52 000 ₽',
                  image: '/placeholder.svg',
                  specs: '11 кВт, 380В, IP21'
                },
                {
                  name: 'Контактор Schneider Electric TeSys D',
                  model: 'LC1D25M7',
                  price: '3 240 ₽',
                  oldPrice: '3 850 ₽',
                  image: '/placeholder.svg',
                  specs: '25А, 220В, 3P+1NO'
                },
                {
                  name: 'Автоматический выключатель ABB S203',
                  model: 'S203-C16',
                  price: '1 520 ₽',
                  oldPrice: null,
                  image: '/placeholder.svg',
                  specs: '16А, 3P, 6kA'
                },
                {
                  name: 'Кабель ВВГнг-LS 3х2.5',
                  model: 'ГОСТ 31996-2012',
                  price: '92 ₽/м',
                  oldPrice: '108 ₽/м',
                  image: '/placeholder.svg',
                  specs: 'Медь, негорючий'
                },
                {
                  name: 'Реле времени Finder 80.11',
                  model: '80.11.0.240.0000',
                  price: '2 680 ₽',
                  oldPrice: null,
                  image: '/placeholder.svg',
                  specs: '240В, 0.05с-100ч'
                },
                {
                  name: 'Светодиодный светильник Gauss',
                  model: 'Elementary T8 18W',
                  price: '890 ₽',
                  oldPrice: '1 200 ₽',
                  image: '/placeholder.svg',
                  specs: '1200мм, 4000K'
                }
              ].map((product, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="relative mb-4">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-40 object-cover rounded-lg bg-slate-100"
                      />
                      {product.oldPrice && (
                        <Badge className="absolute top-2 right-2 bg-destructive text-white">
                          Скидка
                        </Badge>
                      )}
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <h4 className="font-montserrat font-semibold text-sm leading-tight">{product.name}</h4>
                      <p className="text-xs text-muted-foreground">{product.model}</p>
                      <p className="text-xs text-muted-foreground">{product.specs}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-lg text-accent">{product.price}</div>
                          {product.oldPrice && (
                            <div className="text-xs text-muted-foreground line-through">{product.oldPrice}</div>
                          )}
                        </div>
                      </div>
                      
                      <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                        <Icon name="ShoppingCart" size={14} className="mr-2" />
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* We Purchase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold mb-4">Мы закупаем</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Активно ищем поставщиков качественного электрооборудования и комплектующих
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-montserrat font-semibold mb-6">Активные закупки</h3>
            <div className="grid gap-6">
              {activePurchases.map((purchase, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="grid lg:grid-cols-4 gap-4">
                      <div>
                        <h4 className="font-montserrat font-semibold text-foreground mb-2">{purchase.title}</h4>
                        <p className="text-sm text-muted-foreground">{purchase.specs}</p>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-foreground">{purchase.quantity}</div>
                        <div className="text-sm text-muted-foreground">Количество</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-accent">{purchase.budget}</div>
                        <div className="text-sm text-muted-foreground">Бюджет</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-destructive">{purchase.deadline}</div>
                        <div className="text-sm text-muted-foreground">Срок поставки</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-montserrat font-semibold mb-4">Контакты отдела закупок</h3>
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={20} className="text-primary" />
                <span>zakupki@vector-supply.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={20} className="text-primary" />
                <span>+7 (495) 123-45-67</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Conditions */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold mb-4">Условия работы</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Users" size={32} className="mx-auto mb-4 text-primary" />
                <h3 className="font-montserrat font-semibold mb-2">Формы работы</h3>
                <p className="text-sm text-muted-foreground">Юр. лица, ИП, самозанятые, физ. лица</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Calculator" size={32} className="mx-auto mb-4 text-primary" />
                <h3 className="font-montserrat font-semibold mb-2">Налогообложение</h3>
                <p className="text-sm text-muted-foreground">Работа с НДС и без НДС</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="FileText" size={32} className="mx-auto mb-4 text-primary" />
                <h3 className="font-montserrat font-semibold mb-2">Документация</h3>
                <p className="text-sm text-muted-foreground">Сертификаты соответствия, паспорта качества</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Download" size={32} className="mx-auto mb-4 text-primary" />
                <h3 className="font-montserrat font-semibold mb-2">Тех. документация</h3>
                <p className="text-sm text-muted-foreground">Инструкции, чертежи, схемы подключения</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold mb-4">Отзывы о нас</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-montserrat font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm font-medium text-primary">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold mb-4">Наша команда</h2>
            <p className="text-lg text-muted-foreground">
              Профессионалы с многолетним опытом работы в сфере промышленного оборудования
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {['Александр Петров', 'Елена Сидорова', 'Михаил Козлов'].map((name, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <img 
                    src="/placeholder.svg" 
                    alt={name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-montserrat font-semibold text-foreground mb-1">{name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {index === 0 ? 'Генеральный директор' : index === 1 ? 'Менеджер по продажам' : 'Начальник склада'}
                  </p>
                  <Button variant="outline" size="sm">
                    <Icon name="Mail" size={16} className="mr-2" />
                    Связаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold mb-4">Контакты</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="font-montserrat font-semibold mb-4">Связь с нами</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <div>
                      <div className="font-medium">+7 (495) 123-45-67</div>
                      <div className="text-sm text-muted-foreground">Общий номер</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <div>
                      <div className="font-medium">info@vector-supply.ru</div>
                      <div className="text-sm text-muted-foreground">Общий ящик</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    <div>
                      <div className="font-medium">109004, г. Москва, ул. Земляной вал, д. 27</div>
                      <div className="text-sm text-muted-foreground">Юридический адрес</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={20} className="text-primary" />
                    <div>
                      <div className="font-medium">Пн-Пт: 9:00-18:00</div>
                      <div className="text-sm text-muted-foreground">График работы</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-montserrat font-semibold mb-4">Реквизиты</h3>
                <div className="bg-slate-50 p-4 rounded-lg space-y-2 text-sm">
                  <div><span className="font-medium">ИНН:</span> 7704123456</div>
                  <div><span className="font-medium">КПП:</span> 770401001</div>
                  <div><span className="font-medium">ОГРН:</span> 1027704123456</div>
                  <div><span className="font-medium">Полное наименование:</span> Общество с ограниченной ответственностью "Вектор"</div>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Написать нам
              </Button>
            </div>

            <div className="bg-slate-100 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Icon name="Map" size={48} className="mx-auto mb-2" />
                <p>Интерактивная карта</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Text Block */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-montserrat font-bold mb-6">
              ООО «Вектор» — поставщик электрооборудования оптом в Москве
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-4">
                Компания ООО «Вектор» является ведущим поставщиком промышленного электрооборудования в Москве и Московской области. 
                Мы специализируемся на оптовых поставках электротехнической продукции для предприятий различных отраслей промышленности.
              </p>
              <p className="text-muted-foreground mb-4">
                В нашем каталоге представлено более 5000 наименований электрооборудования от ведущих мировых производителей. 
                Вы можете купить оптом электрооборудование, кабельно-проводниковую продукцию, системы автоматизации, 
                измерительные приборы и светотехническое оборудование по конкурентным ценам.
              </p>
              <p className="text-muted-foreground">
                Наши преимущества: быстрая отгрузка товара, профессиональная техническая поддержка, 
                гибкая система скидок для постоянных клиентов, доставка по всей России. 
                Поставщик электрооборудования ООО «Вектор» — ваш надежный партнер в области промышленного снабжения.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/img/00a76913-d44f-4dbf-a746-5d2c4e078cc7.jpg" 
                  alt="Логотип ООО Вектор" 
                  className="w-10 h-10 rounded"
                />
                <span className="font-montserrat font-bold text-xl">ООО «Вектор»</span>
              </div>
              <p className="text-gray-400">
                Надежный поставщик промышленного электрооборудования с 2010 года
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <div>+7 (495) 123-45-67</div>
                <div>info@vector-supply.ru</div>
                <div>г. Москва, ул. Земляной вал, д. 27</div>
              </div>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold mb-4">Время работы</h3>
              <div className="space-y-2 text-gray-400">
                <div>Понедельник — Пятница: 9:00-18:00</div>
                <div>Суббота — Воскресенье: выходной</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ООО «Вектор». Все права защищены.</p>
            <p className="mt-2 text-sm">
              Страница создана в сервисе 
              <Button variant="link" className="text-blue-400 hover:text-blue-300 p-0 mx-1 h-auto">
                Росдекс-агрегатор поставщиков
              </Button>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;