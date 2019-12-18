/**
 * 签名模块
 * @module libs/helpers
 */
export default {
    /**
     * 删除前后空格
     * @param {string} 待处理的字符串
     * @return {string}
     */
    removeSpace(str) {
        if (!str.replace) {
            return str;
        }
        let reg = /(^\s*)|(\s*$)/g;
        return str.replace(reg, '');
    },
    /**
     * 判断是否为空
     * @param {string} value 字符串
     * @return {boolean}
     */
    isEmpty(value) {
        return value === null || value === undefined || value.trim() === '';
    },

    /**
     * key mirror
     * @param {Object} obj 对象
     * @return {Object}
     */
    keyMirror(obj) {
        let ret = {};
        let key;

        for (key in obj) {
            if (!obj.hasOwnProperty(key)) {
                continue;
            }

            ret[key] = key;
        }

        return ret;
    },

    /**
     * 载入 JS 文件
     * @param {string} url JS URL
     */
    loadScript(url) {
        const httpReq = new XMLHttpRequest();

        httpReq.open('GET', url, true);
        httpReq.send(null);
    },

    /**
     * 等待 n 毫秒
     * @param {string} n 毫秒数
     * @returns {Promise}
     */
    sleep(n) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, n);
        });
    }
};