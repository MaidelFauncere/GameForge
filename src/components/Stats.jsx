// ПРЕИМУЩЕСТВА / ЦИФРЫ В ФАКТАХ (STATS)
// Цифры привлекают внимание и вызывают доверие.
export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container stats-grid">
        <div className="stat-card">
          <div className="stat-number">10+ лет</div>
          <div className="stat-label">Опыт в индустрии</div>
          <p className="stat-text">Реализовали более 150 нестандартных проектов.</p>
        </div>

        <div className="stat-card">
          <div className="stat-number">3 дня</div>
          <div className="stat-label">Скорость работы</div>
          <p className="stat-text">Быстрый запуск без лишней бюрократии и задержек.</p>
        </div>

        <div className="stat-card">
          <div className="stat-number">100%</div>
          <div className="stat-label">Контроль качества</div>
          <p className="stat-text">Проверенные инструменты и материалы премиум-уровня.</p>
        </div>

        <div className="stat-card">
          <div className="stat-number">Договор</div>
          <div className="stat-label">Юридическая гарантия</div>
          <p className="stat-text">Фиксируем сроки и финальную цену на бумаге.</p>
        </div>
      </div>
    </section>
  );
}