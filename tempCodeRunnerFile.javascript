var longestCommonPrefix = function(strs) {
  let re = '';
  let i = 0;
  let str = '';
  // let num = 0;
  let flag = true;
  let strsLenth = strs.length;
  while (flag) {
      strs.forEach((v, k) => {
        console.log('============ str =============');
        console.log(str);
        console.log('============ re =============');
        console.log(re);
          if (k === 0) {
              str = v[i];
          } else if (k === strsLenth - 1) {
            if (v[i] !== str) {
              flag= false;
              return re;
          }else{
              re += v[i];
              i++;
          }
          } else {
              if (v[i] !== str) {
                  flag= false;
                  return re;
              }
          }
      });
  }
  return re;
};
