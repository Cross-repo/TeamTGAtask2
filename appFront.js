// Handle our data model
const model = {
    languages:[
        {
            name: "english",
            login:"Login",
            username:"Email or Username",
            password:"Password",
            select_language:"Select Language",
            formTitle:"Login Details",
            forgot_password:"Forgot Password?",
            signup:"Don't have an account yet?",
            lang: "en"
        },
        {
            name: "espanol",
            login:"Iniciar sesión",
            username:"Correo electrónico o nombre de usuario",
            password:"Contraseña",
            select_language:"Seleccione el idioma",
            formTitle:"detalles de registro",
            forgot_password:"¿Se te olvidó tu contraseña?",
            signup:"¿Aún no tienes una cuenta?",
            lang: "es"
        },
        {
            name: "french",
            login:"S'identifier",
            username:"E-mail ou nom d'utilisateur",
            password:"Mot de passe",
            select_language:"Choisir la langue",
            formTitle:"détails de connexion",
            forgot_password:"Mot de passe oublié?",
            signup:"Vous n'avez pas encore de compte?",
            lang: "fr"
        },{
            name: "german",
            login:"Einloggen",
            username:"E-Mail Adresse oder Benutzername",
            password:"Passwort",
            select_language:"Sprache auswählen",
            formTitle:"Login-Daten",
            forgot_password:"Passwort vergessen?",
            signup:"Sie haben noch keinen Account?",
            lang: "de"
        },{
            name: "chinesse",
            login:"登錄",
            username:"電子郵件或用戶名",
            password:"密碼",
            select_language:"選擇語言",
            formTitle:"登錄詳細信息",
            forgot_password:"忘記密碼？",
            signup:"還沒有賬號？",
            lang: "zh-Hant"
        }
    ],
    selectedLanguage:null,
}

// link data to view
const controller = {
    //Let's declare the initial function
    //I prefer function though but since developers are the judge, they have the latest (chrome) browser hence arrow functions are compactable xx
    init: () =>{
        if (localStorage.teamTGA) {
            controller.convertLocalToModel();
            // console.log('localStorage', localStorage);
        }
        view.init();
        view.render();
    },

    setSelectedLang: (lang)=>{
        // set selected language
        model.selectedLanguage = lang;
    },
    
    btnLang: (title) => {
        // From btn title get lang 
        const lang = model.languages.find(l=> l.name === title.toLowerCase())
        // console.log('Clicked btn title',lang);
        
        if(lang !== undefined || lang !== null){
            controller.setSelectedLang(lang);
        }
    },

    getSelectedLang: () =>{
        //Get selected Language
        return model.selectedLanguage;
    },

    defaultSelectedLang: () =>{
        //Set and return English selected Language
        model.selectedLanguage = model.languages[0];
        return model.selectedLanguage;
    },

    // Let's consider making use of localStorage aye
    addModelToLocal: function(){
        const obj = JSON.stringify(model);
        localStorage.setItem('teamTGA', obj);
        // console.log('Moved in', localStorage);
    },

    convertLocalToModel: function(){
        //This function is only called when we have the same data, so all we need to do is get the stored data and render.
        if(localStorage.teamTGA){
            const modelObj = JSON.parse(localStorage.getItem('teamTGA'));
            // console.log('modelObj', modelObj);
            for (const key in model) {
                model[key] = modelObj[key];
            }
        } else{
            //Not in storage
            // console.log('%cError' + '%c Not Found in Local Storage', "background-color: red; color: white", "color: red");
        }
    },
}

// Our view to interact with the DOM
const view = {
    init: () =>{
        //This declares the inital function we want our view to carry out

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
        this.html = $('html');

        //Array of language btns
        this.langBtns = document.querySelectorAll('button.translation');

        // setting click function on each button 
        langBtns.forEach(btn=>{
            btn.addEventListener('click', ()=>{
                const title = btn.title;
                // console.log('title of btn on click', title);
                controller.btnLang(title);

                //Update localStorage
                controller.addModelToLocal();
                view.render();
            })
        });
    },

    render: () =>{
        //This updates  our DOM for us
        // console.log('render', model);
        const selectedLang = controller.getSelectedLang() || controller.defaultSelectedLang();

        //Set selected btn
        this.langBtns.forEach(btn=>{
            //Remove selected class on each 
            btn.classList.remove('selected');

            if (btn.title.toLowerCase() === selectedLang.name) {
                btn.classList.add('selected');
            }
        });

        //console.log(selectedLang);
        this.selectedLanguageElem.innerHTML = selectedLang.select_language;
        this.formTitleElem.innerHTML = selectedLang.formTitle;
        this.userNameTextElem.innerHTML = selectedLang.username;
        this.passwordTextElem.innerHTML = selectedLang.password;
        this.inputLoginSubmit.innerHTML = selectedLang.login;
        this.forgetPassword.innerHTML = selectedLang.forgot_password;
        this.signup.innerHTML = selectedLang.signup;
        this.html.setAttribute('lang',selectedLang.lang);
    }
}

controller.init();