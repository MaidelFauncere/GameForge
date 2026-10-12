// ФОРМА ЗАЯВКИ / ЛИД-МАГНИТ
// Призыв к действию: предлагаем бесплатный первый шаг (замер, пробник, аудит).
export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Спасибо! Мы скоро свяжемся с вами.');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <div className="contact-info">
          <h2>Закажите бесплатную консультацию</h2>
          <p>
            Наш специалист свяжется с вами, оценит фронт задач и при необходимости
            подготовит пробные варианты прямо на месте.
          </p>
          <ul className="feature-list">
            <li>• Составление сметы за 1 час</li>
            <li>• Подбор оптимального решения под бюджет</li>
            <li>• Честная оценка сроков</li>
          </ul>
        </div>

        <div className="contact-form-card">
          <h3>Оставить заявку</h3>
          <p className="form-subtitle">Перезвоним в течение 15 минут</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Ваше Имя / Ник" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="+7 (___) ___-__-__" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Опишите в двух словах вашу задачу..." rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Получить консультацию
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}