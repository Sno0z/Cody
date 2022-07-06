
var texts = document.querySelector('.Speech');
var mic = document.querySelector(".mic");
var Cody_Text = document.querySelector("p");

/* Liste */
const jokes = [
    'Qu’est ce qui es jaune et qui attend? Jonathan',
    'J’ai fait une blague sur les magasins.  Elle n’a pas supermarché',
    'Pourquoi est-ce qu’on met tous les crocos en prison ? Parce que les crocos deal',
    'Qu’est-ce que un tennisman adore faire ? Rendre des services',
    'Que se passe-t-il quand 2 poissons s’énervent ? Le thon monte',
    'Quel est le sport préféré des insectes? Le criquet',
    'Qu’est ce qu’une carotte dans une flaque d’eau ? Un bonhomme de neige en été',         
]

const pile_ou_face = ["Pile", "Face"]

/*main*/

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'fr-FR'

let p = document.createElement('p')

recognition.addEventListener('result', (e) => {  
    var mic = document.querySelector(".mic").src = "UI/PNG/round.png";

    const text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

        var texts = document.querySelector('.Speech').innerText = text;

        if(e.results[0].isFinal){
            text.toLowerCase();
            if(text.includes('bonjour') || text.includes("salut")  || text.includes('Bonjour') || text.includes("Salut")) {
                var Cody_Text = document.querySelector(".Text_Cody").innerText = "Bonjour je suis Cody votre Assistant Vocal";
                var mic = document.querySelector(".mic").src = "UI/PNG/mic.png";
                var texts = document.querySelector('.Speech').innerText = "";
            }

            else if(text.includes('appelle') || text.includes("nom")) {
                var Cody_Text = document.querySelector(".Text_Cody").innerText = "Je m'appelle Cody ";
                var mic = document.querySelector(".mic").src = "UI/PNG/mic.png";
                var texts = document.querySelector('.Speech').innerText = "";
            }

            else if(text.includes('youtube')) {
                var Cody_Text = document.querySelector(".Text_Cody").innerText = "D'accord j'ouvre Youtube";
                var mic = document.querySelector(".mic").src = "UI/PNG/mic.png";
                var texts = document.querySelector('.Speech').innerText = "";
                window.open("https://www.youtube.com/");
            } 

            else if(text.includes('météo') || text.includes("temps")) {
                var Cody_Text = document.querySelector(".Text_Cody").innerText = "Indiquez une ville :";
                var mic = document.querySelector(".mic").src = "UI/PNG/mic.png";
                var texts = document.querySelector('.Speech').innerText = "";
                recognition_meteo.start();
            }

            else if(text.includes('Wikipédia')) {
                var Cody_Text = document.querySelector(".Text_Cody").innerText = "Indiquez votre Recherche :";
                var mic = document.querySelector(".mic").src = "UI/PNG/mic.png";
                var texts = document.querySelector('.Speech').innerText = "";
                recognition_wiki.start();
            }

            else if(text.includes('blague')) {
                const randomjoke = jokes[Math.floor(Math.random() * jokes.length)];
                var Cody_Text = document.querySelector(".Text_Cody").innerText = randomjoke;
                var mic = document.querySelector(".mic").src = "UI/PNG/mic.png";
                var texts = document.querySelector('.Speech').innerText = "";
            }

            else if(text.includes('année')) {
                var Cody_Text = document.querySelector(".Text_Cody").innerText = "Nous sommes en " + annee;
                var mic = document.querySelector(".mic").src = "UI/PNG/mic.png";
                var texts = document.querySelector('.Speech').innerText = "";
            }

            else if(text.includes('heure')) {
                if (minute < 10 ) {
                    minute = "0"+ minute
                }
                var Cody_Text = document.querySelector(".Text_Cody").innerText = "Il est actuellement " + heure + "h" + minute;
                var mic = document.querySelector(".mic").src = "UI/PNG/mic.png";
                var texts = document.querySelector('.Speech').innerText = "";
            }

            else if(text.includes('quel jour') || text.includes('date')) {
                if (jour < 10 ) {
                    jour = "0"+ jour
                }
                var Cody_Text = document.querySelector(".Text_Cody").innerText = "Nous sommes le " + jour + "/" + mois + "/" + annee;
                var mic = document.querySelector(".mic").src = "UI/PNG/mic.png";
                var texts = document.querySelector('.Speech').innerText = "";
            }

            else if (text.includes('aide')) {
                var Cody_Text = document.querySelector(".Text_Cody").innerText = "Veuillez trouver de l'aide dans l'onglet \"Aide\"";
                var mic = document.querySelector(".mic").src = "UI/PNG/mic.png";
                var texts = document.querySelector('.Speech').innerText = "";
                document.location.href="Aide/aide.html";
            }

            else if(text.includes('Google') || text.includes('internet')) {
                var Cody_Text = document.querySelector(".Text_Cody").innerText = "Indiquez votre Recherche :";
                var mic = document.querySelector(".mic").src = "UI/PNG/mic.png";
                var texts = document.querySelector('.Speech').innerText = "";
                recognition_internet.start();
            }

            else if(text.includes('pile') || text.includes('face')) {
                var Cody_Text = document.querySelector(".Text_Cody").innerText = "Lancement de la pièce...";
                miseEnAttente(3000);
            }

            else if(text.includes('Bitcoin')) {
                getCours();
            }

            else if(text.includes('définition') || text.includes('dictionnaire')) {
                var Cody_Text = document.querySelector(".Text_Cody").innerText = "Quel définition souhaitez vous obtenir? :";
                var mic = document.querySelector(".mic").src = "UI/PNG/mic.png";
                var texts = document.querySelector('.Speech').innerText = "";
                larousse.start();
            }

            else if(text.includes('vol') || text.includes('avions')) {
                var Cody_Text = document.querySelector(".Text_Cody").innerText = "Voic la cartes des voles en cours dans le monde :";
                var mic = document.querySelector(".mic").src = "UI/PNG/mic.png";
                var texts = document.querySelector('.Speech').innerText = "";
                window.open("https://www.radarbox.com/@48.35827,-6.75605,z4");
            }

            else {
                var Cody_Text = document.querySelector(".Text_Cody").innerText = "Désolé, je n'ai pas compris...";
                var mic = document.querySelector(".mic").src = "UI/PNG/mic.png";
                var texts = document.querySelector('.Speech').innerText = "";
            }
        }
              
   
    console.log(text);
})



