import { inboxTypes } from "../types/inbox.types";

const { SELECT_INBOX } = inboxTypes;

export const selectInbox = (id) => ({
  type: SELECT_INBOX,
  categoryId: id,
});
