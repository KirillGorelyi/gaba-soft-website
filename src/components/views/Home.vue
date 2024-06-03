<template>
  <div class="hero">
    <div class="hero-overlay">
      <h1>Современные Wi-Fi решения для вашего бизнеса</h1>
      <h1>Авторизация. Аналитика. Маркетинг.</h1>
      <p>Улучшите клиентский опыт и увеличьте прибыль с помощью наших передовых технологий.</p>
    </div>
  </div>
  <div class="why-we">
    <h3>Наша миссия – помочь вам создать безопасную и удобную среду для ваших клиентов, предоставляя современные инструменты для анализа и маркетинга.</h3>
    <div class="why-we-content">
      <div
          v-for="(item, index) in why_we"
          :key="index"
          class="why-we-item "
      >
        <template v-if="index % 2 === 0">
          <img :src="item.image" alt="why-we-image" class="why-we-image" />
          <div class="why-we-text">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
          </div>
        </template>
        <template v-else>
          <div class="why-we-text">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
          </div>
          <img :src="item.image" alt="why-we-image" class="why-we-image-left" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import pic1 from "@/assets/home/1.png";
import pic2 from "@/assets/home/2.png";
import pic3 from "@/assets/home/3.png";
import pic4 from "@/assets/home/4.png";

export default {
  name: "Home",
  data() {
    return {
      why_we: [
        {
          title: "Безопасность и соответствие законодательству",
          description:
              "Мы обеспечиваем полное соответствие нормативным требованиям, гарантируя безопасность ваших данных и данных ваших клиентов.",
          image: pic3,
          visible: true,
          class: "slide-in-right"
        },
        {
          title: "Инновационные технологии",
          description:
              "Наши системы авторизации и аналитики основаны на передовых технологиях, позволяя собирать и анализировать данные для принятия обоснованных решений.",
          image: pic1,
          visible: true,
          class: "slide-in-left"
        },
        {
          title: "Маркетинговые возможности",
          description:
              "Мы предлагаем инструменты для создания эффективных маркетинговых кампаний, повышая лояльность клиентов и привлекая новых посетителей.",
          image: pic2,
          visible: true,
          class: "slide-in-right"
        },
        {
          title: "Простота и удобство",
          description:
              "Наши решения легко интегрируются и настраиваются, обеспечивая минимальные затраты времени и ресурсов на установку и обслуживание.",
          image: pic4,
          visible: true,
          class: "slide-in-left"
        },
      ],
      inView: [],
    };
  },
};
</script>

<style scoped>
.hero {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: white;
  background-image: url("@/assets/homeMainBackground.jpg");
}

.hero-overlay {
  padding: 5vw 5vh 5vh;
  width: 100vw;
}

.hero-overlay h1 {
  font-size: 6vh;
  margin-bottom: 5vh;
  font-weight: bolder;
}

.hero-overlay p {
  font-size: 4vh;
}

.why-we {
  width: 100vw;
  padding: 2vw 2vh;
  margin-bottom: 5vh;
  font-size: 3vh;
  text-align: center;
}

.why-we-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  margin-top: 5vh;
}

.why-we-item {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5vh;
}

.why-we-image {
  max-width: 25vw;
  margin-right: 20vw;
}

.why-we-text {
  max-width: 500px;
}

.why-we-image-left {
  max-width: 25vw;
  margin-left: 20vw;
}
</style>
