const portfolioContent = {
    profile: {
        name: "Samuel Vezeau",
        image: "images/profile.jfif",
        socialLinks: [
            {
                platform: "facebook",
                url: "https://www.facebook.com/samuel.vezeau.5?mibextid=LQQJ4d",
                icon: "fa-facebook-f",
                label: "Facebook"
            },
            {
                platform: "linkedin",
                url: "https://ca.linkedin.com/in/samuel-vezeau-8105612b1",
                icon: "fa-linkedin",
                label: "Linkedin"
            },
            {
                platform: "github",
                url: "https://github.com/SamHazVez",
                icon: "fa-github",
                label: "GitHub"
            }
        ]
    },

    projects: [
        {
            id: "project7",
            year: "current",
            title: {
                en: "Alérion Supermilage",
                fr: "Alérion Supermilage"
            },
            type: {
                en: "Team Project | University Project",
                fr: "Projet d'équipe | Projet universitaire"
            },
            description: {
                en: "",
                fr: ""
            },
            technologies: [
                { name: "C++", image: "images/c++.png" }
            ],
            links: [],
            image: null
        },
                {
            id: "project6",
            year: "current",
            title: {
                en: "MeteoSensei",
                fr: "MétéoSensei"
            },
            type: {
                en: "Individual Project | Web",
                fr: "Projet individuel | Web"
            },
            description: {
                en: "Using my React travel map as a foundation, I built a 100% frontend weather application deployable on GitHub Pages. Using government data from ECCC via an RSS feed (so no API key is displayed!), the application notifies the user when it rains in monitored areas. Various themes are available to customize the application.",
                fr: "En utilisant ma carte de voyages React comme base j'ai construit une application météo 100% frontend déployable sur Github pages. En utilisant les données gouvernementales de ECCC depuis un flux RSS (donc pas de clé API affichée!), l'application notifie l'utilisateur en cas de pluie dans les régions surveillées. Différent thèmes sont disponible pour personnaliser l'application"
            },
            technologies: [
                { name: "React", image: "images/react.png" }
            ],
            links: [
                { url: "https://github.com/SamHazVez/MeteoSensei", type: "github" }
            ],
            image: "images/meteosensei.png"
        },
                {
            id: "project5",
            year: "2025",
            title: {
                en: "Travels map",
                fr: "Carte de voyages"
            },
            type: {
                en: "Individual Project | Web",
                fr: "Projet individuel | Web"
            },
            description: {
                en: "I've always wanted to share my travels with my loved ones without having to scroll through all my photos one by one, letting them discover the destinations gradually. I took the opportunity to explore React and follow tutorials on Leaflet. I'm very happy with the result; it's lightweight, simple, and very easy to maintain for my future destinations!",
                fr: "J'ai toujours voulu présenter mes voyages à mes proches sans avoir à passer à travers toutes mes photos une par une et leur laisser plutôt découvrir les destinations une par unes. J'en ai profité pour explorer React et suivre des tutoriels sur Leaflet. Je suis très satisfait du résultat, il est léger, simple et très facile à maintenir avec mes prochaines destinations !"
            },
            technologies: [
                { name: "React", image: "images/react.png" }
            ],
            links: [
                { url: "https://github.com/SamHazVez/voyage", type: "github" }
            ],
            image: "images/voyage.png"
        },
        {
            id: "project4",
            year: "2025",
            title: {
                en: "Tengwar OCR",
                fr: "Tengwar OCR"
            },
            type: {
                en: "Individual Project | Machine Learning",
                fr: "Projet individuel | Machine learning"
            },
            description: {
                en: "My first self-built OCR model to identify and translate texts written in alphabets not commonly supported by OCR systems. I started with Tengwar, the 'Elvish' script from J.R.R. Tolkien's Middle-earth. Character recognition is 94% accurate, and I am now working on parsing complete sentences. I also built an API to integrate this into a calligraphy learning website (another future project).",
                fr: "Mon premier modèle OCR créé de toutes pièces pour identifier et traduire du texte écrit dans des alphabets qui ne sont pas contenus dans la plupart des OCR. J'ai commencé par les inscriptions en Tengwar, l'écriture \"elfique\" dans l'univers de la Terre du Milieu de JRR Tolkien, que j'ai déjà étudié par temps libre. L'identification individuelle des caractères est complète avec une précision moyenne de 94%. J'ai créé un algorithme pour diviser des phrases complètes en caractèrs pour commencer à identifier de vrai textes complets. J'ai créé un api pour rendre le projet utilisable par site un d'apprentissage de calligraphies (un autre projet qui suivra celui-ci). Je travaille actuellement à améliorer la précision du modèle sur des phrases complètes."
            },
            technologies: [
                { name: "TensorFlow", image: "images/tensorflow.png" },
                { name: "Python", image: "images/python.jpg" }
            ],
            links: [
                { url: "https://github.com/SamHazVez/TengwarOCR", type: "github" }
            ],
            image: "images/tengwar.png"
        },
        {
            id: "project3",
            year: "2024",
            title: {
                en: "CNC Software",
                fr: "Logiciel de CNC"
            },
            type: {
                en: "Team Project | Study Project | Software Design",
                fr: "Projet d'équipe | Projet d'études | Conception logicielle"
            },
            description: {
                en: "A semester-long project for my Object-Oriented Software Engineering course. In a team of 5 developers, we followed the Unified Process methodology to develop a CNC software for a panel saw based on a series of client requirements.",
                fr: "Le projet de session de mon cours de Génie logiciel orienté objet. En équipe de 5 développeurs, nous devions réaliser toutes les étapes du Processus Unifié pour répondre à une suite de demandes pour un logiciel de CNC pour une scie à panneaux."
            },
            technologies: [
                { name: "Java", image: "images/java.jpg" },
                { name: "JavaSwing", image: "images/javaswing.png" }
            ],
            links: [
                { url: "https://github.com/SamHazVez/A24-Equipe45", type: "github" }
            ],
            image: "images/cnc.png"
        },
        {
            id: "project2",
            year: "2024",
            title: {
                en: "Last Stand - RTS Game",
                fr: "Last Stand - Jeu RTS"
            },
            type: {
                en: "Team Project | Study Project | GameDev",
                fr: "Projet d'équipe | Projet d'études | GameDev"
            },
            description: {
                en: "A capstone project from my Computer Science diploma. In a team of 4, we developed a real-time strategy game with seven levels. We challenged ourselves by making it in 3D, introducing additional complexity. The game features various units, buildings, real-time fog of war, and functional animations.",
                fr: "Le projet synthèse de ma Technique de l'Informatique. En équipe de 4 nous avons créé un jeu de stratégie en temps réel de sept niveaux. Comme défi supplémentaire nous l'avons fait en 3D, ce qui a apporté sa propre suite d'éléments complexes. Mais avec des unités et bâtiments variés, un système de vague, un système de \"fog of war\" en temps réel et des animations fonctionnelles, le résultat final est impressionnant."
            },
            extraLink: {
                en: 'Try it out at: <a href="https://soup-master.itch.io/last-stand">https://soup-master.itch.io/last-stand</a>',
                fr: 'Essayez-le au : <a href="https://soup-master.itch.io/last-stand">https://soup-master.itch.io/last-stand</a>'
            },
            technologies: [
                { name: "C#", image: "images/csharp.png" },
                { name: "Unity", image: "images/unity.png" }
            ],
            links: [
                { url: "https://soup-master.itch.io/last-stand", type: "itch" }
            ],
            image: "images/laststand.png"
        },
        {
            id: "project1",
            year: "2023",
            title: {
                en: "Image Identification",
                fr: "Identification d'images"
            },
            type: {
                en: "Team Project | Study Project | Machine Learning",
                fr: "Projet d'équipe | Projet d'études | Machine learning"
            },
            description: {
                en: "A research project for my Innovation and Technology Watch course. In a team of 4, we explored object recognition algorithms in machine learning. I experimented with TensorFlow, using and comparing different pre-trained models after following TensorFlow tutorials.",
                fr: "Le projet de session de mon cours d'Innovation et veille technologique. En équipe de 4 nous devions rechercher une technologie et créer chacun un projet prototype sur le sujet. Nous avons choisi d'explorer les algorithmes de ML d'identification d'objets. J'ai décidé pour mon prototype d'expérimenter avec TensorFlow. J'ai choisi d'utiliser un modèle préentrainé de TensorFlow Hub, puis d'en utiliser plusieurs pour les comparer après avoir écrit l'algorithme en suivant les nombreux tutoriels de TensorFlow."
            },
            technologies: [
                { name: "Python", image: "images/python.jpg" },
                { name: "TensorFlow", image: "images/tensorflow.png" }
            ],
            links: [],
            image: null
        }
    ],

    education: [
        {
            id: "education1",
            period: {
                en: "Fall 2024 - Present",
                fr: "Automne 2024 à aujourd'hui"
            },
            institution: "Université Laval",
            degree: {
                en: "Bachelor's degree student in Computer Science - Université Laval",
                fr: "Baccalauréat en informatique - Université Laval"
            },
            program: {
                en: "Program",
                fr: "Programme"
            },
            programLink: "https://www.ulaval.ca/etudes/programmes/baccalaureat-en-informatique",
            description: {
                en: "I am currently continuing my DEC+BAC program at Université Laval. I am in my second semester.",
                fr: "Je continue aujourd'hui mon parcours DEC+BAC à l'Université Laval. J'en suis à ma deuxième session."
            },
            logo: "images/ulaval.png"
        },
        {
            id: "education2",
            period: {
                en: "Fall 2021 - Spring 2024",
                fr: "Automne 2021 à printemps 2024"
            },
            institution: "Cégep de Sainte-Foy",
            degree: {
                en: "Computer Science Technology - Cégep de Sainte-Foy",
                fr: "Techniques de l'informatique - Cégep de Sainte-Foy"
            },
            program: {
                en: "Program",
                fr: "Programme"
            },
            programLink: "https://www.csfoy.ca/programmes/tous-les-programmes/programmes-techniques/techniques-de-linformatique-programmation-web-mobile-et-jeux-video",
            description: {
                en: "My studies at Cégep de Sainte-Foy was the start of my career in IT. I learned more than programming languages: I learned best practices, adaptability, and teamwork. We were rigorously corrected to be at the best of the Clean Code practices and Object Oriented Development. Most of the assignments were given in as User stories and were used to build a Test Driven Development cycle.",
                fr: "Ma formation au Cégep de Sainte-Foy a été le départ de ma carrière en informatique. J'y ai appris plus que des langages de programmation : j'ai appris les meilleures pratiques, l'adaptabilité et le travail d'équipe. Nous avons été rigoureusement corrigés pour être au meilleur des pratiques Clean Code et du Développement Orienté Objet. La plupart des travaux ont été confiées sous forme de user stories et ont été utilisées pour construire un cycle de développement piloté par les tests (TDD)."
            },
            logo: "images/cegep.png"
        }
    ],

    experience: [
        {
            id: "experience3",
            period: {
                en: "March 2025 - Today",
                fr: "Mars 2025 à aujourd'hui"
            },
            company: "MAMH - Ministère des Affaires Municipales et de l'Habitation",
            role: {
                en: "Student programmer analyst",
                fr: "Étudiant programmeur analyste"
            },
            description: {
                en: "This highly rewarding experience allowed me to further develop as a developer by offering challenges and guidance that align very well with a university-level internship. I worked with a remarkable team that always strives for quality and efficiency in its projects.",
                fr: "Cette expérience très valorisante m'a permis de me développer davantage en tant que développeur en m'offrant des défis et conseils qui correspondent très bien à un stage de niveau universitaire. J'ai travaillé avec une équipe formidable qui cherche toujours la qualité et l'efficacité dans les projets."
            },
            logo: "images/mamh.png",
            technologies: [
                { name: "ASP.NET", image: "images/aspdotnet.png" },
                { name: "Blazor", image: "images/blazor.png" }
            ]
        },
        {
            id: "experience2",
            period: {
                en: "March 2024 - May 2024",
                fr: "Mars 2024 à Mai 2024"
            },
            company: "Libéo",
            role: {
                en: "Back-End Web Development Intern",
                fr: "Stagiaire en développement web back-end"
            },
            description: {
                en: "The variety of projects at Libéo convinced me to do my internship there. I developed Drupal modules and integrated features into websites. I also did some QA testing.",
                fr: "Les possibilités offertes par la grande diversité de projets de Libéo m'ont convaincu d'y faire mon stage de fin d'études. J'ai développé des modules pour Drupal et intégré des fonctionnalités sur les sites web. J'ai aussi fait un peu de QA en dev."
            },
            logo: "images/libeo.png",
            technologies: [
                { name: "Drupal", image: "images/drupal.png" },
                { name: "PHP", image: "images/php.jpg" }
            ]
        },
        {
            id: "experience1",
            period: {
                en: "May 2022 - August 2023",
                fr: "Mai 2022 à Août 2023"
            },
            company: "AMP - Autorité des marchés publics",
            role: {
                en: "Web Development Intern - IT Department",
                fr: "Stagiaire en programmation web à la direction des technologies de l'information"
            },
            description: {
                en: "My first job in IT. I tested my skills for the first time. I developed PowerApps applications as proof-of-concept projects. I also worked on a Vue.js-based deadline calculator redesign. These projects confirmed my interest in web development.",
                fr: "Mon tout premier emploi dans le domaine de l'informatique. Je mettais mes compétences à l'épreuve pour la première fois. J'ai accompli des tâches qui m'ont permis d'apprendre tout en repoussant mes limites. J'ai créé plusieurs applications Powerapps qui ont servi de preuves de concept. J'ai travaillé à la refonte d'une calculette de délais en VueJs. Ces projets m'ont confirmé que le web est un domaine qui m'intéresse."
            },
            logo: "images/amp.png",
            technologies: [
                { name: "Vue.js", image: "images/vue.png" },
                { name: "TYPO3", image: "images/typo3.jpeg" },
                { name: "PowerApps", image: "images/powerapps.png" }
            ]
        }
    ],

    passions: [
        {
            id: "passion1",
            title: {
                en: "Active",
                fr: "Actif"
            },
            description: {
                en: "I enjoy hiking and skiing and have been practicing fencing for two years.",
                fr: "Je fais de la randonnée et du ski et je pratique l'escrime depuis maintenant deux ans."
            }
        },
        {
            id: "passion2",
            title: {
                en: "Adventurer",
                fr: "Imaginatif"
            },
            description: {
                en: "My favorite hobby is gaming. As a developper I like to understand the systems behind the games and use it as inspiration for my projects. My favorite genre is RPGs with a focus on immersion, both as old as 2007 or recent. My favorite titles include Cyberpunk 2077, Baldur's Gate 3, The Elder Scrolls, Fallout and Mass Effect.",
                fr: "Mon passe-temps préféré est les jeux vidéo. En tant que développeur, j'aime comprendre les systèmes derrière les jeux et m'en inspirer pour mes projets. Mon genre préféré est celui des RPG axés sur l'immersion, qu'ils soient aussi anciens que 2007 ou récents. Mes titres préférés incluent Cyberpunk 2077, Baldur's Gate 3, The Elder Scrolls, Fallout et Mass Effect."
            }
        },
        {
            id: "passion3",
            title: {
                en: "Gamedev",
                fr: "Gamedev"
            },
            description: {
                en: "I have been developing video games since high school, where I participated in two years of the Fusion Jeunesse competition and won awards. Over time, I have created many small and fun games in my free time. Some have reached a wider audience than I expected :",
                fr: "Je développe des jeux vidéos depuis le secondaire, où j'ai participé à deux années de la compétition Fusion Jeunesse et remporté des prix. Au fil du temps j'ai développé plusieurs jeux vidéos ludiques et légers par moi-même par temps libre. Certains ont obtenu un public dépasssant mes attentes :"
            },
            links: [
                {
                    text: "Construct 3:",
                    url: "https://www.construct.net/en/free-online-games/profile/soupmaster-617907"
                },
                {
                    text: "Itch.io:",
                    url: "https://soup-master.itch.io/"
                }
            ],
            iframes: [
                {
                    src: "https://itch.io/embed/2967965?linkback=true&border_width=2&bg_color=ecd3b1&fg_color=222222&link_color=9738a6&border_color=333333",
                    width: "554",
                    height: "169",
                    title: "Last Stand by SoupMaster",
                    url: "https://soup-master.itch.io/last-stand"
                },
                {
                    src: "https://itch.io/embed/1903574?linkback=true&border_width=2&bg_color=327345&fg_color=ffffff&link_color=b86f50&border_color=08c4d0",
                    width: "554",
                    height: "169",
                    title: "Throw a potato by SoupMaster",
                    url: "https://soup-master.itch.io/throw-a-potato"
                },
                {
                    src: "https://itch.io/embed/1904484?linkback=true&border_width=2&bg_color=0f0f0f&fg_color=ff1b1b&link_color=ff0707&border_color=333333",
                    width: "554",
                    height: "169",
                    title: "Executor by SoupMaster",
                    url: "https://soup-master.itch.io/executor"
                }
            ]
        }
    ]
};
