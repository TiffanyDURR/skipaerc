const inputs = document.querySelectorAll(
    'input[type="text"], textarea'
  );
  // console.log(inputs); -> Tous les éléments sont bien identifiés.
  // Identification de l’input sélectionné par l’utilisateur.
  
  const form = document.querySelector("form");
  // Formulaire
  
  let prenom, nom, email, telephone, projet, captcha;
  
  inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      // Tester la valeur de e.target.id
      switch (e.target.id) {
        // En fonction de la valeur trouvée, la fonction « checker » correspondante sera jouée.
        // L'evenement sera déclenché en fonction de la valeur de target.id de l'input.
        case "prenom":
          prenomChecker(e.target.value);
          break;
        // Fin de l'instruction pour "prenom".
        case "nom":
          nomChecker(e.target.value);
          break;
        case "email":
          emailChecker(e.target.value);
          break;
          case "telephone":
            telephoneChecker(e.target.value);
            break;
            case "projet":
                projetChecker(e.target.value);
                break;
        default:
          null;
      }
    });
  });
  
  // Fonctions permettant de contrôler la validité du contenu des inputs ;
  
  const prenomChecker = (value) => {
    // La fonction a besoin d'analyser "value".
    // console.log(value); -> La valeur de "input" est bien récupérée dans la console.
    const prenomContainer = document.querySelector(".prenom-container");
    let errorDisplay = document.querySelector(".prenom-container > span");
  
    if (value.length > 0 && (value.length < 3 || value.length > 30)) {
      // Condition si ;
      // le prénom est supérieur à 0 caractère (pas de message d’erreur si aucune entrée)
      // ET inférieur à 3 caractères.
      // OU que sa value.length est supérieure à 30 caractères.
      // Il y a une erreur.
      prenomContainer.classList.add("error");
      // Changement de style CSS en rouge.
      // Indicateur visuel pour l'erreur.
      errorDisplay.textContent =
        "Votre prénom doit faire entre 3 et 30 caractères.";
      // Message de l'erreur qui s'affiche dans ".prenom-container > span".
      prenom = null;
    } else if (!value.match(/^[A-zÀ-ú-]*$/)) {
      // !value.match -> Indique que si les caractères entrés dans l'input ne correspondent pas aux REGEX prédéfinis.
      prenomContainer.classList.add("error");
      errorDisplay.textContent = "Ne peut pas contenir de caractères spéciaux.";
      // Message d'erreur car utilisation de caractères spéciaux.
      prenom = null;
    } else {
      prenomContainer.classList.remove("error");
      // Si toutes les conditions sont remplies
      // Le style "error" est enlevé.
      errorDisplay.textContent = "";
      // Plus d'affichage du message d'erreur.
      prenom = value;
      // prenom = value -> Permet de stocker l'information.
    }
  };
  
  const projetChecker = (value) => {
    const projetContainer = document.querySelector(".projet-container");
    let errorDisplay = document.querySelector(".projet-container > span");
    if (value.length > 0 && (value.length < 30 || value.length > 600)) {
      projetContainer.classList.add("error");
      errorDisplay.textContent = "La description de votre projet doit faire entre 30 et 600 caractères.";
      projet = null;
    } else {
      projetContainer.classList.remove("error");
      errorDisplay.textContent = "";
      projet = value;
    }
  };

  const nomChecker = (value) => {
    const nomContainer = document.querySelector(".nom-container");
    let errorDisplay = document.querySelector(".nom-container > span");
    if (value.length > 0 && (value.length < 3 || value.length > 30)) {
      nomContainer.classList.add("error");
      errorDisplay.textContent = "Votre nom doit faire entre 3 et 30 caractères.";
      nom = null;
    } else if (!value.match(/^[A-zÀ-ú-]*$/)) {
      nomContainer.classList.add("error");
      errorDisplay.textContent = "Ne peut pas contenir de caractères spéciaux.";
      nom = null;
    } else {
      nomContainer.classList.remove("error");
      errorDisplay.textContent = "";
      nom = value;
    }
  };
  
  const emailChecker = (value) => {
    const emailContainer = document.querySelector(".email-container");
    let errorDisplay = document.querySelector(".email-container > span");
    if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
      emailContainer.classList.add("error");
      errorDisplay.textContent = "Format de l'adresse e-mail non valide.";
      email = null;
    } else {
      emailContainer.classList.remove("error");
      errorDisplay.textContent = "";
      email = value;
    }
  };
  
  const telephoneChecker = (value) => {
    const telephoneContainer = document.querySelector(".telephone-container");
    let errorDisplay = document.querySelector(".telephone-container > span");
    if (value.length > 0 && (value.length < 5 || value.length > 10)) {
      telephoneContainer.classList.add("error");
      errorDisplay.textContent = "Veullez indiquer un numéro de téléphone valide (sans espaces).";
      telephone = null;
    } else if (!value.match(/^[0-9]*$/)) {
      telephoneContainer.classList.add("error");
      errorDisplay.textContent = "Seul les chiffres sont autorisés.";
      telephone = null;
    } else {
      telephoneContainer.classList.remove("error");
      errorDisplay.textContent = "";
      telephone = value;
    }
  };



  form.addEventListener("submit", (e) => {
    let errorEmpty = document.querySelector(".empty");
    const validation = document.querySelector(".validation");
    e.preventDefault();
    // Éviter le rechargement de la page lors de la soumission du formulaire
    if (prenom && nom && email && telephone && projet) {
      const data = {
        prenom,
        nom,
        email,
        telephone,
        projet,
      };
      // Tous les éléments sont regroupés dans l'objet "data"
  
      console.log(data);
      // Test de l'envoie de l'objet
  
      inputs.forEach((input) => (input.value = ""));
      // Vide les inputs après envoie du formulaire.
  
      prenom = null;
      nom = null;
      email = null;
      telephone = null;
      projet = null;
      // Empêche le renvoie du formulaire en boucle
      // Si tout est okay, masque le formulaire
      validation.textContent = "Un problème est survenu...";
      // Et affiche "Merci pour votre inscription"
    } else {
      errorEmpty.textContent = "Veuillez compléter le formulaire.";
    }
  });
  

