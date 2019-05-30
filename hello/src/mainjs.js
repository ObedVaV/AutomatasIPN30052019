var app = new Vue({
    el: '#app',
    data: {
      message: '',
      cifrado: '',
      abecedario: 'abcdefghijklmnopqrstuvwxyz'
    },
    methods:{
        codificador(){
            console.log('on function codificador');
            let ultimo = this.message.length();
            let letraInput = this.message[ultimo-1];
            let salida;
            for (let position = 0; position < this.abecedario.length; position++) {
                if(letraInput == this.abecedario[position])
                salida = this.abecedario[position+3];//el +3 es el número de posiciones que se va a recorrer el abecedario
            }
            this.cifrado[ultimo-1] = salida;
        }
    }
  })
