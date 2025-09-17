import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const colorPresets = [
  {
    name: 'Синий (по умолчанию)',
    primary: '217 91% 44%',
    description: 'Корпоративный синий цвет'
  },
  {
    name: 'Зелёный',
    primary: '142 76% 36%',
    description: 'Экологичный зелёный'
  },
  {
    name: 'Оранжевый',
    primary: '25 95% 53%',
    description: 'Энергичный оранжевый'
  },
  {
    name: 'Фиолетовый',
    primary: '262 83% 58%',
    description: 'Инновационный фиолетовый'
  },
  {
    name: 'Красный',
    primary: '0 84% 60%',
    description: 'Динамичный красный'
  },
  {
    name: 'Тёмно-синий',
    primary: '221 83% 53%',
    description: 'Профессиональный тёмно-синий'
  }
];

export default function ThemeCustomizer() {
  const [currentTheme, setCurrentTheme] = useState(colorPresets[0]);

  const applyTheme = (preset: typeof colorPresets[0]) => {
    const root = document.documentElement;
    root.style.setProperty('--primary', preset.primary);
    root.style.setProperty('--ring', preset.primary);
    setCurrentTheme(preset);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="fixed bottom-4 right-4 shadow-lg z-50 bg-white hover:bg-slate-50"
        >
          <Icon name="Palette" size={16} className="mr-2" />
          Цвета
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Настройка цветов</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="text-sm text-muted-foreground">
            Выберите цветовую схему для сайта:
          </div>
          
          <div className="grid gap-3">
            {colorPresets.map((preset, index) => (
              <Card 
                key={index} 
                className={`cursor-pointer transition-all hover:shadow-md ${
                  currentTheme.name === preset.name ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => applyTheme(preset)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: `hsl(${preset.primary})` }}
                      />
                      <div>
                        <div className="font-medium text-sm">{preset.name}</div>
                        <div className="text-xs text-muted-foreground">{preset.description}</div>
                      </div>
                    </div>
                    {currentTheme.name === preset.name && (
                      <Badge variant="secondary" className="text-xs">
                        Активен
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="pt-4 border-t">
            <div className="text-xs text-muted-foreground">
              Цветовая схема применяется ко всем элементам сайта: кнопкам, ссылкам, акцентам и иконкам.
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}