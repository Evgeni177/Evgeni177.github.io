<template>
    <div class="form">
            <div class="inner">
                <dynamic-button medium
                                class="back-button"
                                text="Back"
                                @dynamicButtonClicked="goBack"/>
                <h2 class="dynamic-form">Dynamic Form</h2>
                <label for="">Already sent</label>
                <input type="radio" value="already_sent" v-model="picked">
                <label for="">Not sent yet</label>
                <input type="radio" value="not_sent_yet" v-model="picked">
                <div v-if="picked == 'already_sent'" class="already-sent-container"> 
                    <div class="file-container">
                        <label for=""> Upload File </label>
                        <p v-if="filesError" class="error"> {{ filesError }} </p>
                        <vue2-dropzone :style="setFileErrorStyle" 
                                        ref="myVueDropzone" 
                                        id="dropzone" 
                                        class="dropzone-container" 
                                        :options="dropzoneOptions" 
                                        @vdropzone-complete="afterComplete"/>
                    </div>
                    <div class="date-container">
                        <label for=""> Send Date </label>
                        <p v-if="dateError" class="error"> {{ dateError }} </p>
                        <div>
                            <datepicker :style="setDateErrorStyle" 
                                        input-class="date-input" 
                                        class="date-picker-main" 
                                        v-model="date"/>
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
                <div v-if="picked == 'not_sent_yet'" class="second-toggle">
                    <div class="input-passport">
                        <label for="passportNumber" class="passport-label"> Passport Number</label>
                        <p v-if="notSentYetErrors.passport" class="error"> {{ notSentYetErrors.passport }} </p>
                        <input class="input" 
                                type="text" 
                                v-model="passportNumber" 
                                @input="checkInput()">
                        <div v-if="showDropdown" class="dropdown-container">
                            <div v-for="number in passportNumbersList"
                                :key="number" 
                                class="dropdown-item" 
                                @click="dropdownItemClicked(number)">{{ number }}</div>
                        </div>
                    </div>
                    <p v-if="notSentYetErrors.urgent" class="error"> {{ notSentYetErrors.urgent }} </p>
                    <div class="urgent-container">
                        <label for="">Urgent</label>
                        <input type="radio" value="urgent" v-model="status">
                        <label for="">Not Urgent</label>
                        <input type="radio" value="not_urgent" v-model="status">
                        <div v-if="status == 'urgent'" class="urgent">
                            <label for="">Deadline</label>
                            <p v-if="notSentYetErrors.deadline" class="error"> {{ notSentYetErrors.deadline }} </p>
                            <datepicker :style="setDateErrorStyle" 
                                        input-class="date-input" 
                                        class="date-picker-main" 
                                        v-model="dateDeadline"/>
                        </div>
                        <div class="submit-container">
                            <div class="submit" @click="notSentSubmitClicked()"> Submit </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import vue2Dropzone from 'vue2-dropzone';
import DynamicButton from './components/DynamicButton';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';
export default {
    name: 'TaskTwo',
    components: {
        Datepicker,
        vue2Dropzone,
        DynamicButton
    },
    data() {
        return {
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
            showDropdown: false,
            passportNumbersList: ['321456', '321897'],
            passportNumber: '',
            status: '',
            dateDeadline: '',
            notSentYetErrors: {
                passport: '',
                urgent: '',
                deadline: ''
            }
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
    },
    mounted() {
        window.addEventListener('click', () => {
            this.showDropdown = false;
        })
    },
    methods: {
        submitClicked() {
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
        notSentSubmitClicked() {
            if(!this.passportNumber) {
                this.notSentYetErrors.passport = 'Passport number field is required *';
            } else {
                this.notSentYetErrors.passport = '';
            }
            if(!this.status) {
                this.notSentYetErrors.urgent = 'You should select an option *';
            } else {
                this.notSentYetErrors.urgent = ''
            }
            if(this.status == 'urgent' && !this.dateDeadline) {
                this.notSentYetErrors.deadline = 'The deadline field is required *';
            } else {
                this.notSentYetErrors.deadline = '';
            }
        },
        afterComplete(file) {
            this.files.push(file.name)
        },
        goBack(disabled) {
            if(!disabled) {
                this.$router.replace('/');
            }
        },
        checkInput() {
            if(this.passportNumber == '321') {
                this.showDropdown = true;
            } else {
                this.showDropdown = false;
            }
        },
        checkValue() {
            if(this.passportNumber == '321') {
                this.showDropdown = true;
            }
        },
        dropdownItemClicked(number) {
            this.passportNumber = number;
        }
    }
}
</script>

<style lang="css">
   .form {
        background: white;
        border-radius: 5%;
        height: 70%;
        width: 40%;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15);
    }
    .inner {
        padding: 3rem;
    }
    .already-sent-container {
        margin: 1rem 0rem;
    }
    .comment-container {
        display: flex;
        flex-direction: column;
    }
    .date-container {
        margin: .5rem 0rem;
    }
    .date-picker-main {
        margin: .5rem 0rem;
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
    .input-passport {
        margin-top: 1rem;
        position: relative;
    }
    .input {
        width: 100%;
        height: 2rem;
        border: none;
        background: rgba(216, 228, 230, 0.5);
        border-radius: 5px;
        padding: .1rem .6rem;
        margin-top: .3rem;
        box-sizing: border-box;
        font-size: 1rem;
    }
    .dropdown-item {
        width: 100%;
        height: 2rem;
        border: none;
        background: rgb(216, 228, 230);
        padding: .1rem .6rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        box-sizing: border-box;
    }
    .dynamic-form{
        position: relative;
        top: -5rem;
        left: 10rem;
    }
    .dropdown-item:hover {
        background:rgb(210, 222, 226);
    }
    .dropdown-container {
        position: absolute;
        width: 100%;
    }
    .urgent-container {
        margin-top: 1rem;
    }
    .urgent {
        margin-top: 1rem;
    }
    .back-button {
        position: relative;
        top: -2rem;
        left: -1rem;
    }
</style>