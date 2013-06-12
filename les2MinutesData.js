var Les2Minutes = Les2Minutes || {};

var playerData = {
  "base_url": "http://abauchu.net/les2minutes/player/media/",
  "episodes": [
    {
      "title": "2000 licenciements locaux",
      "series": "Divers",
      "filename": "0007"
    },
    {
      "title": "Abonnement au magazine",
      "series": "Vente par téléphone",
      "filename": "0008"
    },
    {
      "title": "Abonnement au service de livraison",
      "series": "Vente par téléphone",
      "filename": "0009"
    },
    {
      "title": "Accueillir les JO",
      "series": "Divers",
      "filename": "0011"
    },
    {
      "title": "Achat d'un Musicbox",
      "series": "Divers",
      "filename": "0012"
    },
    {
      "title": "Acte de succession",
      "series": "Columbo du peuple",
      "filename": "0013"
    },
    {
      "title": "Agence de pub",
      "series": "Agence de pub",
      "filename": "0014"
    },
    {
      "title": "Aiguisage de couteaux",
      "series": "Vente par téléphone",
      "filename": "0015"
    },
    {
      "title": "Alcool, drogue ou quelque chose",
      "series": "Série policière",
      "filename": "0017"
    },
    {
      "title": "Alexandre consolé par Monsieur Bonheur",
      "series": "Divers",
      "filename": "0019"
    },
    {
      "title": "Aléas du direct",
      "series": "Divers",
      "filename": "0018"
    },
    {
      "title": "Anniversaire du patron",
      "series": "Divers",
      "filename": "0021"
    },
    {
      "title": "Annonce avec bonne humeur",
      "series": "Ca se dispute",
      "filename": "0022"
    },
    {
      "title": "Annonceur embêtant le perchiste",
      "series": "Ca se dispute",
      "filename": "0023"
    },
    {
      "title": "Annonceur grippe",
      "series": "Ca se dispute",
      "filename": "0024"
    },
    {
      "title": "Annonceur sans assurance",
      "series": "La science et vous",
      "filename": "0025"
    },
    {
      "title": "Appel au directeur du FBI",
      "series": "Divers",
      "filename": "0028"
    },
    {
      "title": "Appel à toute heure",
      "series": "Divers",
      "filename": "0027"
    },
    {
      "title": "Arthur chanteur",
      "series": "Divers",
      "filename": "0029"
    },
    {
      "title": "Arthur chanteur : le retour",
      "series": "Divers",
      "filename": "0030"
    },
    {
      "title": "Artistes amateurs",
      "series": "Divers",
      "filename": "0031"
    },
    {
      "title": "Artistes face aux fans",
      "series": "Divers",
      "filename": "0032"
    },
    {
      "title": "Assurance automobile",
      "series": "Divers",
      "filename": "0033"
    },
    {
      "title": "Attente de l'escouade des artificiers",
      "series": "Divers",
      "filename": "0034"
    },
    {
      "title": "Audition d'un saxophoniste-chanteur",
      "series": "Auditions",
      "filename": "0037"
    },
    {
      "title": "Audition de Robert Vol.1",
      "series": "Auditions",
      "filename": "0035"
    },
    {
      "title": "Audition de Robert Vol.2",
      "series": "Auditions",
      "filename": "0036"
    },
    {
      "title": "Autoradio",
      "series": "Divers",
      "filename": "0040"
    },
    {
      "title": "Avalanche",
      "series": "Divers",
      "filename": "0041"
    },
    {
      "title": "Avant braquage de banque",
      "series": "Divers",
      "filename": "0042"
    },
    {
      "title": "Avion pour un congrès",
      "series": "Divers",
      "filename": "0043"
    },
    {
      "title": "Avocats aux toilettes",
      "series": "Divers",
      "filename": "0044"
    },
    {
      "title": "Avoir sa propre entreprise",
      "series": "Divers",
      "filename": "0045"
    },
    {
      "title": "Bain de champagne",
      "series": "Divers",
      "filename": "0046"
    },
    {
      "title": "Bichdui VS Bouchkui",
      "series": "Informations Quizz",
      "filename": "0048"
    },
    {
      "title": "Bidru VS Drubi",
      "series": "Informations Quizz",
      "filename": "0049"
    },
    {
      "title": "Billet de loterie gagnant",
      "series": "Divers",
      "filename": "0050"
    },
    {
      "title": "Bonbons super-pétouche",
      "series": "Divers",
      "filename": "0051"
    },
    {
      "title": "Bordua VS Dubois",
      "series": "Informations Quizz",
      "filename": "0052"
    },
    {
      "title": "Bouillon de culture",
      "series": "Divers",
      "filename": "0054"
    },
    {
      "title": "Boutique HiFi-vidéo-informatique",
      "series": "Divers",
      "filename": "0055"
    },
    {
      "title": "Boutique New Age",
      "series": "Divers",
      "filename": "0056"
    },
    {
      "title": "Brian de Palma",
      "series": "Divers",
      "filename": "0057"
    },
    {
      "title": "Bug de l'an 2000",
      "series": "Divers",
      "filename": "0058"
    },
    {
      "title": "C'est Fabrice",
      "series": "Divers",
      "filename": "0072"
    },
    {
      "title": "C'est beau",
      "series": "Divers",
      "filename": "0070"
    },
    {
      "title": "C'est belle une fille",
      "series": "Divers",
      "filename": "0071"
    },
    {
      "title": "C'est la vie",
      "series": "Divers",
      "filename": "0073"
    },
    {
      "title": "C'est une autre journée",
      "series": "Divers",
      "filename": "0075"
    },
    {
      "title": "Cadavre décapité",
      "series": "Divers",
      "filename": "0059"
    },
    {
      "title": "Cadeau de Saint-Valentin",
      "series": "Divers",
      "filename": "0060"
    },
    {
      "title": "Caméraman viré",
      "series": "Divers",
      "filename": "0061"
    },
    {
      "title": "Carole au bout du fil",
      "series": "Divers",
      "filename": "0062"
    },
    {
      "title": "Carrière de chanteur",
      "series": "Divers",
      "filename": "0064"
    },
    {
      "title": "Cassette de répondeur",
      "series": "Divers",
      "filename": "0065"
    },
    {
      "title": "Cassette sur le chariot",
      "series": "Divers",
      "filename": "0066"
    },
    {
      "title": "Censure",
      "series": "Divers",
      "filename": "0069"
    },
    {
      "title": "Cette petite chose qui te sort du nez",
      "series": "Divers",
      "filename": "0076"
    },
    {
      "title": "Changement d'heure",
      "series": "Divers",
      "filename": "0077"
    },
    {
      "title": "Chanson romantique",
      "series": "Divers",
      "filename": "0078"
    },
    {
      "title": "Chanteur de grivois",
      "series": "Divers",
      "filename": "0079"
    },
    {
      "title": "Chantier de construction",
      "series": "Divers",
      "filename": "0080"
    },
    {
      "title": "Charlie et ses oeillères",
      "series": "Divers",
      "filename": "0081"
    },
    {
      "title": "Chaussures pour Nathalie",
      "series": "Divers",
      "filename": "0082"
    },
    {
      "title": "Chercher un copain",
      "series": "Divers",
      "filename": "0083"
    },
    {
      "title": "Chiasson VS Dupré",
      "series": "Informations Quizz",
      "filename": "0084"
    },
    {
      "title": "Chirurgie magique",
      "series": "Divers",
      "filename": "0085"
    },
    {
      "title": "Choc électrique sur le coude",
      "series": "Divers",
      "filename": "0086"
    },
    {
      "title": "Christopher amoché sur la plage",
      "series": "Divers",
      "filename": "0087"
    },
    {
      "title": "City Zoiseaux",
      "series": "Divers",
      "filename": "0088"
    },
    {
      "title": "Club vidéo",
      "series": "Divers",
      "filename": "0089"
    },
    {
      "title": "Cocktail avec un fournisseur",
      "series": "Divers",
      "filename": "0090"
    },
    {
      "title": "Copie du testament de sa femme",
      "series": "Columbo du peuple",
      "filename": "0106"
    },
    {
      "title": "Femme machiavélique",
      "series": "Columbo du peuple",
      "filename": "0166"
    },
    {
      "title": "Georges et Robert jouent au crocket",
      "series": "Columbo du peuple",
      "filename": "0183"
    },
    {
      "title": "Georges, Robert et leur chanson",
      "series": "Columbo du peuple",
      "filename": "0184"
    },
    {
      "title": "Madeleine ne boit que du thé",
      "series": "Columbo du peuple",
      "filename": "0320"
    },
    {
      "title": "Meurtre très décidé",
      "series": "Columbo du peuple",
      "filename": "0340"
    },
    {
      "title": "Petite maison perdue dans les bois",
      "series": "Columbo du peuple",
      "filename": "0383"
    },
    {
      "title": "Sam revient passer le weekend",
      "series": "Columbo du peuple",
      "filename": "0449"
    },
    {
      "title": "Comité de visionnage",
      "series": "Divers",
      "filename": "0092"
    },
    {
      "title": "Commande d'Airbus annulée",
      "series": "Divers",
      "filename": "0093"
    },
    {
      "title": "Commentaires de F1",
      "series": "Divers",
      "filename": "0094"
    },
    {
      "title": "Commentateurs de foot en retard",
      "series": "Divers",
      "filename": "0095"
    },
    {
      "title": "Comédies et dramatiques musicales",
      "series": "Divers",
      "filename": "0091"
    },
    {
      "title": "Concentration",
      "series": "Divers",
      "filename": "0096"
    },
    {
      "title": "Conférence pour désigner le président",
      "series": "Divers",
      "filename": "0097"
    },
    {
      "title": "Consultation d'avocats au cas ou",
      "series": "Divers",
      "filename": "0098"
    },
    {
      "title": "Consultation du répondeur",
      "series": "Divers",
      "filename": "0099"
    },
    {
      "title": "Consulter un psychologue de couple",
      "series": "Divers",
      "filename": "0100"
    },
    {
      "title": "Contrôleur aérien",
      "series": "Divers",
      "filename": "0104"
    },
    {
      "title": "Conversations en taxi",
      "series": "Divers",
      "filename": "0105"
    },
    {
      "title": "Corps carbonisé dans une ferme",
      "series": "Divers",
      "filename": "0108"
    },
    {
      "title": "Corps dans le potager de la ferme",
      "series": "Divers",
      "filename": "0109"
    },
    {
      "title": "Corps dans une malle dans le jardin",
      "series": "Divers",
      "filename": "0110"
    },
    {
      "title": "Crickets sauve le monde",
      "series": "Divers",
      "filename": "0112"
    },
    {
      "title": "Critique de journal",
      "series": "Divers",
      "filename": "0113"
    },
    {
      "title": "Culture",
      "series": "Divers",
      "filename": "0114"
    },
    {
      "title": "Albert Einstein",
      "series": "Célébrités mortes",
      "filename": "0016"
    },
    {
      "title": "Dames de France Télécom",
      "series": "Divers",
      "filename": "0115"
    },
    {
      "title": "Dans un bistrot complètement saoul",
      "series": "Divers",
      "filename": "0117"
    },
    {
      "title": "Demande d'emprunt à la banque",
      "series": "Divers",
      "filename": "0122"
    },
    {
      "title": "Destin du mois",
      "series": "Divers",
      "filename": "0124"
    },
    {
      "title": "Dette",
      "series": "Divers",
      "filename": "0126"
    },
    {
      "title": "Dictée de Bernard Pivot",
      "series": "Divers",
      "filename": "0127"
    },
    {
      "title": "Didier et le grand argentier",
      "series": "Divers",
      "filename": "0128"
    },
    {
      "title": "Dieu fait sa pub",
      "series": "Divers",
      "filename": "0129"
    },
    {
      "title": "Diner d'affaires",
      "series": "Divers",
      "filename": "0130"
    },
    {
      "title": "Discours présidentiel de Noël",
      "series": "Divers",
      "filename": "0131"
    },
    {
      "title": "Discussion de couple",
      "series": "Divers",
      "filename": "0132"
    },
    {
      "title": "Disque à domicile",
      "series": "Divers",
      "filename": "0133"
    },
    {
      "title": "Distraite par un doute",
      "series": "Divers",
      "filename": "0134"
    },
    {
      "title": "Distributeur médical",
      "series": "Divers",
      "filename": "0135"
    },
    {
      "title": "Don Juan",
      "series": "Divers",
      "filename": "0136"
    },
    {
      "title": "Dossiers mélangés",
      "series": "Divers",
      "filename": "0137"
    },
    {
      "title": "Dossiers secrets télévisés",
      "series": "Divers",
      "filename": "0138"
    },
    {
      "title": "Douze opérations",
      "series": "Divers",
      "filename": "0139"
    },
    {
      "title": "Drague sur Internet",
      "series": "Divers",
      "filename": "0140"
    },
    {
      "title": "Duca VS Cadu",
      "series": "Informations Quizz",
      "filename": "0141"
    },
    {
      "title": "Dur-dur mon CD",
      "series": "Divers",
      "filename": "0142"
    },
    {
      "title": "Débranchement des facultés cervicales",
      "series": "Divers",
      "filename": "0118"
    },
    {
      "title": "Défaitisme",
      "series": "Divers",
      "filename": "0119"
    },
    {
      "title": "Défilé du 14 juillet",
      "series": "Divers",
      "filename": "0120"
    },
    {
      "title": "Déguiser en Robocop et Lewinsky",
      "series": "Divers",
      "filename": "0121"
    },
    {
      "title": "Déposer des brevets",
      "series": "Divers",
      "filename": "0123"
    },
    {
      "title": "Détournement via Internet",
      "series": "Divers",
      "filename": "0125"
    },
    {
      "title": "Calembours Stupides! avec Michael Jackson, Bill Clinton",
      "series": "Emissions TV",
      "filename": "0342"
    },
    {
      "title": "Paroles et...",
      "series": "Emissions TV",
      "filename": "0373"
    },
    {
      "title": "Je bricole",
      "series": "Emissions TV",
      "filename": "0216"
    },
    {
      "title": "Jumeaux triplés",
      "series": "Emissions TV",
      "filename": "0226"
    },
    {
      "title": "Les espaces verts",
      "series": "Emissions TV",
      "filename": "0287"
    },
    {
      "title": "Les esprit-se-rencontrent-tateurs",
      "series": "Emissions TV",
      "filename": "0288"
    },
    {
      "title": "Sports et loisirs",
      "series": "Emissions TV",
      "filename": "0466"
    },
    {
      "title": "Employé à la sueur de mon front",
      "series": "Divers",
      "filename": "0145"
    },
    {
      "title": "Empreintes très relevées",
      "series": "Divers",
      "filename": "0146"
    },
    {
      "title": "En panne à Halloween",
      "series": "Divers",
      "filename": "0153"
    },
    {
      "title": "Encercler le secteur",
      "series": "Divers",
      "filename": "0148"
    },
    {
      "title": "Enduire de marinade",
      "series": "Divers",
      "filename": "0149"
    },
    {
      "title": "Enfants abandonnés",
      "series": "Divers",
      "filename": "0150"
    },
    {
      "title": "Enlever un morceau des intestins",
      "series": "Divers",
      "filename": "0152"
    },
    {
      "title": "Enlèvement du fils Dupont",
      "series": "Divers",
      "filename": "0151"
    },
    {
      "title": "Enregistrement de pub",
      "series": "Divers",
      "filename": "0154"
    },
    {
      "title": "Enterrement",
      "series": "Divers",
      "filename": "0155"
    },
    {
      "title": "Entretien d'embauche",
      "series": "Divers",
      "filename": "0156"
    },
    {
      "title": "Entretien d'embauche d'une femme",
      "series": "Divers",
      "filename": "0157"
    },
    {
      "title": "Entretien paysager",
      "series": "Divers",
      "filename": "0158"
    },
    {
      "title": "Espion à bord",
      "series": "Divers",
      "filename": "0159"
    },
    {
      "title": "Et pourtant",
      "series": "Divers",
      "filename": "0160"
    },
    {
      "title": "Expédition chez les Incas",
      "series": "Divers",
      "filename": "0161"
    },
    {
      "title": "Faire appel à un détective privé",
      "series": "Divers",
      "filename": "0162"
    },
    {
      "title": "Fan de Georges Biburli",
      "series": "Divers",
      "filename": "0163"
    },
    {
      "title": "Fanny et Pipi",
      "series": "Divers",
      "filename": "0164"
    },
    {
      "title": "Faut pas",
      "series": "Divers",
      "filename": "0165"
    },
    {
      "title": "Femme partie avec une valise",
      "series": "Divers",
      "filename": "0167"
    },
    {
      "title": "Feuilleton américain",
      "series": "Divers",
      "filename": "0168"
    },
    {
      "title": "Film avec effets spéciaux",
      "series": "Divers",
      "filename": "0169"
    },
    {
      "title": "Partie 1",
      "series": "Film catastrophe",
      "filename": "0170"
    },
    {
      "title": "Partie 2",
      "series": "Film catastrophe",
      "filename": "0171"
    },
    {
      "title": "Finale en musique jazz",
      "series": "Divers",
      "filename": "0172"
    },
    {
      "title": "Finales en chanson",
      "series": "Divers",
      "filename": "0173"
    },
    {
      "title": "Formules de politesse",
      "series": "Divers",
      "filename": "0174"
    },
    {
      "title": "Gagner 12 millions",
      "series": "Divers",
      "filename": "0179"
    },
    {
      "title": "Gagner au loto",
      "series": "Divers",
      "filename": "0180"
    },
    {
      "title": "Gardien d'un condamné",
      "series": "Divers",
      "filename": "0182"
    },
    {
      "title": "Gardien de sécurité",
      "series": "Divers",
      "filename": "0181"
    },
    {
      "title": "Gestion des stocks",
      "series": "Divers",
      "filename": "0185"
    },
    {
      "title": "Grand manitou",
      "series": "Divers",
      "filename": "0186"
    },
    {
      "title": "Gueule de bois",
      "series": "Divers",
      "filename": "0187"
    },
    {
      "title": "Heure de la retraite pour Étienne",
      "series": "Divers",
      "filename": "0189"
    },
    {
      "title": "Histoire américaine",
      "series": "Divers",
      "filename": "0190"
    },
    {
      "title": "Histoire de la langue française",
      "series": "Divers",
      "filename": "0191"
    },
    {
      "title": "Histoire sur répondeur",
      "series": "Divers",
      "filename": "0192"
    },
    {
      "title": "Historique des jeux vidéos",
      "series": "Divers",
      "filename": "0193"
    },
    {
      "title": "Hommage à Jacques Martin",
      "series": "Divers",
      "filename": "0194"
    },
    {
      "title": "Homme trompé",
      "series": "Divers",
      "filename": "0195"
    },
    {
      "title": "Hôpital complètement engorgé",
      "series": "Divers",
      "filename": "0196"
    },
    {
      "title": "Il ne fumait pas la pipe",
      "series": "Divers",
      "filename": "0197"
    },
    {
      "title": "Ils peuvent remettre leur pantalon",
      "series": "Urgences du peuple",
      "filename": "0198"
    },
    {
      "title": "Inspecteur de police",
      "series": "Divers",
      "filename": "0200"
    },
    {
      "title": "Inspiration",
      "series": "Divers",
      "filename": "0201"
    },
    {
      "title": "Interrogateur peu confiant",
      "series": "Divers",
      "filename": "0202"
    },
    {
      "title": "Interruptions de conversation",
      "series": "Divers",
      "filename": "0203"
    },
    {
      "title": "Interview d'un ministre",
      "series": "Divers",
      "filename": "0206"
    },
    {
      "title": "Interview de Bill Gates",
      "series": "Divers",
      "filename": "0204"
    },
    {
      "title": "Interview de Jeff Bretelles",
      "series": "Divers",
      "filename": "0205"
    },
    {
      "title": "Interview de criminels",
      "series": "Divers",
      "filename": "0209"
    },
    {
      "title": "Interview politique par Delarive",
      "series": "Divers",
      "filename": "0208"
    },
    {
      "title": "Interviewer interviewé",
      "series": "Divers",
      "filename": "0207"
    },
    {
      "title": "Introduction aux 2 minutes du peuple",
      "series": "Divers",
      "filename": "0210"
    },
    {
      "title": "Inventions",
      "series": "Divers",
      "filename": "0211"
    },
    {
      "title": "Invités divisés",
      "series": "Divers",
      "filename": "0212"
    },
    {
      "title": "J'aime pas ça",
      "series": "Divers",
      "filename": "0214"
    },
    {
      "title": "J'me casse la gueule en direct",
      "series": "Divers",
      "filename": "0221"
    },
    {
      "title": "J'suis un raté",
      "series": "Divers",
      "filename": "0225"
    },
    {
      "title": "Approche des côtes américaines",
      "series": "Jacques Cartier",
      "filename": "0005"
    },
    {
      "title": "Cap droit devant",
      "series": "Jacques Cartier",
      "filename": "0004"
    },
    {
      "title": "Débarquement",
      "series": "Jacques Cartier",
      "filename": "0006"
    },
    {
      "title": "Départ de France",
      "series": "Jacques Cartier",
      "filename": "0003"
    },
    {
      "title": "Envoyé en mission",
      "series": "Jacques Cartier",
      "filename": "0002"
    },
    {
      "title": " 1534",
      "series": "Jacques Cartier",
      "filename": "0213"
    },
    {
      "title": "Jamais touché un ordinateur",
      "series": "Divers",
      "filename": "0215"
    },
    {
      "title": "Je passe mon temps",
      "series": "Divers",
      "filename": "0217"
    },
    {
      "title": "Je t'aime, tu m'aimes",
      "series": "Divers",
      "filename": "0218"
    },
    {
      "title": "Jeu de phrases, jeu de nazes",
      "series": "Divers",
      "filename": "0219"
    },
    {
      "title": "Jeux vidéos en 3D",
      "series": "Divers",
      "filename": "0220"
    },
    {
      "title": "John Glen",
      "series": "Divers",
      "filename": "0222"
    },
    {
      "title": "Jouer aux médias",
      "series": "Divers",
      "filename": "0223"
    },
    {
      "title": "Journal télévisé",
      "series": "Divers",
      "filename": "0224"
    },
    {
      "title": "Kerbout VS Berkout",
      "series": "Informations Quizz",
      "filename": "0227"
    },
    {
      "title": "L'accordéon",
      "series": "Divers",
      "filename": "0230"
    },
    {
      "title": "L'arnaque automobile",
      "series": "Divers",
      "filename": "0246"
    },
    {
      "title": "L'arrivée d'Internet",
      "series": "Divers",
      "filename": "0247"
    },
    {
      "title": "L'ennui porte conseil",
      "series": "Divers",
      "filename": "0264"
    },
    {
      "title": "L'impresario",
      "series": "Divers",
      "filename": "0310"
    },
    {
      "title": "L'interphone",
      "series": "Divers",
      "filename": "0311"
    },
    {
      "title": "L'oiseau Sophie",
      "series": "Divers",
      "filename": "0314"
    },
    {
      "title": "L'orgue",
      "series": "Divers",
      "filename": "0315"
    },
    {
      "title": "L'émotion dans les messages",
      "series": "Divers",
      "filename": "0263"
    },
    {
      "title": "La PS2",
      "series": "Divers",
      "filename": "0243"
    },
    {
      "title": "La banque",
      "series": "Divers",
      "filename": "0228"
    },
    {
      "title": "La batterie",
      "series": "Divers",
      "filename": "0229"
    },
    {
      "title": "La contrebasse",
      "series": "Divers",
      "filename": "0231"
    },
    {
      "title": "La culture et vous",
      "series": "Divers",
      "filename": "0232"
    },
    {
      "title": "La fréquence du peuple",
      "series": "Divers",
      "filename": "0234"
    },
    {
      "title": "La fureur",
      "series": "Divers",
      "filename": "0235"
    },
    {
      "title": "La fête de Noël",
      "series": "Divers",
      "filename": "0233"
    },
    {
      "title": "La guitare",
      "series": "Divers",
      "filename": "0236"
    },
    {
      "title": "1er épisode: Héritage",
      "series": "La maison Slangster",
      "filename": "0188"
    },
    {
      "title": "Ambiance détestable",
      "series": "La maison Slangster",
      "filename": "0020"
    },
    {
      "title": "L'exorciste",
      "series": "La maison Slangster",
      "filename": "0308"
    },
    {
      "title": "Maison à vendre",
      "series": "La maison Slangster",
      "filename": "0321"
    },
    {
      "title": "Parler à moitié",
      "series": "La maison Slangster",
      "filename": "0372"
    },
    {
      "title": "Un cygne sur l'étang",
      "series": "La maison Slangster",
      "filename": "0491"
    },
    {
      "title": "La messe",
      "series": "Divers",
      "filename": "0238"
    },
    {
      "title": "La modernisation",
      "series": "Divers",
      "filename": "0239"
    },
    {
      "title": "La musique japonaise",
      "series": "Divers",
      "filename": "0240"
    },
    {
      "title": "La potiche",
      "series": "Divers",
      "filename": "0241"
    },
    {
      "title": "La première d'un groupe",
      "series": "Divers",
      "filename": "0242"
    },
    {
      "title": "La radio à l'époque de la guerre",
      "series": "Divers",
      "filename": "0244"
    },
    {
      "title": "La rentrée des classes",
      "series": "Divers",
      "filename": "0245"
    },
    {
      "title": "La santé de nos parents",
      "series": "Divers",
      "filename": "0248"
    },
    {
      "title": "La technologie",
      "series": "Divers",
      "filename": "0249"
    },
    {
      "title": "La télé en direct",
      "series": "Divers",
      "filename": "0250"
    },
    {
      "title": "La vie en sous-marin",
      "series": "Divers",
      "filename": "0252"
    },
    {
      "title": "La voix humaine",
      "series": "Divers",
      "filename": "0253"
    },
    {
      "title": "Laisser un message à la porte",
      "series": "Divers",
      "filename": "0237"
    },
    {
      "title": "Laver la vaisselle dans un bar",
      "series": "Divers",
      "filename": "0251"
    },
    {
      "title": "Le Morgan Show",
      "series": "Divers",
      "filename": "0262"
    },
    {
      "title": "Le VTT",
      "series": "Divers",
      "filename": "0307"
    },
    {
      "title": "Le blues",
      "series": "Divers",
      "filename": "0254"
    },
    {
      "title": "Le cinéma d'époque",
      "series": "Divers",
      "filename": "0256"
    },
    {
      "title": "Le gaffeur",
      "series": "Divers",
      "filename": "0258"
    },
    {
      "title": "Le langage des films américains",
      "series": "Divers",
      "filename": "0259"
    },
    {
      "title": "Le mari vient de sortir",
      "series": "Divers",
      "filename": "0260"
    },
    {
      "title": "Le métro",
      "series": "Divers",
      "filename": "0261"
    },
    {
      "title": "Le paradis",
      "series": "Divers",
      "filename": "0267"
    },
    {
      "title": "Le petit menuisier moustachu",
      "series": "Divers",
      "filename": "0269"
    },
    {
      "title": "Le piano",
      "series": "Divers",
      "filename": "0270"
    },
    {
      "title": "Le producteur",
      "series": "Divers",
      "filename": "0272"
    },
    {
      "title": "Le président appelle le père Noël",
      "series": "Divers",
      "filename": "0271"
    },
    {
      "title": "Le psychiatre",
      "series": "Divers",
      "filename": "0273"
    },
    {
      "title": "Le psychologue",
      "series": "Divers",
      "filename": "0274"
    },
    {
      "title": "Le père Noël",
      "series": "Divers",
      "filename": "0268"
    },
    {
      "title": "Le retour du courrier",
      "series": "Divers",
      "filename": "0275"
    },
    {
      "title": "Le réveil sonne tôt",
      "series": "Divers",
      "filename": "0276"
    },
    {
      "title": "Le temps des fêtes",
      "series": "Divers",
      "filename": "0305"
    },
    {
      "title": "Le type se retrouve dans le bar",
      "series": "Divers",
      "filename": "0306"
    },
    {
      "title": "Les amateurs et les pros",
      "series": "Divers",
      "filename": "0277"
    },
    {
      "title": "Les appareils modernes",
      "series": "Divers",
      "filename": "0278"
    },
    {
      "title": "Les besoins du chien du voisin dans le jardin",
      "series": "Divers",
      "filename": "0279"
    },
    {
      "title": "Les cerveaux qui fleurissent",
      "series": "Divers",
      "filename": "0280"
    },
    {
      "title": "Les crottes de chien à Paris",
      "series": "Divers",
      "filename": "0281"
    },
    {
      "title": "Les cuivres",
      "series": "Divers",
      "filename": "0282"
    },
    {
      "title": "Les débuts",
      "series": "Divers",
      "filename": "0283"
    },
    {
      "title": "Les dérangeants Vol.1",
      "series": "Divers",
      "filename": "0284"
    },
    {
      "title": "Les dérangeants Vol.2",
      "series": "Divers",
      "filename": "0285"
    },
    {
      "title": "Les enfers",
      "series": "Divers",
      "filename": "0286"
    },
    {
      "title": "Les grosses têtes",
      "series": "Divers",
      "filename": "0290"
    },
    {
      "title": "Les gîtes",
      "series": "Divers",
      "filename": "0289"
    },
    {
      "title": "Les imperfections surprises",
      "series": "Divers",
      "filename": "0291"
    },
    {
      "title": "Les mystères",
      "series": "Divers",
      "filename": "0292"
    },
    {
      "title": "Les ordures",
      "series": "Divers",
      "filename": "0293"
    },
    {
      "title": "Les p'tits trucs",
      "series": "Divers",
      "filename": "0303"
    },
    {
      "title": "Les percussions",
      "series": "Divers",
      "filename": "0294"
    },
    {
      "title": "Les petites bêtes",
      "series": "Divers",
      "filename": "0295"
    },
    {
      "title": "Les petites poussières dans le nombril",
      "series": "Divers",
      "filename": "0296"
    },
    {
      "title": "Les petits dauphins",
      "series": "Divers",
      "filename": "0297"
    },
    {
      "title": "Les petits dromadaires",
      "series": "Divers",
      "filename": "0298"
    },
    {
      "title": "Les petits esprits",
      "series": "Divers",
      "filename": "0299"
    },
    {
      "title": "Les petits hamsters",
      "series": "Divers",
      "filename": "0300"
    },
    {
      "title": "Les petits hippocampes",
      "series": "Radio Positive",
      "filename": "0301"
    },
    {
      "title": "Les petits rodactiles",
      "series": "Radio Positive",
      "filename": "0302"
    },
    {
      "title": "Fréquence Bled",
      "series": "Les radios associatives",
      "filename": "0175"
    },
    {
      "title": "Fréquence en branle",
      "series": "Les radios associatives",
      "filename": "0176"
    },
    {
      "title": "Fréquence s'en fout",
      "series": "Les radios associatives",
      "filename": "0177"
    },
    {
      "title": "Fréquence solitaire",
      "series": "Les radios associatives",
      "filename": "0178"
    },
    {
      "title": "Les studios d'enregistrement",
      "series": "Divers",
      "filename": "0304"
    },
    {
      "title": "Leçons de théâtre",
      "series": "Divers",
      "filename": "0257"
    },
    {
      "title": "Licenciement",
      "series": "Divers",
      "filename": "0309"
    },
    {
      "title": "Lire le journal, c'est horrible",
      "series": "Divers",
      "filename": "0312"
    },
    {
      "title": "Logisexe",
      "series": "Divers",
      "filename": "0313"
    },
    {
      "title": "Louis XIV",
      "series": "Divers",
      "filename": "0316"
    },
    {
      "title": "Ludwig Von Beethoven",
      "series": "Divers",
      "filename": "0317"
    },
    {
      "title": "Léon et Dieu",
      "series": "Divers",
      "filename": "0266"
    },
    {
      "title": "Léonard de Vinci",
      "series": "Divers",
      "filename": "0265"
    },
    {
      "title": "Ma petite scandinave",
      "series": "Divers",
      "filename": "0326"
    },
    {
      "title": "Ma voisine",
      "series": "Divers",
      "filename": "0335"
    },
    {
      "title": "Machine à café problématique",
      "series": "Divers",
      "filename": "0318"
    },
    {
      "title": "Madame tumeur et Monsieur cerveau",
      "series": "Divers",
      "filename": "0319"
    },
    {
      "title": "Manager de groupe",
      "series": "Divers",
      "filename": "0324"
    },
    {
      "title": "Manque de confiance en soi",
      "series": "Divers",
      "filename": "0325"
    },
    {
      "title": "Maria est la bonne femme",
      "series": "Divers",
      "filename": "0327"
    },
    {
      "title": "Marionnette électronique",
      "series": "Divers",
      "filename": "0328"
    },
    {
      "title": "Match de foot",
      "series": "Divers",
      "filename": "0329"
    },
    {
      "title": "Matelot jardinier",
      "series": "Divers",
      "filename": "0330"
    },
    {
      "title": "Matin difficile",
      "series": "Divers",
      "filename": "0331"
    },
    {
      "title": "Matin difficile putain !",
      "series": "Divers",
      "filename": "0332"
    },
    {
      "title": "Mauvaise nouvelle sur scène",
      "series": "Divers",
      "filename": "0333"
    },
    {
      "title": "Mauvaises nouvelles par téléphone",
      "series": "Divers",
      "filename": "0334"
    },
    {
      "title": "Maîtriser le texte et le rythme",
      "series": "Divers",
      "filename": "0322"
    },
    {
      "title": "Meeting et 4 sièges en cuir",
      "series": "Divers",
      "filename": "0336"
    },
    {
      "title": "Meute de journalistes",
      "series": "Divers",
      "filename": "0341"
    },
    {
      "title": "Michel Nostradamus",
      "series": "Divers",
      "filename": "0343"
    },
    {
      "title": "Ministre avec l'avocat de Bardot",
      "series": "Divers",
      "filename": "0344"
    },
    {
      "title": "Mission à Disneyland",
      "series": "Divers",
      "filename": "0345"
    },
    {
      "title": "Monsieur et Madame Sète",
      "series": "Divers",
      "filename": "0346"
    },
    {
      "title": "Montrer son talent lors d'une soirée",
      "series": "Divers",
      "filename": "0347"
    },
    {
      "title": "Mort du chien",
      "series": "Divers",
      "filename": "0348"
    },
    {
      "title": "Musicien du roi",
      "series": "Divers",
      "filename": "0351"
    },
    {
      "title": "Musique et audition",
      "series": "Divers",
      "filename": "0353"
    },
    {
      "title": "Naissance d'un groupe",
      "series": "Divers",
      "filename": "0354"
    },
    {
      "title": "Navette l'Intrépide",
      "series": "Divers",
      "filename": "0355"
    },
    {
      "title": "Nettoyeur Super-Cleaner",
      "series": "Divers",
      "filename": "0357"
    },
    {
      "title": "Nez qui tombe",
      "series": "Divers",
      "filename": "0358"
    },
    {
      "title": "Nos amis les animaux",
      "series": "Divers",
      "filename": "0359"
    },
    {
      "title": "Nous irons dans la joie",
      "series": "Divers",
      "filename": "0360"
    },
    {
      "title": "Nouveau dossier du FBI",
      "series": "Divers",
      "filename": "0361"
    },
    {
      "title": "Nouveau père",
      "series": "Divers",
      "filename": "0362"
    },
    {
      "title": "Nouveaux officiers du FBI",
      "series": "Divers",
      "filename": "0363"
    },
    {
      "title": "Nouvelle association",
      "series": "Divers",
      "filename": "0364"
    },
    {
      "title": "Nouvelle chaîne HiFi",
      "series": "Divers",
      "filename": "0365"
    },
    {
      "title": "Négocier avec le Japon",
      "series": "Divers",
      "filename": "0356"
    },
    {
      "title": "Opération d'un ministre",
      "series": "Divers",
      "filename": "0367"
    },
    {
      "title": "Ordinateurs de la banque plantés",
      "series": "Divers",
      "filename": "0370"
    },
    {
      "title": "Partie de Monopoly",
      "series": "Divers",
      "filename": "0374"
    },
    {
      "title": "Partie de Scrabble",
      "series": "Divers",
      "filename": "0375"
    },
    {
      "title": "Partir un jour",
      "series": "Divers",
      "filename": "0376"
    },
    {
      "title": "Patinage artistique",
      "series": "Divers",
      "filename": "0378"
    },
    {
      "title": "Patineuse russe disqualifiée",
      "series": "Divers",
      "filename": "0379"
    },
    {
      "title": "Perceuse un peu forcée",
      "series": "Divers",
      "filename": "0380"
    },
    {
      "title": "Perdu en forêt",
      "series": "Divers",
      "filename": "0381"
    },
    {
      "title": "Permis de porc",
      "series": "Divers",
      "filename": "0382"
    },
    {
      "title": "Petite partition d'un musicien",
      "series": "Divers",
      "filename": "0384"
    },
    {
      "title": "Photos pour passeports",
      "series": "Divers",
      "filename": "0385"
    },
    {
      "title": "Pianiste à un doigt",
      "series": "Divers",
      "filename": "0386"
    },
    {
      "title": "Plaisir-Express",
      "series": "Divers",
      "filename": "0387"
    },
    {
      "title": "Plaques de cire",
      "series": "Divers",
      "filename": "0388"
    },
    {
      "title": "Pléonasmes",
      "series": "Divers",
      "filename": "0389"
    },
    {
      "title": "Portable au théâtre",
      "series": "Divers",
      "filename": "0391"
    },
    {
      "title": "Portrait d'artiste",
      "series": "Divers",
      "filename": "0392"
    },
    {
      "title": "Possibilité d'être enceinte",
      "series": "Divers",
      "filename": "0393"
    },
    {
      "title": "Poésie",
      "series": "Divers",
      "filename": "0390"
    },
    {
      "title": "Premier vol en avion",
      "series": "Divers",
      "filename": "0396"
    },
    {
      "title": "Premières visites",
      "series": "Divers",
      "filename": "0395"
    },
    {
      "title": "Prix de mérites",
      "series": "Divers",
      "filename": "0403"
    },
    {
      "title": "Professionnel presse",
      "series": "Ca se dispute",
      "filename": "0404"
    },
    {
      "title": "Programme jeunesse",
      "series": "Divers",
      "filename": "0405"
    },
    {
      "title": "Présentateur \"N'importe Qui\" et Chnout",
      "series": "Emissions TV",
      "filename": "0398"
    },
    {
      "title": "Présentateur aux WC",
      "series": "Ca se dispute",
      "filename": "0397"
    },
    {
      "title": "Présentation d'un artiste",
      "series": "Divers",
      "filename": "0399"
    },
    {
      "title": "Président des USA",
      "series": "Divers",
      "filename": "0400"
    },
    {
      "title": "Prêter 5000 balles à Paul",
      "series": "Divers",
      "filename": "0401"
    },
    {
      "title": "Prêts à taux élevés",
      "series": "Divers",
      "filename": "0402"
    },
    {
      "title": "Psychologue déguisé en femme",
      "series": "Divers",
      "filename": "0406"
    },
    {
      "title": "Pub comparative",
      "series": "Divers",
      "filename": "0407"
    },
    {
      "title": "Pub dans laquelle je joue",
      "series": "Divers",
      "filename": "0408"
    },
    {
      "title": "Pub mal cadrée",
      "series": "Divers",
      "filename": "0409"
    },
    {
      "title": "Pub pour des vitamines",
      "series": "Divers",
      "filename": "0410"
    },
    {
      "title": "Quand je chante comme ça",
      "series": "Divers",
      "filename": "0411"
    },
    {
      "title": "Quatrième ouh là !",
      "series": "Divers",
      "filename": "0412"
    },
    {
      "title": "Quelqu'un qui vous veut du bien",
      "series": "Divers",
      "filename": "0413"
    },
    {
      "title": "Questions-réponses",
      "series": "Divers",
      "filename": "0414"
    },
    {
      "title": "Radio Poil d'Oreille",
      "series": "Divers",
      "filename": "0417"
    },
    {
      "title": "Par derrière",
      "series": "Radio Sexe",
      "filename": "0371"
    },
    {
      "title": "Radio associative",
      "series": "Divers",
      "filename": "0415"
    },
    {
      "title": "Radio avec Michel",
      "series": "Divers",
      "filename": "0416"
    },
    {
      "title": "Recette du feuilleton",
      "series": "Divers",
      "filename": "0419"
    },
    {
      "title": "Recherche de Parlà",
      "series": "Divers",
      "filename": "0420"
    },
    {
      "title": "Reconstitution d'un visage",
      "series": "Divers",
      "filename": "0422"
    },
    {
      "title": "Relations extra-conjugales",
      "series": "Divers",
      "filename": "0425"
    },
    {
      "title": "Remise des palmes",
      "series": "Divers",
      "filename": "0426"
    },
    {
      "title": "Rencontre d'un vieil ami",
      "series": "Divers",
      "filename": "0428"
    },
    {
      "title": "Rencontre de deux présidents opposés",
      "series": "Divers",
      "filename": "0427"
    },
    {
      "title": "Rendez-vous sur Internet",
      "series": "Divers",
      "filename": "0429"
    },
    {
      "title": "Rendre visite à l'hôpital",
      "series": "Divers",
      "filename": "0430"
    },
    {
      "title": "Rentrée du boulot",
      "series": "Divers",
      "filename": "0431"
    },
    {
      "title": "Représentante en salle d'opération",
      "series": "Divers",
      "filename": "0436"
    },
    {
      "title": "Restaurant diététique",
      "series": "Divers",
      "filename": "0437"
    },
    {
      "title": "Restaurant pour la Saint-Valentin",
      "series": "Divers",
      "filename": "0438"
    },
    {
      "title": "Restauration de façade",
      "series": "Divers",
      "filename": "0439"
    },
    {
      "title": "Retire l'affaire à cause du général",
      "series": "Divers",
      "filename": "0441"
    },
    {
      "title": "Retraite au grand air",
      "series": "Divers",
      "filename": "0442"
    },
    {
      "title": "Rien ne va plus avec sa femme",
      "series": "Divers",
      "filename": "0445"
    },
    {
      "title": "Accordéon au boulot",
      "series": "Roger et Caroline",
      "filename": "0010"
    },
    {
      "title": "Appel à 7h du matin",
      "series": "Roger et Caroline",
      "filename": "0026"
    },
    {
      "title": "Caroline a rappelé",
      "series": "Roger et Caroline",
      "filename": "0063"
    },
    {
      "title": "Coucou Caroline",
      "series": "Roger et Caroline",
      "filename": "0111"
    },
    {
      "title": "Dans le couloir",
      "series": "Roger et Caroline",
      "filename": "0116"
    },
    {
      "title": "Emprunter une agrafeuse",
      "series": "Roger et Caroline",
      "filename": "0147"
    },
    {
      "title": "Le CD",
      "series": "Roger et Caroline",
      "filename": "0255"
    },
    {
      "title": "Message sur internet",
      "series": "Roger et Caroline",
      "filename": "0339"
    },
    {
      "title": "Offrir des fleurs",
      "series": "Roger et Caroline",
      "filename": "0366"
    },
    {
      "title": "Roger reçoit Caroline",
      "series": "Roger et Caroline",
      "filename": "0446"
    },
    {
      "title": "Répliques dans l'ordinateur",
      "series": "Roger et Caroline",
      "filename": "0433"
    },
    {
      "title": "Répondeur à afficheur digital",
      "series": "Roger et Caroline",
      "filename": "0434"
    },
    {
      "title": "Trois premiers appels",
      "series": "Roger et Caroline",
      "filename": "0487"
    },
    {
      "title": "Voiture impressionnante",
      "series": "Roger et Caroline",
      "filename": "0519"
    },
    {
      "title": "Voix déguisée",
      "series": "Roger et Caroline",
      "filename": "0520"
    },
    {
      "title": "Rupture sur solo de guitare",
      "series": "Divers",
      "filename": "0447"
    },
    {
      "title": "Règlement de comptes",
      "series": "Divers",
      "filename": "0424"
    },
    {
      "title": "Réceptionniste dans un 5 étoiles",
      "series": "Divers",
      "filename": "0418"
    },
    {
      "title": "Réclamation à l'assurance",
      "series": "Divers",
      "filename": "0421"
    },
    {
      "title": "Rédacteur en chef",
      "series": "Divers",
      "filename": "0423"
    },
    {
      "title": "Réponse d'experte en un clin d'oeil",
      "series": "Divers",
      "filename": "0435"
    },
    {
      "title": "Répétition de théâtre",
      "series": "Divers",
      "filename": "0432"
    },
    {
      "title": "Résultat des analyses",
      "series": "Divers",
      "filename": "0440"
    },
    {
      "title": "Réunion présidentielle sur les taxes",
      "series": "Divers",
      "filename": "0443"
    },
    {
      "title": "Réunion sur les portes",
      "series": "Divers",
      "filename": "0444"
    },
    {
      "title": "Salon funéraire",
      "series": "Divers",
      "filename": "0448"
    },
    {
      "title": "Scandale au gouvernement",
      "series": "Divers",
      "filename": "0450"
    },
    {
      "title": "Service impec'",
      "series": "Divers",
      "filename": "0451"
    },
    {
      "title": "Si jolie sérénade",
      "series": "Divers",
      "filename": "0452"
    },
    {
      "title": "Situation financière catastrophique",
      "series": "Divers",
      "filename": "0453"
    },
    {
      "title": "Situations gênantes",
      "series": "Divers",
      "filename": "0454"
    },
    {
      "title": "Ski",
      "series": "Divers",
      "filename": "0455"
    },
    {
      "title": "Snack-bar chez Léon",
      "series": "Divers",
      "filename": "0456"
    },
    {
      "title": "Solo de Jimmy Page",
      "series": "Divers",
      "filename": "0457"
    },
    {
      "title": "Sondage sur Noël",
      "series": "Divers",
      "filename": "0458"
    },
    {
      "title": "Sonde odyssée perdue",
      "series": "Divers",
      "filename": "0459"
    },
    {
      "title": "Sons Tchécoslovaques",
      "series": "Divers",
      "filename": "0460"
    },
    {
      "title": "Sophie Marceau chanteuse",
      "series": "Divers",
      "filename": "0461"
    },
    {
      "title": "Soudoyement",
      "series": "Divers",
      "filename": "0462"
    },
    {
      "title": "Spielberg et De Niro",
      "series": "Divers",
      "filename": "0463"
    },
    {
      "title": "Stade de France",
      "series": "Divers",
      "filename": "0467"
    },
    {
      "title": "C'est le type qui sprrr",
      "series": "Star Trek du peuple",
      "filename": "0074"
    },
    {
      "title": "Contourner la zone",
      "series": "Star Trek du peuple",
      "filename": "0101"
    },
    {
      "title": "Musique d'ouverture plaisante",
      "series": "Star Trek du peuple",
      "filename": "0352"
    },
    {
      "title": "Spock a des écouteurs",
      "series": "Star Trek du peuple",
      "filename": "0464"
    },
    {
      "title": "Spock a un problème de volume",
      "series": "Star Trek du peuple",
      "filename": "0465"
    },
    {
      "title": "Station Mir",
      "series": "Divers",
      "filename": "0468"
    },
    {
      "title": "Succès mondial pour les chanteurs",
      "series": "Divers",
      "filename": "0469"
    },
    {
      "title": "Suicide à coups de claques",
      "series": "Divers",
      "filename": "0470"
    },
    {
      "title": "Super Chaussette FM",
      "series": "Radio associative",
      "filename": "0471"
    },
    {
      "title": "Super Sport Plus pour tous",
      "series": "Divers",
      "filename": "0472"
    },
    {
      "title": "Systèmes solaires",
      "series": "La science et vous",
      "filename": "0473"
    },
    {
      "title": "Table doute",
      "series": "Divers",
      "filename": "0474"
    },
    {
      "title": "Technologie musicale",
      "series": "Divers",
      "filename": "0475"
    },
    {
      "title": "Thomas Edison",
      "series": "Divers",
      "filename": "0479"
    },
    {
      "title": "Tombé dans l'escalier",
      "series": "Divers",
      "filename": "0480"
    },
    {
      "title": "Toto le crétin",
      "series": "Divers",
      "filename": "0481"
    },
    {
      "title": "Toujours en train de boire",
      "series": "Divers",
      "filename": "0482"
    },
    {
      "title": "Tourner sans décor",
      "series": "Divers",
      "filename": "0483"
    },
    {
      "title": "Tout le monde s'en fout",
      "series": "Divers",
      "filename": "0485"
    },
    {
      "title": "Tout le monde se couche",
      "series": "Divers",
      "filename": "0484"
    },
    {
      "title": "Travailler comme espion",
      "series": "Divers",
      "filename": "0486"
    },
    {
      "title": "Morte dans le garage",
      "series": "Tribunal du peuple",
      "filename": "0349"
    },
    {
      "title": "Morte sur le piano",
      "series": "Tribunal du peuple",
      "filename": "0350"
    },
    {
      "title": "Trompé avec un aspirateur",
      "series": "Divers",
      "filename": "0489"
    },
    {
      "title": "Trompé avec un fermier",
      "series": "Divers",
      "filename": "0488"
    },
    {
      "title": "Trouver le dossier avant que l'inspecteur n'arrive",
      "series": "Divers",
      "filename": "0490"
    },
    {
      "title": "Télé en fond sonore",
      "series": "Divers",
      "filename": "0477"
    },
    {
      "title": "Télé-Achats",
      "series": "Divers",
      "filename": "0476"
    },
    {
      "title": "Téléphone arabe",
      "series": "Divers",
      "filename": "0478"
    },
    {
      "title": "Un Noël dans tous les styles",
      "series": "Divers",
      "filename": "0498"
    },
    {
      "title": "Un invité de Marc",
      "series": "Divers",
      "filename": "0494"
    },
    {
      "title": "Un jeune premier ministre",
      "series": "Divers",
      "filename": "0495"
    },
    {
      "title": "Un monde sans hypocrisie",
      "series": "Divers",
      "filename": "0496"
    },
    {
      "title": "Un mort par balle, un noyé",
      "series": "Divers",
      "filename": "0497"
    },
    {
      "title": "Un vieil ami",
      "series": "Divers",
      "filename": "0499"
    },
    {
      "title": "Une tradition des souvenirs",
      "series": "Divers",
      "filename": "0493"
    },
    {
      "title": "Copine bizarre",
      "series": "Urgences du peuple",
      "filename": "0107"
    },
    {
      "title": "Infirmière favorite de Malcolm",
      "series": "Urgences du peuple",
      "filename": "0199"
    },
    {
      "title": "Malcolm fait des mots croisés",
      "series": "Urgences du peuple",
      "filename": "0323"
    },
    {
      "title": "Menaces de l'Irak",
      "series": "Urgences du peuple",
      "filename": "0338"
    },
    {
      "title": "Mélanome malin de type A",
      "series": "Urgences du peuple",
      "filename": "0337"
    },
    {
      "title": "Opération loupée",
      "series": "Urgences du peuple",
      "filename": "0368"
    },
    {
      "title": "Opérations gratuites en cachette",
      "series": "Urgences du peuple",
      "filename": "0369"
    },
    {
      "title": "Patient amputé des deux jambes",
      "series": "Urgences du peuple",
      "filename": "0377"
    },
    {
      "title": "Tumeur au cerveau",
      "series": "Urgences du peuple",
      "filename": "0001"
    },
    {
      "title": "Vacances au Mexique",
      "series": "Divers",
      "filename": "0500"
    },
    {
      "title": "Vaisseau et demi",
      "series": "Divers",
      "filename": "0501"
    },
    {
      "title": "Vaste opération en Russie",
      "series": "Divers",
      "filename": "0502"
    },
    {
      "title": "Vendeur de HiFi collant",
      "series": "Divers",
      "filename": "0503"
    },
    {
      "title": "Vendeur de voitures souriant",
      "series": "Divers",
      "filename": "0504"
    },
    {
      "title": "Vente d'encyclopédies",
      "series": "Divers",
      "filename": "0506"
    },
    {
      "title": "Vente de batterie de cuisine",
      "series": "Divers",
      "filename": "0505"
    },
    {
      "title": "Contrat de rénovation",
      "series": "Vente par téléphone",
      "filename": "0102"
    },
    {
      "title": "Contrats d'assurance",
      "series": "Vente par téléphone",
      "filename": "0103"
    },
    {
      "title": "Venu pour te voir",
      "series": "Divers",
      "filename": "0507"
    },
    {
      "title": "Victor Hugo",
      "series": "Divers",
      "filename": "0508"
    },
    {
      "title": "Vie en apesanteur",
      "series": "Divers",
      "filename": "0509"
    },
    {
      "title": "Vieillir de 60 ans",
      "series": "Divers",
      "filename": "0510"
    },
    {
      "title": "Vieux clichés de films d'horreur",
      "series": "Divers",
      "filename": "0511"
    },
    {
      "title": "Vincent plaqué par Jacinthe",
      "series": "Divers",
      "filename": "0512"
    },
    {
      "title": "Visite du neveu Nouveau né",
      "series": "Divers",
      "filename": "0513"
    },
    {
      "title": "Visite du patron",
      "series": "Divers",
      "filename": "0514"
    },
    {
      "title": "Visite inattendue",
      "series": "Divers",
      "filename": "0515"
    },
    {
      "title": "Visite indésirable",
      "series": "Divers",
      "filename": "0516"
    },
    {
      "title": "Vive l'amour",
      "series": "Divers",
      "filename": "0517"
    },
    {
      "title": "Voir Serge Lama après concert",
      "series": "Divers",
      "filename": "0518"
    },
    {
      "title": "Vous de rêvez plus",
      "series": "Divers",
      "filename": "0521"
    },
    {
      "title": "Vrais musiciens accoustiques",
      "series": "Divers",
      "filename": "0522"
    },
    {
      "title": "Bouche sans sourire",
      "series": "X-Files du peuple",
      "filename": "0053"
    },
    {
      "title": "Auto-immolation",
      "series": "X-files du peuple",
      "filename": "0038"
    },
    {
      "title": "Autopsie",
      "series": "X-files du peuple",
      "filename": "0039"
    },
    {
      "title": "Bar d'extra-terrestres",
      "series": "X-files du peuple",
      "filename": "0047"
    },
    {
      "title": "Pouvoir suggestif",
      "series": "X-files du peuple",
      "filename": "0394"
    },
    {
      "title": "Yves gagne 10 000 francs",
      "series": "Divers",
      "filename": "0523"
    },
    {
      "title": "Zorro",
      "series": "Divers",
      "filename": "0524"
    },
    {
      "title": "Une foule qui dégage",
      "series": "Série policière",
      "filename": "0492"
    },
    {
      "title": "Ça va mal aller dans un instant",
      "series": "Divers",
      "filename": "0068"
    },
    {
      "title": "Ça va être ta fête",
      "series": "Divers",
      "filename": "0067"
    },
    {
      "title": "Échasses et ballons remplis d'eau",
      "series": "Divers",
      "filename": "0143"
    },
    {
      "title": "Émotivité VS Raison",
      "series": "Divers",
      "filename": "0144"
    }
  ]
};

Les2Minutes.data = playerData;
