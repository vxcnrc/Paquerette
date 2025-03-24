import { defineStore } from 'pinia';

// Définition du store "site" avec Pinia
export const useSiteStore = defineStore('site', {
    state: () => ({ 
        // Définition de l'état du store
        partitions: {
            // Sections des partitions pour la chorale et l'orchestre
            chorale: [
              // Liste des partitions de la chorale, avec titre, image, et liens vers les partitions spécifiques
              { titre: "Carmen", image: "/public/images/compositeurs/Bizet.jpg", partitions: { "Chœur": "/public/partitions/CARMEN.pdf" } },
              { titre: "Cujus Animam Gementem", image: "/public/images/compositeurs/Poulenc.jpg", partitions: { "Chœur": "/public/partitions/POULENC.pdf" } },
              { titre: "Aladdin", image: "/public/images/compositeurs/aladdin.jpg", partitions: { "Chœur": "/public/partitions/ALADDIN.pdf" } },
              { titre: "Believer", image: "/public/images/compositeurs/believer.jpeg", partitions: { "Chœur": "/public/partitions/BELIEVER.pdf" } },
              { titre: "Carnavalito", image: "/public/images/compositeurs/carnavalito.jpg", partitions: { "Chœur": "/public/partitions/CARNAVALITO.pdf" } },
              { titre: "Goodbye Love", image: "/public/images/compositeurs/goodbye_love.jpg", partitions: { "Chœur": "/public/partitions/GOODBYE-LOVE.pdf" } },
              { titre: "Les Marchands", image: "/public/images/compositeurs/marchands.jpg", partitions: { "Chœur": "/public/partitions/LES-MARCHANDS.pdf" } },
              { titre: "Ohtul", image: "/public/images/compositeurs/ohtul.jpg", partitions: { "Chœur": "/public/partitions/OHTUL.pdf" } },
              { titre: "The fire dance of Luna", image: "/public/images/compositeurs/the_fire_dance_of_luna.jpg", partitions: { "Chœur": "/public/partitions/THE-FIRE-DANCE-OF-LUNA.pdf" } }
            ],
            orchestre: [
              // Liste des partitions de l'orchestre, avec titre, image, et partitions détaillées par instrument
              { titre: "Stabat Mater, Poulenc", image: "/public/images/compositeurs/Poulenc.jpg", partitions: { 
                "Alto clé de sol": "/public/partitions/Poulenc-Alto-cle-de-sol.pdf", 
                "Alto clé Ut": "/public/partitions/Poulenc-Altos.pdf",
                "Basson 1 & 2": "/public/partitions/Poulenc-Basson.pdf",
                "Basson 3": "/public/partitions/Poulenc-Basson_3.pdf",
                "Clarinette Basse": "/public/partitions/Poulenc-Clarinette_Basse.pdf",
                "Clarinette Si b": "/public/partitions/Poulenc-Clarinette_en_Sib.pdf",
                "Contrebasse 1": "/public/partitions/Poulenc-Contrebasse_1.pdf",
                "Contrebasse 2": "/public/partitions/Poulenc-Contrebasse_2.pdf",
                "Cor en Fa": "/public/partitions/Poulenc-Cor_en_Fa.pdf",
                "Flûte": "/public/partitions/Poulenc-Flute.pdf",
                "Hautbois": "/public/partitions/Poulenc-Hautbois.pdf",
                "Saxophone 1": "/public/partitions/Poulenc-Saxophone_Alto_1.pdf",
                "Saxophone 2": "/public/partitions/Poulenc-Saxophone_Alto_2.pdf",
                "Timbales": "/public/partitions/Poulenc-Timbales.pdf",
                "Trombone 1": "/public/partitions/Poulenc-Trombone_1.pdf",
                "Trombone 2": "/public/partitions/Poulenc-Trombone_2.pdf", 
                "Trompette 1 & 2": "/public/partitions/Poulenc-Trompette_en_Sib1_2.pdf",
                "Trompette 3": "/public/partitions/Poulenc-Trompette_en_Sib_3.pdf",
                "Violoncelles": "/public/partitions/Poulenc-Violoncelles.pdf",
                "Violons 1": "/public/partitions/Poulenc-Violons_1.pdf",
                "Violons 2": "/public/partitions/Poulenc-Violons_2.pdf",
                "Violons 3": "/public/partitions/Poulenc-Violons_3.pdf"
              }},
              { titre: "Schéhérazade, Rimski-Korsakov", image: "/public/images/compositeurs/rimski.jpg", partitions: {
                "Alto": "/public/partitions/Scheherazade_alto.pdf", 
                "Basson": "/public/partitions/Scheherazade_basson.pdf",
                "Clarinette": "/public/partitions/Scheherazade_clarinette.pdf",
                "Contrebasse": "/public/partitions/Scheherazade_contrebasses.pdf",
                "Cor": "/public/partitions/Scheherazade_cor.pdf",
                "Flûte 1": "/public/partitions/Scheherazade_flute1.pdf",
                "Flûte 2": "/public/partitions/Scheherazade_flute2.pdf",
                "Harpe Timbales": "/public/partitions/Scheherazade_harp-timpani.pdf",
                "Hautbois": "/public/partitions/Scheherazade_hautbois.pdf",
                "Piano": "/public/partitions/Scheherazade_piano-solo.pdf",
                "Piccolo": "/public/partitions/Scheherazade_piccolo.pdf",
                "Saxophone": "/public/partitions/Scheherazade_saxophone.pdf",
                "Trombone": "/public/partitions/Scheherazade_trombone.pdf",
                "Trompette": "/public/partitions/Scheherazade_trompette.pdf",
                "Trompette Cor": "/public/partitions/Scheherazade_trompette-cor.pdf",
                "Violoncelles": "/public/partitions/Scheherazade_violoncelles.pdf",
                "Violons 1": "/public/partitions/Scheherazade_violons1.pdf",
                "Violons 2": "/public/partitions/Scheherazade_violons2.pdf",
                "Violons 3": "/public/partitions/Scheherazade_violons3.pdf"
              }},
              // Autres morceaux...
            ]
          },
    }),
    getters: {
      doubleCount: (state) => state.count * 2,  // Un exemple de getter, ici il n'est pas utilisé pour les partitions mais pourrait l'être pour des valeurs calculées
    },
    actions: {
      increment() {
        this.count++  // Un exemple d'action pour incrémenter la valeur de `count`
      },
    },
  })
