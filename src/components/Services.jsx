// НАПРАВЛЕНИЯ / КАРТОЧКИ УСЛУГ (SERVICES)
// Показываем, с какими категориями задач вы работаете.
export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Направления работы</h2>
          <p>Выберите подходящий формат под вашу задачу</p>
        </div>

        <div className="services-grid">
          {/* Карточка 1 */}
          <div className="service-card">
            <div className="card-image-placeholder">[ Картинка 1 ]</div>
            <div className="card-body">
              <span className="card-tag">Базовый</span>
              <h3>Для частных клиентов</h3>
              <p>Быстрое решение повседневных задач с гарантией и вниманием к мелочам.</p>
              <div className="card-price">от 850 ₽ / ед.</div>
            </div>
          </div>

          {/* Карточка 2 */}
          <div className="service-card">
            <div className="card-image-placeholder">[ Картинка 2 ]</div>
            <div className="card-body">
              <span className="card-tag">Бизнес</span>
              <h3>Для коммерческих предложений</h3>
              <p>Большие объемы, официальные закрывающие документы и гибкий график.</p>
              <div className="card-price">от 600 ₽ / ед.</div>
            </div>
          </div>

          {/* Карточка 3 */}
          <div className="service-card">
            <div className="card-image-placeholder">[ Картинка 3 ]</div>
            <div className="card-body">
              <span className="card-tag">Эксклюзив</span>
              <h3>Сложные и неизведанные формы</h3>
              <p>Работа с нестандартными формами, специфическими задачами и целями.</p>
              <div className="card-price">от 1 200 ₽ / ед.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}