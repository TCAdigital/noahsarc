/**
 * Shared pieces of the Contact Us form.
 *
 * These live outside the Server Action file because a `"use server"` module is
 * only allowed to export async functions.
 */

export const CONTACT_MESSAGES_TABLE = "contact_messages";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export const CONTACT_LIMITS = {
  name: 120,
  email: 200,
  message: 5000,
};
