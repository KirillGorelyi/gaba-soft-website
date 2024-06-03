<template>


    <div class="our-services">
      <h1>WI-FI авторизация </h1>
      <div class="container">
        <img :src="authPic" alt="Auth Picture" width="80%" height="60%"/>
      <h2>1. Процесс авторизации Wi-F</h2>
      <ul>
        <li>Пользователь подключается к сети и попадает на страницу авторизации.</li>
        <li>Вводит данные (номер телефона, код из SMS, логин и пароль от Госуслуг или email).</li>
        <li>Данные обрабатываются, и предоставляется доступ к интернету.</li>
        <li>При повторном подключении система распознает пользователя, повторный ввод данных не требуется.</li>
      </ul>
      <h2>2. Необходимость авторизации</h2>
      <ul>
        <li>Обязательна согласно Постановлению Правительства РФ от 31.12.2021 № 2607.</li>
        <li>Предотвращает незаконную деятельность.</li>
        <li>Польза для бизнеса: маркетинг, сбор статистики по подключениям.</li>
      </ul>
      <h2>3. Виды авторизации</h2>
      <ul>
        <li>Номер телефона.</li>
        <li>Логин и пароль от Госуслуг (ЕСИА).</li>
        <li>Электронная почта.</li>
        <li>Аккаунт в социальной сети ("Вконтакте", "Одноклассники" и т.д.)</li>
      </ul>
      <h2>4. Настройка авторизации Wi-Fi</h2>
      <ul>
        <li>Самостоятельная настройка: требует специальных навыков и оборудования.</li>
        <li>С помощью нашей компании: мы предоставим оборудование и ПО, настроим системы, обеспечим хранение данных.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import auth from '@/assets/promo/auth.jpg'
export default {
  name: 'WifiAuth',
  data (){
    return {
      authPic:auth
    }
  }
  // Add your methods, data, computed properties, etc. here as needed.
}
</script>

<style scoped>
.our-services {
  padding: 5vw 1vh 1vh;
  font-size: 2vh;
}

.our-services h1 {
  margin-bottom: 1rem;
}

.our-services p {
  margin-bottom: 1rem;
}

.our-services section {
  margin-top: 2rem;
}

.our-services section h2 {
  margin-bottom: .5rem;
}

</style>
