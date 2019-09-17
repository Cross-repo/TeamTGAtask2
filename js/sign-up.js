
const username = document.querySelector(".username-text");
const email = document.querySelector(".email")
const password = document.querySelector(".password-text");

function validateUserName(target, language) {
  let field = target.value;
  // CHeck if email
  if (/\@/.test(field)) {
      let field = target.value;

      // Validate email address
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field)) {
        document.getElementById('email-error').style.display = "none"; 
        return (true);
      }
      emailError(language); 
      document.getElementById('email-error').style.display = "block";
      target.focus();
      return (false);
  } else {
    // Validate username
    if (field.length === 0) {
      target.focus();
      usernameErrorMessage(language);
      document.getElementById('name-error').style.display = "block";
      return false;
    } else {
      document.getElementById('name-error').style.display = "none"; 
      return true;
    }
  }
}


const validatePassword = (target, language) => {
  // Validate that the pasword is at least 6 characters.
  let value = target.value;

  if (value.length < 6) {
    target.focus();
    passwordError(language); 
    document.getElementById('password-invalid').style.display = "block";
    return false;
  } else {
    document.getElementById('password-invalid').style.display = "none";
    return true;
  }
}

const fullnameErrorMessage = (language) => {
  // This houses the default error message if user doesnt click on any link.
  let errorDisplay = document.getElementById('username-text');
  switch (language) {
    default:
        errorDisplay.textContent = "Please fill in your fullname";
  }
}

const emailErrorMessage = (language) => {
  // This houses the default error message if user doesnt click on any link.
  let errorDisplay = document.getElementById('username-text');
  switch (language) {
    default:
        errorDisplay.textContent = "You have entered an invalid email address";
  }
}

const emailError = (language) => {
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
    default:
        errorDisplay.textContent = "Your password must be at least six characters long.";
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
      const displayError = document.querySelector('name-error');
      const emailError = document.querySelector('email-error');
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
  username.textContent = "Username or email address";
  password.textContent = "Password";
}

const spanishLanguage = () => {
  //Spanish text content
  username.textContent = "Nombre de usuario o dirección de correo electrónico";
  password.textContent = "Contraseña";
}

const frenchLanguage = () => {
  // french text content
  username.textContent = "Nom d'utilisateur ou adresse e-mail";
  password.textContent = "Mot de passe";
}

const germanLanguage = () => {
  // german text content
  username.textContent = "Benutzername oder E-mail Adresse";
  password.textContent = "Passwort";
}

const chineseLanguage = () => {
  // chinese text content 
  username.textContent = "用户名或邮箱地址";
  password.textContent = "密码";
}


const uiCanInteract = (language) => {
  // greabs the form fields from the UI and calls the appropriate functions.
  

  const inputArray = [username, password];
  inputArray.forEach((input) => {
    input.addEventListener('blur', () => {
      if (event.target === inputArray[0]) {
        validateUsername(event.target, language)
      } else if (event.target === inputArray[1]) {
        validatePassword(event.target, language);
      } 
    } )
  })
}

getLanguage();
uiCanInteract();