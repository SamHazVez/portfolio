const translations = {
    en: {
        nav1: "Education",
        nav2: "Experience",
        nav3: "Passions",

        education1: "Bachelor’s degree student in Computer Science at Université Laval",
        education2: "Diploma in Computer Science from Cégep de Sainte-Foy",
        about: "I am a highly versatile and autonomous computer enthusiast. I am currently exploring which branch of computer science I want to start my career in.",
        
        actuel: "Current Projects",
        
        project7title: "Last Stand v2.0",
        project7type: "Team Project | GameDev",
        project7desc: "I decided to continue working on Last Stand and turn it into a full game. May improvements will come in future iterations.",

        project6title: "RPG System",
        project6type: "Individual Project | GameDev",
        project6desc: "I've always wanted to make an RPG... and improve my C++ skills. So I combined both to create a modular RPG system integrated into SFML. I aim to combine gameplay with complex algorithmic practices, such as implementing my own pathfinding system.",
        
        project5title: "Calligraphy Learning Website",
        project5type: "Individual Project | Web",
        project5desc: "I had the idea of creating a website to help people learn new alphabets and calligraphies in a 'Duolingo' style using Optical Character Recognition (OCR) models. I chose Drupal as the CMS because its content-type structure fits well with creating different exercises and tests. As a challenge, I plan to develop my own OCR to add fictional alphabets as well.",
        
        project4title: "Tengwar OCR",
        project4type: "Individual Project | Machine Learning",
        project4desc: "My first self-built OCR model to identify and translate texts written in alphabets not commonly supported by OCR systems. I started with Tengwar, the 'Elvish' script from J.R.R. Tolkien's Middle-earth. Character recognition is 94% accurate, and I am now working on parsing complete sentences. I also built an API to integrate this into a calligraphy learning website (another future project).",
        
        project3title: "CNC Software",
        project3type: "Team Project | Study Project | Software Design",
        project3desc: "A semester-long project for my Object-Oriented Software Engineering course. In a team of 5 developers, we followed the Unified Process methodology to develop a CNC software for a panel saw based on a series of client requirements.",
        
        project2title: "Last Stand - RTS Game",
        project2type: "Team Project | Study Project | GameDev",
        project2desc: "A capstone project from my Computer Science diploma. In a team of 4, we developed a real-time strategy game with seven levels. We challenged ourselves by making it in 3D, introducing additional complexity. The game features various units, buildings, real-time fog of war, and functional animations.",
        project2link: 'Try it out at: <a href="https://soup-master.itch.io/last-stand">https://soup-master.itch.io/last-stand</a>',
        
        project1title: "Image Identification",
        project1type: "Team Project | Study Project | Machine Learning",
        project1desc: "A research project for my Innovation and Technology Watch course. In a team of 4, we explored object recognition algorithms in machine learning. I experimented with TensorFlow, using and comparing different pre-trained models after following TensorFlow tutorials.",
    
        formationtitle: "Education",
        formationdate1: "Fall 2024 - Present",
        formationdegree1: "Bachelor’s degree student in Computer Science - Université Laval",
        formationprogram1: "Program",
        formationdescription1: "I am currently continuing my DEC+BAC program at Université Laval. I am in my second semester.",
        formationdate2: "Fall 2021 - Spring 2024",
        formationdegree2: "Computer Science Technology - Cégep de Sainte-Foy",
        formationprogram2: "Program",
        formationdescription2: "My studies at Cégep de Sainte-Foy was the start of my career in IT. I learned more than programming languages: I learned best practices, adaptability, and teamwork. We were rigorously corrected to be at the best of the Clean Code practices and Object Oriented Development. Most of the assignments were given in as User stories and were used to build a Test Driven Development cycle.",

        experiencetitle: "Experience",
        experiencedate2: "March 2024 - May 2024",
        experiencecompany2: "Libéo",
        experiencerole2: "Back-End Web Development Intern",
        experiencedescription2: "The variety of projects at Libéo convinced me to do my internship there. I developed Drupal modules and integrated features into websites. I also did some QA testing.",
        
        experiencedate1: "May 2022 - August 2023",
        experiencecompany1: "AMP - Autorité des marchés publics",
        experiencerole1: "Web Development Intern - IT Department",
        experiencedescription1: "My first job in IT. I tested my skills for the first time. I developed PowerApps applications as proof-of-concept projects. I also worked on a Vue.js-based deadline calculator redesign. These projects confirmed my interest in web development.",

        passionstitle4: "Involved",
        passionsdescription4: "I am an active member of the Oblivion modding community, helping users create their own customized gaming experience. It requires a lot of research and collaboration with the other members of the community.",
        passionstitle1: "Active",
        passionsdescription1: "I enjoy hiking and skiing and have been practicing fencing for two years.",
        passionstitle2: "Adventurer",
        passionsdescription2: "My favorite hobby is gaming. As a developper I like to understand the systems behind the games and use it as inspiration for my projects. My favorite genre is RPGs with a focus on immersion, both as old as 2007 or recent. My favorite titles include Cyberpunk 2077, Baldur's Gate 3, The Elder Scrolls, Fallout and Mass Effect.",
        passionstitle3: "Gamedev",
        passionsdescription3: "I have been developing video games since high school, where I participated in two years of the Fusion Jeunesse competition and won awards. Over time, I have created many small and fun games in my free time. Some have reached a wider audience than I expected :",
    },
    fr: {
        nav1: "Formation",
        nav2: "Expérience",
        nav3: "Passions",
        
        education1: "Étudiant au BAC en informatique à l'Université Laval",
        education2: "DEC en Techniques de l'informatique au Cégep de Sainte-Foy",
        about: "Je suis un passionné d'informatique très polyvalent et autonome. Je suis actuellement à un point où je cherche dans quelle branche de l'informatique je souhaite débuter ma carrière.",
        
        actuel: "Projets Actuels",
        
        project7title: "Last Stand v2.0",
        project7type: "Projet d'équipe | GameDev",
        project7desc: "J'ai décidé de continuer à travailler sur Last Stand pour en faire un jeu complet et fini. Je compte ajouter plusieurs améliorations dans les prochaine itérations.",

        project6title: "Système de RPG",
        project6type: "Projet individuel | GameDev",
        project6desc: "J'ai toujours voulu faire un RPG... et approfondir mes compétences en C++. Donc, j'ai combiné les deux pour faire un système de RPG organisé par modules que j'intégrerai dans SFML. Je cherche à combiner le gameplay avec des pratiques algorithmiques complexes, comme la mise en œuvre de mon propre système de pathfinding",
        
        project5title: "Site d'apprentissage de calligraphies",
        project5type: "Projet individuel | Web",
        project5desc: "J'ai eu l'idée de créer un site qui permettrait d'apprendre de nouveaux alphabets/calligraphies dans le style de \"Duolingo\" en utilisant des modèles de reconnaissance optique de caractères (OCR) pour analyser l'écriture des utilisateurs. J'ai choisi d'utiliser Drupal comme CMS pour le site parce que sa structure par \"type de contenu\" convient très bien à ce type d'application éducative pour créer différents exercices et tests. Comme défi je vais aussi faire mon propre OCR pour ajouter d'autres alphabets, tels que ceux d'univers fictifs.",

        project4title: "Tengwar OCR",
        project4type: "Projet individuel | Machine learning",
        project4desc: "Mon premier modèle OCR créé de toutes pièces pour identifier et traduire du texte écrit dans des alphabets qui ne sont pas contenus dans la plupart des OCR. J'ai commencé par les inscriptions en Tengwar, l'écriture \"elfique\" dans l'univers de la Terre du Milieu de JRR Tolkien, que j'ai déjà étudié par temps libre. L'identification individuelle des caractères est complète avec une précision moyenne de 94%. J'ai créé un algorithme pour diviser des phrases complètes en caractèrs pour commencer à identifier de vrai textes complets. J'ai créé un api pour rendre le projet utilisable par site un d'apprentissage de calligraphies (un autre projet qui suivra celui-ci). Je travaille actuellement à améliorer la précision du modèle sur des phrases complètes.",

        project3title: "Logiciel de CNC",
        project3type: "Projet d'équipe | Projet d'études | Conception logicielle",
        project3desc: "Le projet de session de mon cours de Génie logiciel orienté objet. En équipe de 5 développeurs, nous devions réaliser toutes les étapes du Processus Unifié pour répondre à une suite de demandes pour un logiciel de CNC pour une scie à panneaux.",        
        
        project2title: "Last Stand - Jeu RTS",
        project2type: "Projet d'équipe | Projet d'études | GameDev",
        project2desc: "Le projet synthèse de ma Technique de l'Informatique. En équipe de 4 nous avons créé un jeu de stratégie en temps réel de sept niveaux. Comme défi supplémentaire nous l'avons fait en 3D, ce qui a apporté sa propre suite d'éléments complexes. Mais avec des unités et bâtiments variés, un système de vague, un système de \"fog of war\" en temps réel et des animations fonctionnelles, le résultat final est impressionnant.",
        project2link: 'Essayez-le au : <a href="https://soup-master.itch.io/last-stand">https://soup-master.itch.io/last-stand</a>',
        
        project1title: "Identification d'images",
        project1type: "Projet d'équipe | Projet d'études | Machine learning",
        project1desc: "Le projet de session de mon cours d'Innovation et veille technologique. En équipe de 4 nous devions rechercher une technologie et créer chacun un projet prototype sur le sujet. Nous avons choisi d'explorer les algorithmes de ML d'identification d'objets. J'ai décidé pour mon prototype d'expérimenter avec TensorFlow. J'ai choisi d'utiliser un modèle préentrainé de TensorFlow Hub, puis d'en utiliser plusieurs pour les comparer après avoir écrit l'algorithme en suivant les nombreux tutoriels de TensorFlow.",
        
        formationtitle: "Formation",
        formationdate1: "Automne 2024 à aujourd'hui",
        formationdegree1: "Baccalauréat en informatique - Université Laval",
        formationprogram1: "Programme",
        formationdescription1: "Je continue aujourd'hui mon parcours DEC+BAC à l'Université Laval. J'en suis à ma deuxième session.",
        
        formationdate2: "Automne 2021 à printemps 2024",
        formationdegree2: "Techniques de l'informatique - Cégep de Sainte-Foy",
        formationprogram2: "Programme",
        formationdescription2: "Ma formation au Cégep de Sainte-Foy a été le départ de ma carrière en informatique. J'y ai appris plus que des langages de programmation : j'ai appris les meilleures pratiques, l'adaptabilité et le travail d'équipe. Nous avons été rigoureusement corrigés pour être au meilleur des pratiques Clean Code et du Développement Orienté Objet. La plupart des travaux ont été confiées sous forme de user stories et ont été utilisées pour construire un cycle de développement piloté par les tests (TDD).",

        experiencetitle: "Expérience",
        experiencedate2: "Mars 2024 à Mai 2024",
        experiencecompany2: "Libéo",
        experiencerole2: "Stagiaire en développement web back-end",
        experiencedescription2: "Les possibilités offertes par la grande diversité de projets de Libéo m'ont convaincu d'y faire mon stage de fin d'études. J'ai développé des modules pour Drupal et intégré des fonctionnalités sur les sites web. J'ai aussi fait un peu de QA en dev.",
        
        experiencedate1: "Mai 2022 à Août 2023",
        experiencecompany1: "AMP - Autorité des marchés publics",
        experiencerole1: "Stagiaire en programmation web à la direction des technologies de l'information",
        experiencedescription1: "Mon tout premier emploi dans le domaine de l'informatique. Je mettais mes compétences à l'épreuve pour la première fois. J'ai accompli des tâches qui m'ont permis d'apprendre tout en repoussant mes limites. J'ai créé plusieurs applications Powerapps qui ont servi de preuves de concept. J'ai travaillé à la refonte d'une calculette de délais en VueJs. Ces projets m'ont confirmé que le web est un domaine qui m'intéresse.",

        passionstitle4: "Impliqué",
        passionsdescription4: "Je suis un membre actif de la communauté de modding d'Oblivion et je guide les utilisateurs à travers la création de leur expérience de jeu personnalisée. Cela demande beaucoup de recherches et de la collaboration avec les autres membres de la communauté.",
        passionstitle1: "Actif",
        passionsdescription1: "Je fais de la randonnée et du ski et je pratique l'escrime depuis maintenant deux ans.",
        passionstitle2: "Imaginatif",
        passionsdescription2: "Mon passe-temps préféré est les jeux vidéo. En tant que développeur, j'aime comprendre les systèmes derrière les jeux et m'en inspirer pour mes projets. Mon genre préféré est celui des RPG axés sur l'immersion, qu'ils soient aussi anciens que 2007 ou récents. Mes titres préférés incluent Cyberpunk 2077, Baldur's Gate 3, The Elder Scrolls, Fallout et Mass Effect.",
        passionstitle3: "Gamedev",
        passionsdescription3: "Je développe des jeux vidéos depuis le secondaire, où j'ai participé à deux années de la compétition Fusion Jeunesse et remporté des prix. Au fil du temps j'ai développé plusieurs jeux vidéos ludiques et légers par moi-même par temps libre. Certains ont obtenu un public dépasssant mes attentes :",
    }
};

function switchLanguage(lang) {
    document.querySelectorAll("[id]").forEach(element => {
        if (translations[lang][element.id]) {
            element.innerHTML = translations[lang][element.id];
        }
    });
    document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => switchLanguage("fr"));
