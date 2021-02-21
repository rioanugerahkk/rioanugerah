<template>
<div class="menentukanjenisbilangan">
    
            <h4>Menentukan jenis bilangan</h4>
            <h2>menentukan jenis bilangan</h2>
            <h3>{{'Angka: '+bilangan }}</h3>
            <h5>angka ini adalah bilangan {{ infoBilangan}} </h5>
        <p>
            <button v-on:click="tambahBilangan">Tambahkan angka</button>
            <button v-on:click="kurangiBilangan">Kurangi angka</button>
            <button v-on:click="resetBilangan">Reset</button>

        </p>

</div>
</template>

<script>
export default {
 data: function(){
        return {
                     //string, number,boolean,array,object
        bilangan:1
        }
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
 }   
</script>
