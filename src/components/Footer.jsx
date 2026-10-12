// ПОДВАЛ (FOOTER)
// Копирайт, авторские права и ссылка на авторов.
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>All Rights Reserved © {new Date().getFullYear()}</div>
        <div>Студенческий проект | Разработчик: @telegram_nick</div>
      </div>
    </footer>
  );
}