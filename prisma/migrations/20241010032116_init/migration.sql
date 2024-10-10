-- CreateEnum
CREATE TYPE "Role" AS ENUM ('public', 'admin');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(100) NOT NULL,
    "prodi" VARCHAR(100),
    "fakultas" VARCHAR(100),
    "email" VARCHAR(100) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'public',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Divisi" (
    "id" SERIAL NOT NULL,
    "divisi" VARCHAR(100) NOT NULL,

    CONSTRAINT "Divisi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Angkatan" (
    "id" SERIAL NOT NULL,
    "angkatan" INTEGER NOT NULL,

    CONSTRAINT "Angkatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DivisiOrganisasi" (
    "id" SERIAL NOT NULL,
    "divisi" VARCHAR(100) NOT NULL,

    CONSTRAINT "DivisiOrganisasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnggotaBlwn" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(100) NOT NULL,
    "angkatanId" INTEGER NOT NULL,
    "divisiId" INTEGER NOT NULL,
    "divisiOrganisasiId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "AnggotaBlwn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pengurus" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(100) NOT NULL,
    "divisiOrganisasiId" INTEGER NOT NULL,
    "divisiId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Pengurus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "AnggotaBlwn" ADD CONSTRAINT "AnggotaBlwn_angkatanId_fkey" FOREIGN KEY ("angkatanId") REFERENCES "Angkatan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnggotaBlwn" ADD CONSTRAINT "AnggotaBlwn_divisiId_fkey" FOREIGN KEY ("divisiId") REFERENCES "Divisi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnggotaBlwn" ADD CONSTRAINT "AnggotaBlwn_divisiOrganisasiId_fkey" FOREIGN KEY ("divisiOrganisasiId") REFERENCES "DivisiOrganisasi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnggotaBlwn" ADD CONSTRAINT "AnggotaBlwn_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pengurus" ADD CONSTRAINT "Pengurus_divisiOrganisasiId_fkey" FOREIGN KEY ("divisiOrganisasiId") REFERENCES "DivisiOrganisasi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pengurus" ADD CONSTRAINT "Pengurus_divisiId_fkey" FOREIGN KEY ("divisiId") REFERENCES "Divisi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pengurus" ADD CONSTRAINT "Pengurus_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
