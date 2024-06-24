

export function listerAnnees(debut : number, fin : number) {
    const listeAnnees = [];
    for (let i = fin; i >= debut; i--) {
      listeAnnees.push(i);
    }
    return listeAnnees;
  }

export function toDateFrancais(date : Date){
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric', // Affiche l'année avec 4 chiffres
        month: 'long',   // Affiche le mois en toutes lettres
        day: 'numeric'   // Affiche le jour du mois avec 1 ou 2 chiffres
      };
      
      const formattedDate: string = date.toLocaleDateString('fr-FR', options);
      return formattedDate
}

export function toFormatMoney( argent : number){

    const formattedNumber: string = new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'MGA',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(argent);
    return formattedNumber;
}