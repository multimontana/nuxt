<template>
  <div>
    <div class="d-flex align-items-center justify-content-center">
      <form @submit.prevent="submitHandler()" class="mt-5 w-50 d-flex align-items-center justify-content-center">
        <div class="w-50">
          <div v-if="errorMessage" class="err alert-danger">
            Не верный логин или пароль
          </div>
          <div>
            <div>
              <div>
                <input
                  v-model.trim="login"
                  placeholder="Логин"
                  class="w-100 mt-4"
                  :class="{invalid: (($v.login.$dirty) && !$v.login.required) || ($v.login.$dirty && !$v.login.minLength)}"
                >
              </div>
              <div
                class="err"
                v-if=" $v.login.$dirty && !$v.login.required"
              >
                Логин не может быть пустым
              </div>
            </div>
            <div>
              <div>
                <input
                  type="password"
                  v-model.trim="password"
                  placeholder="Пароль"
                  class="w-100 mt-4"
                  :class="{invalid: (($v.password.$dirty) && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
                >
              </div>
              <div
                class="err"
                v-if="$v.password.$dirty && !$v.password.required"
              >
                Пароль не может быть пустым
              </div>

            </div>
          </div>
          <button type="submit" variant="success" class=" w-100 mt-4 btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

  import {required} from "vuelidate/lib/validators";
  import {mapActions, mapGetters} from 'vuex'

  export default {
    data() {
      return {
        login: '',
        password: '',
      }
    },
    validations: {
      login: {required},
      password: {required}
    },
    created() {
      this.auth()
    },
    computed: {
      ...mapGetters(['errorMessage', 'getPage']),
    },

    methods: {
      ...mapActions(['logIn']),
      submitHandler() {
        if (this.$v.$invalid) {
          this.$v.$touch()
          return
        }
        let data = {
          login: this.login,
          password: this.password
        }
        this.logIn(data)
        if (this.getPage) {
          this.$router.push('/posts')
        }
      },
      auth() {
        let value = "; " + document.cookie
        let parts = value.split("; " + 'token' + "=")
        let token = parts.pop().split(";").shift()
        if (!!token) {
          this.$router.push('/posts')
        }
      }
    }
  }
</script>

<style>
  .invalid {
    border-color: #dc3545;
  }

  .err {
    color: #dc3545;
    padding: 15px;
  }

  form input {
    font-size: 20px;
    outline: none;
    padding: 5px 11px;
  }

</style>
