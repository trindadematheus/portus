function addFractionToNumber(num: number) {
  const str = num.toString()

  if (str.length === 1) {
    return num + num / 10
  }

  if (str.length === 2) {
    return num + num / 100
  }

  return num
}

export function handleContainerPosition(num: number) {
  if (num === 0) {
    return 0
  }

  if (num % 2 === 0) {
    return addFractionToNumber(num) * -1
  } else {
    return addFractionToNumber(num + 1)
  }
}
