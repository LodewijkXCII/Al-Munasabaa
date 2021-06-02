export default {
  type: "document",
  name: "decoratie",
  title: "Decoratie",
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
      name: "description",
      type: "text",
      title: "Omschrijving",
      description: "Omschrijving voor de decoratie.",
    },
    {
      name: "headerimg",
      title: "Afbeelding",
      type: "mainImage",
    },
    {
      name: "imagesGallery",
      title: "Images gallery",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
  preview: {
    select: {
      title: "titel",
      subtitle: "slug.current",
    },
  },
};
