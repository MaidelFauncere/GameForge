
import { useState } from 'react';

export default function Contact() {

  // Данные формы
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    build: 'Индивидуальная сборка',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Обновление полей
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Проверка и демонстрационная отправка
  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneDigits = formData.phone.replace(/\D/g, '');

    if (formData.name.trim().length < 2) {
      alert('Введите имя (минимум 2 символа).');
      return;
    }

    if (phoneDigits.length !== 11) {
      alert('Введите корректный номер телефона из 11 цифр.');
      return;
    }

    // Сервер пока не подключён.
    // Показываем подтверждение только на странице.
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">

        {/* Левая часть */}
        <div className="contact-info">
          <h2>Готов к своему новому игровому ПК?</h2>

          <p>
            Не знаешь, какую сборку выбрать?
            Оставь заявку, и специалисты GameForge
            помогут подобрать компьютер под твои
            игры, задачи и бюджет.
          </p>

          <ul className="feature-list">
            <li>✔ Помощь в выборе комплектующих</li>
            <li>✔ Подбор ПК под твой бюджет</li>
            <li>✔ Консультация по готовым сборкам</li>
            <li>✔ Индивидуальная конфигурация</li>
          </ul>
        </div>

        {/* Правая часть */}
        <div className="contact-form-card">

          {submitted ? (
            <div className="contact-success">
              <h3>✓ Форма заполнена!</h3>

              <p>
                Спасибо, {formData.name}!
                Это демонстрационная заявка.
                Данные пока не отправляются
                и не сохраняются на сервере.
              </p>

              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    phone: '',
                    build: 'Индивидуальная сборка',
                    message: ''
                  });
                }}
              >
                Заполнить ещё раз
              </button>
            </div>
          ) : (
            <>
              <h3>Оставить заявку</h3>

              <p className="form-subtitle">
                Расскажи, какой компьютер тебе нужен
              </p>

              <form onSubmit={handleSubmit}>

                <div className="form-group">
                  <label htmlFor="contact-name">Твоё имя</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Как к тебе обращаться?"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-phone">Телефон</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="+7 999 123-45-67"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-build">
                    Интересующая сборка
                  </label>

                  <select
                    id="contact-build"
                    name="build"
                    value={formData.build}
                    onChange={handleChange}
                  >
                    <option>Индивидуальная сборка</option>
                    <option>GameForge START</option>
                    <option>GameForge PRO</option>
                    <option>GameForge ULTRA</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">
                    Комментарий
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Для каких игр нужен ПК? Какой бюджет?"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                >
                  Отправить заявку
                </button>

                <p className="contact-note">
                  Учебная демонстрация: данные не отправляются.
                </p>

              </form>
            </>
          )}
        </div>

      </div>
    </section>
  );
}
