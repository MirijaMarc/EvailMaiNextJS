-- CreateTable
CREATE TABLE "devis_csv" (
    "id" SERIAL NOT NULL,
    "client" VARCHAR(255) NOT NULL,
    "ref_devis" VARCHAR(255) NOT NULL,
    "type_maison" VARCHAR(255) NOT NULL,
    "finition" VARCHAR(255) NOT NULL,
    "taux_finition" VARCHAR(255) NOT NULL,
    "date_devis" VARCHAR(255) NOT NULL,
    "date_debut" VARCHAR(255) NOT NULL,
    "lieu" VARCHAR(255) NOT NULL,

    CONSTRAINT "devis_csv_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "devis_travaux" (
    "id_devis_travaux" SERIAL NOT NULL,
    "iddevis" INTEGER,
    "idtravaux" INTEGER,
    "prix_unitaire" DOUBLE PRECISION NOT NULL,
    "quantite" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "devis_travaux_pkey" PRIMARY KEY ("id_devis_travaux")
);

-- CreateTable
CREATE TABLE "deviss" (
    "id_devis" SERIAL NOT NULL,
    "reference" VARCHAR(255) NOT NULL,
    "idmaison" INTEGER,
    "idfinition" INTEGER,
    "iduser" INTEGER,
    "montant" DOUBLE PRECISION NOT NULL,
    "finition" DOUBLE PRECISION NOT NULL,
    "duree" DOUBLE PRECISION NOT NULL,
    "date_devis" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "date_debut_travaux" DATE,
    "lieu" VARCHAR(255),
    "etat_devis" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "deviss_pkey" PRIMARY KEY ("id_devis")
);

-- CreateTable
CREATE TABLE "finitions" (
    "id_finition" SERIAL NOT NULL,
    "nom_finition" VARCHAR(255) NOT NULL,
    "marge" DOUBLE PRECISION NOT NULL,
    "etat_finition" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "finitions_pkey" PRIMARY KEY ("id_finition")
);

-- CreateTable
CREATE TABLE "maisons" (
    "id_maison" SERIAL NOT NULL,
    "nom_maison" VARCHAR(255) NOT NULL,
    "description_maison" TEXT NOT NULL,
    "etat_maison" INTEGER NOT NULL DEFAULT 0,
    "surface" DOUBLE PRECISION,
    "duree_construction" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "maisons_pkey" PRIMARY KEY ("id_maison")
);

-- CreateTable
CREATE TABLE "maisons_travaux" (
    "id_maison_travaux" SERIAL NOT NULL,
    "idmaison" INTEGER,
    "idtravaux" INTEGER,
    "quantite" DOUBLE PRECISION,

    CONSTRAINT "maisons_travaux_pkey" PRIMARY KEY ("id_maison_travaux")
);

