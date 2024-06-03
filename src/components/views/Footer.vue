<template>
  <div class="footer-container">
    <div>©2024 ООО «ГАБА-СОФТ». Все права защищены.</div>
    <div class="legal-info-container">
      <p @click="toggleLegalInfo" class="legal-info-header">Реквизиты</p>
      <div v-if="showLegalInfo" class="legal-info">
        <p>ОГРН: 1247700286470</p>
        <p>ИНН: 9715479476</p>
        <p>КПП: 771501001</p>
        <p>Юридический адрес: г. Москва, вн.тер.г. Муниципальный округ Отрадное, ш. Алтуфьевское, д. 1.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      showLegalInfo: false,
    };
  },
  methods: {
    toggleLegalInfo() {
      this.showLegalInfo = !this.showLegalInfo;
    },
  },
};
</script>

<style scoped>
.footer-container {
  text-align: center;
  padding: 1vh;
}

.legal-info-header {
  cursor: pointer;
  font-weight: bold;
  margin-top: 0.5vh;
}

.legal-info {
  margin-top: 0.5vh;
}

.legal-info-container {
  margin-top: 1vh;
}
</style>
