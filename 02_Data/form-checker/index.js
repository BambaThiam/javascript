const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);

// création de variables pour stockage
let pseudo, email, password, confirmPass;

//Identification bar de progression
const progressBar = document.getElementById("progress-bar");

//création de la fonction logique d'erreur
const errorDisplay = (tag, message, valid) => {
  const Container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span"); //recup span ds .tag'-container

  if (!valid) {
    Container.classList.add("error");
    span.textContent = message;
  } else {
    Container.classList.remove("error");
    span.textContent = message;
  }
};

//logique pour pseudo
const pseudoChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    const pseudoMessage = "Le pseudo doit faire entre 3 et 20 caractères.";
    errorDisplay("pseudo", pseudoMessage);
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    const pseudoError =
      "Le pseudo ne doit pas contenir de caractères spéciaux.";
    errorDisplay("pseudo", pseudoError);
    pseudo = null;
  } else {
    errorDisplay("pseudo", "", true); //valid sur true => retire message d'erreur
    pseudo = value; // récupere valeur pseudo
  }
};

//logique email
const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "Le mail n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

//logique pour password
const passwordChecker = (value) => {
  progressBar.classList = ""; //initialise progress-bar (évite la superposition)

  if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  ) {
    errorDisplay(
      "password",
      "Minimum de 8 caractères, une majuscule, un chiffre et un caractère spécial"
    );
    progressBar.classList.add("progressRed");
    password = null;
  } else if (value.length < 12) {
    progressBar.classList.add("progressBlue");
    errorDisplay("password", "Sécurité moyen", true);
    password = value;
  } else {
    progressBar.classList.add("progressGreen");
    errorDisplay("password", "Sécurité bonne", true);
    password = value;
  }
  if (confirmPass) confirmChecker(confirmPass); // vérifie égalité en continue sur ce qui es saisie ds confirpass
};

//logique pour confirmation_password
const confirmChecker = (value) => {
  if (value !== password) {
    errorDisplay("confirm", "Les mots de passe ne correspondent pas");
    confirmPass = false;
  } else {
    errorDisplay("confirm", "", true);
    confirmPass = true;
  }
};

//recup valeur input => e.target.id
console.log(inputs);
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;

      case "email":
        emailChecker(e.target.value);
        break;

      case "password":
        passwordChecker(e.target.value);
        break;

      case "confirm":
        confirmChecker(e.target.value);
        break;

      default:
        null;
        break;
    }
  });
});

// envoyer formulaire

form.addEventListener("submit", (e) => {
  e.preventDefault(); // évite changement de page, comportement par défaut

  if (pseudo && email && password && confirmPass) {
    const data = {
      pseudo,
      email,
      password,
    };
    console.log(data);

    inputs.forEach((input) => (input.value = ""));
    progressBar.classList = "";

    pseudo = null;
    email = null;
    password = null;
    confirmPass = null;
    alert("Inscription validée !");
  } else {
    alert("veuillez remplir correctement les champs");
  }
});
