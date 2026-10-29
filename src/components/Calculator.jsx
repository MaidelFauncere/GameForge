
import { useState } from 'react';

// Комплектующие и примерные цены
const components = {
  cpu: [
    { name: 'AMD Ryzen 5 5600', price: 11000 },
    { name: 'AMD Ryzen 7 7700', price: 23000 },
    { name: 'Intel Core i5-14400F', price: 18000 }
  ],
  gpu: [
    { name: 'GeForce RTX 4060', price: 33000 },
    { name: 'GeForce RTX 4070 Super', price: 65000 },
    { name: 'GeForce RTX 4080 Super', price: 115000 }
  ],
  ram: [
    { name: '16 ГБ DDR4', price: 4500 },
    { name: '32 ГБ DDR4', price: 8500 },
    { name: '32 ГБ DDR5', price: 13000 }
  ],
  storage: [
    { name: 'SSD 500 ГБ', price: 3500 },
    { name: 'SSD 1 ТБ', price: 6000 },
    { name: 'SSD 2 ТБ', price: 11000 }
  ]
};

const BASE_PRICE = 15000;

export default function Calculator() {

  // Выбранные комплектующие
  const [selected, setSelected] = useState({
    cpu: 0,
    gpu: 0,
    ram: 0,
    storage: 0
  });

  // Изменение выбранного компонента
  const handleChange = (category, value) => {
    setSelected(prev => ({
      ...prev,
      [category]: Number(value)
    }));
  };

  // Автоматический расчёт стоимости
  const totalPrice =
    components.cpu[selected.cpu].price +
    components.gpu[selected.gpu].price +
    components.ram[selected.ram].price +
    components.storage[selected.storage].price +
    BASE_PRICE;

  // Форматирование цены в рублях
  const formatPrice = (price) => {
    return price.toLocaleString('ru-RU') + ' ₽';
  };

  // Кнопка расчёта
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Ваша сборка GameForge:\n\n` +
      `Процессор: ${components.cpu[selected.cpu].name}\n` +
      `Видеокарта: ${components.gpu[selected.gpu].name}\n` +
      `ОЗУ: ${components.ram[selected.ram].name}\n` +
      `Накопитель: ${components.storage[selected.storage].name}\n\n` +
      `Примерная стоимость: ${formatPrice(totalPrice)}`
    );
  };

  return (
    <section id="calculator" className="calculator-section">
      <div className="container calc-container">

        {/* Левая колонка */}
        <div className="calc-info">
          <h2>Собери свой идеальный ПК</h2>

          <p>
            Выбирай комплектующие под свои задачи
            и бюджет. Наш конфигуратор автоматически
            рассчитает примерную стоимость
            игрового компьютера.
          </p>

          <ul className="feature-list">
            <li>✔ Подбор комплектующих</li>
            <li>✔ Мгновенный расчёт стоимости</li>
            <li>✔ Разные варианты конфигураций</li>
            <li>✔ Профессиональная сборка</li>
          </ul>
        </div>

        {/* Правая колонка */}
        <div className="calc-card">
          <h3>Конфигуратор GameForge</h3>

          <form onSubmit={handleSubmit} className="calc-form">

            {/* Создание списков выбора */}
            {Object.entries(components).map(([key, options]) => {

              const labels = {
                cpu: 'Процессор',
                gpu: 'Видеокарта',
                ram: 'Оперативная память',
                storage: 'Накопитель'
              };

              return (
                <div className="form-group" key={key}>
                  <label htmlFor={`component-${key}`}>
                    {labels[key]}
                  </label>

                  <select
                    id={`component-${key}`}
                    value={selected[key]}
                    onChange={(e) =>
                      handleChange(key, e.target.value)
                    }
                  >
                    {options.map((option, index) => (
                      <option key={option.name} value={index}>
                        {option.name} — {formatPrice(option.price)}
                      </option>
                    ))}
                  </select>
                </div>
              );
            })}

            {/* Итоговая стоимость */}
            <div className="calc-total">
              <span>Примерная стоимость:</span>
              <strong>{formatPrice(totalPrice)}</strong>
              <small>
                Включены условные 15 000 ₽ на остальные
                компоненты и сборку. Цены демонстрационные.
                Совместимость деталей не проверяется.
              </small>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block"
            >
              Посмотреть мою сборку
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
