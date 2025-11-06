export type ThanksKeys = `star${"Builders" | "Sculptors" | "Guides"}` | "wisdomStars" | "cornerstoneTech";

interface Description {
    exists: boolean;
    value?: string[];
}

interface Link {
    exists: boolean;
    value?: string;
}

interface Icon {
    exists: boolean;
    mark?: boolean;
    value?: string;
}

interface Tags {
    exists: boolean;
    value?: string[];
}

/* ========== */

/**
 * @description Thanks category
 */
export interface Category {
    id: string;
    key: ThanksKeys;
    name: string;
    emoji: string;
    description: string;
    color?: string;
}

/**
 * @description Thanks member
 */
export interface Member {
    id: string;
    name: string;
    type: string;
    purpose: string;
    description: Description;
    link: Link;
    icon: Icon;
    tags: Tags;
}

/* ========== */

/**
 * @description Thanks List item
 */
export interface Thanks {
    category: Category;
    members: Array<Member>;
}

/**
 * @description Thanks list
 */
export type ThanksList = Record<ThanksKeys, Thanks>;

/* ========== */

/**
 * @description Thanks data
 */
export interface ThanksData {
    lastUpdated: string;
    list: ThanksList;
}
