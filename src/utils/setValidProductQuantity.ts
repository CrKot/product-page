export default (value: number, more: boolean, delimetr: number) => {
  if (value === 1) {
    return more ? delimetr : 0
  }

  let currentValue = more ? value++ : value--
  let division = value % delimetr

  while (division) {
    if (more) {
      currentValue++
    } else {
      currentValue--
    }

    division = currentValue % delimetr
  }

  return currentValue
}
