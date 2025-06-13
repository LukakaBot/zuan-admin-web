/*
  Warnings:

  - A unique constraint covering the columns `[level]` on the table `main` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "main_level_key" ON "main"("level");
