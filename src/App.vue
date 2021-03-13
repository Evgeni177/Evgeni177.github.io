<template>
    <div id="app">
        <div v-if="taskOne" class="main-container">
            <div class="sidebar"> Sidebar </div>
            <div class="main">
                <div class="heading">
                    <personal-details v-if="state == 1" :name="getName"/>
                    <legal-information v-if="state == 2" :info="getName"/>
                    <div>
                        <button @click="gotoTaskTwo()"> Task 2</button>
                        <button @click="buttonClicked()"> Account Details</button>
                    </div>
                </div>
                <div class="center">
                    <div class="left"> 
                        <todo v-if="state == 1" :items="todoItems"/>
                        <transaction-history v-if="state == 2"/>
                    </div>
                    <div class="right"> 
                        <suggestions v-if="state == 1"/>
                        <div class="tabs-container" v-if="state == 2">
                            <tab v-for="button in buttons" :key="button" :text="button"/>
                        </div>
                    </div>
                </div>
                <div class="footer"> 
                    <contact-details v-if="state == 1" :contact-information="getContactInformation"/>
                    <support v-if="state == 2"/>
                </div>
            </div>
        </div>
        <div v-if="taskTwo" class="secondTask">
            <div class="form">
                <div class="inner">
                    <label for="">Already sent</label>
                    <input type="radio" value="already_sent" v-model="picked">
                    <label for="">Not sent yet</label>
                    <input type="radio" value="not_sent_yet" v-model="picked">
                    <div v-if="picked == 'already_sent'" class="already-sent-container"> 
                        <div class="file-container">
                            <label for=""> Upload File </label>
                            <p v-if="filesError" class="error"> {{ filesError }} </p>
                            <vue2-dropzone :style="setFileErrorStyle" ref="myVueDropzone" id="dropzone" class="dropzone-container" :options="dropzoneOptions" @vdropzone-complete="afterComplete"></vue2-dropzone>
                        </div>
                        <div class="date-container">
                            <label for=""> Send Date </label>
                            <p v-if="dateError" class="error"> {{ dateError }} </p>
                            <div>
                                <datepicker :style="setDateErrorStyle" input-class="date-input" class="date-picker-main" v-model="date"></datepicker>
                            </div>
                        </div>
                        <div class="comment-container">
                            <label for="comment"> Comment </label>
                            <input type="text" class="comment-input" v-model="comment">
                        </div>
                        <div class="submit-container">
                            <div class="submit" @click="submitClicked()"> Submit </div>
                        </div>
                    </div>
                    <div v-if="picked == 'not_sent_yet'"> qweqwewqewqewq</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Todo from './components/Todo';
