<template>
  <div class="vacancy">
    <div class="locations">
      <h3>Локации:</h3>
      <ul>
        <li v-for="location in vacancy.locations" :key="location">{{ location }}</li>
      </ul>
    </div>
    <h2>{{ vacancy.title }}</h2>
    <p>{{ vacancy.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Vacancy',
  props: {
    vacancy: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.vacancy {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  font-size: 24px;
}

.vacancy h2 {
  margin-bottom: 10px;
}

.vacancy p {
  margin-bottom: 15px;
}

.locations {
  margin-top: 10px;
  display: flex;
}

.locations h3 {
  margin-bottom: 5px;
}

.locations ul {
  list-style-type: none;
  display: flex;
  padding: 0;
}

.locations li {
  background: #007bff;
  color: white;
  margin-bottom: 5px;
  margin-left: 10px;
  padding: 5px;
  border-radius: 4px;
  width: fit-content;
}
</style>
