import { useState } from 'react';

// ИНТЕРАКТИВНЫЙ КАЛЬКУЛЯТОР
// Обратите внимание: вся логика формы хранится прямо здесь в useState
// и не засоряет остальные части проекта!
export default function Calculator() {
  const [formData, setFormData] = useState({
    category: 'Частный дом',
    volume: '100',
    address: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Расчет запрошен!\nОбъект: ${formData.category}\nОбъем: ${formData.volume}`);
  };

  return (
    <section id="calculator" className="calculator-section">
      <div className="container calc-container">
        {/* Левая колонка: объясняем выгоду */}
        <div className="calc-info">
          <h2>Рассчитайте стоимость за пару кликов</h2>
          <p>
            Заполните предварительные параметры, чтобы система помогла сориентироваться
            по бюджету и срокам выполнения.
          </p>
          <ul className="feature-list">
            <li>✔ <b>Быстро:</b> расчет без звонков и ожидания</li>
            <li>✔ <b>Удобно:</b> все параметры перед глазами</li>
            <li>✔ <b>Понятно:</b> никаких скрытых наценок</li>
          </ul>
        </div>

        {/* Правая колонка: сама интерактивная форма */}
        <div className="calc-card">
          <h3>Параметры расчета</h3>
          <form onSubmit={handleSubmit} className="calc-form">
            <div className="form-group">
              <label>Тип объекта</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                <option value="Частный дом">Частный дом / Квартира</option>
                <option value="Коммерция">Офис / Коммерция</option>
                <option value="Другое">Нестандартный объект</option>
              </select>
            </div>

            <div className="form-group">
              <label>Примерный объем (м² или количество)</label>
              <input
                type="number"
                value={formData.volume}
                onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Адрес или город</label>
              <input
                type="text"
                placeholder="ул. Примерная, 10"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Получить расчет
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}