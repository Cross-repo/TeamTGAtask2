
const username = document.querySelector(".username-text");
const email = document.querySelector(".email")
const password = document.querySelector(".password-text");

function validateFullname(target, language) {
  let field = target.value;
  
  // Validate username
  if (field.length === 0) {
    target.focus();
    fullnameErrorMessage(language);
    document.querySelector('#name-error').style.visibility = "visible";
    return false;
  } else {
    document.querySelector('#name-error').style.visibility = "hidden"; 
    return true;
  }
}

const validateEmail = (target, language) => {
  let field = target.value;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field)) {
    document.querySelector('#email-error').style.visibility = "hidden"; 
    return (true);
  } else {
    emailErrorMessage(language); 
    document.querySelector('#email-error').style.visibility = "visible";
    target.focus();
    return (false);
  }
  

}


const validatePassword = (target, language) => {
  // Validate that the pasword is at least 6 characters.
  let value = target.value;

  if (value.length < 6) {
    target.focus();
    passwordError(language); 
    document.querySelector('#password-error').style.visibility = "visible";
    return false;
  } else {
    document.querySelector('#password-error').style.visibility = "hidden";
    return true;
  }
}

const fullnameErrorMessage = (language) => {
  // This houses the default error message if user doesnt click on any link.
  let errorDisplay = document.getElementById('name-error');
  switch (language) {
    case "isSpanish":
        errorDisplay.textContent="Por favor ingrese su nombre completo";
        break;
    case 'isFrench':
        errorDisplay.textContent = "S'il vous plaît remplir votre nom complet";
        break;
      case 'isGerman':
        errorDisplay.textContent = "Bitte geben Sie Ihren vollständigen Namen an";
        break;
      case 'isChinese':
        errorDisplay.textContent = "请填写您的全名";
        break;
    default:
        errorDisplay.textContent = "Please fill in your fullname";
  }
}



const emailErrorMessage = (language) => {
  // This houses the error messages for wrong email address.
  let errorDisplay = document.getElementById('email-error');
  switch (language) {
    case 'isEnglish':
      errorDisplay.textContent = "You have entered an invalid email address.";
      break;
    case 'isSpanish':
      errorDisplay.textContent = "Has ingresado una dirección de correo electrónico no válida";
      break;
    case 'isFrench':
      errorDisplay.textContent = "Vous avez entré une adresse email invalide.";
      break;
    case 'isGerman':
      errorDisplay.textContent = "Sie haben eine ungültige Email-Adresse eingegeben";
      break;
    case 'isChinese':
      errorDisplay.textContent = "您输入了无效的电子邮件地址";
      break;
    default:
        errorDisplay.textContent = "You have entered an invalid email address";
  }
}

const passwordError = (language) => {
  // This houses the default error message for short password if the user does not click on any link.
  let errorDisplay = document.getElementById('password-error');
  switch (language) {
    case 'isSpanish':
      errorDisplay.textContent = "Su contraseña debe tener al menos seis caracteres de longitud";
      break;
    case 'isFrench':
      errorDisplay.textContent = "Votre mot de passe doit comporter au moins six caractères";
      break;
    case 'isGerman':
      errorDisplay.textContent = "Ihr Passwort muss mindestens sechs Zeichen lang sein";
      break;
    case 'isChinese':
      errorDisplay.textContent = "您的密码长度必须至少为六个字符";
      break;
    default:
        errorDisplay.textContent = "Your password must be at least six characters long";
  }
}

