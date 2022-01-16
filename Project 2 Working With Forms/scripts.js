members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Acoustic Guitar'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Electric Guitar'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            newmembers:{
               
                         }
        }
        
    },
    methods: {
        addMember:function () {
            if(this.newmembers.fname && this.newmembers.lname &&this.newmembers.instrument){
                this.members.push(this.newmembers)

            }else{
                 alert("les champs du formulaire sont vides")
            }
        }
    }

};

Vue.createApp(handlingForms).mount('#app');
