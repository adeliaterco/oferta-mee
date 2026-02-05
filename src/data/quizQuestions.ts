export interface QuizQuestion {
  id: number;
  phase: string;
  question: string;
  options: {
    id: string;
    text: string;
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  // PHASE 1 - POSITIF : Créer l'Élan
  {
    id: 1,
    phase: "POSITIF",
    question: "Cette année, je suis quelqu'un qui...",
    options: [
      { id: "A", text: "Est enfin prête à faire la paix avec son alimentation." },
      { id: "B", text: "Mérite de manger sans culpabilité ni stress." },
      { id: "C", text: "Est déterminée à sortir du cycle des régimes." },
    ],
  },
  {
    id: 2,
    phase: "POSITIF",
    question: "Quand je pense à ma relation avec la nourriture, j'espère...",
    options: [
      { id: "A", text: "Redécouvrir le plaisir de manger naturellement." },
      { id: "B", text: "Me sentir en paix avec mon corps." },
      { id: "C", text: "Arrêter de penser constamment à ce que je mange." },
    ],
  },
  {
    id: 3,
    phase: "POSITIF",
    question: "Je suis prête à investir dans...",
    options: [
      { id: "A", text: "Une solution durable, pas un régime temporaire." },
      { id: "B", text: "Comprendre mes émotions au lieu de les combattre." },
      { id: "C", text: "Une transformation profonde, pas seulement des résultats rapides." },
    ],
  },
  // PHASE 2 - NEUTRE : Qualification Comportementale
  {
    id: 4,
    phase: "NEUTRE",
    question: "Quand je mange au-delà de ma faim, c'est généralement parce que...",
    options: [
      { id: "A", text: "Je ressens du stress ou de l'anxiété." },
      { id: "B", text: "Je me sens fatiguée ou mentalement épuisée." },
      { id: "C", text: "C'est automatique, sans vraiment y réfléchir." },
      { id: "D", text: "Je ne me reconnais pas dans ces situations." },
    ],
  },
  {
    id: 5,
    phase: "NEUTRE",
    question: "Face à un régime, j'ai tendance à...",
    options: [
      { id: "A", text: "Être très rigoureuse au début, puis abandonner." },
      { id: "B", text: "Alterner entre contrôle total et perte de contrôle." },
      { id: "C", text: "Me sentir coupable dès que je \"fais un écart\"." },
      { id: "D", text: "Éviter les régimes désormais." },
    ],
  },
  {
    id: 6,
    phase: "NEUTRE",
    question: "Mon poids impacte principalement...",
    options: [
      { id: "A", text: "Mon confort au quotidien." },
      { id: "B", text: "Mon énergie et mon bien-être." },
      { id: "C", text: "Ma relation avec mon corps et mon estime de soi." },
      { id: "D", text: "Mes relations sociales." },
    ],
  },
  {
    id: 7,
    phase: "NEUTRE",
    question: "Votre âge :",
    options: [
      { id: "A", text: "30-34 ans" },
      { id: "B", text: "35-39 ans" },
      { id: "C", text: "40-44 ans" },
      { id: "D", text: "45-50 ans" },
    ],
  },
  // PHASE 3 - NÉGATIF : Amplification de la Douleur
  {
    id: 8,
    phase: "NÉGATIF",
    question: "Ce qui me pèse le plus, c'est...",
    options: [
      { id: "A", text: "La fatigue de penser sans cesse à mon alimentation." },
      { id: "B", text: "La culpabilité après chaque \"écart\"." },
      { id: "C", text: "Le sentiment d'être prisonnière de mon propre corps." },
      { id: "D", text: "La peur de ne jamais trouver de solution." },
    ],
  },
  {
    id: 9,
    phase: "NÉGATIF",
    question: "Honnêtement, je crains que...",
    options: [
      { id: "A", text: "Je sois condamnée à lutter toute ma vie." },
      { id: "B", text: "Mon corps ne réponde plus comme avant." },
      { id: "C", text: "Personne ne comprenne vraiment ce que je vis." },
      { id: "D", text: "Il soit trop tard pour changer." },
    ],
  },
  {
    id: 10,
    phase: "NÉGATIF",
    question: "Quand je me regarde dans le miroir, je ressens...",
    options: [
      { id: "A", text: "De la déception et de la frustration." },
      { id: "B", text: "De l'incompréhension (\"pourquoi mon corps ne change-t-il pas ?\")." },
      { id: "C", text: "De la colère contre moi-même." },
      { id: "D", text: "De la résignation." },
    ],
  },
  {
    id: 11,
    phase: "NÉGATIF",
    question: "Le poids de cette lutte affecte...",
    options: [
      { id: "A", text: "Mon humeur au quotidien." },
      { id: "B", text: "Ma confiance en moi." },
      { id: "C", text: "Mes relations (famille, partenaire, amis)." },
      { id: "D", text: "Ma capacité à profiter de la vie." },
    ],
  },
  // PHASE 4 - LIBÉRATION : Orientation vers la Solution
  {
    id: 12,
    phase: "LIBÉRATION",
    question: "Si je pouvais choisir UN changement durable, ce serait...",
    options: [
      { id: "A", text: "Ne plus avoir peur de manger." },
      { id: "B", text: "Comprendre mes émotions sans les compenser par la nourriture." },
      { id: "C", text: "Faire confiance à mon corps et à ses signaux." },
      { id: "D", text: "Me sentir libre et en paix." },
    ],
  },
  {
    id: 13,
    phase: "LIBÉRATION",
    question: "Pour m'accompagner, je préfère...",
    options: [
      { id: "A", text: "Un programme structuré étape par étape." },
      { id: "B", text: "Des exercices pratiques et réflexifs." },
      { id: "C", text: "Une communauté de soutien." },
      { id: "D", text: "Tout ce qui a été mentionné ci-dessus." },
    ],
  },
];
