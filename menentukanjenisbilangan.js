const vm = new Vue({
        el:'.menentukanBilangan',
        data: {
    //string, number,boolean,array,object
            qty: 3,
            bilangan:1,
        },
        methods: {
            tambahBilangan: function(){
                return this.bilangan++
            },
            kurangiBilangan: function(){
                return this.bilangan--
            },
            resetBilangan: function(){
                return this.bilangan = 0
            }
        },
        computed: {
            infoBilangan : function(){
              return this.bilangan % 2 ===0 ? 'genap':'ganjil'
            }
        }

})