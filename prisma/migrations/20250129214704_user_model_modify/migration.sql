-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "name" TEXT,
    "userType" TEXT NOT NULL DEFAULT 'seeker',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "profileImage" TEXT,
    "authProvider" TEXT,
    "bio" TEXT,
    "location" TEXT
);
INSERT INTO "new_User" ("authProvider", "bio", "createdAt", "email", "id", "location", "name", "password", "profileImage", "updatedAt", "userType") SELECT "authProvider", "bio", "createdAt", "email", "id", "location", "name", "password", "profileImage", "updatedAt", "userType" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
