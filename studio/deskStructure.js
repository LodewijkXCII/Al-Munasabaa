import S from "@sanity/desk-tool/structure-builder";
// TODO CHANGE ICONS
import {
  MdPerson,
  MdEvent as MdEventNote,
  MdGavel,
  MdInfoOutline as MdInfo,
} from "react-icons/md";

const hiddenDocTypes = (listItem) =>
  !["decoratie", "gerechten", "paketten"].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Decoratie")
        .child(
          S.editor()
            .id("decoratie")
            .schemaType("decoratie")
            .documentId("decoratie")
        ),
      S.listItem()
        .title("Gerechten")
        .child(
          S.editor()
            .id("gerechten")
            .schemaType("gerechten")
            .documentId("gerechten")
        ),
      S.listItem()
        .title("Paketten")
        .child(
          S.editor()
            .id("paketten")
            .schemaType("paketten")
            .documentId("paketten")
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
