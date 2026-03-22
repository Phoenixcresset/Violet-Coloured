// oxlint-disable unicorn/no-empty-file
/** @typedef {{namespace: string, name: string}} Category */

/**
 * Base shared properties for all advancements
 * @typedef {{
 *   id: string,
 *   icon: string,
 *   criteria: Record<string, any>,
 *   title?: string,
 *   description?: string
 * }} BaseAdvancement
 */

/**
 * Root advancement definition
 * @typedef {BaseAdvancement & {
 *   id: "root",
 *   background: string
 * }} Root
 */

/**
 * Standard advancement definition
 * @typedef {BaseAdvancement & {
 *   parent: string,
 *   type?: string,
 *   requirements?: string[][]
 * }} Advancement
 */
