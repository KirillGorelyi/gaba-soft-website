<script setup>
import Navbar from "@/components/views/navbar/Navbar.vue";
import NavbarMobile from "@/components/views/navbar/NavbarMobile.vue";
import Footer from "@/components/views/Footer.vue";
import { ref, onMounted } from 'vue';

const isMobile = ref(false);

const checkViewport = () => {
  isMobile.value = window.innerWidth <= 800;
};

onMounted(() => {
  checkViewport();
  window.addEventListener('resize', checkViewport);
});

</script>

<template>
  <div class="app-container">
    <header>
      <div v-if="!isMobile" class="desk-head">
        <Navbar />
      </div>
      <div v-else>
        <NavbarMobile />
      </div>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
/* Set up a flexbox container that takes up the full height of the viewport */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header, main, and footer should be direct children of the flex container */
header {
  flex-shrink: 0;
  line-height: 1.5;
  width: 100%;
  z-index: 1;
}

main {
  flex-grow: 1;
}

footer {
  flex-shrink: 0;
  text-align: center;
  padding: 10px 20px;
  background-color: #007bff;
  border-top: 1px solid #e1e1e1;
  color: white;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

@media (max-width: 800px) {
  .desk-head {
    display: none;
  }
}
</style>
