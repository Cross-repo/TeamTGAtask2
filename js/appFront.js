// Handle our data model
const model = {
    languages:[
        {
            name: "english",
            login:"Login",
            username:"Email or Username",
            password:"Password",
            emailAddress: "Email Address",
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
            emailAddress: "Dirección de correo electrónico",
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
            emailAddress: "Adresse e-mail",
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
            emailAddress: "E-Mail-Addresse",
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
            emailAddress: "電子郵件地址",
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
        //check if a Language is set
        if(localStorage.teamTGA_selectedLanguage){
            controller.convertLocalToModel();
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
        //Clear all old data
        localStorage.clear()

        // then add these
        const obj = model.selectedLanguage.name;
        localStorage.setItem('teamTGA_selectedLanguage', obj);
        console.log('Moved in', localStorage);
    },

    convertLocalToModel: function(){
        //This function is only called when we have the same data, so all we need to do is get the stored data and render.
        if(localStorage.teamTGA_selectedLanguage){
            const modelLanguage = localStorage.getItem('teamTGA_selectedLanguage');
            // const theSelectedLang = model.languages.find(l=>l.name === modelLanguage);
            const theSelectedLang = controller.btnLang(modelLanguage); //trying to see if it can be DRY
            console.log('setLang', theSelectedLang);
            if (theSelectedLang != undefined || theSelectedLang != null) {
                controller.setSelectedLang(theSelectedLang);
            }
        } else{
            //Not in storage
            // controller.defaultSelectedLang();
            console.log('%cError' + '%c No set Language in Local Storage', "background-color: red; color: white", "color: red");
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
        this.formLoginTitleElem = $('h1#form-login-title.login-details');
        this.userNameTextElem = $('p#label-username-text');
        this.userEmailTextElem = $('p#label-useremail-text');
        this.passwordTextElem = $('p#label-password-text');
        this.inputLoginSubmit = $('input#loginBtn');
        this.loginTxt = $('a.sup');
        this.forgetPassword = $('a.forgot-password');
        this.signup = $('p.signup');
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

        //Wrapping with if condition reduces chances of error/break by confirming elem exist then mplement.
        if (this.selectedLanguageElem) {
            this.selectedLanguageElem.innerHTML = selectedLang.select_language;
        }

        if (this.formLoginTitleElem) {
            this.formLoginTitleElem.innerHTML = selectedLang.formTitle;
        }

        if (this.userNameTextElem) {
            this.userNameTextElem.innerHTML = selectedLang.username;
        }

        if (this.userEmailTextElem) {
            this.userEmailTextElem.innerHTML = selectedLang.emailAddress;
        }

        if (this.passwordTextElem) {
            this.passwordTextElem.innerHTML = selectedLang.password;
        }

        if (this.inputLoginSubmit) {
            this.inputLoginSubmit.value = selectedLang.login;
        }

        if (this.loginTxt) {
            this.loginTxt.innerHTML = selectedLang.login;
        }

        if (this.forgetPassword) {
            this.forgetPassword.innerHTML = selectedLang.forgot_password;
        }

        if (this.signup) {
            this.signup.innerHTML = selectedLang.signup;
        }

        if (this.html) {
            this.html.setAttribute('lang',selectedLang.lang);
        }

    }
}

controller.init();