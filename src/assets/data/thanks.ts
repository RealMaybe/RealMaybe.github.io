import type { ThanksKeys, ThanksData } from "@tsTypes";

import starBuilders from "./thanks/starBuilders.json";
import starSculptors from "./thanks/starSculptors.json";
import starGuides from "./thanks/starGuides.json";
import wisdomStars from "./thanks/wisdomStars.json";
import cornerstoneTech from "./thanks/cornerstoneTech.json";

/* ========== */

/** 感谢名单 */
export const orderedThanksKeys: Array<ThanksKeys> = [
    "starBuilders",
    "starGuides",
    "starSculptors",
    "wisdomStars",
    "cornerstoneTech",
] as const; // 保持字面量类型

/** 感谢名单 */
export default {
    lastUpdated: "2025-11-04",
    list: {
        starBuilders,
        starGuides,
        starSculptors,
        wisdomStars,
        cornerstoneTech,
    },
} as ThanksData;
