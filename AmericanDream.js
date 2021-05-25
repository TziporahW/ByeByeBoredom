// JJavaScript source code
Vue.component('attraction',
    {
        props: {
            name: String,
            peoplemax: Number,
            peoplemin: Number,
            description: String
        },
        data: function () {
            return {
                aName: this.name,
                aPMax: this.peoplemax,
                aPMin: this.peoplemin,
                adesc: this.description
            }
        },
        template: '<div><h2> {{ this.aName }}</h2><p>BBB\'s Recommended Amount of People: {{peoplemin}} - {{peoplemax}}</p><p> Description: {{this.adesc}}</p></div>'
    })

var att = new Vue({
    el: '#vueAttraction',
    data: {
        peopleAmount: 0
    },
    methods: {
        one() {
            this.peopleAmount = 1
        },
        two() {
            this.peopleAmount = 2
        },
        three() {
            this.peopleAmount = 3
        },
        four() {
            this.peopleAmount = 4
        },
        five() {
            this.peopleAmount = 5
        },
        six() {
            this.peopleAmount = 6
        }
    }
})