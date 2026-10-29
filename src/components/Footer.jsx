
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-main">

          {/* Логотип и описание */}
          <div className="footer-brand">
            <div className="footer-logo">
              ⚡ Game<span>Forge</span>
            </div>

            <p>
              GameForge — игровые компьютеры,
              созданные для побед.
              Подбираем комплектующие, собираем
              и настраиваем ПК под твои задачи.
            </p>
          </div>

          {/* Навигация */}
          <div className="footer-links">
            <h3>Навигация</h3>

            <a href="#services">Наши услуги</a>
            <a href="#calculator">Конфигуратор ПК</a>
            <a href="#portfolio">Готовые сборки</a>
            <a href="#contact">Контакты</a>
          </div>

          {/* Информация */}
          <div className="footer-links">
            <h3>GameForge</h3>

            <a href="#calculator">Собрать компьютер</a>
            <a href="#portfolio">Выбрать готовый ПК</a>
            <a href="#contact">Получить консультацию</a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} GameForge.
            Все права защищены.
          </p>

          <p>
            Учебный проект | Разработчик: @telegram_nick
          </p>
        </div>

      </div>
    </footer>
  );
}
