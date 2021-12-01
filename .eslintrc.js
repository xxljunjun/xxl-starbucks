module.exports = {
    root: true, //当前配置为根配置，将不再从上级文件夹查找配置
    env: {
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint',
        //支持装饰器语法
        ecmaFeatures: {
            "legacyDecorators": true
        }
    },
    extends: ['plugin:vue/essential', 'eslint:recommended'],
    rules: {  //warn off error
        //禁止打印
        'no-console': "off", 
        //禁止debbug
        'no-debugger':  "off",
        //强制使用单引号
        quotes:'off',
        //强制不使用分号结尾
        semi: ['error', 'never']
    }
}