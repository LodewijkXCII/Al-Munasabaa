export default {
  type: 'document',
  name: 'paketten',
  title: 'Paketten',
  fields: [
    {
      name: 'titel',
      title: 'Titel',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Dit is de link die verwijst naar het pakket',
      options: {
        source: 'titel',
        maxLength: 96
      }
    },
    {
      name: 'prijs',
      type: 'number'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Omschrijving',
      description: 'Omschrijving voor het gerecht.'
    },
    {
      name: 'dranken',
      type: 'text',
      title: 'Drankkeuze'
    },
    {
      name: 'diner',
      type: 'text',
      title: 'Dinerkeuze'
    },
    {
      name: 'gerechten',
      type: 'array',
      description: 'Voeg de gerechten voor dit pakket toe.',
      title: 'Gerechten',
      validation: Rule => Rule.unique().error('Je kan een gerecht niet meerdere keren kiezen.'),
      of: [
        {
          type: 'reference',
          to: [{ type: 'gerechten' }]
        }
      ]
    },
    {
      name: 'decoraties',
      type: 'array',
      description: 'Voeg de decoraties voor dit pakket toe.',
      title: 'Decoraties',
      validation: Rule => Rule.unique().error('Je kan een decoratie niet meerdere keren kiezen.'),
      of: [
        {
          type: 'reference',
          to: [{ type: 'decoratie' }]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'titel',
      subtitle: 'slug.current'
    }
  }
}
