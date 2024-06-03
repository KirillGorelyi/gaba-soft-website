<template>
  <div :class="['nav-container', navbarClass]">
    <nav class="nav-block">
      <div class="nav-item-container" style="margin-right: 20%; font-size: 24px !important;">
        <div
            class="nav-item nav-item-text"
            :class="{ active: isActive('/') }"
        >
          ГАБА-СОФТ
        </div>
      </div>
      <div class="nav-item-container">
        <router-link
            class="nav-item nav-item-text"
            :class="{ active: isActive('/') }"
            to="/"
        >
          Главная
        </router-link>
      </div>
      <div class="nav-item-container">
        <router-link
            class="nav-item nav-item-text"
            :class="{ active: isActive('/about-us') }"
            to="/about-us"
        >
          О нас
        </router-link>
      </div>
      <div
          class="nav-item-container"
          @mouseover="showPopup('our-services')"
          @mouseleave="hidePopup"
      >
        <a class="nav-item nav-item-text">Услуги</a>
        <div class="popup" v-if="hoveredItem === 'our-services'">
          <router-link
              class="nav-item nav-item-text nav-item-hidden"
              :class="{ active: isActive('/our-services') }"
              to="/wifi-auth"
          >
            WI-FI авторизация
          </router-link>
          <router-link
              class="nav-item nav-item-text nav-item-hidden "
              :class="{ active: isActive('/our-services') }"
              to="/wifi-analysis"
          >
            WI-FI аналитика
          </router-link>
          <router-link
              class="nav-item nav-item-text nav-item-hidden"
              :class="{ active: isActive('/our-services') }"
              to="/wifi-marketing"
          >
            WI-FI маркетинг
          </router-link>
        </div>
      </div>
      <div class="nav-item-container">
        <router-link
            class="nav-item nav-item-text"
            :class="{ active: isActive('/our-projects') }"
            to="/careers"
        >
          Вакансии
        </router-link>
      </div>
      <div class="nav-item-container">
        <router-link
            class="nav-item nav-item-text"
            :class="{ active: isActive('/contact') }"
            to="/contact"
        >
          Связаться с нами
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const activeLink = ref('/');
    const navbarClass = ref('default-navbar');
    const hoveredItem = ref(null);
    const route = useRoute();

    const setActive = (path) => {
      activeLink.value = path;
    };

    const isActive = (path) => {
      return activeLink.value === path;
    };

    const handleScroll = () => {
      if (window.scrollY > 0) {
        navbarClass.value = 'scrolled-navbar';
      } else {
        updateNavbarClass();
      }
    };

    const updateNavbarClass = () => {
      if (route.path === '/') {
        navbarClass.value = 'home-navbar';
      } else {
        navbarClass.value = 'default-navbar';
      }
    };

    const showPopup = (item) => {
      hoveredItem.value = item;
    };

    const hidePopup = () => {
      hoveredItem.value = null;
    };

    watch(route, updateNavbarClass, { immediate: true });

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      updateNavbarClass();
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      activeLink,
      setActive,
      isActive,
      navbarClass,
      hoveredItem,
      showPopup,
      hidePopup,
    };
  }
};
</script>

<style scoped>
.nav-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  transition: background-color 0.3s, box-shadow 0.3s;
  font-size: 5vw !important;
}

.default-navbar {
  background-color: white;
  a {
    color: black;
  }
}

.home-navbar {
  background-color: transparent;
  background-size: cover;
  background-position: center;
  a {
    color: white;
  }
}

.scrolled-navbar {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  a {
    color: black;
  }
}

.nav-block {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 10px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.nav-item-container {
  position: relative;
  display: flex;
  align-items: center;
}

.nav-item {
  margin: 0 10px;
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 5px;
}

.nav-item:hover {
  color: #278f03;
}

.nav-item-text {
  font-weight: bold;
  font-size: 16px;
}

.nav-item-text.active {
  color: skyblue;
}

.popup {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 8px;
  z-index: 10;
  min-width: 200px;
  transition: opacity 0.3s;
  white-space: nowrap;
}

.popup p {
  margin: 0;
  padding: 1vw;
  cursor: pointer;
}

.popup p:hover {
  background-color: #f0f0f0;
}

.nav-item-hidden {
  color: black !important;
}
</style>
