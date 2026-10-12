// ПЕРВЫЙ ЭКРАН (HERO)
// Самое важное место: за 3 секунды человек должен понять, о чем ваш сайт.
export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-content">

        {/* Главный оффер: Какую задачу вы решаете? */}
        <h1 className="hero-title">
          Главный заголовок: Опишите суть вашей идеи одной-двумя фразами
        </h1>

        {/* 2-3 предложения с деталями */}
        <p className="hero-description">
          Здесь напишите кратко: чем именно вы полезны клиенту, какие фишки
          или технологии используете и почему стоит доверять именно вам.
        </p>

        {/* Две основные кнопки действия */}
        <div className="hero-actions">
          <a href="#portfolio" className="btn btn-primary">
            Посмотреть работы
          </a>
          <a href="#calculator" className="btn btn-outline">
            Узнать стоимость
          </a>
        </div>
      </div>
    </section>
  );
}