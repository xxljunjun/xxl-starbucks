module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', 'eslint:recommended'],
    rules: {
        //禁止打印
        'no-console': "off", 
        //禁止debbug
        'no-debugger':  "off",
        //强制使用单引号
        quotes: ['error', 'single'],
        //强制不使用分号结尾
        semi: ['error', 'never']
    },
    parserOptions: {
        parser: 'babel-eslint',
        //支持装饰器语法
        ecmaFeatures: {
            "legacyDecorators": true
        }
    }
}