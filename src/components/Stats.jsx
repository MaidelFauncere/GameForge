{/* Преимущества магазина GameForge */}
export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container stats-grid">

        {/* Качество комплектующих */}
        <div className="stat-card">
          <div className="stat-number">100%</div>
          <div className="stat-label">Качество комплектующих</div>
          <p className="stat-text">
            Используем проверенные комплектующие
            от известных производителей.
          </p>
        </div>

        {/* Профессиональная сборка */}
        <div className="stat-card">
          <div className="stat-number">Под ключ</div>
          <div className="stat-label">Профессиональная сборка</div>
          <p className="stat-text">
            Собираем, настраиваем и тестируем
            каждый компьютер перед выдачей.
          </p>
        </div>

        {/* Гарантия */}
        <div className="stat-card">
          <div className="stat-number">Гарантия</div>
          <div className="stat-label">Надёжная поддержка</div>
          <p className="stat-text">
            Помогаем с обслуживанием компьютеров
            и решением технических вопросов.
          </p>
        </div>

        {/* Индивидуальный подбор */}
        <div className="stat-card">
          <div className="stat-number">Любой бюджет</div>
          <div className="stat-label">Индивидуальный подбор</div>
          <p className="stat-text">
            Подберём оптимальную конфигурацию
            под твои игры, задачи и бюджет.
          </p>
        </div>

      </div>
    </section>
  );
}
