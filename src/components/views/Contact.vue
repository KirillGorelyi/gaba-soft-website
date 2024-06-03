<template>
  <div class="contact">
    <div>
      <h1>Остались вопросы? Свяжитесь с нами</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Имя:</label>
          <input type="text" id="name" v-model="contact.name" required>
        </div>

        <div class="form-group">
          <label for="email">Ваша электронная почта:</label>
          <input type="email" id="email" v-model="contact.email" required>
        </div>

        <div class="form-group">
          <label for="message">Сообщение:</label>
          <textarea id="message" v-model="contact.message" required></textarea>
        </div>

        <button type="submit">Отправить сообщение</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      contact: {
        name: '',
        email: '',
        message: ''
      },
      faqs: [
        { question: 'Как я могу связаться с вами?', answer: 'Вы можете связаться с нами по электронной почте или телефону.', show: false },
        { question: 'Какие услуги вы предлагаете?', answer: 'Мы предлагаем широкий спектр услуг, включая маркетинг и аналитические услуги.', show: false },
        { question: 'Где вы находитесь?', answer: 'Наш офис находится в центре города.', show: false }
      ]
    }
  },
  methods: {
    submitForm() {
      console.log('Submitting contact form:', this.contact);
      alert('Thank you for your message!');
      this.resetForm();
    },
    resetForm() {
      this.contact.name = '';
      this.contact.email = '';
      this.contact.message = '';
    },
    toggleAnswer(index) {
      this.faqs[index].show = !this.faqs[index].show;
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 5% 20px 20px;
  display: flex;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.faq {
  width: 48%;
  margin-bottom: 40px;
  margin-right: 2%;
}

.faq-item {
  margin-bottom: 20px;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
}

.faq-question:hover {
  background-color: #f0f0f0;
}

.faq-toggle {
  font-size: 20px;
}

.faq-answer {
  padding: 10px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-radius: 0 0 4px 4px;
  background-color: #f9f9f9;
}
</style>
