// ШАПКА САЙТА (HEADER)
// Сюда выносим логотип, навигационные ссылки и быструю кнопку.
export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        {/* Замените на название вашей команды, проекта или вставьте тег <img> с логотипом */}
        <div className="logo">[ Мой Проект / Лого ]</div>

        {/* Ссылки с якорным переходом (#id) плавно ведут к нужным блокам ниже */}
        <nav className="nav-menu">
          <a href="#services">Услуги</a>
          <a href="#calculator">Калькулятор</a>
          <a href="#portfolio">Работы</a>
          <a href="#contact">Контакты</a>
        </nav>

        <a href="#calculator" className="btn btn-secondary btn-sm">
          Рассчитать
        </a>
      </div>
    </header>
  );
}