/* Fonction de la météo qui s'ocupe d'écouter une 
deuxième fois pour indiquer le nom de la ville */

const recognition_meteo = new window.SpeechRecognition();
recognition_meteo.interimResults = true;
recognition_meteo.lang = 'fr-FR'

recognition_meteo.addEventListener('result', (e) => {  
    var mic = document.querySelector(".mic").src = "UI/PNG/round.png";

    const city = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    var texts = document.querySelector('.Speech').innerText = city;
    if(e.results[0].isFinal){
        window.open("https://meteofrance.com/recherche/" + city);
        var Cody_Text = document.querySelector(".Text_Cody").innerText = "Voici la météo à " + city;
        var mic = document.querySelector(".mic").src = "UI/PNG/mic.png";
        var texts = document.querySelector('.Speech').innerText = "";


    }
})




/* Fonction de la Wikipédia qui s'ocupe d'écouter une 
deuxième fois pour accéder à une recherche Wikipédia */

const recognition_wiki = new window.SpeechRecognition();
recognition_wiki.interimResults = true;
recognition_wiki.lang = 'fr-FR'

recognition_wiki.addEventListener('result', (e) => {  
    var mic = document.querySelector(".mic").src = "UI/PNG/round.png";

    const search = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    var texts = document.querySelector('.Speech').innerText = search;
    if(e.results[0].isFinal){
        window.open("https://fr.wikipedia.org/wiki/" + search);
        var Cody_Text = document.querySelector(".Text_Cody").innerText = "Voici le résultat de votre recherche : " + search;
        var mic = document.querySelector(".mic").src = "UI/PNG/mic.png";
        var texts = document.querySelector('.Speech').innerText = "";


    }
})

/*time*/

var now = new Date();

var annee   = now.getFullYear();
var mois    = now.getMonth() + 1;
var jour    = now.getDate();
var heure   = now.getHours();
var minute  = now.getMinutes();

/* Fonction de la recherche google qui s'ocupe d'écouter une 
deuxième fois pour accéder à une recherche google */

