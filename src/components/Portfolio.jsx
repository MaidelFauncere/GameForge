// БЛОК РЕЗУЛЬТАТОВ (ПРИМЕРЫ / ДО И ПОСЛЕ)
// Наглядное доказательство ценности вашей работы.
export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <h2>Результат нашей работы</h2>
          <p>Посмотрите, как преображается объект при правильном подходе</p>
        </div>

        {/* Макет сравнения "Было / Стало" */}
        <div className="comparison-mockup">
          <div className="comparison-half before">
            <span className="comparison-badge">ДО</span>
            <p>[ Картинка "Как было до нас" ]</p>
          </div>
          <div className="comparison-divider">⟷</div>
          <div className="comparison-half after">
            <span className="comparison-badge">ПОСЛЕ</span>
            <p>[ Картинка "Идеальный результат" ]</p>
          </div>
        </div>

        <div className="center-action">
          <button className="btn btn-secondary">
            Посмотреть все примеры →
          </button>
        </div>
      </div>
    </section>
  );
}