// oxlint-disable unicorn/no-empty-file

/** @typedef {{namespace: string, name: string}} Category */

/**
 * Base shared properties for all advancements
 * @typedef {{
 *   icon: string,
 *   criteria: Record<string, any>,
 *   title?: string,
 *   description?: string
 * }} BaseAdvancement
 */

/**
 * Root advancement definition
 * @typedef {BaseAdvancement & {
 *   background: string
 * }} Root
 */

/**
 * Standard advancement definition
 * @typedef {BaseAdvancement & {
 *   id: string,
 *   parent: string,
 *   type?: string,
 *   requirements?: string[][]
 * }} Advancement
 */
