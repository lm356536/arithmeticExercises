
// 随机排序 通过随机产生0到1的数，然后判断是否大于0.5从而影响排序，产生随机性的效果
export const randomSort = (a, b) => {
  return Math.random() > 0.5 ? -1 : 1
}
export const getTwoNums = (INIT_NUM1, INIT_NUM2, INIT_NUM3, MAX_NUM) => {
  const tempArr1 = []
  const tempArr2 = []
  const tempArr3 = []
  for (let i = INIT_NUM1; i <= MAX_NUM; i++) {
    for (let j = INIT_NUM2; j <= MAX_NUM - i; j++) {
      // 两位数加法
      tempArr1.push(i + '+' + j + '=')
      // 两位数减法
      tempArr1.push((MAX_NUM - j) + '-' + (i) + '=')
      // console.log(tempArr1)
      // 带括号，两位数加减法
      tempArr2.push(i + '+' + '(  )' + '=' + (MAX_NUM - j))
      tempArr2.push('(  )' + '+' + i + '=' + (MAX_NUM - j))
      tempArr2.push((MAX_NUM - j) + '-' + '(  )' + '=' + i)
      tempArr2.push('(  )' + '-' + j + '=' + i)
      // 三位数加减法
      for (let k = INIT_NUM3; k <= MAX_NUM - j - i; k++) {
        tempArr3.push(i + '+' + j + '+' + k + '=')
      }
      for (let n = INIT_NUM3; n <= i + j; n++) {
        tempArr3.push(i + '+' + j + '-' + n + '=')
        if (j >= i && j - i - n >= 0) {
          tempArr3.push(j + '-' + i + '-' + n + '=')
        }
      }
      for (let m = INIT_NUM3; m <= MAX_NUM - j + i; m++) {
        if (j >= i) {
          tempArr3.push(j + '-' + i + '+' + m + '=')
        }
      }
    }
  }
  tempArr1.sort(randomSort)
  tempArr2.sort(randomSort)
  tempArr3.sort(randomSort)
  // console.log(tempArr1)
  const arr = []
  // const arr1 = tempArr1.slice(0, 20)
  // const arr2 = tempArr2.slice(0, 20)
  // const arr3 = tempArr3.slice(0, 20)
  // const arr4 = tempArr1.slice(20, 40)
  // const arr5 = tempArr2.slice(20, 40)
  const arr1 = tempArr2.slice(0, 20)
  const arr2 = tempArr2.slice(20, 40)
  const arr3 = tempArr2.slice(40, 60)
  const arr4 = tempArr2.slice(60, 80)
  const arr5 = tempArr2.slice(80, 100)
  for (let o = 0; o <= 19; o++) {
    arr.push([arr1[o], arr2[o], arr3[o], arr4[o], arr5[o]])
  }
  return arr
}
