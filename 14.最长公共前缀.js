/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (31.88%)
 * Total Accepted:    55K
 * Total Submissions: 171.2K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * 示例 1:
 *
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 *
 *
 * 示例 2:
 *
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 *
 *
 * 说明:
 *
 * 所有输入只包含小写字母 a-z 。
 *
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let re = '';
    let index = 0;
    let str = '';
    // let num = 0;
    let flag = true;
    let strsLenth = strs.length;
    while (flag && strsLenth > 0) {
        for (let i = 0; i < strsLenth; i++) {
            if(index>strsLenth-1){
              flag = false;
                break;
            }
            if (i === 0) {
                str = strs[i][index];
            }

            if (i === strsLenth - 1) {
                re += str;
                // re.push(str);
                index++;
            }
            if (strs[i][index] !== str) {
                flag = false;
                break;
            }
        }
    }

    return re;
};
