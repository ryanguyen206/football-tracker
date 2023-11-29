/*
  Warnings:

  - You are about to drop the column `teamId` on the `Watchlist` table. All the data in the column will be lost.
  - You are about to drop the `Team` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Watchlist" DROP CONSTRAINT "Watchlist_teamId_fkey";

-- DropIndex
DROP INDEX "Watchlist_userId_teamId_key";

-- AlterTable
ALTER TABLE "Watchlist" DROP COLUMN "teamId";

-- DropTable
DROP TABLE "Team";
