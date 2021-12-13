
module.exports = {
    "devServer": {
        "port": 8080,
        "proxy": {
            "^/api": {
                "target": "http://localhost:3000",
                "changeOrigin": true
            }
        }
    }
}

// module.exports = {
//     chainWebpack: config => {
//         config.module.rules.delete('eslint');
//     }
// }