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
        template: '<div><br><h2> {{ this.aName }}</h2><p>BBB\'s Recommended Amount of People: {{peoplemin}} - {{peoplemax}}</p><p> Description: {{this.adesc}}</p><button @click="addtofaves">Give this attraction a hit!</button><br></div>',
        methods: {
            addtofaves(){
                this.$emit('addfaves')
            },
            rem() {
                this.$emit('remlike')
            }
        }
    })

var att = new Vue({
    el: '#vueAttraction',
    data: {
        peopleAmount: 0,
        hits1: 0,
        hits2: 0,
        hits3: 0,
        hits4: 0,
        oneclicked: false,
        twoclicked: false,
        threeclicked: false,
        fourclicked: false,
        fiveclicked: false,
        sixclicked: false,
        selected: ''
    },
    methods: {
        one() {
            this.peopleAmount = 1,
            this.oneclicked = true,
            this.twoclicked = false,
            this.threeclicked = false,
            this.fourclicked = false,
            this.fiveclicked = false,
            this.sixclicked = false
        },
        two() {
            this.peopleAmount = 2,
            this.oneclicked = false,
            this.twoclicked = true,
            this.threeclicked = false,
            this.fourclicked = false,
            this.fiveclicked = false,
            this.sixclicked = false
        },
        three() {
            this.peopleAmount = 3,
            this.oneclicked = false,
            this.twoclicked = false,
            this.threeclicked = true,
            this.fourclicked = false,
            this.fiveclicked = false,
            this.sixclicked = false
        },
        four() {
            this.peopleAmount = 4,
            this.oneclicked = false,
            this.twoclicked = false,
            this.threeclicked = false,
            this.fourclicked = true,
            this.fiveclicked = false,
            this.sixclicked = false
        },
        five() {
            this.peopleAmount = 5,
            this.oneclicked = false,
            this.twoclicked = false,
            this.threeclicked = false,
            this.fourclicked = false,
            this.fiveclicked = true,
            this.sixclicked = false
        },
        six() {
            this.peopleAmount = 6,
            this.oneclicked = false,
            this.twoclicked = false,
            this.threeclicked = false,
            this.fourclicked = false,
            this.fiveclicked = false,
            this.sixclicked = true
        },
        addhits1() {
            this.hits1 += 1
        },
        addhits2() {
            this.hits2 += 1
        },
        addhits3() {
            this.hits3 += 1
        },
        addhits4() {
            this.hits4 += 1
        }
    },
    computed: {
        wphits() {
            return this.hits1 + "!"
        },
        ishits() {
            return this.hits2 + "!"
        },
        mghits() {
            return this.hits3 + "!"
        },
        sshits() {
            return this.hits4 + "!"
        },
    }
})