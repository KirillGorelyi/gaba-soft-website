<template>
  <div class="project-container">
    <div class="project-content">
      <h1 class="title">Маркетинг и сетевое взаимодействие</h1>

      <img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="office-image" />

      <div class="diagonal-separator"></div>

      <p class="subtitle">
        Наш проект «Маркетинг и сетевое взаимодействие» использует сети Wi-Fi для предоставления бесплатного доступа в Интернет населению и продвижения местного бизнеса. Открытые точки доступа в общественных местах предлагают бесплатный доступ в Интернет, который продлевается каждый раз, когда пользователь просматривает рекламу. Наша рекламная платформа позволяет компаниям создавать привлекательные и интерактивные объявления, которые повышают вероятность конверсии и стимулируют продажи.
      </p>

      <div class="diagonal-separator"></div>

      <img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a" alt="Office 1" class="office-image" />

      <div class="diagonal-separator"></div>

      <p class="subtitle">
        Мы тесно сотрудничаем с нашими клиентами, чтобы разработать комплексную маркетинговую стратегию, которая соответствует их фирменному стилю, целям и целевой аудитории. Наша команда экспертов имеет большой опыт в WiFi-маркетинге и сетях, гарантируя, что наши клиенты получат наилучшее обслуживание.
      </p>

      <div class="diagonal-separator"></div>

      <img src="https://images.unsplash.com/photo-1587614382346-4ec8d1dbf3b1" alt="Office 2" class="office-image" />

      <div class="diagonal-separator"></div>

      <p class="subtitle">
        Мы верим, что WiFi-маркетинг — это будущее рекламы. Предоставляя целевую и релевантную рекламу желаемой аудитории, компании могут повысить узнаваемость бренда, лояльность и доход. Свяжитесь с нами сегодня, чтобы узнать больше о том, как наш проект «Маркетинг и сетевое взаимодействие» может помочь вашему бизнесу достичь маркетинговых целей, оказав положительное влияние на сообщество.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurProjects',
}
</script>

<style scoped>
.project-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 800px;
  padding: 5% 20px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
}

.project-content {
  text-align: center;
}

.title {
  font-size: 24px;
  color: #0056b3;
  margin-bottom: 20px;
}

.diagonal-separator {
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, transparent 0%, #0056b3 50%, transparent 100%);
  margin: 20px 0;
  transform: skewY(-5deg);
}

.office-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.subtitle {
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  text-align: justify;
}
</style>
