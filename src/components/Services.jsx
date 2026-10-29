
export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">

        {/* Заголовок раздела */}
        <div className="section-header">
          <h2>Наши услуги</h2>
          <p>
            От подбора комплектующих до полной настройки
            игрового компьютера
          </p>
        </div>

        <div className="services-grid">

          {/* Карточка 1 — Сборка ПК */}
          <div className="service-card">
            <img
              src="/images/assembly.jpg"
              alt="Сборка игрового компьютера"
              className="service-image"
            />

            <div className="card-body">
              <span className="card-tag">Популярное</span>

              <h3>Сборка игрового ПК</h3>

              <p>
                Подберём комплектующие под твой бюджет,
                аккуратно соберём компьютер, установим
                систему и протестируем его производительность.
              </p>

              <div className="card-price">
                от 3 000 ₽
              </div>
            </div>
          </div>

          {/* Карточка 2 — Модернизация */}
          <div className="service-card">
            <img
              src="/images/upgrade.jpg"
              alt="Модернизация компьютера"
              className="service-image"
            />

            <div className="card-body">
              <span className="card-tag">Апгрейд</span>

              <h3>Модернизация ПК</h3>

              <p>
                Увеличим производительность твоего компьютера.
                Заменим видеокарту, процессор, оперативную
                память или установим быстрый SSD.
              </p>

              <div className="card-price">
                от 1 500 ₽
              </div>
            </div>
          </div>

          {/* Карточка 3 — Настройка */}
          <div className="service-card">
            <img
              src="/images/setup.jpg"
              alt="Настройка игрового компьютера"
              className="service-image"
            />

            <div className="card-body">
              <span className="card-tag">Оптимизация</span>

              <h3>Настройка и оптимизация</h3>

              <p>
                Установим необходимые драйверы,
                настроим операционную систему,
                оптимизируем производительность
                и подготовим ПК к играм.
              </p>

              <div className="card-price">
                от 1 000 ₽
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
