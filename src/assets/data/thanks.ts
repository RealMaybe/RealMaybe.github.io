import type { ThanksData } from "@tsTypes";

import starBuilders from "./thanks/starBuilders.json";
import starSculptors from "./thanks/starSculptors.json";
import starGuides from "./thanks/starGuides.json";
import wisdomStars from "./thanks/wisdomStars.json";
import cornerstoneTech from "./thanks/cornerstoneTech.json";

export default {
    lastUpdated: "2025-10-30", // 最后更新时间
    // 列表
    list: {
        // starBuilders, // 筑星者
        // starSculptors, // 塑星者
        // starGuides, // 引星者
        // wisdomStars, // 智慧星 - AI 工具
        cornerstoneTech, // 辰星石 - 技术栈
    },
} as ThanksData;
