// oxlint-disable unicorn/no-empty-file

// @ts-check

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

/**
 * Properties needed to build an advancement display
 * @typedef {{
 *   icon: string,
 *   id: string,
 *   title?: string,
 *   description?: string,
 *   background?: string,
 *   frame?: string,
 *   silent?: boolean
 * }} Display
 */

/**
 * Display used by advancement objects
 * @typedef {{
 *   icon: {
 *     id: string;
 *   },
 *   title: {
 *     translate: string
 *   },
 *   description: {
 *     translate: string
 *   },
 *   background?: string,
 *   announce_to_chat?: string,
 *   show_toast?: string
 * }} DisplayData
 */

/**
 * Root definition in Minecraft format
 * @typedef {{
 *   display: DisplayData,
 *   criteria: Object,
 *   requirements?: Array<string[]>
 * }} RootData
 */

/**
 * Advancement definition in Minecraft format
 * @typedef {RootData & {
 *   parent: string
 * }} AdvancementData
 */
