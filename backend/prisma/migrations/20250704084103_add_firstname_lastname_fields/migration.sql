/*
  Warnings:

  - You are about to drop the column `name` on the `PropertyAgent` table. All the data in the column will be lost.
  - Added the required column `firstName` to the `PropertyAgent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `PropertyAgent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobileNumber` to the `PropertyAgent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `PropertyAgent` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PropertyAgent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_PropertyAgent" ("email", "id") SELECT "email", "id" FROM "PropertyAgent";
DROP TABLE "PropertyAgent";
ALTER TABLE "new_PropertyAgent" RENAME TO "PropertyAgent";
CREATE UNIQUE INDEX "PropertyAgent_email_key" ON "PropertyAgent"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