const recognition_internet = new window.SpeechRecognition();
recognition_internet.interimResults = true;
recognition_internet.lang = 'fr-FR'

recognition_internet.addEventListener('result', (e) => {  
    var mic = document.querySelector(".mic").src = "UI/PNG/round.png";

    const google = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    var texts = document.querySelector('.Speech').innerText = google;
    if(e.results[0].isFinal){
        window.open("https://duckduckgo.com/?q=" + google);
        var Cody_Text = document.querySelector(".Text_Cody").innerText = "Voici votre recherche : " + google;
        var mic = document.querySelector(".mic").src = "UI/PNG/mic.png";
        var texts = document.querySelector('.Speech').innerText = "";
    }
})

/* Fonction Lancement de la pièce Pile ou Face */
function miseEnAttente()
{
    //Traitement
    var texts = document.querySelector('.Speech').innerText = "";
    setTimeout(fonctionAExecuter, 1000); //On attend 5 secondes avant d'exécuter la fonction
}
function fonctionAExecuter()
{
    //Le code écrit dans cette fonction ne sera exécuté qu'au bout de 5 secondes
    const coin_toss = pile_ou_face[Math.floor(Math.random() * pile_ou_face.length)];
    var Cody_Text = document.querySelector(".Text_Cody").innerText = coin_toss ;
    var mic = document.querySelector(".mic").src = "UI/PNG/mic.png";
}


/* rechercher la valeur du Bicoin */

function formatMontant(m) {
    var intlN=new Intl.NumberFormat();
    return intlN.format(m);
  }

function getCours() {
    /* Appel AJAX vers cryptocompare.com */
    var ajax=new XMLHttpRequest();
    console.log("readyState après new : "+ajax.readyState);
    /* Détection de l'avancement de l'appel */
    ajax.onreadystatechange=function() {
      console.log("readyState a changé et vaut : "+ajax.readyState)  
    }  
    /* Détection de la fin de l'appel */
    ajax.onload = function() {
        console.log("Appel AJAX terminé");
        console.log("  status : "+this.status);
        console.log("  response : "+this.response);    
        if (this.status == 200) { /* Le service a bien répondu */
            try {
            var json=JSON.parse(this.response); // Convertir le retour JSON
            } catch(err) {
                var Cody_Text = document.querySelector(".Text_Cody").innerText = "Oups, une erreur s'est produite...";
                var mic = document.querySelector(".mic").src = "UI/PNG/mic.png";
                var texts = document.querySelector('.Speech').innerText = "";
            return false;  
        }
        /* Vérifier que le JSON de retour contient bien la propriété EUR */
        if (json.EUR) {
            var eur=formatMontant(json.EUR);  
            var dt=new Date();
            var Cody_Text = document.querySelector(".Text_Cody").innerText =" Un Bitcoin équivaut actuellement à " + eur+ "\u20ac";
            var mic = document.querySelector(".mic").src = "UI/PNG/mic.png";
            var texts = document.querySelector('.Speech').innerText = "";
        } else {
            console.log("Retour du cours incorrect");  
        }
      }
    }
    /* Détection du timeout */
    ajax.ontimeout=function() {
        var Cody_Text = document.querySelector(".Text_Cody").innerText = "Le service n'a pas répondu à temps";
        var mic = document.querySelector(".mic").src = "UI/PNG/mic.png";
        var texts = document.querySelector('.Speech').innerText = "";
    }
      
    /* Préparation de la requête et envoi */
    var url="https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR";
    ajax.open("GET", url, true);
    ajax.timeout=1000; /* Délai d'expiration à 1 seconde */
    ajax.send();
  }


const larousse = new window.SpeechRecognition();
larousse.interimResults = true;
larousse.lang = 'fr-FR'

larousse.addEventListener('result', (e) => {  
    var mic = document.querySelector(".mic").src = "UI/PNG/round.png";

    const definition = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    var texts = document.querySelector('.Speech').innerText = definition;
    if(e.results[0].isFinal){
        window.open("https://www.larousse.fr/dictionnaires/francais/" + definition);
        var Cody_Text = document.querySelector(".Text_Cody").innerText = "Voici la définition de " + "\"" + definition + "\"";
        var mic = document.querySelector(".mic").src = "UI/PNG/mic.png";
        var texts = document.querySelector('.Speech').innerText = "";
    }
})




