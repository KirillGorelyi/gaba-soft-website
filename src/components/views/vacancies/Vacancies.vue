<template>
  <div class="vacancies">
    <h1>Открытые вакансии</h1>
    <Vacancy v-for="vacancy in vacancies" :key="vacancy.id" :vacancy="vacancy" />
  </div>
</template>

<script>
import Vacancy from './Vacancy.vue';

export default {
  name: 'Vacancies',
  components: {
    Vacancy
  },
  data() {
    return {
      vacancies: [
        {
          id: 1,
          title: 'Специалист по сбору данных о Wi-Fi сетях',
          description: 'Ходить по центру города выбранной локации в течение 4 часов в неделю (время можно разделить по собственному усмотрению)\n' +
              'Сканировать доступные Wi-Fi сети с помощью специализированного приложения на Android-телефоне\n' +
              'Собирать данные об аутентификации в сетях.\n' +
              '\n' +
              'Требования:\n' +
              'Наличие Android-телефона\n' +
              'Готовность и возможность передвигаться по центру города\n' +
              'Внимательность и ответственность.\n' +
              '\n' +
              'Условия:\n' +
              'При отклике на задание вам будет выдан документ, в котором будет описан процесс установки и настройки приложения.',
          locations: ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Челябинск', 'Волгоград', 'Ахтубинск',]
        },
        // Add more vacancies as needed
      ]
    };
  }
};
</script>

<style scoped>
.vacancies {
  padding: 5% 20px 20px;
}

.vacancies h1 {
  text-align: center;
  margin-bottom: 2rem;
}
</style>
