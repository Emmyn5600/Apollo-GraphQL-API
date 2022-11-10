import { context } from "../script.js";

export const resolvers = {
  Query: {
    // get all countries

    countries: async () => {
      const AllCountry = await context.prisma.country.findMany();
      return AllCountry;
    },

    // get all country by id

    country: async (parent, args) => {
      const id = args.id;
      const country = await context.prisma.country.findUnique({
        where: {
          id,
        },
      });

      return country;
    },
  },

  // Mutations

  Mutation: {
    // create Country

    createCountry: async (parent, args) => {
      const country = args.input;
      const newCountry = await context.prisma.country.create({
        data: country,
      });

      return newCountry;
    },

    // update Country
    updateCounty: async (parent, args) => {
      const { id, country, year, area, totalPopulation } = args.input;
      const updatedCountry = await context.prisma.country.update({
        data: {
          country: country,
          year: year,
          area: area,
          totalPopulation: totalPopulation,
        },
        where: {
          id,
        },
      });

      return updatedCountry;
    },

    // delete Country
    deleteCountry: async (parent, args) => {
      const id = args.id;
      await context.prisma.country.delete({
        where: {
          id,
        },
      });

      return null;
    },
  },
};
