import {prisma} from '@/app/lib/prisma';
import { resolve } from 'path';

interface Maison{
    id : string,
    nom : string,
    description : string,
    duree : number,
    prix : number
}


interface V_devis{
    id : string,
    numero : string,
    reference : string,
    pourcentage_paye : number,
    payement_effectue : number,
    lieu : string,
    nom_maison : string,
    finition : string,
    montant: number,
    reste : number,
    debut : Date, 
    fin : Date
}

export async function montantTotalEffectue(){
    const montantTotal : any = await prisma.$queryRaw`
    select COALESCE(SUM(montant - reste),0) somme from v_devis
    `;
    await new Promise((resolve)=>setTimeout(resolve, 2000));
    return montantTotal[0].somme ?? 0;
}


export async function montantTotalDevis(){
    const montantTotal : any= await prisma.$queryRaw`
    SELECT COALESCE(sum(montant),0) somme FROM deviss
    `;
    await new Promise((resolve)=>setTimeout(resolve, 2000));
    return montantTotal[0].somme ?? 0;
}

export async function fetchDevis(){
    const dataDevisByUser = await prisma.$queryRaw<V_devis[]>`
    SELECT 
        id,
        numero,
        reference,
        pourcentage_paye,
        payement_effectue,
        lieu,
        nom_maison,
        nom_finition as finition,
        montant, reste,
        date_debut_travaux as debut,
        date_debut_travaux + (duree || ' days')::INTERVAL as fin
    from v_devis vd
    JOIN maisons m ON id_maison = vd.idmaison
    JOIN finitions f ON f.id_finition = vd.idfinition
    JOIN users u ON id_user = iduser
    `
    await new Promise((resolve)=>setTimeout(resolve, 2000));
    return dataDevisByUser;

}

export async function fetchTravaux(){
    const data = await prisma.travauxs.findMany({
        include:{
            unites : true
        }
    });
    await new Promise(resolve=>setTimeout(resolve, 2000))
    return data;

}


export async function fetchDevisByUser(idUser : number){
    const dataDevisByUser = await prisma.$queryRaw<V_devis[]>`
    SELECT 
        id,
        numero,
        reference,
        pourcentage_paye,
        payement_effectue,
        lieu,
        nom_maison,
        nom_finition as finition,
        montant, reste,
        date_debut_travaux as debut,
        date_debut_travaux + (duree || ' days')::INTERVAL as fin
    from v_devis vd
    JOIN maisons m ON id_maison = vd.idmaison
    JOIN finitions f ON f.id_finition = vd.idfinition
    JOIN users u ON id_user = iduser
    WHERE vd.iduser = ${idUser}
    `
    // await new Promise((resolve)=>setTimeout(resolve, 2000));
    return dataDevisByUser;

}

export async function fetchFinition() {
    
    const dataFinition = await prisma.finitions.findMany()
    await new Promise(resolve => setTimeout(resolve,2000));
    return dataFinition;
}

export async function fetchTypeMaison(){
    
    const dataType= await prisma.$queryRaw<Maison[]>`SELECT * FROM v_prix_maisons`;
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    return dataType;

}


async function checkClient( num :string){

    const user = await prisma.users.findUnique({
        where : {numero  : num}
    })
    if (user) return false;
    return user;
}