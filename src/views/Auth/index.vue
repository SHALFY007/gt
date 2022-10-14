<template>
  <body>
    <div class="login">
      <TheNavigation @click="activeNavigation = $event" :active="activeNavigation" />
      <img class="logotype" src="./assets/img/logo.png" alt="logo">

      <transition name="opacity">
        <component :is="getActiveForm"></component>
      </transition>

      <img class="man__motion" src="./assets/img/man.png" alt="">
    </div>
  </body>
</template>

<script>
import LoginForm from './Forms/LoginForm';
import RegisterForm from './Forms/RegisterForm';

import TheNavigation from './TheNavigation';

// @ is an alias to /src
export default {
  name: 'LoginView',
  components: {
    LoginForm,
    TheNavigation, RegisterForm
  },
  data() {
    return {
      activeNavigation: 0
    }
  },
  computed: {
    getActiveForm() {
      if (!this.activeNavigation) {
        return 'LoginForm'
      }

      return 'RegisterForm';
    }
  },
}
</script>

<style lang="scss" scoped>
@import './assets/fonts/akrobat.css';
@import './assets/scss/default.scss';



.logotype {
    width: 45vh;
    position: absolute;
    margin: auto;
    top: 0;
    animation: 3s zoomLogo infinite ease-in alternate-reverse;
    bottom: 0;
    left: 5vh;
}

body {
  background: url(./assets/img/bg.png) !important;
  background-position: center !important;
  background-size: cover !important;
  height: 100vh;
  width: 100vw;
  user-select: none;
  background-repeat: no-repeat !important;
}

.login {
  height: 100%;
}

.man__motion {
  position: absolute;
  right: 35px;
  bottom: 0;
  width: 85vh;
  z-index: 0;
  animation: 1s forwardPerson infinite ease-in-out;
  animation-direction: alternate-reverse;
  pointer-events: none;
}

@keyframes forwardPerson {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(30px);
  }
}

@keyframes zoomLogo {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.1);
  }
}
</style>