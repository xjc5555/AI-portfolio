// 模拟数据
const mockData = {
    // 预设商品列表
    presetProducts: [
        "iPhone 13",
        "iPhone 14",
        "iPhone 15",
        "小米14",
        "小米13 Ultra",
        "华为Mate 60 Pro",
        "华为P60 Pro",
        "三星S24 Ultra",
        "OPPO Find X7",
        "vivo X100 Pro",
        "联想ThinkPad X1",
        "MacBook Air M2",
        "MacBook Pro M3",
        "iPad Pro 12.9",
        "AirPods Pro 2"
    ],
    
    // 搜索建议
    searchSuggestions: {
        "iphone": ["iPhone 13", "iPhone 14", "iPhone 15", "iPhone 13 Pro", "iPhone 14 Pro"],
        "小米": ["小米14", "小米13", "小米12", "小米13 Ultra", "小米12 Pro"],
        "华为": ["华为Mate 60", "华为P60", "华为Mate 50", "华为nova 10", "华为P50"],
        "联想": ["联想ThinkPad X1", "联想Yoga", "联想小新", "联想拯救者", "联想Ideapad"],
        "mac": ["MacBook Air", "MacBook Pro", "iMac", "Mac mini", "Mac Studio"]
    },
    
    // 模拟分析结果
    analyzeResult: {
        summary: {
            total_listings: 150,
            average_price: 3200,
            median_price: 3000,
            price_range: [2000, 4500],
            recommended_price: 2800
        },
        price_analysis: {
            min_price: 2000,
            max_price: 4500,
            average_price: 3200,
            median_price: 3000,
            price_distribution: [
                {"range": "2000-2500", "count": 30},
                {"range": "2500-3000", "count": 60},
                {"range": "3000-3500", "count": 40},
                {"range": "3500-4000", "count": 15},
                {"range": "4000-4500", "count": 5}
            ]
        },
        platform_analysis: {
            "闲鱼": {"count": 80, "average_price": 3100, "url": "https://2.taobao.com"},
            "转转": {"count": 50, "average_price": 3300, "url": "https://www.zhuanzhuan.com"},
            "爱回收": {"count": 20, "average_price": 2900, "url": "https://www.aihuishou.com"}
        },
        price_trend: [
            {"date": "2024-01-01", "price": 3300},
            {"date": "2024-01-08", "price": 3250},
            {"date": "2024-01-15", "price": 3200}
        ],
        recommendations: [
            "建议在闲鱼平台购买，价格相对较低",
            "选择九成新以上的商品，性价比最高",
            "关注价格在2800-3200之间的 listings"
        ],
        links: [
            {"platform": "闲鱼", "title": "iPhone 13 - 九成新", "price": 2900, "url": "https://2.taobao.com/item1"},
            {"platform": "转转", "title": "iPhone 13 - 全新", "price": 3100, "url": "https://www.zhuanzhuan.com/item1"},
            {"platform": "爱回收", "title": "iPhone 13 - 八成新", "price": 2700, "url": "https://www.aihuishou.com/item1"}
        ]
    },
    
    // 模拟对话历史
    chatHistory: [
        {
            role: "bot",
            content: "您好！我是赛博淘客智能助手，很高兴为您服务。请问您想了解哪款二手商品的信息？"
        }
    ],
    
    // 模拟图片识别结果
    imageRecognition: {
        success: true,
        data: {
            description: "这是一张iPhone 13的图片，手机外观完好，屏幕无划痕",
            estimated_price: 3000,
            condition: "九成新",
            features: ["iPhone 13", "128GB", "黑色", "无划痕"]
        }
    },
    
    // 模拟历史记录
    history: [
        {
            product: "iPhone 13",
            time: "2024-01-15 14:30",
            price: "¥3200"
        },
        {
            product: "小米14",
            time: "2024-01-15 13:45",
            price: "¥2800"
        }
    ]
};

// 模拟API调用
async function mockApiCall(endpoint, data) {
    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    switch(endpoint) {
        case 'analyze':
            return mockData.analyzeResult;
        case 'chat':
            return {
                response: "这是一个模拟的AI回复。"
            };
        case 'recognize':
            return mockData.imageRecognition;
        default:
            return { error: 'Unknown endpoint' };
    }
}

