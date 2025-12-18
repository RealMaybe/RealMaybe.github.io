type lowestPrice = number;
type highestPrice = number;

/**
 * 产品规格选项接口
 * 用于定义产品的具体规格选项，如尺寸、颜色等
 */
export interface SpecificationOption {
    /** 规格选项的内部标识值，用于程序逻辑处理 */
    value: string | number;

    /** 规格选项的显示名称，展示给用户看的文本 */
    displayName: string;

    /** 库存状态
     * - true表示有货
     * - false表示缺货（可渲染为灰色）
     */
    inStock: boolean;

    /**
     * 颜色代码（十六进制格式）
     * - 主要用于颜色规格
     * @optional 可选属性，非颜色规格不需要此字段
     */
    colorCode?: string;
}

/**
 * 产品规格配置接口
 * 用于定义产品的规格分类，如型号、颜色等
 */
export interface ProductSpecification {
    /** 规格类型标识
     * 如："size"（尺寸）、"color"（颜色）、"memory"（内存）等
     */
    type: string;

    /** 规格的显示名称
     * 如："型号"、"颜色"、"内存"等
     */
    name: string;

    /** 该规格下的所有可选项目数组 */
    options: Array<SpecificationOption>;
}

/**
 * 产品信息接口
 * 定义单个产品的完整信息结构
 */
export interface Product {
    /** 产品的唯一标识符 */
    id: number | string;

    /** 产品名称 */
    name: string;

    /** 产品详细描述 */
    description?: string;

    /** 产品图片URL数组，用于轮播图展示 */
    images: Array<string>;

    /** 产品当前售价 */
    price: number | [lowestPrice, highestPrice];

    /**
     * 产品原价（划线价），用于显示折扣信息
     * @optional 可选属性，如果没有折扣可不提供
     */
    originalPrice?: number;

    /**
     * 产品特色功能列表
     * 如：["防水面料", "可调节肩带", "内部分隔层"]等
     * @optional 可选属性，如果没有特色功能可不提供
     */
    features?: Array<string>;

    /**
     * 产品标签数组
     * 如：["新品", "热卖", "限时优惠"]等
     * @optional 可选属性，如果没有标签可不提供
     */
    tags?: Array<string>;

    qrcode?: string;
    
    /** 跳转到淘宝商品页面的链接 */
    taobaoLink: string;

    /** 产品的规格配置数组，包含所有可选的规格类型 */
    specifications: Array<ProductSpecification>;
}

/**
 * 产品数组类型
 * 主要导出类型，表示整个产品列表的数据结构
 */
export type Products = Array<Product>;
