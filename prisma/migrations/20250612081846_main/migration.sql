-- CreateTable
CREATE TABLE "Main" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "level" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Main_text_key" ON "Main"("text");

-- CreateIndex
CREATE UNIQUE INDEX "Main_level_key" ON "Main"("level");