const getLanguage = () => {
  // This huge function is where the multilingual functionality of the app is put together.
  // It grabs the  lang links from the dom and uses click event to modify as appropriate. 
  const isEnglish = document.querySelector(".english");
  const isSpanish = document.querySelector(".spanish");
  const isFrench = document.querySelector(".french");
  const isGerman = document.querySelector(".german");
  const isChinese = document.querySelector(".chinese");
  const langArray = [isEnglish, isSpanish, isFrench, isGerman, isChinese];

  langArray.forEach((lang) => {

    lang.addEventListener('click', () => {
      const displayError = document.querySelector('#name-error');
      const emailError = document.querySelector('#email-error');
      let passError = document.getElementById('password-error');
      if (event.target === langArray[0]) {
        displayError.textContent = "Please fill in your username.";
        emailError.textContent = "You have entered an invalid email address."
        passError.textContent = "Your password must be at least six characters long.";
        englishLanguage();
        uiCanInteract('isEnglish');

      } else if (event.target === langArray[1]) {
        displayError.textContent = "Por favor ingrese su nombre de usuario o dirección de correo electrónico.";
        // emailError.textContent = 
        passError.textContent = "Su contraseña debe tener al menos seis caracteres de longitud.";
        spanishLanguage();
        uiCanInteract('isSpanish');

      } else if (event.target === langArray[2]) {
        displayError.textContent = "S'il vous plaît remplir votre nom d'utilisateur ou adresse e-mail.";
        passError.textContent = "Votre mot de passe doit comporter au moins six caractères.";
        frenchLanguage();
        uiCanInteract('isFrench');

      } else if (event.target === langArray[3]) {
        displayError.textContent = "Bitte geben Sie Ihren Benutzernamen oder Ihre E-Mail-Adresse ein.";
        passError.textContent = "Ihr Passwort muss mindestens sechs Zeichen lang sein.";
        germanLanguage();
        uiCanInteract('isGerman');

      } else if (event.target === langArray[4]) {
        displayError.textContent = "请填写您的用户名或电子邮件地址。";
        passError.textContent = "您的密码必须至少六个字符。";
        chineseLanguage();
        uiCanInteract('isChinese');

      }
    })
  })
}

const englishLanguage = () => {
  // English lang text content
  document.querySelector('.username-text').placeholder = "Fullname";
  document.querySelector('.email').placeholder = "Email Address";
  document.querySelector('.password-text').placeholder = "Password";
  document.querySelector('button').textContent = "Sign Up";
  document.querySelector('h2').textContent= "SIGN UP DETAILS";
  document.querySelector(".left-float").textContent="Already have an account?";
  document.querySelector(".left-p").textContent="Open an account with us";
}

const spanishLanguage = () => {
  //Spanish text content
  document.querySelector('.username-text').placeholder = "Nombre completo";
  document.querySelector('.email').placeholder = "Dirección de correo electrónico";
  document.querySelector('.password-text').placeholder = "Contraseña";
  document.querySelector('button').textContent = "Regístrate";
  document.querySelector('h2').textContent= "REGISTRO DETALLES";
  document.querySelector(".left-float").textContent="Ya tienes una cuenta?";
  document.querySelector(".left-p").textContent="Abre una cuenta con nosotros";

}

const frenchLanguage = () => {
  // french text content
  document.querySelector('.username-text').placeholder = "Nom complet";
  document.querySelector('.email').placeholder = "Adresse e-mail";
  document.querySelector('.password-text').placeholder = "Mot de passe";
  document.querySelector('button').textContent = "S'inscrire";
  document.querySelector('h2').textContent= "INSCRIVEZ-VOUS DÉTAILS";
  document.querySelector(".left-float").textContent="Vous avez déjà un compte?";
  document.querySelector(".left-p").textContent="Ouvrir un compte avec nous";
}

const germanLanguage = () => {
  // german text content
  document.querySelector('.username-text').placeholder = "Vollständiger Name";
  document.querySelector('.email').placeholder = "E-Mail-Addresse";
  document.querySelector('.password-text').placeholder = "Passwort";
  document.querySelector('button').textContent = "Anmelden";
  document.querySelector('h2').textContent= "REGISTRIEREN SIE SICH DETAILS";
  document.querySelector(".left-float").textContent="Hast du schon ein Konto?";
  document.querySelector(".left-p").textContent="Eröffnen Sie ein Konto bei uns";
}

const chineseLanguage = () => {
  // chinese text content 
  document.querySelector('.username-text').placeholder = "全名";
  document.querySelector('.email').placeholder = "电子邮件地址";
  document.querySelector('.password-text').placeholder = "密码";
  document.querySelector('button').textContent = "注册";
  document.querySelector('h2').textContent= "注册详细信息";
  document.querySelector(".left-float").textContent="已经有账号？";
  document.querySelector(".left-p").textContent="与我们开立账户";
}


const uiCanInteract = (language) => {
  // greabs the form fields from the UI and calls the appropriate functions.
  

  const inputArray = [username,email, password];
  inputArray.forEach((input) => {
    input.addEventListener('blur', () => {
      if (event.target === inputArray[0]) {
        validateFullname(event.target, language)
      } else if (event.target === inputArray[1]) {
        validateEmail(event.target, language);
      } else if (event.target === inputArray[2]) {
        validatePassword(event.target, language);
      }
    } )
  })
}

getLanguage();
uiCanInteract();