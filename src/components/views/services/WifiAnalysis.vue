```vue
<template>
  <div class="container">
    <div class="our-services">
      <h1>WI-FI аналитика</h1>
      <h2>Аналитика как конкурентное преимущество</h2>
      <p>Автоматический сбор и анализ данных о клиентах через Wi-Fi, предоставляющий ценные инсайты для вашего бизнеса.</p>
      <h2>Преимущества:</h2>
      <ul>
        <li><strong>Подробные отчеты:</strong> Траектории передвижения клиентов, "тепловые карты" зон посещаемости.</li>
        <li><strong>Аналитика посещаемости:</strong> Количество прохожих и посетителей, случайных и постоянных покупателей, время нахождения и маршрут перемещения, остановки и их длительность.</li>
        <li><strong>Бизнес-применение:</strong> Оптимизация размещения товаров, формирование арендной политики для торговых центров, оценка эффективности маркетинговых элементов.</li>
        <li><strong>Увеличение продаж:</strong> Повышение коэффициента конверсии и среднего чека за счет привлечения покупателей и улучшения качества продукции.</li>
        <li><strong>Персонализация взаимодействия:</strong> Сбор демографических данных для создания профиля аудитории, отправка индивидуализированных купонов и рекламных сообщений.</li>
      </ul>
      <h2>Максимально используйте потенциал вашего бизнеса с помощью Wi-Fi аналитики</h2>
      <p>Откройте новые возможности для роста и развития, получая глубокие инсайты и персонализированные данные о ваших клиентах.</p>
    </div>
    <img :src="analysisPic" alt="Analysis Picture"/>
  </div>
</template>

<script>
import analysis from '@/assets/promo/analysis.jpg'
export default {
  name: 'OurServices',
  data() {
    return {
      analysisPic: analysis
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Helvetica+Neue:wght@400;700&display=swap');

.our-services {
  padding: 5% 20px 20px;
  font-size: 24px;
  font-family: 'Helvetica Neue', sans-serif;
}

.our-services h1, .our-services h2 {
  margin-bottom: 1rem;
  font-weight: 700;
}

.our-services p {
  margin-bottom: 1rem;
}

.our-services ul {
  padding-left: 20px;
  margin-bottom: 1rem;
}

.our-services ul li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
}

.our-services ul li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 1vw;
  height: 1vh;
  background-color: #0056b3;
}

.our-services ul li strong {
  font-weight: bold;
}

img {
  max-width: 100vw;
  height: auto;
  display: block;
  margin-top: 1vh;
}
</style>
```