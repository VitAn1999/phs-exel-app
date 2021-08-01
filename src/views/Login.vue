<template>
  <div class="Login d-flex justify-content-center">
    <form class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal">Пожалуйста, войдите в систему</h1>
      <label for="inputLogin" class="sr-only">Логин</label>
      <input
        id="inputLogin"
        class="form-control"
        placeholder="domain\login"
        required=""
        autofocus=""
      />
      <label for="inputPassword" class="sr-only">Пароль</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="******"
        required=""
      />
      <button
        class="btn btn-lg btn-success btn-block"
        type="submit"
        style="margin-top: 15px"
      >
        Войти
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'Login',
};
</script>
