<template>
  <NavHeader />
  <div>
    <form @submit.prevent ="validateForm">
      <h2>Create an account</h2>
      <div class="row">
        <!-- for connect's that to email-->
        <label for="email">Email</label>
        <!-- type = it's waiting @ in text; required = input need to be filled; v-model = can use this.email in script-->
        <input type="email" required v-model="email">
      </div>
      <div class="row">
        <label for="password">Password</label>
        <input type="password" required v-model="password">
      </div>

      <!-- v-if = it makes div (error message) only then visible, if it's true-->
      <div v-if="validatePassword" class="error"> {{validatePassword}}</div>

      <div class="submit">
        <button>Sign up </button>
      </div>
    </form>
  </div>
  <FooterSection />
</template>


<script>
import NavHeader from "@/components/NavHeader.vue";
import FooterSection from "@/components/FooterSection.vue";
export default {
  name: "FormView",
  components: { NavHeader, FooterSection },

  // binds variables for example v-model="email"
  data: function() {
    return {
      email: '',
      password: '',
      validatePassword:'',
    }},
  methods: {
    // Validate password
    validateForm() {
      const pwd = this.password;
      const errors = [];

      if (pwd.length < 8 || pwd.length >= 15)
        errors.push("password must be between 8-15 chars");

      // ^ means that it start with that
      if (!/^[A-Z]/.test(pwd)) {
        errors.push("Password must start with an uppercase letter");
      }

      // g means that it watch all password not only the first letters
      // || [] means that, if in password is none lowercase letters, then it returns [] so it doesn't run into error
      if ((pwd.match(/[a-z]/g) || []).length < 2) {
        errors.push("Password must include at least two lowercase letters");
      }

      // \d means some number 0-9
      if (!/\d/.test(pwd)) {
        errors.push("Password must include at least one numeric value");
      }

      if (!/_/.test(pwd)) {
        errors.push('Password must include "_" character');
      }

      this.validatePassword = errors.length > 0 ? "The password is not valid: " + errors.join(", ") : "";

      // Submit button moves you to main page
      if (errors.length === 0) this.$router.push('/main');
    }
  }
}
</script>


<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background: rgb(214, 197, 161);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.75);
}

label {
  color: rgb(8, 110, 110);
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input{
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid white;
  color: #2c3e4f;
  border-radius: 5px;
  width: 75%;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

button{
  background: rgb(64, 120, 197);
  border: 0;
  padding: 10px 20px;
  margin-top:  20px;
  color: white;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.75);
}
button:hover {
  background-color: rgb(26, 74, 181);
}
h2, .submit{
  text-align: center;
}
.error{
  color: red;
  font-size: 0.8em;
  margin-top:  10px;
  text-align: center;
}
</style>