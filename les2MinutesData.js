var Les2Minutes = Les2Minutes || {};

var playerData = {
  "base_url": "http://abauchu.net/les2minutes/media/",
  "episodes": [
    {
      "title": "2000 licenciements locaux",
      "group": "Columbo du peuple",
      "id": "0007"
    },
    {
      "title": "Abonnement au magazine",
      "group": "Vente par téléphone",
      "id": "0008"
    },
    {
      "title": "Abonnement au service de livraison",
      "group": "Vente par téléphone",
      "id": "0009"
    },
    {
      "title": "Accueillir les JO",
      "group": "Divers",
      "id": "0011"
    },
    {
      "title": "Achat d'un Musicbox",
      "group": "Divers",
      "id": "0012"
    },
    {
      "title": "Acte de succession",
      "group": "Columbo du peuple",
      "id": "0013"
    },
    {
      "title": "Agence de pub",
      "group": "Agence de pub",
      "id": "0014"
    },
    {
      "title": "Aiguisage de couteaux",
      "group": "Vente par téléphone",
      "id": "0015"
    },
    {
      "title": "Alcool, drogue ou quelque chose",
      "group": "Série policière",
      "id": "0017"
    },
    {
      "title": "Alexandre consolé par Monsieur Bonheur",
      "group": "Vie quotidienne",
      "id": "0019"
    },
    {
      "title": "Aléas du direct",
      "group": "Emissions TV",
      "id": "0018"
    },
    {
      "title": "Anniversaire du patron",
      "group": "Vie d'entreprise",
      "id": "0021"
    },
    {
      "title": "Annonce avec bonne humeur",
      "group": "Ca se dispute",
      "id": "0022"
    },
    {
      "title": "Annonceur embêtant le perchiste",
      "group": "Ca se dispute",
      "id": "0023"
    },
    {
      "title": "Annonceur grippe",
      "group": "Ca se dispute",
      "id": "0024"
    },
    {
      "title": "Annonceur sans assurance",
      "group": "La science et vous",
      "id": "0025"
    },
    {
      "title": "Appel au directeur du FBI",
      "group": "X-files du peuple",
      "id": "0028"
    },
    {
      "title": "Appel à toute heure",
      "group": "Urgences du peuple",
      "id": "0027"
    },
    {
      "title": "Arthur chanteur",
      "group": "Chansons",
      "id": "0029"
    },
    {
      "title": "Arthur chanteur : le retour",
      "group": "Chansons",
      "id": "0030"
    },
    {
      "title": "Artistes amateurs",
      "group": "Emissions TV",
      "id": "0031"
    },
    {
      "title": "Artistes face aux fans",
      "group": "Divers",
      "id": "0032"
    },
    {
      "title": "Assurance automobile",
      "group": "Vente par téléphone",
      "id": "0033"
    },
    {
      "title": "Attente de l'escouade des artificiers",
      "group": "Série policière",
      "id": "0034"
    },
    {
      "title": "Audition d'un saxophonisteichanteur",
      "group": "Auditions",
      "id": "0037"
    },
    {
      "title": "Audition de Robert Vol.1",
      "group": "Auditions",
      "id": "0035"
    },
    {
      "title": "Audition de Robert Vol.2",
      "group": "Auditions",
      "id": "0036"
    },
    {
      "title": "Autoradio",
      "group": "Divers",
      "id": "0040"
    },
    {
      "title": "Avalanche",
      "group": "Sports",
      "id": "0041"
    },
    {
      "title": "Avant braquage de banque",
      "group": "Divers",
      "id": "0042"
    },
    {
      "title": "Avion pour un congrès",
      "group": "Théâtre de boulevard",
      "id": "0043"
    },
    {
      "title": "Avocats aux toilettes",
      "group": "Tribunal du peuple",
      "id": "0044"
    },
    {
      "title": "Avoir sa propre entreprise",
      "group": "Divers",
      "id": "0045"
    },
    {
      "title": "Bain de champagne",
      "group": "Columbo du peuple",
      "id": "0046"
    },
    {
      "title": "Bichdui VS Bouchkui",
      "group": "Informations Quizz",
      "id": "0048"
    },
    {
      "title": "Bidru VS Drubi",
      "group": "Informations Quizz",
      "id": "0049"
    },
    {
      "title": "Billet de loterie gagnant",
      "group": "Columbo du peuple",
      "id": "0050"
    },
    {
      "title": "Bonbons super-pétouche",
      "group": "Monde de la pub",
      "id": "0051"
    },
    {
      "title": "Bordua VS Dubois",
      "group": "Informations Quizz",
      "id": "0052"
    },
    {
      "title": "Bouillon de culture",
      "group": "Emissions TV",
      "id": "0054"
    },
    {
      "title": "Boutique HiFi-vidéo-informatique",
      "group": "Commerces",
      "id": "0055"
    },
    {
      "title": "Boutique New Age",
      "group": "Commerces",
      "id": "0056"
    },
    {
      "title": "Brian de Palma",
      "group": "Cinéma",
      "id": "0057"
    },
    {
      "title": "Bug de l'an 2000",
      "group": "Vie quotidienne",
      "id": "0058"
    },
    {
      "title": "C'est Fabrice",
      "group": "Vie d'entreprise",
      "id": "0072"
    },
    {
      "title": "C'est beau",
      "group": "Chansons",
      "id": "0070"
    },
    {
      "title": "C'est belle une fille",
      "group": "Chansons",
      "id": "0071"
    },
    {
      "title": "C'est la vie",
      "group": "Chansons",
      "id": "0073"
    },
    {
      "title": "C'est une autre journée",
      "group": "Chansons",
      "id": "0075"
    },
    {
      "title": "Cadavre décapité",
      "group": "Série policière",
      "id": "0059"
    },
    {
      "title": "Cadeau de Saint-Valentin",
      "group": "Commerces",
      "id": "0060"
    },
    {
      "title": "Caméraman viré",
      "group": "Emissions TV",
      "id": "0061"
    },
    {
      "title": "Carole au bout du fil",
      "group": "Radio associative",
      "id": "0062"
    },
    {
      "title": "Carrière de chanteur",
      "group": "Artistes",
      "id": "0064"
    },
    {
      "title": "Cassette de répondeur",
      "group": "Vie quotidienne",
      "id": "0065"
    },
    {
      "title": "Cassette sur le chariot",
      "group": "Urgences du peuple",
      "id": "0066"
    },
    {
      "title": "Censure",
      "group": "Chansons",
      "id": "0069"
    },
    {
      "title": "Cette petite chose qui te sort du nez",
      "group": "Chansons",
      "id": "0076"
    },
    {
      "title": "Changement d'heure",
      "group": "Histoire",
      "id": "0077"
    },
    {
      "title": "Chanson romantique",
      "group": "Chansons",
      "id": "0078"
    },
    {
      "title": "Chanteur de grivois",
      "group": "Artistes",
      "id": "0079"
    },
    {
      "title": "Chantier de construction",
      "group": "Série policière",
      "id": "0080"
    },
    {
      "title": "Charlie et ses oeillères",
      "group": "Radio associative",
      "id": "0081"
    },
    {
      "title": "Chaussures pour Nathalie",
      "group": "Commerces",
      "id": "0082"
    },
    {
      "title": "Chercher un copain",
      "group": "Vie d'entreprise",
      "id": "0083"
    },
    {
      "title": "Chiasson VS Dupré",
      "group": "Informations Quizz",
      "id": "0084"
    },
    {
      "title": "Chirurgie magique",
      "group": "Vente par téléphone",
      "id": "0085"
    },
    {
      "title": "Choc électrique sur le coude",
      "group": "Chansons",
      "id": "0086"
    },
    {
      "title": "Christopher amoché sur la plage",
      "group": "Série policière",
      "id": "0087"
    },
    {
      "title": "City Zoiseaux",
      "group": "Radio positive",
      "id": "0088"
    },
    {
      "title": "Club vidéo",
      "group": "Vente par téléphone",
      "id": "0089"
    },
    {
      "title": "Cocktail avec un fournisseur",
      "group": "Vie d'entreprise",
      "id": "0090"
    },
    {
      "title": "Copie du testament de sa femme",
      "group": "Columbo du peuple",
      "id": "0106"
    },
    {
      "title": "Femme machiavélique",
      "group": "Columbo du peuple",
      "id": "0166"
    },
    {
      "title": "Georges et Robert jouent au crocket",
      "group": "Columbo du peuple",
      "id": "0183"
    },
    {
      "title": "Georges, Robert et leur chanson",
      "group": "Columbo du peuple",
      "id": "0184"
    },
    {
      "title": "Madeleine ne boit que du thé",
      "group": "Columbo du peuple",
      "id": "0320"
    },
    {
      "title": "Meurtre très décidé",
      "group": "Columbo du peuple",
      "id": "0340"
    },
    {
      "title": "Petite maison perdue dans les bois",
      "group": "Columbo du peuple",
      "id": "0383"
    },
    {
      "title": "Sam revient passer le weekend",
      "group": "Columbo du peuple",
      "id": "0449"
    },
    {
      "title": "Comité de visionnage",
      "group": "Cinéma",
      "id": "0092"
    },
    {
      "title": "Commande d'Airbus annulée",
      "group": "Columbo du peuple",
      "id": "0093"
    },
    {
      "title": "Commentaires de F1",
      "group": "Sports",
      "id": "0094"
    },
    {
      "title": "Commentateurs de foot en retard",
      "group": "Sports",
      "id": "0095"
    },
    {
      "title": "Comédies et dramatiques musicales",
      "group": "Divers",
      "id": "0091"
    },
    {
      "title": "Concentration",
      "group": "Monde de la pub",
      "id": "0096"
    },
    {
      "title": "Conférence pour désigner le président",
      "group": "Vie d'entreprise",
      "id": "0097"
    },
    {
      "title": "Consultation d'avocats au cas ou",
      "group": "Divers",
      "id": "0098"
    },
    {
      "title": "Consultation du répondeur",
      "group": "Vie quotidienne",
      "id": "0099"
    },
    {
      "title": "Consulter un psychologue de couple",
      "group": "Divers",
      "id": "0100"
    },
    {
      "title": "Contrôleur aérien",
      "group": "Vie d'entreprise",
      "id": "0104"
    },
    {
      "title": "Conversations en taxi",
      "group": "Vie quotidienne",
      "id": "0105"
    },
    {
      "title": "Corps carbonisé dans une ferme",
      "group": "X-files du peuple",
      "id": "0108"
    },
    {
      "title": "Corps dans le potager de la ferme",
      "group": "Tribunal du peuple",
      "id": "0109"
    },
    {
      "title": "Corps dans une malle dans le jardin",
      "group": "Tribunal du peuple",
      "id": "0110"
    },
    {
      "title": "Crickets sauve le monde",
      "group": "Série policière",
      "id": "0112"
    },
    {
      "title": "Critique de journal",
      "group": "Vie d'entreprise",
      "id": "0113"
    },
    {
      "title": "Culture",
      "group": "Emissions TV",
      "id": "0114"
    },
    {
      "title": "Albert Einstein",
      "group": "Célébrités mortes",
      "id": "0016"
    },
    {
      "title": "Dames de France Télécom",
      "group": "Divers",
      "id": "0115"
    },
    {
      "title": "Dans un bistrot complètement saoul",
      "group": "Tribunal du peuple",
      "id": "0117"
    },
    {
      "title": "Demande d'emprunt à la banque",
      "group": "Vie quotidienne",
      "id": "0122"
    },
    {
      "title": "Destin du mois",
      "group": "Vie quotidienne",
      "id": "0124"
    },
    {
      "title": "Dette",
      "group": "Vie quotidienne",
      "id": "0126"
    },
    {
      "title": "Dictée de Bernard Pivot",
      "group": "Emissions TV",
      "id": "0127"
    },
    {
      "title": "Didier et le grand argentier",
      "group": "Emissions TV",
      "id": "0128"
    },
    {
      "title": "Dieu fait sa pub",
      "group": "Agence de pub",
      "id": "0129"
    },
    {
      "title": "Diner d'affaires",
      "group": "Vie d'entreprise",
      "id": "0130"
    },
    {
      "title": "Discours présidentiel de Noël",
      "group": "Politique",
      "id": "0131"
    },
    {
      "title": "Discussion de couple",
      "group": "Vie quotidienne",
      "id": "0132"
    },
    {
      "title": "Disque à domicile",
      "group": "Vente par téléphone",
      "id": "0133"
    },
    {
      "title": "Distraite par un doute",
      "group": "Théâtre de boulevard",
      "id": "0134"
    },
    {
      "title": "Distributeur médical",
      "group": "Divers",
      "id": "0135"
    },
    {
      "title": "Don Juan",
      "group": "Divers",
      "id": "0136"
    },
    {
      "title": "Dossiers mélangés",
      "group": "Urgences du peuple",
      "id": "0137"
    },
    {
      "title": "Dossiers secrets télévisés",
      "group": "X-files du peuple",
      "id": "0138"
    },
    {
      "title": "Douze opérations",
      "group": "Urgences du peuple",
      "id": "0139"
    },
    {
      "title": "Drague sur Internet",
      "group": "Internet",
      "id": "0140"
    },
    {
      "title": "Duca VS Cadu",
      "group": "Informations Quizz",
      "id": "0141"
    },
    {
      "title": "Dur-dur mon CD",
      "group": "Chansons",
      "id": "0142"
    },
    {
      "title": "Débranchement des facultés cervicales",
      "group": "Urgences du peuple",
      "id": "0118"
    },
    {
      "title": "Défaitisme",
      "group": "Vie d'entreprise",
      "id": "0119"
    },
    {
      "title": "Défilé du 14 juillet",
      "group": "Espionnage",
      "id": "0120"
    },
    {
      "title": "Déguisé en Robocop et Lewinsky",
      "group": "Conte d'horreur",
      "id": "0121"
    },
    {
      "title": "Déposer des brevets",
      "group": "Divers",
      "id": "0123"
    },
    {
      "title": "Détournement via Internet",
      "group": "Tribunal du peuple",
      "id": "0125"
    },
    {
      "title": "Calembours Stupides! avec Michael Jackson, Bill Clinton",
      "group": "Emissions TV",
      "id": "0342"
    },
    {
      "title": "Paroles et...",
      "group": "Emissions TV",
      "id": "0373"
    },
    {
      "title": "Je bricole",
      "group": "Emissions TV",
      "id": "0216"
    },
    {
      "title": "Jumeaux triplés",
      "group": "Emissions TV",
      "id": "0226"
    },
    {
      "title": "Les espaces verts",
      "group": "Emissions TV",
      "id": "0287"
    },
    {
      "title": "Les esprit-se-rencontrent-tateurs",
      "group": "Emissions TV",
      "id": "0288"
    },
    {
      "title": "Sports et loisirs",
      "group": "Emissions TV",
      "id": "0466"
    },
    {
      "title": "Employé à la sueur de mon front",
      "group": "Vie d'entreprise",
      "id": "0145"
    },
    {
      "title": "Empreintes très relevées",
      "group": "Série policière",
      "id": "0146"
    },
    {
      "title": "En panne à Halloween",
      "group": "Conte d'horreur",
      "id": "0153"
    },
    {
      "title": "Encercler le secteur",
      "group": "Série policière",
      "id": "0148"
    },
    {
      "title": "Enduire de marinade",
      "group": "Radio Sexe",
      "id": "0149"
    },
    {
      "title": "Enfants abandonnés",
      "group": "Ca se dispute",
      "id": "0150"
    },
    {
      "title": "Enlever un morceau des intestins",
      "group": "Urgences du peuple",
      "id": "0152"
    },
    {
      "title": "Enlèvement du fils Dupont",
      "group": "Divers",
      "id": "0151"
    },
    {
      "title": "Enregistrement de pub",
      "group": "Divers",
      "id": "0154"
    },
    {
      "title": "Enterrement",
      "group": "Vie quotidienne",
      "id": "0155"
    },
    {
      "title": "Entretien d'embauche",
      "group": "Vie d'entreprise",
      "id": "0156"
    },
    {
      "title": "Entretien d'embauche d'une femme",
      "group": "Vie d'entreprise",
      "id": "0157"
    },
    {
      "title": "Entretien paysager",
      "group": "Vente par téléphone",
      "id": "0158"
    },
    {
      "title": "Espion à bord",
      "group": "Star Trek du peuple",
      "id": "0159"
    },
    {
      "title": "Et pourtant",
      "group": "Divers",
      "id": "0160"
    },
    {
      "title": "Expédition chez les Incas",
      "group": "Divers",
      "id": "0161"
    },
    {
      "title": "Faire appel à un détective privé",
      "group": "Divers",
      "id": "0162"
    },
    {
      "title": "Fan de Georges Biburli",
      "group": "Divers",
      "id": "0163"
    },
    {
      "title": "Fanny et Pipi",
      "group": "Emissions TV",
      "id": "0164"
    },
    {
      "title": "Faut pas",
      "group": "Chansons",
      "id": "0165"
    },
    {
      "title": "Femme partie avec une valise",
      "group": "Urgences du peuple",
      "id": "0167"
    },
    {
      "title": "Feuilleton américain",
      "group": "Divers",
      "id": "0168"
    },
    {
      "title": "Film avec effets spéciaux",
      "group": "X-files du peuple",
      "id": "0169"
    },
    {
      "title": "Partie 1",
      "group": "Cinéma",
      "id": "0170"
    },
    {
      "title": "Partie 2",
      "group": "Cinéma",
      "id": "0171"
    },
    {
      "title": "Finale en musique jazz",
      "group": "Leçons de musique",
      "id": "0172"
    },
    {
      "title": "Finales en chanson",
      "group": "Divers",
      "id": "0173"
    },
    {
      "title": "Formules de politesse",
      "group": "Vie quotidienne",
      "id": "0174"
    },
    {
      "title": "Gagner 12 millions",
      "group": "Divers",
      "id": "0179"
    },
    {
      "title": "Gagner au loto",
      "group": "Divers",
      "id": "0180"
    },
    {
      "title": "Gardien d'un condamné",
      "group": "Divers",
      "id": "0182"
    },
    {
      "title": "Gardien de sécurité",
      "group": "Divers",
      "id": "0181"
    },
    {
      "title": "Gestion des stocks",
      "group": "Divers",
      "id": "0185"
    },
    {
      "title": "Grand manitou",
      "group": "Divers",
      "id": "0186"
    },
    {
      "title": "Gueule de bois",
      "group": "Divers",
      "id": "0187"
    },
    {
      "title": "Heure de la retraite pour Étienne",
      "group": "Divers",
      "id": "0189"
    },
    {
      "title": "Histoire américaine",
      "group": "Chansons",
      "id": "0190"
    },
    {
      "title": "Histoire de la langue française",
      "group": "Histoire",
      "id": "0191"
    },
    {
      "title": "Histoire sur répondeur",
      "group": "Vie quotidienne",
      "id": "0192"
    },
    {
      "title": "Historique des jeux vidéos",
      "group": "Histoire",
      "id": "0193"
    },
    {
      "title": "Hommage à Jacques Martin",
      "group": "Chansons",
      "id": "0194"
    },
    {
      "title": "Homme trompé",
      "group": "Théâtre de boulevard",
      "id": "0195"
    },
    {
      "title": "Hôpital complètement engorgé",
      "group": "Urgences du peuple",
      "id": "0196"
    },
    {
      "title": "Il ne fumait pas la pipe",
      "group": "Radio associative",
      "id": "0197"
    },
    {
      "title": "Ils peuvent remettre leur pantalon",
      "group": "Urgences du peuple",
      "id": "0198"
    },
    {
      "title": "Inspecteur de police",
      "group": "Série policière",
      "id": "0200"
    },
    {
      "title": "Inspiration",
      "group": "Divers",
      "id": "0201"
    },
    {
      "title": "Interrogateur peu confiant",
      "group": "Série policière",
      "id": "0202"
    },
    {
      "title": "Interruptions de conversation",
      "group": "Divers",
      "id": "0203"
    },
    {
      "title": "Interview d'un ministre",
      "group": "Divers",
      "id": "0206"
    },
    {
      "title": "Interview de Bill Gates",
      "group": "Divers",
      "id": "0204"
    },
    {
      "title": "Interview de Jeff Bretelles",
      "group": "Divers",
      "id": "0205"
    },
    {
      "title": "Interview de criminels",
      "group": "Divers",
      "id": "0209"
    },
    {
      "title": "Interview politique par Delarive",
      "group": "Divers",
      "id": "0208"
    },
    {
      "title": "Interviewer interviewé",
      "group": "Divers",
      "id": "0207"
    },
    {
      "title": "Introduction aux 2 minutes du peuple",
      "group": "Divers",
      "id": "0210"
    },
    {
      "title": "Inventions",
      "group": "Histoire",
      "id": "0211"
    },
    {
      "title": "Invités divisés",
      "group": "Ca se dispute",
      "id": "0212"
    },
    {
      "title": "J'aime pas ça",
      "group": "Chansons",
      "id": "0214"
    },
    {
      "title": "J'me casse la gueule en direct",
      "group": "Emissions TV",
      "id": "0221"
    },
    {
      "title": "J'suis un raté",
      "group": "Chansons",
      "id": "0225"
    },
    {
      "title": "Approche des côtes américaines",
      "group": "Jacques Cartier",
      "id": "0005"
    },
    {
      "title": "Cap droit devant",
      "group": "Jacques Cartier",
      "id": "0004"
    },
    {
      "title": "Débarquement",
      "group": "Jacques Cartier",
      "id": "0006"
    },
    {
      "title": "Départ de France",
      "group": "Jacques Cartier",
      "id": "0003"
    },
    {
      "title": "Envoyé en mission",
      "group": "Jacques Cartier",
      "id": "0002"
    },
    {
      "title": " 1534",
      "group": "Jacques Cartier",
      "id": "0213"
    },
    {
      "title": "Jamais touché un ordinateur",
      "group": "Commerces",
      "id": "0215"
    },
    {
      "title": "Je passe mon temps",
      "group": "Emissions TV",
      "id": "0217"
    },
    {
      "title": "Je t'aime, tu m'aimes",
      "group": "Emissions TV",
      "id": "0218"
    },
    {
      "title": "Jeu de phrases, jeu de nazes",
      "group": "Divers",
      "id": "0219"
    },
    {
      "title": "Jeux vidéos en 3D",
      "group": "Divers",
      "id": "0220"
    },
    {
      "title": "John Glen",
      "group": "NASA du peuple",
      "id": "0222"
    },
    {
      "title": "Jouer aux médias",
      "group": "Série policière",
      "id": "0223"
    },
    {
      "title": "Journal télévisé",
      "group": "Divers",
      "id": "0224"
    },
    {
      "title": "Kerbout VS Berkout",
      "group": "Informations Quizz",
      "id": "0227"
    },
    {
      "title": "L'accordéon",
      "group": "Leçons de musique",
      "id": "0230"
    },
    {
      "title": "L'arnaque automobile",
      "group": "Commerces",
      "id": "0246"
    },
    {
      "title": "L'arrivée d'Internet",
      "group": "Internet",
      "id": "0247"
    },
    {
      "title": "L'ennui porte conseil",
      "group": "Emissions TV",
      "id": "0264"
    },
    {
      "title": "L'impresario",
      "group": "Divers",
      "id": "0310"
    },
    {
      "title": "L'interphone",
      "group": "Divers",
      "id": "0311"
    },
    {
      "title": "L'oiseau Sophie",
      "group": "Série policière",
      "id": "0314"
    },
    {
      "title": "L'orgue",
      "group": "Leçons de musique",
      "id": "0315"
    },
    {
      "title": "L'émotion dans les messages",
      "group": "Divers",
      "id": "0263"
    },
    {
      "title": "La PS2",
      "group": "Divers",
      "id": "0243"
    },
    {
      "title": "La banque",
      "group": "Divers",
      "id": "0228"
    },
    {
      "title": "La batterie",
      "group": "Leçons de musique",
      "id": "0229"
    },
    {
      "title": "La contrebasse",
      "group": "Leçons de musique",
      "id": "0231"
    },
    {
      "title": "La culture et vous",
      "group": "Divers",
      "id": "0232"
    },
    {
      "title": "La fréquence du peuple",
      "group": "Radio associative",
      "id": "0234"
    },
    {
      "title": "La fureur",
      "group": "Emissions TV",
      "id": "0235"
    },
    {
      "title": "La fête de Noël",
      "group": "Emissions TV",
      "id": "0233"
    },
    {
      "title": "La guitare",
      "group": "Leçons de musique",
      "id": "0236"
    },
    {
      "title": "1er épisode: Héritage",
      "group": "La maison Slangster",
      "id": "0188"
    },
    {
      "title": "Ambiance détestable",
      "group": "La maison Slangster",
      "id": "0020"
    },
    {
      "title": "L'exorciste",
      "group": "La maison Slangster",
      "id": "0308"
    },
    {
      "title": "Maison à vendre",
      "group": "La maison Slangster",
      "id": "0321"
    },
    {
      "title": "Parler à moitié",
      "group": "La maison Slangster",
      "id": "0372"
    },
    {
      "title": "Un cygne sur l'étang",
      "group": "La maison Slangster",
      "id": "0491"
    },
    {
      "title": "La messe",
      "group": "Divers",
      "id": "0238"
    },
    {
      "title": "La modernisation",
      "group": "Vie d'entreprise",
      "id": "0239"
    },
    {
      "title": "La musique japonaise",
      "group": "Leçons de musique",
      "id": "0240"
    },
    {
      "title": "La potiche",
      "group": "Cinéma",
      "id": "0241"
    },
    {
      "title": "La première d'un groupe",
      "group": "Divers",
      "id": "0242"
    },
    {
      "title": "La radio à l'époque de la guerre",
      "group": "Divers",
      "id": "0244"
    },
    {
      "title": "La rentrée des classes",
      "group": "Divers",
      "id": "0245"
    },
    {
      "title": "La santé de nos parents",
      "group": "Divers",
      "id": "0248"
    },
    {
      "title": "La technologie",
      "group": "Chansons",
      "id": "0249"
    },
    {
      "title": "La télé en direct",
      "group": "Emissions TV",
      "id": "0250"
    },
    {
      "title": "La vie en sous-marin",
      "group": "Divers",
      "id": "0252"
    },
    {
      "title": "La voix humaine",
      "group": "Leçons de musique",
      "id": "0253"
    },
    {
      "title": "Laisser un message à la porte",
      "group": "Divers",
      "id": "0237"
    },
    {
      "title": "Laver la vaisselle dans un bar",
      "group": "Théâtre de boulevard",
      "id": "0251"
    },
    {
      "title": "Le Morgan Show",
      "group": "Divers",
      "id": "0262"
    },
    {
      "title": "Le VTT",
      "group": "Ca se dispute",
      "id": "0307"
    },
    {
      "title": "Le blues",
      "group": "Leçons de musique",
      "id": "0254"
    },
    {
      "title": "Le cinéma d'époque",
      "group": "Cinéma",
      "id": "0256"
    },
    {
      "title": "Le gaffeur",
      "group": "Divers",
      "id": "0258"
    },
    {
      "title": "Le langage des films américains",
      "group": "Cinéma",
      "id": "0259"
    },
    {
      "title": "Le mari vient de sortir",
      "group": "Théâtre de boulevard",
      "id": "0260"
    },
    {
      "title": "Le métro",
      "group": "Divers",
      "id": "0261"
    },
    {
      "title": "Le paradis",
      "group": "Divers",
      "id": "0267"
    },
    {
      "title": "Le petit menuisier moustachu",
      "group": "Vente par téléphone",
      "id": "0269"
    },
    {
      "title": "Le piano",
      "group": "Leçons de musique",
      "id": "0270"
    },
    {
      "title": "Le producteur",
      "group": "Divers",
      "id": "0272"
    },
    {
      "title": "Le président appelle le père Noël",
      "group": "Politique",
      "id": "0271"
    },
    {
      "title": "Le psychiatre",
      "group": "Psy",
      "id": "0273"
    },
    {
      "title": "Le psychologue",
      "group": "Psy",
      "id": "0274"
    },
    {
      "title": "Le père Noël",
      "group": "Chansons",
      "id": "0268"
    },
    {
      "title": "Max Kriegger, Le retour du courrier",
      "group": "Cinéma",
      "id": "0275"
    },
    {
      "title": "Le réveil sonne tôt",
      "group": "X-files du peuple",
      "id": "0276"
    },
    {
      "title": "Le temps des fêtes",
      "group": "Chansons",
      "id": "0305"
    },
    {
      "title": "Le type se retrouve dans le bar",
      "group": "Série policière",
      "id": "0306"
    },
    {
      "title": "Les amateurs et les pros",
      "group": "Divers",
      "id": "0277"
    },
    {
      "title": "Les appareils modernes",
      "group": "Divers",
      "id": "0278"
    },
    {
      "title": "Les besoins du chien du voisin dans le jardin",
      "group": "Vie quotidienne",
      "id": "0279"
    },
    {
      "title": "Les cerveaux qui fleurissent",
      "group": "Emissions TV",
      "id": "0280"
    },
    {
      "title": "Les crottes de chien à Paris",
      "group": "Chansons",
      "id": "0281"
    },
    {
      "title": "Les cuivres",
      "group": "Leçons de musique",
      "id": "0282"
    },
    {
      "title": "Les débuts",
      "group": "Divers",
      "id": "0283"
    },
    {
      "title": "Les dérangeants Vol.1",
      "group": "Divers",
      "id": "0284"
    },
    {
      "title": "Les dérangeants Vol.2",
      "group": "Divers",
      "id": "0285"
    },
    {
      "title": "Les enfers",
      "group": "Divers",
      "id": "0286"
    },
    {
      "title": "Les grosses têtes",
      "group": "Divers",
      "id": "0290"
    },
    {
      "title": "Les gîtes",
      "group": "Divers",
      "id": "0289"
    },
    {
      "title": "Les imperfections surprises",
      "group": "Chansons",
      "id": "0291"
    },
    {
      "title": "Les mystères",
      "group": "Divers",
      "id": "0292"
    },
    {
      "title": "Les ordures",
      "group": "Ca se dispute",
      "id": "0293"
    },
    {
      "title": "Les p'tits trucs",
      "group": "Divers",
      "id": "0303"
    },
    {
      "title": "Les percussions",
      "group": "Leçons de musique",
      "id": "0294"
    },
    {
      "title": "Les petites bêtes",
      "group": "Chansons",
      "id": "0295"
    },
    {
      "title": "Les petites poussières dans le nombril",
      "group": "Artistes",
      "id": "0296"
    },
    {
      "title": "Les petits dauphins",
      "group": "Radio positive",
      "id": "0297"
    },
    {
      "title": "Les petits dromadaires",
      "group": "Radio positive",
      "id": "0298"
    },
    {
      "title": "Les petits esprits",
      "group": "Divers",
      "id": "0299"
    },
    {
      "title": "Les petits hamsters",
      "group": "Radio positive",
      "id": "0300"
    },
    {
      "title": "Les petits hippocampes",
      "group": "Radio positive",
      "id": "0301"
    },
    {
      "title": "Les petits rodactiles",
      "group": "Radio positive",
      "id": "0302"
    },
    {
      "title": "Fréquence Bled",
      "group": "Radio associative",
      "id": "0175"
    },
    {
      "title": "Fréquence en branle",
      "group": "Radio associative",
      "id": "0176"
    },
    {
      "title": "Fréquence s'en fout",
      "group": "Radio associative",
      "id": "0177"
    },
    {
      "title": "Fréquence solitaire",
      "group": "Radio associative",
      "id": "0178"
    },
    {
      "title": "Les studios d'enregistrement",
      "group": "Leçons de musique",
      "id": "0304"
    },
    {
      "title": "Leçons de théâtre",
      "group": "Divers",
      "id": "0257"
    },
    {
      "title": "Licenciement",
      "group": "Divers",
      "id": "0309"
    },
    {
      "title": "Lire le journal, c'est horrible",
      "group": "Divers",
      "id": "0312"
    },
    {
      "title": "Logisexe",
      "group": "Divers",
      "id": "0313"
    },
    {
      "title": "Louis XIV",
      "group": "Célébrités mortes",
      "id": "0316"
    },
    {
      "title": "Ludwig Von Beethoven",
      "group": "Célébrités mortes",
      "id": "0317"
    },
    {
      "title": "Léon et Dieu",
      "group": "Divers",
      "id": "0266"
    },
    {
      "title": "Léonard de Vinci",
      "group": "Célébrités mortes",
      "id": "0265"
    },
    {
      "title": "Ma petite scandinave",
      "group": "Divers",
      "id": "0326"
    },
    {
      "title": "Ma voisine",
      "group": "Divers",
      "id": "0335"
    },
    {
      "title": "Machine à café problématique",
      "group": "Divers",
      "id": "0318"
    },
    {
      "title": "Madame tumeur et Monsieur cerveau",
      "group": "Urgences du peuple",
      "id": "0319",
      "duplicate": true
    },
    {
      "title": "Manager de groupe",
      "group": "Divers",
      "id": "0324"
    },
    {
      "title": "Manque de confiance en soi",
      "group": "Divers",
      "id": "0325"
    },
    {
      "title": "Maria est la bonne femme",
      "group": "Divers",
      "id": "0327"
    },
    {
      "title": "Marionnette électronique",
      "group": "Divers",
      "id": "0328"
    },
    {
      "title": "Match de foot",
      "group": "Divers",
      "id": "0329"
    },
    {
      "title": "Matelot jardinier",
      "group": "Divers",
      "id": "0330"
    },
    {
      "title": "Matin difficile",
      "group": "Divers",
      "id": "0331"
    },
    {
      "title": "Matin difficile putain !",
      "group": "Divers",
      "id": "0332"
    },
    {
      "title": "Mauvaise nouvelle sur scène",
      "group": "Divers",
      "id": "0333"
    },
    {
      "title": "Mauvaises nouvelles par téléphone",
      "group": "Divers",
      "id": "0334"
    },
    {
      "title": "Maîtriser le texte et le rythme",
      "group": "Divers",
      "id": "0322"
    },
    {
      "title": "Meeting et 4 sièges en cuir",
      "group": "Vie d'entreprise",
      "id": "0336"
    },
    {
      "title": "Meute de journalistes",
      "group": "Série policière",
      "id": "0341"
    },
    {
      "title": "Michel Nostradamus",
      "group": "Divers",
      "id": "0343"
    },
    {
      "title": "Ministre avec l'avocat de Bardot",
      "group": "Tribunal du peuple",
      "id": "0344"
    },
    {
      "title": "Mission à Disneyland",
      "group": "Espionnage",
      "id": "0345"
    },
    {
      "title": "Monsieur et Madame Sète",
      "group": "Divers",
      "id": "0346"
    },
    {
      "title": "Montrer son talent lors d'une soirée",
      "group": "Divers",
      "id": "0347"
    },
    {
      "title": "Mort du chien",
      "group": "Divers",
      "id": "0348"
    },
    {
      "title": "Musicien du roi",
      "group": "Divers",
      "id": "0351"
    },
    {
      "title": "Musique et audition",
      "group": "Divers",
      "id": "0353"
    },
    {
      "title": "Naissance d'un groupe",
      "group": "Divers",
      "id": "0354"
    },
    {
      "title": "Navette l'Intrépide",
      "group": "Divers",
      "id": "0355"
    },
    {
      "title": "Nettoyeur Super-Cleaner",
      "group": "Divers",
      "id": "0357"
    },
    {
      "title": "Nez qui tombe",
      "group": "Divers",
      "id": "0358"
    },
    {
      "title": "Nos amis les animaux",
      "group": "Divers",
      "id": "0359"
    },
    {
      "title": "Nous irons dans la joie",
      "group": "Divers",
      "id": "0360"
    },
    {
      "title": "Nouveau dossier du FBI",
      "group": "Divers",
      "id": "0361"
    },
    {
      "title": "Nouveau père",
      "group": "Vie quotidienne",
      "id": "0362"
    },
    {
      "title": "Nouveaux officiers du FBI",
      "group": "Série policière",
      "id": "0363"
    },
    {
      "title": "Nouvelle association",
      "group": "Columbo du peuple",
      "id": "0364"
    },
    {
      "title": "Nouvelle chaîne HiFi",
      "group": "Divers",
      "id": "0365"
    },
    {
      "title": "Négocier avec le Japon",
      "group": "Vie d'entreprise",
      "id": "0356"
    },
    {
      "title": "Opération d'un ministre",
      "group": "Urgences du peuple",
      "id": "0367"
    },
    {
      "title": "Ordinateurs de la banque plantés",
      "group": "Vie d'entreprise",
      "id": "0370"
    },
    {
      "title": "Partie de Monopoly",
      "group": "Vie quotidienne",
      "id": "0374"
    },
    {
      "title": "Partie de Scrabble",
      "group": "Vie quotidienne",
      "id": "0375"
    },
    {
      "title": "Partir un jour",
      "group": "Chansons",
      "id": "0376"
    },
    {
      "title": "Patinage artistique",
      "group": "Sports",
      "id": "0378"
    },
    {
      "title": "Patineuse russe disqualifiée",
      "group": "Sports",
      "id": "0379"
    },
    {
      "title": "Perceuse un peu forcée",
      "group": "Vie quotidienne",
      "id": "0380"
    },
    {
      "title": "Perdu en forêt",
      "group": "Conte d'horreur",
      "id": "0381"
    },
    {
      "title": "Permis de porc",
      "group": "Série policière",
      "id": "0382"
    },
    {
      "title": "Petite partition d'un musicien",
      "group": "Divers",
      "id": "0384"
    },
    {
      "title": "Photos pour passeports",
      "group": "Divers",
      "id": "0385"
    },
    {
      "title": "Pianiste à un doigt",
      "group": "Radio associative",
      "id": "0386"
    },
    {
      "title": "Plaisir-Express",
      "group": "Emissions TV",
      "id": "0387"
    },
    {
      "title": "Plaques de cire",
      "group": "Leçons de musique",
      "id": "0388"
    },
    {
      "title": "Pléonasmes",
      "group": "Divers",
      "id": "0389"
    },
    {
      "title": "Portable au théâtre",
      "group": "Théâtre",
      "id": "0391"
    },
    {
      "title": "Portrait d'artiste",
      "group": "Divers",
      "id": "0392"
    },
    {
      "title": "Possibilité d'être enceinte",
      "group": "Théâtre de boulevard",
      "id": "0393"
    },
    {
      "title": "Poésie",
      "group": "Divers",
      "id": "0390"
    },
    {
      "title": "Premier vol en avion",
      "group": "Divers",
      "id": "0396"
    },
    {
      "title": "Premières visites",
      "group": "Divers",
      "id": "0395"
    },
    {
      "title": "Prix de mérites",
      "group": "Divers",
      "id": "0403"
    },
    {
      "title": "Professionnel presse",
      "group": "Ca se dispute",
      "id": "0404"
    },
    {
      "title": "Programme jeunesse",
      "group": "Divers",
      "id": "0405"
    },
    {
      "title": "Présentateur \"N'importe Qui\" et Chnout",
      "group": "Emissions TV",
      "id": "0398"
    },
    {
      "title": "Présentateur aux WC",
      "group": "Ca se dispute",
      "id": "0397"
    },
    {
      "title": "Présentation d'un artiste",
      "group": "Divers",
      "id": "0399"
    },
    {
      "title": "Président des USA",
      "group": "Politique",
      "id": "0400"
    },
    {
      "title": "Prêter 5000 balles à Paul",
      "group": "Urgences du peuple",
      "id": "0401"
    },
    {
      "title": "Prêts à taux élevés",
      "group": "Vente par téléphone",
      "id": "0402"
    },
    {
      "title": "Psychologue déguisé en femme",
      "group": "Divers",
      "id": "0406"
    },
    {
      "title": "Pub comparative",
      "group": "Agence de pub",
      "id": "0407"
    },
    {
      "title": "Pub dans laquelle je joue",
      "group": "Divers",
      "id": "0408"
    },
    {
      "title": "Pub mal cadrée et ex-criminel",
      "group": "Agence de pub",
      "id": "0409"
    },
    {
      "title": "Pub pour des vitamines",
      "group": "Agence de pub",
      "id": "0410"
    },
    {
      "title": "Quand je chante comme ça",
      "group": "Chansons",
      "id": "0411"
    },
    {
      "title": "Quatrième ouh là !",
      "group": "Urgences du peuple",
      "id": "0412"
    },
    {
      "title": "Quelqu'un qui vous veut du bien",
      "group": "Espionnage",
      "id": "0413"
    },
    {
      "title": "Questions-réponses",
      "group": "Divers",
      "id": "0414"
    },
    {
      "title": "Radio Poil d'Oreille",
      "group": "Radio associative",
      "id": "0417"
    },
    {
      "title": "Par derrière",
      "group": "Radio Sexe",
      "id": "0371"
    },
    {
      "title": "Radio associative",
      "group": "Divers",
      "id": "0415"
    },
    {
      "title": "Radio avec Michel",
      "group": "Divers",
      "id": "0416"
    },
    {
      "title": "Recette du feuilleton",
      "group": "Divers",
      "id": "0419"
    },
    {
      "title": "Recherche de Parlà",
      "group": "Série policière",
      "id": "0420"
    },
    {
      "title": "Reconstitution d'un visage",
      "group": "Série policière",
      "id": "0422"
    },
    {
      "title": "Relations extra-conjugales",
      "group": "Théâtre de boulevard",
      "id": "0425"
    },
    {
      "title": "Remise des palmes",
      "group": "Cinéma",
      "id": "0426"
    },
    {
      "title": "Rencontre d'un vieil ami",
      "group": "Divers",
      "id": "0428"
    },
    {
      "title": "Rencontre de deux présidents opposés",
      "group": "Politique",
      "id": "0427"
    },
    {
      "title": "Rendez-vous sur Internet",
      "group": "Internet",
      "id": "0429"
    },
    {
      "title": "Rendre visite à l'hôpital",
      "group": "Divers",
      "id": "0430"
    },
    {
      "title": "Rentrée du boulot",
      "group": "Théâtre de boulevard",
      "id": "0431"
    },
    {
      "title": "Représentante en salle d'opération",
      "group": "Urgences du peuple",
      "id": "0436"
    },
    {
      "title": "Restaurant diététique",
      "group": "New Age",
      "id": "0437"
    },
    {
      "title": "Restaurant pour la Saint-Valentin",
      "group": "Divers",
      "id": "0438"
    },
    {
      "title": "Restauration de façade",
      "group": "Commerces",
      "id": "0439"
    },
    {
      "title": "Retire l'affaire à cause du général",
      "group": "X-files du peuple",
      "id": "0441"
    },
    {
      "title": "Retraite au grand air",
      "group": "Columbo du peuple",
      "id": "0442"
    },
    {
      "title": "Rien ne va plus avec sa femme",
      "group": "Urgences du peuple",
      "id": "0445"
    },
    {
      "title": "Accordéon au boulot",
      "group": "Roger et Caroline",
      "id": "0010"
    },
    {
      "title": "Appel à 7h du matin",
      "group": "Roger et Caroline",
      "id": "0026"
    },
    {
      "title": "Caroline a rappelé",
      "group": "Roger et Caroline",
      "id": "0063"
    },
    {
      "title": "Coucou Caroline",
      "group": "Roger et Caroline",
      "id": "0111"
    },
    {
      "title": "Dans le couloir",
      "group": "Roger et Caroline",
      "id": "0116"
    },
    {
      "title": "Emprunter une agrafeuse",
      "group": "Roger et Caroline",
      "id": "0147"
    },
    {
      "title": "Le CD",
      "group": "Roger et Caroline",
      "id": "0255"
    },
    {
      "title": "Message sur internet",
      "group": "Roger et Caroline",
      "id": "0339"
    },
    {
      "title": "Offrir des fleurs",
      "group": "Roger et Caroline",
      "id": "0366"
    },
    {
      "title": "Roger reçoit Caroline",
      "group": "Roger et Caroline",
      "id": "0446"
    },
    {
      "title": "Répliques dans l'ordinateur",
      "group": "Roger et Caroline",
      "id": "0433"
    },
    {
      "title": "Répondeur à afficheur digital",
      "group": "Roger et Caroline",
      "id": "0434"
    },
    {
      "title": "Trois premiers appels",
      "group": "Roger et Caroline",
      "id": "0487"
    },
    {
      "title": "Voiture impressionnante",
      "group": "Roger et Caroline",
      "id": "0519"
    },
    {
      "title": "Voix déguisée",
      "group": "Roger et Caroline",
      "id": "0520"
    },
    {
      "title": "Rupture sur solo de guitare",
      "group": "Divers",
      "id": "0447"
    },
    {
      "title": "Règlement de comptes",
      "group": "Série policière",
      "id": "0424"
    },
    {
      "title": "Réceptionniste dans un 5 étoiles",
      "group": "Divers",
      "id": "0418"
    },
    {
      "title": "Réclamation à l'assurance",
      "group": "Divers",
      "id": "0421"
    },
    {
      "title": "Rédacteur en chef",
      "group": "Divers",
      "id": "0423"
    },
    {
      "title": "Réponse d'expert en un clin d'oeil",
      "group": "Série policière",
      "id": "0435"
    },
    {
      "title": "Répétition de théâtre",
      "group": "Théâtre",
      "id": "0432"
    },
    {
      "title": "Résultat des analyses",
      "group": "Urgences du peuple",
      "id": "0440"
    },
    {
      "title": "Réunion présidentielle sur les taxes",
      "group": "Politique",
      "id": "0443"
    },
    {
      "title": "Réunion sur les portes",
      "group": "Divers",
      "id": "0444"
    },
    {
      "title": "Salon funéraire",
      "group": "Vente par téléphone",
      "id": "0448"
    },
    {
      "title": "Scandale au gouvernement",
      "group": "Politique",
      "id": "0450"
    },
    {
      "title": "Service impec'",
      "group": "Divers",
      "id": "0451"
    },
    {
      "title": "Si jolie sérénade",
      "group": "Columbo du peuple",
      "id": "0452"
    },
    {
      "title": "Situation financière catastrophique",
      "group": "Politique",
      "id": "0453"
    },
    {
      "title": "Situations gênantes",
      "group": "Divers",
      "id": "0454"
    },
    {
      "title": "Ski",
      "group": "Sports",
      "id": "0455"
    },
    {
      "title": "Snack-bar chez Léon",
      "group": "Chansons",
      "id": "0456"
    },
    {
      "title": "Solo de Jimmy Page",
      "group": "Leçons de musique",
      "id": "0457"
    },
    {
      "title": "Sondage sur Noël",
      "group": "Vente par téléphone",
      "id": "0458"
    },
    {
      "title": "Sonde odyssée perdue",
      "group": "NASA du peuple",
      "id": "0459"
    },
    {
      "title": "Sons Tchécoslovaques",
      "group": "Divers",
      "id": "0460"
    },
    {
      "title": "Sophie Marceau chanteuse",
      "group": "Chansons",
      "id": "0461"
    },
    {
      "title": "Soudoyement",
      "group": "Vie d'entreprise",
      "id": "0462"
    },
    {
      "title": "Spielberg et De Niro",
      "group": "Cinéma",
      "id": "0463"
    },
    {
      "title": "Stade de France",
      "group": "Divers",
      "id": "0467"
    },
    {
      "title": "C'est le type qui sprrr",
      "group": "Star Trek du peuple",
      "id": "0074"
    },
    {
      "title": "Contourner la zone",
      "group": "Star Trek du peuple",
      "id": "0101"
    },
    {
      "title": "Musique d'ouverture plaisante",
      "group": "Star Trek du peuple",
      "id": "0352"
    },
    {
      "title": "Spock a des écouteurs",
      "group": "Star Trek du peuple",
      "id": "0464"
    },
    {
      "title": "Spock a un problème de volume",
      "group": "Star Trek du peuple",
      "id": "0465"
    },
    {
      "title": "Station Mir",
      "group": "NASA du peuple",
      "id": "0468"
    },
    {
      "title": "Succès mondial pour les chanteurs",
      "group": "Divers",
      "id": "0469"
    },
    {
      "title": "Suicide à coups de claques",
      "group": "Columbo du peuple",
      "id": "0470"
    },
    {
      "title": "Super Chaussette FM",
      "group": "Radio associative",
      "id": "0471"
    },
    {
      "title": "Super Sport Plus pour tous",
      "group": "Sports",
      "id": "0472"
    },
    {
      "title": "Systèmes solaires",
      "group": "La science et vous",
      "id": "0473"
    },
    {
      "title": "Table doute",
      "group": "Divers",
      "id": "0474"
    },
    {
      "title": "Technologie musicale",
      "group": "Leçons de musique",
      "id": "0475"
    },
    {
      "title": "Thomas Edison",
      "group": "Célébrités mortes",
      "id": "0479"
    },
    {
      "title": "Tombé dans l'escalier",
      "group": "Tribunal du peuple",
      "id": "0480"
    },
    {
      "title": "Toto le crétin",
      "group": "Emissions TV",
      "id": "0481"
    },
    {
      "title": "Toujours en train de boire",
      "group": "Théâtre de boulevard",
      "id": "0482"
    },
    {
      "title": "Tourner sans décor",
      "group": "Cinéma",
      "id": "0483"
    },
    {
      "title": "Tout le monde s'en fout",
      "group": "Emissions TV",
      "id": "0485"
    },
    {
      "title": "Tout le monde se couche",
      "group": "Série policière",
      "id": "0484"
    },
    {
      "title": "Travailler comme espion",
      "group": "Espionnage",
      "id": "0486"
    },
    {
      "title": "Morte dans le garage",
      "group": "Tribunal du peuple",
      "id": "0349"
    },
    {
      "title": "Morte sur le piano",
      "group": "Tribunal du peuple",
      "id": "0350"
    },
    {
      "title": "Trompé avec un aspirateur",
      "group": "Théâtre de boulevard",
      "id": "0489"
    },
    {
      "title": "Trompé avec un fermier",
      "group": "Théâtre de boulevard",
      "id": "0488"
    },
    {
      "title": "Trouver le dossier avant que l'inspecteur n'arrive",
      "group": "Série policière",
      "id": "0490"
    },
    {
      "title": "Télé en fond sonore",
      "group": "Roger et Caroline",
      "id": "0477"
    },
    {
      "title": "Télé-Achats",
      "group": "Chansons",
      "id": "0476"
    },
    {
      "title": "Téléphone arabe",
      "group": "Divers",
      "id": "0478"
    },
    {
      "title": "Un Noël dans tous les styles",
      "group": "Divers",
      "id": "0498"
    },
    {
      "title": "Un invité de Marc",
      "group": "Emissions TV",
      "id": "0494"
    },
    {
      "title": "Un jeune premier ministre",
      "group": "Politique",
      "id": "0495"
    },
    {
      "title": "Un monde sans hypocrisie",
      "group": "Divers",
      "id": "0496"
    },
    {
      "title": "Un mort par balle, un noyé",
      "group": "Série policière",
      "id": "0497"
    },
    {
      "title": "Un vieil ami",
      "group": "Vie quotidienne",
      "id": "0499"
    },
    {
      "title": "Une tradition des souvenirs",
      "group": "Cinéma",
      "id": "0493"
    },
    {
      "title": "Copine bizarre",
      "group": "Urgences du peuple",
      "id": "0107"
    },
    {
      "title": "Infirmière favorite de Malcolm",
      "group": "Urgences du peuple",
      "id": "0199"
    },
    {
      "title": "Malcolm fait des mots croisés",
      "group": "Urgences du peuple",
      "id": "0323"
    },
    {
      "title": "Menaces de l'Irak",
      "group": "Urgences du peuple",
      "id": "0338"
    },
    {
      "title": "Mélanome malin de type A",
      "group": "Urgences du peuple",
      "id": "0337"
    },
    {
      "title": "Opération loupée",
      "group": "Urgences du peuple",
      "id": "0368"
    },
    {
      "title": "Opérations gratuites en cachette",
      "group": "Urgences du peuple",
      "id": "0369"
    },
    {
      "title": "Patient amputé des deux jambes",
      "group": "Urgences du peuple",
      "id": "0377"
    },
    {
      "title": "Tumeur au cerveau",
      "group": "Urgences du peuple",
      "id": "0001"
    },
    {
      "title": "Vacances au Mexique",
      "group": "Divers",
      "id": "0500"
    },
    {
      "title": "Vaisseau et demi",
      "group": "Star Trek du peuple",
      "id": "0501"
    },
    {
      "title": "Vaste opération en Russie",
      "group": "Espionnage",
      "id": "0502"
    },
    {
      "title": "Vendeur de HiFi collant",
      "group": "Commerces",
      "id": "0503"
    },
    {
      "title": "Vendeur de voitures souriant",
      "group": "Commerces",
      "id": "0504"
    },
    {
      "title": "Vente d'encyclopédies",
      "group": "Vente par téléphone",
      "id": "0506"
    },
    {
      "title": "Vente de batterie de cuisine",
      "group": "Vente par téléphone",
      "id": "0505"
    },
    {
      "title": "Contrat de rénovation",
      "group": "Vente par téléphone",
      "id": "0102"
    },
    {
      "title": "Contrats d'assurance",
      "group": "Vente par téléphone",
      "id": "0103"
    },
    {
      "title": "Venu pour te voir",
      "group": "Théâtre de boulevard",
      "id": "0507"
    },
    {
      "title": "Victor Hugo",
      "group": "Célébrités mortes",
      "id": "0508"
    },
    {
      "title": "Vie en apesanteur",
      "group": "NASA du peuple",
      "id": "0509"
    },
    {
      "title": "Vieillir de 60 ans",
      "group": "Divers",
      "id": "0510"
    },
    {
      "title": "Vieux clichés de films d'horreur",
      "group": "Conte d'horreur",
      "id": "0511"
    },
    {
      "title": "Vincent plaqué par Jacinthe",
      "group": "Vie quotidienne",
      "id": "0512"
    },
    {
      "title": "Visite du neveu Nouveau né",
      "group": "Vie quotidienne",
      "id": "0513"
    },
    {
      "title": "Visite du patron",
      "group": "Divers",
      "id": "0514"
    },
    {
      "title": "Visite inattendue",
      "group": "Vie quotidienne",
      "id": "0515"
    },
    {
      "title": "Visite indésirable",
      "group": "Vie quotidienne",
      "id": "0516"
    },
    {
      "title": "Vive l'amour",
      "group": "Chansons",
      "id": "0517"
    },
    {
      "title": "Voir Serge Lama après concert",
      "group": "Divers",
      "id": "0518"
    },
    {
      "title": "Vous ne rêvez plus",
      "group": "Emissions TV",
      "id": "0521"
    },
    {
      "title": "Vrais musiciens accoustiques",
      "group": "Divers",
      "id": "0522"
    },
    {
      "title": "Bouche sans sourire",
      "group": "X-files du peuple",
      "id": "0053"
    },
    {
      "title": "Auto-immolation",
      "group": "X-files du peuple",
      "id": "0038"
    },
    {
      "title": "Autopsie",
      "group": "X-files du peuple",
      "id": "0039"
    },
    {
      "title": "Bar d'extra-terrestres",
      "group": "X-files du peuple",
      "id": "0047"
    },
    {
      "title": "Pouvoir suggestif",
      "group": "X-files du peuple",
      "id": "0394"
    },
    {
      "title": "Yves gagne 10 000 francs",
      "group": "Columbo du peuple",
      "id": "0523"
    },
    {
      "title": "Zorro",
      "group": "Divers",
      "id": "0524"
    },
    {
      "title": "Une foule qui dégage",
      "group": "Série policière",
      "id": "0492"
    },
    {
      "title": "Ça va mal aller dans un instant",
      "group": "Columbo du peuple",
      "id": "0068"
    },
    {
      "title": "Ça va être ta fête",
      "group": "Emissions TV",
      "id": "0067"
    },
    {
      "title": "Échasses et ballons remplis d'eau",
      "group": "Emissions TV",
      "id": "0143"
    },
    {
      "title": "Émotivité VS Raison",
      "group": "Divers",
      "id": "0144"
    }
  ]
};

Les2Minutes.data = playerData;
