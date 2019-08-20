<template>
  <form class="form" @submit.prevent="subscribe">
    <!-- <label for="email">E-mail</label> -->
    <div class="form_group">

      <input 
        type="text" 
        name="email"
        class="display-1"
        placeholder="example@domain.com" 

        :class="errors.has('email')? 'invalid' : ''" 
        v-validate="'required|email'" 
        v-model="email"
      />

      <div class="errors margin-top-10">
        <p v-if="errors.has('email')">{{errors.first('email')}}</p>
      </div>
    </div>
    <div class="form-action">
      <button type="submit" class="btn btn-success">Subscribe</button>
    </div>
  </form> 
</template>

<script>
import axios from 'axios'
// import BaseLoader from '@/components/BaseLoader'

export default {
    name: 'FormNewsletter',
    components: {
      // 'loader': BaseLoader
    },
    methods: {
    subscribe: async function () {
      let isValid = await this.$validator.validateAll().then(result => result)
      if (isValid) {
        this.save(this.email)
      }
    },
    save: function (_email) {
      this.loading = true
      axios.post('http://3.216.38.133:80/api/mailing' , {
        email: _email
      })
        .then(() => {
          this.resetForm()
          this.$toasted.success('Email registered successfully!', {duration: 5000})
          this.status = true
        })
        .catch((exception) => {
          console.error('[Newsletter - save] ' + exception.message)
          if ((exception.response) && (exception.response.data) && (exception.response.data.error)){
            this.$toasted.error(exception.response.data.error, {duration: 3000})
          }

          this.status = false
        })
        .finally(this.loading = false)
    },
    resetForm: function () {
      this.email = ''
      this.$validator.reset()
    }
  },
  data: function () {
    return {
      email: '',
      loading: false,
      status: false
    }
  }
}
</script>

<style scoped>
/*
 * form the newsletter
*/

form {
  margin: 0 auto 40px;
  padding: 20px;
  max-width: 60%;
}

form .group {
  position: relative;
}

form input {
  padding: 0px 16px;
  height: 3rem;
  width: 100%;
  border: 1px solid silver;
  -o-border-image: initial;
  border-image: initial;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;    
  box-sizing: border-box;
  -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
  -webkit-box-sizing: border-box;
}

form label{
  text-align: left;
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 10px;
  display: block;
}

.form-action {
  text-align: center;
  margin-top: 30px;
}


form input:hover {
  box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 6px;
}

form input:focus {
  outline: none;
  border-color: #7757f9;
}

form input.invalid {
  border-color: #dc3545;
  color: #dc3545;
}

.errors {
 color: #dc3545;
}

.btn {
  border: 0;
  padding: 15px 25px 15px 25px;
  border-radius: 10px;
  font-size: 1rem;
  position: relative;
  cursor: pointer;
}

.btn {
  color: white;
  background: var(--color-cyan);
}

.display-1{
  font-size: 1rem;
}

.margin-top-10 {
  margin-top: 10px;
}

</style>
