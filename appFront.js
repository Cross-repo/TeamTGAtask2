// Handle our data model
const model = {
    languages:[
        {
            name: "english",
            login:"Login",
            username:"Email or Username",
            Password:"Password",
            delect_language:"Select Language",
            login_details:"Login Details",
            forgot_password:"Forgot Password?",
            signup:"Don't have an account yet?"
        },
        {
            name: "espanol",
            login:"Iniciar sesión",
            username:"Correo electrónico o nombre de usuario",
            Password:"Contraseña",
            delect_language:"Seleccione el idioma",
            login_details:"detalles de registro",
            forgot_password:"¿Se te olvidó tu contraseña?",
            signup:"¿Aún no tienes una cuenta?"
        },
        {
            name: "french",
            login:"S'identifier",
            username:"E-mail ou nom d'utilisateur",
            Password:"Mot de passe",
            delect_language:"Choisir la langue",
            login_details:"détails de connexion",
            forgot_password:"Mot de passe oublié?",
            signup:"Vous n'avez pas encore de compte?"
        },{
            name: "german",
            login:"Einloggen",
            username:"E-Mail Adresse oder Benutzername",
            Password:"Passwort",
            delect_language:"Sprache auswählen",
            login_details:"Login-Daten",
            forgot_password:"Passwort vergessen?",
            signup:"Sie haben noch keinen Account?"
        },{
            name: "chinesse",
            login:"登錄",
            username:"電子郵件或用戶名",
            Password:"密碼",
            delect_language:"選擇語言",
            login_details:"登錄詳細信息",
            forgot_password:"忘記密碼？",
            signup:"還沒有賬號？"
        }
    ],
    selectedLanguage:null,
}

// link data to view
const controller = {
    //Let's declare the initial function
    //I prefer function though but since developers are the judge, they have the latest (chrome) browser hence arrow functions are compactable xx
    init: () =>{
        //This function is my mini jQuery. it was selecting easy for. And yes, that's the fundamental of $ in jQuery in their Doc.
        const $ = (selector, container)=>{
            return (container || document).querySelector(selector);
        }
        
        //Declare the element we need to change innerHTMlL
        this.selectedLanguageElem = $('h1#txt-select-language');
        this.formTitleElem = $('h1#form-login-title');
        this.userNameTextElem = $('p#label-username-text');
        this.passwordTextElem = $('p#label-password-text');
        this.inputLoginSubmit = $('input#loginBtn');
        this.forgetPassword = $('a.forgot-password');
        this.signup = $('a.signup');

        //Array of language btns
        this.langBtns = document.querySelectorAll('button.translation');
    }
}

// Our view to interact with the DOM
const view = {

}