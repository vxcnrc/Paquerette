import { defineStore } from 'pinia'
export const useSiteStore = defineStore('site', {
    state: () => ({ 
        partitions: {
            chorale: [
              { titre: "O Fortuna", image: "/public/images/o-fortuna.jpg", partitions: { "Chœur": "/public/partitions/o-fortuna.pdf" } },
              { titre: "Ave Verum", image: "/public/images/ave-verum.jpg", partitions: { "Chœur": "/public/partitions/ave-verum.pdf" } }
            ],
            orchestre: [
              { titre: "Stabat Mater, Poulenc", image: "/public/images/compositeurs/Poulenc.jpg", partitions: { "Alto clé de sol": "/public/partitions/Poulenc-Alto-cle-de-sol.pdf", "Alto clé Ut": "/public/partitions/Poulenc-Altos.pdf","Basson 1 & 2": "/public/partitions/Poulenc-Basson.pdf","Basson 3": "/public/partitions/Poulenc-Basson_3.pdf","Clarinette Basse": "/public/partitions/Poulenc-Clarinette_Basse.pdf","Clarinette Si b": "/public/partitions/Poulenc-Clarinette_en_Sib.pdf","Contrebasse 1": "/public/partitions/Poulenc-Contrebasse_1.pdf","Contrebasse 2": "/public/partitions/Poulenc-Contrebasse_2.pdf","Cor en Fa": "/public/partitions/Poulenc-Cor_en_Fa.pdf","Flûte": "/public/partitions/Poulenc-Flute.pdf","Hautbois": "/public/partitions/Poulenc-Hautbois.pdf","Saxophone 1": "/public/partitions/Poulenc-Saxophone_Alto_1.pdf","Saxophone 2": "/public/partitions/Poulenc-Saxophone_Alto_2.pdf","Timbales": "/public/partitions/Poulenc-Timbales.pdf","Trombone 1": "/public/partitions/Poulenc-Trombone_1.pdf","Trombone 2": "/public/partitions/Poulenc-Trombone_2.pdf", "Trompette 1 & 2": "/public/partitions/Poulenc-Trompette_en_Sib1_2.pdf","Trompette 3": "/public/partitions/Poulenc-Trompette_en_Sib_3.pdf","Violoncelles": "/public/partitions/Poulenc-Violoncelles.pdf","Violons 1": "/public/partitions/Poulenc-Violons_1.pdf","Violons 2": "/public/partitions/Poulenc-Violons_2.pdf","Violons 3": "/public/partitions/Poulenc-Violons_3.pdf",} },
              { titre: "Schéhérazade, Rimski-Korsakov", image: "/public/images/compositeurs/rimski.jpg", partitions: { "Alto": "/public/partitions/Scheherazade_alto.pdf", "Basson": "/public/partitions/Scheherazade_basson.pdf", "Clarinette": "/public/partitions/Scheherazade_clarinette.pdf", "Contrebasse": "/public/partitions/Scheherazade_contrebasses.pdf", "Cor": "/public/partitions/Scheherazade_cor.pdf", "Flûte 1": "/public/partitions/Scheherazade_flute1.pdf", "Flûte 2": "/public/partitions/Scheherazade_flute2.pdf", "Harpe Timpani": "/public/partitions/Scheherazade_harp-timpani.pdf", "Hautbois": "/public/partitions/Scheherazade_hautbois.pdf", "Piano": "/public/partitions/Scheherazade_piano-solo.pdf", "Piccolo": "/public/partitions/Scheherazade_piccolo.pdf", "Saxophone": "/public/partitions/Scheherazade_saxophone.pdf", "Trombone": "/public/partitions/Scheherazade_trombone.pdf", "Trompette": "/public/partitions/Scheherazade_trompette.pdf", "Trompette Cor": "/public/partitions/Scheherazade_trompette-cor.pdf", "Violoncelles": "/public/partitions/Scheherazade_violoncelles.pdf", "Violons 1": "/public/partitions/Scheherazade_violons1.pdf", "Violons 2": "/public/partitions/Scheherazade_violons2.pdf", "Violons 3": "/public/partitions/Scheherazade_violons3.pdf" } },
              { titre: "Concerto pour violon, Mendelssohn", image: "/public/images/compositeurs/mendelssohn.avif", partitions: { "Clarinette 1": "/public/partitions/bolero-clarinette.pdf", "Trompette 1": "/public/partitions/bolero-trompette.pdf" } },
              { titre: "Carmen, Georges Bizet", image: "/public/images/compositeurs/Bizet.jpg", partitions: { "Alto": "/public/partitions/Carmen-alto.pdf", "Basson": "/public/partitions/Carmen-cello-basson.pdf","Violoncelles": "/public/partitions/Carmen-cello-basson.pdf","Clarinette & Trompette 1": "/public/partitions/Carmen-clarinettes-trompettes1.pdf","Flûte & Hautbois": "/public/partitions/Carmen-flutes-hautbois.pdf","Piano": "/public/partitions/Carmen-piano.pdf","Saxophone": "/public/partitions/Carmen-sax.pdf","Trompette 2": "/public/partitions/Carmen-trompettes2.pdf","Violons 1": "/public/partitions/Carmen-violons1.pdf","Violons 2": "/public/partitions/Carmen-violons2.pdf","Violons 3": "/public/partitions/Carmen-violons3.pdf"} },
              { titre: "The Mask of Zorro, James Horner", image: "/public/images/compositeurs/zorro.jpg", partitions: { "Clarinette 1": "/public/partitions/bolero-clarinette.pdf", "Trompette 1": "/public/partitions/bolero-trompette.pdf" } },
              { titre: "Sleight Ride", image: "/public/images/compositeurs/noel.jpg", partitions: { "Clarinette 1": "/public/partitions/bolero-clarinette.pdf", "Trompette 1": "/public/partitions/bolero-trompette.pdf" } },
            ]
          },
    }),
    getters: {
      doubleCount: (state) => state.count * 2,
    },
    actions: {
      increment() {
        this.count++
      },
    },
  })