-- CreateTable
CREATE TABLE "maisons_travaux_csv" (
    "id" SERIAL NOT NULL,
    "type_maison" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "surface" VARCHAR(255) NOT NULL,
    "code_travaux" VARCHAR(255) NOT NULL,
    "type_travaux" VARCHAR(255) NOT NULL,
    "unite" VARCHAR(255) NOT NULL,
    "prix_unitaire" VARCHAR(255) NOT NULL,
    "quantite" VARCHAR(255) NOT NULL,
    "duree_travaux" VARCHAR(255) NOT NULL,

    CONSTRAINT "maisons_travaux_csv_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "paiement_csv" (
    "id" SERIAL NOT NULL,
    "ref_devis" VARCHAR(255) NOT NULL,
    "ref_paiement" VARCHAR(255) NOT NULL,
    "date_paiement" VARCHAR(255) NOT NULL,
    "montant" VARCHAR(255) NOT NULL,

    CONSTRAINT "paiement_csv_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payement_devis" (
    "id_payement_devis" SERIAL NOT NULL,
    "reference" VARCHAR(255) NOT NULL,
    "iddevis" INTEGER,
    "montant" DOUBLE PRECISION NOT NULL,
    "date_payement" TIMESTAMP(6) NOT NULL,
    "etat_payement_devis" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "payement_devis_pkey" PRIMARY KEY ("id_payement_devis")
);

-- CreateTable
CREATE TABLE "travauxs" (
    "id_travaux" SERIAL NOT NULL,
    "idtype_travaux" INTEGER,
    "code_travaux" VARCHAR(255) NOT NULL,
    "nom_travaux" VARCHAR(255) NOT NULL,
    "unite_travaux" INTEGER,
    "prix_unitaire" DOUBLE PRECISION,
    "etat_travaux" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "travauxs_pkey" PRIMARY KEY ("id_travaux")
);

-- CreateTable
CREATE TABLE "type_travaux" (
    "id_type_travaux" SERIAL NOT NULL,
    "code_type_travaux" VARCHAR(255) NOT NULL,
    "nom_type_travaux" VARCHAR(255) NOT NULL,
    "etat_type_travaux" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "type_travaux_pkey" PRIMARY KEY ("id_type_travaux")
);

-- CreateTable
CREATE TABLE "unites" (
    "id_unite" SERIAL NOT NULL,
    "nom_unite" VARCHAR(255) NOT NULL,
    "etat_unite" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "unites_pkey" PRIMARY KEY ("id_unite")
);

-- CreateTable
CREATE TABLE "users" (
    "id_user" SERIAL NOT NULL,
    "email" VARCHAR(255),
    "numero" VARCHAR(255),
    "password" VARCHAR(255),
    "role" INTEGER NOT NULL DEFAULT 1,
    "etat_user" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id_user")
);

-- CreateIndex
CREATE UNIQUE INDEX "devis_travaux_iddevis_idtravaux_key" ON "devis_travaux"("iddevis", "idtravaux");

-- CreateIndex
CREATE UNIQUE INDEX "maisons_travaux_idmaison_idtravaux_key" ON "maisons_travaux"("idmaison", "idtravaux");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_numero_key" ON "users"("numero");

-- CreateIndex
CREATE UNIQUE INDEX "users_password_key" ON "users"("password");

-- AddForeignKey
ALTER TABLE "devis_travaux" ADD CONSTRAINT "devis_travaux_iddevis_fkey" FOREIGN KEY ("iddevis") REFERENCES "deviss"("id_devis") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "devis_travaux" ADD CONSTRAINT "devis_travaux_idtravaux_fkey" FOREIGN KEY ("idtravaux") REFERENCES "travauxs"("id_travaux") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "deviss" ADD CONSTRAINT "deviss_idfinition_fkey" FOREIGN KEY ("idfinition") REFERENCES "finitions"("id_finition") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "deviss" ADD CONSTRAINT "deviss_idmaison_fkey" FOREIGN KEY ("idmaison") REFERENCES "maisons"("id_maison") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "deviss" ADD CONSTRAINT "deviss_iduser_fkey" FOREIGN KEY ("iduser") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "maisons_travaux" ADD CONSTRAINT "maisons_travaux_idmaison_fkey" FOREIGN KEY ("idmaison") REFERENCES "maisons"("id_maison") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "maisons_travaux" ADD CONSTRAINT "maisons_travaux_idtravaux_fkey" FOREIGN KEY ("idtravaux") REFERENCES "travauxs"("id_travaux") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "payement_devis" ADD CONSTRAINT "payement_devis_iddevis_fkey" FOREIGN KEY ("iddevis") REFERENCES "deviss"("id_devis") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "travauxs" ADD CONSTRAINT "travauxs_idtype_travaux_fkey" FOREIGN KEY ("idtype_travaux") REFERENCES "type_travaux"("id_type_travaux") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "travauxs" ADD CONSTRAINT "travauxs_unite_travaux_fkey" FOREIGN KEY ("unite_travaux") REFERENCES "unites"("id_unite") ON DELETE NO ACTION ON UPDATE NO ACTION;
