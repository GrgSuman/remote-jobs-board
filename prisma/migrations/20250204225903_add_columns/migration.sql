-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_companies" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "logo" TEXT,
    "website" TEXT,
    "linkedinURL" TEXT NOT NULL DEFAULT '',
    "twitterURL" TEXT NOT NULL DEFAULT '',
    "industry" TEXT,
    "size" TEXT,
    "remotePolicy" TEXT,
    "userId" TEXT NOT NULL,
    CONSTRAINT "companies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_companies" ("description", "id", "industry", "logo", "name", "remotePolicy", "size", "userId", "website") SELECT "description", "id", "industry", "logo", "name", "remotePolicy", "size", "userId", "website" FROM "companies";
DROP TABLE "companies";
ALTER TABLE "new_companies" RENAME TO "companies";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