import PersonalDetails from './components/PersonalDetails'
import Suggestions from './components/Suggestions';
import ContactDetails from './components/ContactDetails';
import LegalInformation from './components/LegalInformation';
import TransactionHistory from './components/TransactionHistory';
import Tab from './components/Tab';
import Support from './components/Support';
import Datepicker from 'vuejs-datepicker';
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
    name: 'App',
    components: {
        Todo,
        PersonalDetails,
        Suggestions,
        ContactDetails,
        LegalInformation,
        TransactionHistory,
        Tab,
        Support,
        Datepicker,
        vue2Dropzone
    },
    data() {
        return {
            state: 1,
            todoItems: ['Buy a microwave', 'Get a new toothbrush', 'Buy toilet paper', 'Play golf with Obama'],
            buttons: ['Home', 'Watch', 'Play'],
            taskOne: true,
            taskTwo: false,
            checked: false,
            checkedTwo: false,
            picked: null,
            dropzoneOptions: {
                url: 'https://httpbin.org/post',
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                headers: { "My-Awesome-Header": "header value" }
            },
            files: new Array(),
            date: '',
            comment: '',
            filesError: '',
            dateError: '',
        }
    },
    computed: {
        setFileErrorStyle() {
            if(this.filesError) {
                return 'border: 1px solid red';
            } else {
                return '';
            }
        },
        setDateErrorStyle() {
            if(this.dateError) {
                return 'border: 1px solid red';
            }
            else {
                return '';
            }
        },
        getName() {
            if(this.state == 1) {
                return "Evgeni Kunchev";
            } else {
                return "1213131213123 Avatar"
            }
        },
        getContactInformation() {
            return "0884718678 evgeni.kunchev1998@gmail.com";
        }
    },
    methods: {
        buttonClicked() {
            if(this.state == 1) {
                this.state = 2;
            } else {
                this.state = 1;
            }
        },
        gotoTaskTwo() {
            this.taskOne = false;
            this.taskTwo = true;
        },
        gotoTaskOne() {
            this.taskOne = true;
            this.taskTwo = false;
        },
        submitClicked() {
            if(this.files.length && this.date) {
                this.filesError = '';
                this.dateError = '';
            }
            if(!this.files.length) {
                this.filesError = 'File field is required *';
            } else {
                this.filesError = '';
            }
            if(!this.date) {
                this.dateError = 'Date field is required *';
            } else {
                this.dateError = '';
            }
        },
        afterComplete(file) {
            this.files.push(file.name)
        }
    }
}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    html, body, #app {
        height: 100%;
        width: 100%;
        margin: 0;
        display: flex;
        align-items: center;
        background: rgb(252, 238, 222);
    }
    .main-container {
        height: 95%;
        width: 100%;
        background: rgb(230, 230, 230);
        display: flex;
        padding: 10px;
    }
    .sidebar {
        border: 1px solid black;
        flex: 1;
        margin: .1rem;
    }
    .main {
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        flex: 3;
        margin: .1rem;
    }
    .main > div {
        border: 1px solid black;
        padding: .5rem;
        margin: .3rem;
    }
    .heading {
        flex: 1;
        display: flex;
        justify-content: space-between;
    }
    .center {
        display: flex;
        flex: 10;
    }
    .center > div {
        border: 1px solid black;
        padding: .5rem;
        margin: .2rem;
    }
    .left {
        flex: 3;
    }
    .right {
        flex: 4;
    }
    .footer {
        flex: 1;
    }
    /* ------ */
    .tabs-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: rgba(97, 97, 97, 0.2);
        border-radius: 8px;
    }
    .secondTask {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .form {
        background: white;
        border-radius: 5%;
        height: 70%;
        width: 40%;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15);
    }
    .already-sent-container {
        margin: 1rem 0rem;
    }
    .comment-container {
        display: flex;
        flex-direction: column;
    }
    .inner {
        padding: 3rem;
    }
    .date-container {
        margin: .5rem 0rem;
    }
    .date-picker-main {
        margin: .5rem 0rem;
    }
    .date-picker-main:focus {
        outline: none;
    }
    .date-input {
        width: 100%;
        height: 2rem;
        border: none;
        background: rgba(216, 228, 230, 0.5);
        border-radius: 5px;
    }
    .comment-container {
        margin: .5rem 0rem;
    }
    .comment-input {
        width: 100%;
        height: 2rem;
        border: none;
        background: rgba(216, 228, 230, 0.5);
        border-radius: 5px;
        padding: 0;
    }
    .dropzone-container {
        margin: .5rem 0rem;
    }
    .submit {
        cursor: pointer;
        width: 100%;
        padding: .5rem 0rem;
        text-align: center;
        background:  linear-gradient(90deg, rgba(2,0,36,.5) 0%, rgba(9,9,121,.5) 35%, rgba(0,212,255,.5) 100%);
        border-radius: 6px;
        margin-top: 1.2rem;
    }
    .submit:hover {
        background:  linear-gradient(90deg, rgba(2,0,36,.4) 0%, rgba(9,9,121,.4) 35%, rgba(0,212,255,.4) 100%);
    }
    .error {
        color: red;
    }
</style>
