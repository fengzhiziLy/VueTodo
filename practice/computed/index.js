import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <p>Name: {{firstName + ' ' + lastName}}</p>
      <p>Name: {{name}}</p>
      <p>Name: {{getName()}}</p>
      <p>Number: {{number}}</p>
      <p><input type="text" v-model="number" /></p>
      <p>FirstName: <input type="text" v-model="firstName" /></p>
      <p>LastName: <input type="text" v-model="lastName" /></p>
      <p>Name: <input type="text" v-model="name" /></p>
      <p>Obj.a: <input type="text" v-model="obj.a" /></p>
      <p>fullName: {{fullName}}</p>
    </div>
  `,
  data: {
    firstName: 'feng',
    lastName: 'zhizi',
    number: 0,
    fullName: '',
    obj: {
      a: '123'
    }
  },
  computed: {
    name: {
      get () {
        console.log('new name')
        return `${this.firstName} ${this.lastName}`
      },
      set (name) {
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  watch: {
    'obj.a': {
      handler () {
        console.log('obj.a changed')
      },
      immediate: true
      // deep: true
    }
  },
  methods: {
    getName () {
      console.log('getName invoked')
      return `${this.firstName} ${this.lastName}`
    }
  }
})
