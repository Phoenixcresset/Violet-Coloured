/**
 * Defines the path of advancement in this category
 *
 * \<namespace\>:data/advancement/\<name\>/\<advancementID\>
 */
export type Category = {
  namespace: string;
  name: string;
};

/**
 * Shared properties between all advancement types
 */
type BaseAdvancement = {
  icon: string;
  criteria: Record<string, any>;
  title?: string;
  description?: string;
};

/**
 * The advancement at the start of a category
 * Also defines the background of said category
 */
export type Root = BaseAdvancement & {
  background: string;
};

/**
 * Any advancement other than the root
 */
export type Advancement = BaseAdvancement & {
  id: string;
  parent: string;
  type?: string;
  requirements?: string[][];
};

/**
 * Defines how an advancement is displayed
 */
export type Display = {
  icon: string;
  id: string;
  title?: string;
  description?: string;
  background?: string;
  frame?: string;
  silent?: boolean;
};

/**
 * Display information used by advancements in Minecraft's format
 */
export type DisplayData = {
  icon: {
    id: string;
  };
  title: {
    translate: string;
  };
  description: {
    translate: string;
  };
  background?: string;
  announce_to_chat?: string;
  show_toast?: string;
};

/**
 * Root definition in Minecraft's format
 */
export type RootData = {
  display: DisplayData;
  criteria: object;
  requirements?: string[][];
};

/**
 * Advancement definition in Minecraft's format
 */
export type AdvancementData = RootData & {
  parent: string;
};
