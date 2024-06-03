<template>
  <div class="our-services">
    <h1>Wi-Fi Интернет-маркетинг</h1>
    <div class="content-container">
      <div class="image-container">
        <div class="phone-frame">
          <transition name="fade">
            <img :src="currentImage" :key="currentImage" alt="Service Image" class="service-image" />
          </transition>
        </div>
      </div>
      <div class="list-container">
        <ul class="service-list">
          <li
              v-for="(service, index) in services"
              :key="index"
              @click="setActiveService(index)"
              :class="{ active: activeService === index }"
          >
            {{ service.title }}
            <ul v-if="activeService === index" class="description-list">
              <li v-for="(desc, descIndex) in service.descriptions" :key="descIndex">{{ desc }}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import phoneFrame from '@/assets/promo/marketing/iphone-x.svg';
import pic1 from '@/assets/promo/marketing/1.jpg';
import pic2 from '@/assets/promo/marketing/2.jpg';
import pic3 from '@/assets/promo/marketing/3.jpg';
import pic4 from '@/assets/promo/marketing/4.jpg';
import pic5 from '@/assets/promo/marketing/5.jpg';
import pic6 from '@/assets/promo/marketing/6.jpg';

export default {
  name: 'OurServices',
  data() {
    return {
      activeService: 0, // By default, the first service is selected
      services: [
        {
          title: 'Авторизация через Wi-Fi',
          image: pic1,
          descriptions: [
            'Страница авторизации с рекламой, доступ к интернету после её просмотра.',
            'Использование шаблонов для создания стильных страниц.',
          ],
        },
        {
          title: 'Реклама по Wi-Fi',
          image: pic4,
          descriptions: [
            'Показ рекламы и акций при подключении к Wi-Fi.',
            'Простая настройка по инструкции.',
          ],
        },
        {
          title: 'Action баннеры',
          image: pic2,
          descriptions: [
            'Баннеры для действий, таких как заказ обратного звонка.',
            'Уведомления в административной панели, отправка в CRM или Telegram.',
          ],
        },
        {
          title: 'Авторизация через соцсети',
          image: pic3,
          descriptions: [
            'Получение подписчиков через авторизацию.',
            'Настройка переходов на сайт или страницы в соцсетях.',
          ],
        },
        {
          title: 'Опросы и голосование',
          image: pic5,
          descriptions: [
            'Проведение опросов и голосований, сбор отзывов и оценок качества сервиса.',
          ],
        },
        {
          title: 'Навигация по Wi-Fi',
          image: pic6,
          descriptions: ['Добавление карт и маршрутов для удобства посетителей.'],
        },
      ],
    };
  },
  computed: {
    currentImage() {
      return this.services[this.activeService].image;
    },
  },
  methods: {
    setActiveService(index) {
      this.activeService = index;
    },
  },
};
</script>

<style scoped>
.our-services {
  padding: 5% 20px 20px;
  font-size: 24px;
}

.our-services h1 {
  margin-bottom: 1rem;
  text-align: center;
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.phone-frame {
  width: 300px; /* Adjust width as needed */
  height: 600px; /* Adjust height as needed */
  background-image: url('@/assets/promo/marketing/iphone-x.svg');
  background-size: cover;
  background-position: center;
  position: relative;
}

.service-image {
  position: absolute;
  top: 18%; /* Adjust based on the phone frame */
  left: 6.25%; /* Adjust based on the phone frame */
  width: 87.5%; /* Adjust width to fit within the phone frame */
  height: 80%; /* Adjust height to fit within the phone frame */
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  object-fit: cover; /* Ensure the image covers the area */
}

.list-container {
  flex: 1;
  margin-left: 15vw;
}

.service-list {
  list-style: square;
  padding: 0;
}

.service-list li {
  padding: 0.5vw;
  margin-bottom: 0.5vw;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.service-list li.active {
  font-weight: bold;
}

.service-list li:hover {
  font-weight: bold;
}

.description-list {
  list-style: none;
  padding: 0;
  margin-top: 0.5vh;
}

.description-list li {
  padding: 0.25vw 0;
  font-weight: normal;
}

.description-list li:hover {
  padding: 5px 0;
  font-weight: normal;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

li {
  padding-left: 2.5vw !important;
}
</style>
