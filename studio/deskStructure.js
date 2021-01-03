import S from '@sanity/desk-tool/structure-builder'
import { MdPerson } from 'react-icons/md'
import { MdEvent as MdEventNote } from 'react-icons/md'
import { MdGavel } from 'react-icons/md'
import { MdInfoOutline as MdInfo } from 'react-icons/md'

const hiddenDocTypes = listItem =>
  !['program', 'session', 'person', 'eventInformation', 'codeOfConduct'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
