export default {
  type: "document",
  name: "gerechten",
  title: "Gerechten",
  fields: [
    {
      name: "titel",
      title: "Titel",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Dit is de link die verwijst naar het pakket",
      options: {
        source: "titel",
        maxLength: 96,
      },
    },
    {
      name: "course",
      title: "Gang",
      type: "string",
      options: {
        list: [
          { title: "Voor- Hoofdgerecht", value: "voor-hoofdgerecht" },
          { title: "dessert", value: "dessert" },
          { title: "Overig", value: "overig" },
        ],
      },
    },
    {
      name: "description",
      type: "text",
      title: "Omschrijving",
      description: "Omschrijving voor het gerecht.",
    },
    {
      name: "headerimg",
      title: "Afbeelding",
      type: "mainImage",
    },
  ],
  preview: {
    select: {
      title: "titel",
      subtitle: "slug.current",
    },
  },
};
