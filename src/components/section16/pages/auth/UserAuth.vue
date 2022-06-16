<template>
  <div>
    <base-dialog :show="!!error" title="an error occurred" @close="closeError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog fixed :show="isLoading" title="Authentication....">
      <base-spinner/>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <p v-if="!formIsValid">Please enter a valid email and password (must be at least 6 characters long).</p>
        <div class="form-control">
          <label for="email">E-Mail</label>
          <input type="email" id="email" v-model.trim="email">
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password">
        </div>
        <base-button>{{ submitButtonCaption }}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode">{{ switchModeButtonCaption }}</base-button>
      </form>
    </base-card>
  </div>

</template>

<script>
import BaseButton from "@/components/section16/components/UI/BaseButton";
import BaseCard from "@/components/section16/components/UI/BaseCard";
import BaseDialog from "@/components/section16/components/UI/BaseDialog";
import BaseSpinner from "@/components/section16/components/UI/BaseSpinner";

export default {
  name: "UserAuth",
  components: {BaseSpinner, BaseDialog, BaseCard, BaseButton},
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null
    }
  },
  methods: {
    async submitForm() {
      if (this.email === '' || !this.email.includes("@") || this.password.length < 6) {
        this.formIsValid = false
        return
      }
      this.isLoading = true
      try {
        if (this.mode === 'signup') {
          await this.$store.dispatch("auth", {
            mode: 'signup',
            email: this.email,
            password: this.password
          })
        } else if (this.mode === 'login') {
          await this.$store.dispatch('auth', {
            mode: 'login',
            email: this.email,
            password: this.password
          })
        }
        // const redirectUrl = this.$route.query.redirect
        // if (redirectUrl) {
        //   await this.$router.replace(`/${redirectUrl}`)
        // } else {
        //   await this.$router.replace('/coaches')
        // }
        await this.$router.replace(`/${(this.$route.query.redirect || 'coaches')}`)
      } catch (error) {
        console.log(error)
        this.error = error
        // console.log(error)
      }
      this.isLoading = false
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup'
      } else {
        this.mode = 'login'
      }
    },
    closeError() {
      this.error = null
    }
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === 'login') {
        return 'Login'
      } else {
        return 'Signup'
      }
    },
    switchModeButtonCaption() {
      if (this.mode === 'login') {
        return "Signup instead"
      } else {
        return "Login instead"
      }
    }

  }
}
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>