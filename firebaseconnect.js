// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyDDUfSMti6THOI7UvH4AomEnD6iA9k-_ck",
    authDomain: "iinferno-ad9a0.firebaseapp.com",
    projectId: "iinferno-ad9a0",
    storageBucket: "iinferno-ad9a0.appspot.com",
    messagingSenderId: "402811873034",
    appId: "1:402811873034:web:8330a1c437defa0bd4bcf3",
    measurementId: "G-RQG3NP4HWY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);