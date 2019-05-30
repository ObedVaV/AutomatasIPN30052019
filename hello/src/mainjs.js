var app = new Vue({
    el: '#app',
    data: {
      message: '',
      cifrado: 's',
      abecedario: 'abcdefghijklmnopqrstuvwxyz'
    },
    methods:{
        codificador(){
            console.log('on function codificador');
            let ultimo = this.message.length;
            let letraInput = this.message[ultimo-1];
            let auxiliar;
            for (let position = 0; position < this.abecedario.length; position++) {
                console.log(letraInput)

            }
        }
    }
  })
