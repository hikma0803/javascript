console.log('Vue instance is being created');
const app = new Vue({
    el: '#app',
    data: {
        message: "hello world !!",
        myclass: "green",
        seen:true,
        myarr:['mad1','mad2','dbms','pdsa'],
        movie:""
    },
    methods:{
        logmovie:function(){
            console.log(this.movie)
        }
    }
})