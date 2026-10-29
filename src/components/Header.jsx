{/* Шапка сайта GameForge */}
export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">

        {/* Логотип магазина */}
        <a href="#" className="logo gameforge-logo">
          <span className="logo-icon">⚡</span>
          Game<span className="logo-accent">Forge</span>
        </a>

        {/* Навигация по сайту */}
        <nav className="nav-menu">
          <a href="#services">Услуги</a>
          <a href="#calculator">Конфигуратор</a>
          <a href="#portfolio">Наши сборки</a>
          <a href="#contact">Контакты</a>
        </nav>

        {/* Кнопка быстрого перехода */}
        <a href="#calculator" className="btn btn-primary btn-sm">
          Собрать ПК
        </a>

      </div>
    </header>
  );
}
