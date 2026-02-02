// config.js
// 這是您專屬的實驗室資料庫連線設定

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyB-3Pl_9_lQUUyfEzULjgnfgB8Xbivo5rY",
    authDomain: "lab-website-40cb1.firebaseapp.com",
    projectId: "lab-website-40cb1",
    storageBucket: "lab-website-40cb1.firebasestorage.app",
    messagingSenderId: "44092173556",
    appId: "1:44092173556:web:c8283c28b229c01d4e42a1",
    measurementId: "G-MYBL65WHRM"
};

// 設定全域變數，讓 admin.html 和 index.html 都能讀到
window.__firebase_config = JSON.stringify(FIREBASE_CONFIG);

// 為了方便管理，我將資料路徑預設設為您的專案ID
window.__app_id = 'lab-website-40cb1';