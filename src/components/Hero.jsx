
export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-layout">

        {/* Левая часть — текст */}
        <div className="hero-text">

          <span className="hero-badge">
            GAMEFORGE — ИГРОВЫЕ КОМПЬЮТЕРЫ
          </span>

          <h1 className="hero-title">
            Собери компьютер
            <span className="hero-highlight">
              {" "}своей мечты
            </span>
          </h1>

          <p className="hero-description">
            Мощные игровые ПК под любой бюджет.
            Подберём лучшие комплектующие,
            профессионально соберём и протестируем
            твой компьютер.
          </p>

          <div className="hero-actions">
            <a href="#portfolio" className="btn btn-primary">
              Посмотреть сборки
            </a>

            <a href="#calculator" className="btn btn-outline">
              Рассчитать стоимость
            </a>
          </div>

        </div>

        {/* Правая часть — изображение ПК */}
        <div className="hero-image">
          <img
            src="/images/gaming-pc.png"
            alt="Игровой компьютер GameForge"
          />
        </div>

      </div>
    </section>
  );
}
