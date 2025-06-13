/*
  Warnings:

  - You are about to drop the `Main` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Main";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "main" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "level" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "main_text_key" ON "main"("text");

-- CreateIndex
CREATE UNIQUE INDEX "main_level_key" ON "main"("level");
