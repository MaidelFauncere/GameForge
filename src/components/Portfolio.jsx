
import { useState } from 'react';

// Демонстрационные готовые сборки GameForge
const builds = [
  {
    id: 1,
    name: 'GameForge START',
    tag: 'Начальный уровень',
    image: '/images/pc-start.jpg',
    price: 67000,
    description: 'Для популярных онлайн-игр и повседневных задач.',
    specs: [
      'Процессор: AMD Ryzen 5 5600',
      'Видеокарта: GeForce RTX 4060',
      'Оперативная память: 16 ГБ DDR4',
      'Накопитель: SSD 500 ГБ'
    ]
  },
  {
    id: 2,
    name: 'GameForge PRO',
    tag: 'Оптимальный выбор',
    image: '/images/pc-pro.jpg',
    price: 117500,
    description: 'Для современных игр и высокой производительности.',
    specs: [
      'Процессор: AMD Ryzen 7 7700',
      'Видеокарта: GeForce RTX 4070 Super',
      'Оперативная память: 32 ГБ DDR5',
      'Накопитель: SSD 1 ТБ'
    ]
  },
  {
    id: 3,
    name: 'GameForge ULTRA',
    tag: 'Максимальная мощность',
    image: '/images/pc-ultra.jpg',
    price: 177000,
    description: 'Для требовательных игр и высоких настроек графики.',
    specs: [
      'Процессор: AMD Ryzen 7 7700',
      'Видеокарта: GeForce RTX 4080 Super',
      'Оперативная память: 32 ГБ DDR5',
      'Накопитель: SSD 2 ТБ'
    ]
  }
];

export default function Portfolio() {

  // Выбранная сборка для подробного просмотра
  const [selectedBuild, setSelectedBuild] = useState(null);

  const formatPrice = (price) =>
    price.toLocaleString('ru-RU') + ' ₽';

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">

        <div className="section-header">
          <h2>Готовые сборки GameForge</h2>
          <p>
            Выбери игровой компьютер под свои задачи
            и бюджет
          </p>
        </div>

        {/* Карточки готовых компьютеров */}
        <div className="portfolio-grid">
          {builds.map((build) => (
            <div className="portfolio-card" key={build.id}>

              <img
                src={build.image}
                alt={build.name}
                className="portfolio-image"
              />

              <div className="portfolio-card-body">
                <span className="card-tag">{build.tag}</span>

                <h3>{build.name}</h3>

                <p>{build.description}</p>

                <ul className="portfolio-specs">
                  {build.specs.map((spec) => (
                    <li key={spec}>✓ {spec}</li>
                  ))}
                </ul>

                <div className="portfolio-price">
                  {formatPrice(build.price)}
                </div>

                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={() => setSelectedBuild(build)}
                >
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Окно с характеристиками */}
        {selectedBuild && (
          <div
            className="portfolio-modal-overlay"
            onClick={() => setSelectedBuild(null)}
          >
            <div
              className="portfolio-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="build-modal-title"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="portfolio-modal-close"
                aria-label="Закрыть"
                onClick={() => setSelectedBuild(null)}
              >
                ×
              </button>

              <h2 id="build-modal-title">
                {selectedBuild.name}
              </h2>

              <img
                src={selectedBuild.image}
                alt={selectedBuild.name}
                className="portfolio-modal-image"
              />

              <p>{selectedBuild.description}</p>

              <h3>Характеристики</h3>

              <ul className="portfolio-specs">
                {selectedBuild.specs.map((spec) => (
                  <li key={spec}>✓ {spec}</li>
                ))}
              </ul>

              <div className="portfolio-price">
                {formatPrice(selectedBuild.price)}
              </div>

              <a
                href="#contact"
                className="btn btn-primary btn-block"
                onClick={() => setSelectedBuild(null)}
              >
                Оставить заявку
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
