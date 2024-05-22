<script setup>
import {RouterLink} from 'vue-router';
</script>

<template>
  <header class="header">
    <nav class="navbar navbar-expand-md bg-body-secondary">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/tasks">Россия/ОАЭ</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/tasks">Медина</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/tasks">Мекка</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/tasks">Машаир</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/tasks">Медицина</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/tasks">Регламент встречи в аэропортах</RouterLink>
            </li>
          </ul>
          <!--                    <Button @click="resetStorage">RESET STORAGE</Button>-->
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
.navbar-brand {
  font-weight: 600;
}

.navbar-nav {
  gap: $common-gap;
}

.nav-link {
  border-radius: 0.375rem; // bootstrap default

  &:hover {
    background-color: rgba(#000, 0.1);
  }
}
</style>
