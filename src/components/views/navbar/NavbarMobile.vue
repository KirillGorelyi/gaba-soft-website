<template>
  <div :class="['navbar-mobile']">
    <button @click="toggleMenu" :class="['hamburger', navbarClass]">
      &#9776;
    </button>
    <transition name="fade">
      <div v-if="menuOpen" class="side-panel">
        <button @click="toggleMenu" class="close-btn">&times;</button>
        <router-link class="nav-item" :class="{ active: isActive('/') }" to="/" @click.native="setActive('/')">
          Главная
        </router-link>
        <router-link class="nav-item" :class="{ active: isActive('/about-us') }" to="/about-us" @click.native="setActive('/about-us')">
          О нас
        </router-link>
        <div @click="toggleSubMenu('services')" class="nav-item">
          Услуги
        </div>
        <transition name="fade">
          <div v-if="activeSubMenu === 'services'" class="sub-menu">
            <router-link class="nav-item" :class="{ active: isActive('/wifi-auth') }" to="/wifi-auth" @click.native="setActive('/wifi-auth')">
              WI-FI авторизация
            </router-link>
            <router-link class="nav-item" :class="{ active: isActive('/wifi-analysis') }" to="/wifi-analysis" @click.native="setActive('/wifi-analysis')">
              WI-FI аналитика
            </router-link>
            <router-link class="nav-item" :class="{ active: isActive('/wifi-marketing') }" to="/wifi-marketing" @click.native="setActive('/wifi-marketing')">
              WI-FI маркетинг
            </router-link>
          </div>
        </transition>
        <router-link class="nav-item" :class="{ active: isActive('/careers') }" to="/careers" @click.native="setActive('/careers')">
          Вакансии
        </router-link>
        <router-link class="nav-item" :class="{ active: isActive('/contact') }" to="/contact" @click.native="setActive('/contact')">
          Связаться с нами
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { useRoute } from 'vue-router';



export default {
  setup() {
    const menuOpen = ref(false);
    const activeSubMenu = ref(null);
    const activeLink = ref('/');
    const route = useRoute();

    const navbarClass = ref('default-navbar');
    let threshold = 0
    const updateNavbarClass = () => {
      if (route.path === '/') {
        navbarClass.value = 'home-navbar';
      } else {
        navbarClass.value = 'default-navbar';
      }
    };

    const handleScroll = () => {

      if (window.scrollY > threshold) {

        navbarClass.value = 'scrolled-navbar';
      } else {
        updateNavbarClass();
      }
    };

    onMounted(() => {
      $(document).ready( function (){
        {
          if ($('.hero')) {
            const heroOffsetTop = $('.hero').offset().top;
            const viewportHeight = $(window).height();
            threshold = heroOffsetTop + viewportHeight;
            console.log(threshold);
          }
        }
      })

      window.addEventListener('scroll', handleScroll);
      updateNavbarClass();
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });
    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    const toggleSubMenu = (menu) => {
      activeSubMenu.value = activeSubMenu.value === menu ? null : menu;
    };

    const setActive = (path) => {
      activeLink.value = path;
      menuOpen.value = false;
    };

    const isActive = (path) => {
      return activeLink.value === path;
    };

    watch(route, () => {
      activeLink.value = route.path;
    }, { immediate: true });

    return {
      menuOpen,
      activeSubMenu,
      toggleMenu,
      toggleSubMenu,
      setActive,
      isActive,
      navbarClass
    };
  }
};
</script>

<style scoped>
.navbar-mobile {
  position: relative;
}

.hamburger {
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;
  position: fixed;
  right: 0;
}

.side-panel {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 250px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
  z-index: 1000;
  transform: translateX(0);
  transition: transform 0.3s ease-in-out;
}

.close-btn {
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;
  float: right;
}

.nav-item {
  display: block;
  margin: 10px 0;
  font-size: 18px;
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.nav-item.active {
  color: blue;
}

.sub-menu {
  margin-left: 20px;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-enter, .slide-leave-to {
  transform: translateX(-100%);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.home-navbar {
  color: white;
}

.default-navbar {
  color: black;
}
.scrolled-navbar {
  color: black;
}

</style>
