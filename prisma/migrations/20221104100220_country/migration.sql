-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "area" INTEGER NOT NULL,
    "totalPopulation" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_country_key" ON "Country"("country");
