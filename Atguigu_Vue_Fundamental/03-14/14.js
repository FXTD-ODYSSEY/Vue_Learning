(function () {

    const MyPlugin = {}
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () { };

        // 2. 添加全局资源
        Vue.directive("my-directive", function (el, binding) {
            el.textContent = binding.value.toUpperCase();
        })

        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
            // 逻辑...
        };
    };

    window.MyPlugin = MyPlugin;
})();
