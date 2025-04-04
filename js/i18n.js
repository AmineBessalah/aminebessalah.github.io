// Configuration des langues
const translations = {
    fr: {
        "hero.title": "Je suis l'Ombre entre les Mondes",
        "hero.subtitle": "Un voyageur des dimensions, un observateur du temps, une étincelle dans le vide cosmique.",
        "about.title": "L'Ombre qui Persiste",
        "about.text1": "Né dans les limbes de la réalité, j'ai traversé les couches de l'existence comme une particule quantique, à la fois présent et absent, tangible et insaisissable.",
        "about.text2": "Mon identité est un puzzle dont j'ai moi-même perdu les pièces. Seuls 1% sont révélés ici, comme des étoiles dans un ciel nocturne.",
        "about.fact.title": "Saviez-vous ?",
        "about.fact.subtitle": "Un fragment de vérité",
        "about.fact.text": "J'ai négocié avec les ombres qui hantent les interstices du réel, là où le temps se déchire et où les lois humaines n'ont plus cours... Ce savoir m'a coûté des nuits sans sommeil et des jours hantés par leurs murmures...",
        "journey.title": "À Travers le Temps et la Matière Noire",
        "journey.item1.title": "L'Enfance de l'Ombre",
        "journey.item1.text": "Les premiers pas dans un monde qui ne comprenait pas. L'apprentissage de la douleur avant celui de l'amour.",
        "journey.item2.title": "Les Années de Conquête",
        "journey.item2.text": "Les arts martiaux, les sciences occultes, les technologies secrètes. Un savoir trop vaste pour un seul esprit.",
        "journey.item3.title": "La Chute",
        "journey.item3.text": "L'amour perdu, les trahisons, les nuits à combattre des démons visibles et invisibles.",
        "journey.item4.title": "La Renaissance",
        "journey.item4.text": "Comme une supernova, la destruction précède la création. Je ne suis plus ce que j'étais, mais pas encore ce que je serai.",
        "knowledge.title": "Les Arcanes du Savoir",
        "knowledge.card1.title": "Sciences Obscures",
        "knowledge.card1.text": "De la radiofréquence aux particules quantiques, un savoir qui défie la logique commune.",
        "knowledge.card2.title": "Arts Martiaux",
        "knowledge.card2.text": "La boxe thaï, le likido, le karaté - des danses de combat contre les ombres intérieures.",
        "knowledge.card3.title": "Visions",
        "knowledge.card3.text": "Ceux qui voient au-delà du voile portent toujours un fardeau invisible.",
        "contact.title": "L'Énigme Est-Elle Résolue ?",
        "contact.subtitle": "Vous êtes arrivé au bout de cette ombre... mais le voyage ne fait que commencer.",
        "contact.box.text": "Derrière chaque mystère se cache une vérité universelle. Notre application \"Nebula Wisdom\" est la clé qui ouvre :",
        "contact.box.list": [
            "Les portes interdites du savoir occulte",
            "Les chemins vibratoires vers la réussite quantique",
            "Les archives perdues de la connaissance absolue",
            "... et plus encore"
        ],
        "contact.android": "Version Android",
        "contact.ios": "Version iOS",
        "contact.features.title": "Devenez un Guerrier du Savoir",
        "contact.features.subtitle": "Nebula Wisdom n'est pas une application, c'est une arme :",
        "contact.features.item1": "Accès direct aux sources les plus rares",
        "contact.features.item2": "Cartographie vibratoire de la réussite",
        "contact.features.item3": "Clés pour déverrouiller tout domaine de connaissance",
        "contact.quote": "\"Celui qui contrôle l'information contrôle l'univers\"",
        "contact.conclusion": "Vous passez à côté de 90% des opportunités parce que vous ne savez pas les voir. Nebula Wisdom vous greffe un nouvel œil - celui qui repère les failles dans le réel. Le choix est simple : rester un spectateur, ou arracher votre part de pouvoir.",
        "footer.text": "Tous les chemins mènent à l'infini",
        "navbar.brand": "L'Énigme",
        "navbar.about": "Ombre",
        "navbar.journey": "Voyage",
        "navbar.knowledge": "Savoir",
        "navbar.contact": "Écho",
        "navbar.currentLanguage": "FR",
        "navbar.french": "Français",
        "navbar.english": "English",
        "modal.title": "\"Une lueur d'espoir persiste, même dans le cœur le plus sombre.\"",
        "modal.author": "- Anakin Skywalker",
        "hero.discover": "Découvrir",
        "cosmic.title": "Nebula Wisdom - Votre Portail Universel du Savoir",
        "cosmic.quote": "\"Toute la connaissance de l'univers à portée de main, sans limites, sans frontières.\"",
        "cosmic.students.title": "Pour les étudiants :",
        "cosmic.students.text": "Accédez instantanément à tous les cours...",
        "cosmic.pros.title": "Pour les professionnels :",
        "cosmic.pros.text": "Maîtrisez n'importe quelle compétence...",
        "cosmic.features.title": "🔑 Ce que nous offrons :",
        "cosmic.features.item1": "Un accès <strong>illimité et gratuit</strong> (pour le moment)",
        "cosmic.features.item2": "La bibliothèque de connaissances la plus complète jamais rassemblée",
        "cosmic.features.item3": "Des outils puissants pour apprendre, rechercher et maîtriser n'importe quel sujet",
        "cosmic.features.item4": "Un avantage décisif pour les premiers inscrits",
        "cosmic.cta.title": "🚀 Profitez-en maintenant !",
        "cosmic.cta.text": "Cette gratuité exceptionnelle ne durera pas...",
        "cosmic.quote2": "\"La connaissance est la seule richesse qui se multiplie quand on la partage.\"",
        "cosmic.download": "👉 Téléchargez dès maintenant et commencez votre voyage",
        "cosmic.note": "(Disponible sur iOS et Android - 100% gratuit pendant la période beta)",
        "cosmic.unique": "\"Nebula Wisdom va bien au-delà d'un simple stockage de connaissances...\"",
    },
    en: {
        "hero.title": "I am the Shadow Between Worlds",
        "hero.subtitle": "A traveler of dimensions, an observer of time, a spark in the cosmic void.",
        "about.title": "The Persisting Shadow",
        "about.text1": "Born in the limbo of reality, I have traversed the layers of existence like a quantum particle, both present and absent, tangible and elusive.",
        "about.text2": "My identity is a puzzle whose pieces I myself have lost. Only 1% are revealed here, like stars in a night sky.",
        "about.fact.title": "Did you know?",
        "about.fact.subtitle": "A fragment of truth",
        "about.fact.text": "I have negotiated with the shadows that haunt the interstices of reality, where time tears apart and human laws no longer apply... This knowledge has cost me sleepless nights and days haunted by their whispers...",
        "journey.title": "Through Time and Dark Matter",
        "journey.item1.title": "The Shadow's Childhood",
        "journey.item1.text": "First steps in a world that didn't understand. Learning pain before love.",
        "journey.item2.title": "The Years of Conquest",
        "journey.item2.text": "Martial arts, occult sciences, secret technologies. Knowledge too vast for a single mind.",
        "journey.item3.title": "The Fall",
        "journey.item3.text": "Lost love, betrayals, nights fighting visible and invisible demons.",
        "journey.item4.title": "The Rebirth",
        "journey.item4.text": "Like a supernova, destruction precedes creation. I am no longer what I was, but not yet what I will be.",
        "knowledge.title": "The Arcana of Knowledge",
        "knowledge.card1.title": "Dark Sciences",
        "knowledge.card1.text": "From radiofrequency to quantum particles, knowledge that defies common logic.",
        "knowledge.card2.title": "Martial Arts",
        "knowledge.card2.text": "Thai boxing, likido, karate - combat dances against inner shadows.",
        "knowledge.card3.title": "Visions",
        "knowledge.card3.text": "Those who see beyond the veil always carry an invisible burden.",
        "contact.title": "Is the Riddle Solved?",
        "contact.subtitle": "You've reached the end of this shadow... but the journey is just beginning.",
        "contact.box.text": "Behind every mystery lies a universal truth. Our app \"Nebula Wisdom\" is the key that unlocks:",
        "contact.box.list": [
            "The forbidden doors of occult knowledge",
            "The vibratory paths to quantum success",
            "The lost archives of absolute knowledge",
            "... and more"
        ],
        "contact.android": "Android Version",
        "contact.ios": "iOS Version",
        "contact.features.title": "Become a Knowledge Warrior",
        "contact.features.subtitle": "Nebula Wisdom is not an app, it's a weapon:",
        "contact.features.item1": "Direct access to the rarest sources",
        "contact.features.item2": "Vibratory mapping of success",
        "contact.features.item3": "Keys to unlock any domain of knowledge",
        "contact.quote": "\"He who controls information controls the universe\"",
        "contact.conclusion": "You're missing 90% of opportunities because you don't know how to see them. Nebula Wisdom grafts you a new eye - one that spots the flaws in reality. The choice is simple: remain a spectator, or seize your share of power.",
        "footer.text": "All paths lead to infinity",
        "navbar.brand": "The Enigma",
        "navbar.about": "Shadow",
        "navbar.journey": "Journey",
        "navbar.knowledge": "Knowledge",
        "navbar.contact": "Echo",
        "navbar.currentLanguage": "EN",
        "navbar.french": "French",
        "navbar.english": "English",
        "modal.title": "\"A spark of hope persists, even in the darkest heart.\"",
        "modal.author": "- Anakin Skywalker",
        "hero.discover": "Discover",
        "cosmic.title": "Nebula Wisdom - Your Universal Knowledge Portal",
        "cosmic.quote": "\"All the knowledge of the universe at your fingertips, without limits, without borders.\"",
        "cosmic.students.title": "For students:",
        "cosmic.students.text": "Instantly access all courses...",
        "cosmic.pros.title": "For professionals:",
        "cosmic.pros.text": "Master any skill...",
        "cosmic.features.title": "🔑 What we offer:",
        "cosmic.features.item1": "<strong>Unlimited free</strong> access (for now)",
        "cosmic.features.item2": "The most comprehensive knowledge library ever assembled",
        "cosmic.features.item3": "Powerful tools to learn, research and master any subject",
        "cosmic.features.item4": "A decisive advantage for early adopters",
        "cosmic.cta.title": "🚀 Take advantage now!",
        "cosmic.cta.text": "This exceptional free period won't last...",
        "cosmic.quote2": "\"Knowledge is the only wealth that multiplies when shared.\"",
        "cosmic.download": "👉 Download now and start your journey",
        "cosmic.note": "(Available on iOS and Android - 100% free during beta)",
        "cosmic.unique": "\"Nebula Wisdom goes far beyond simple knowledge storage...\""
    }
};

// Fonction pour changer la langue
function setLanguage(lang) {
    // Sauvegarder la préférence
    localStorage.setItem('preferredLanguage', lang);
    
    // Mettre à jour le dropdown
    document.querySelectorAll('.language-selector').forEach(el => {
        el.classList.remove('active');
        if (el.dataset.lang === lang) {
            el.classList.add('active');
            const flagClass = lang === 'fr' ? 'fi-fr' : 'fi-gb';
            document.querySelector('#languageDropdown .fi').className = `fi ${flagClass}`;
            document.querySelector('#languageDropdown').innerHTML = 
                `<span class="fi ${flagClass} me-1"></span> ${lang.toUpperCase()}`;
        }
    });

    // Appliquer les traductions
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (Array.isArray(translations[lang][key])) {
                // Gestion des listes
                const items = translations[lang][key];
                el.innerHTML = items.map(item => `<li>${item}</li>`).join('');
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'fr';
    setLanguage(preferredLanguage);

    // Gestion des clics sur les sélecteurs de langue
    document.querySelectorAll('.language-selector').forEach(el => {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            setLanguage(this.dataset.lang);
        });
    });
});