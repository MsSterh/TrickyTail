export const createAction = (type, ...argNames) => (...args) => {
  let action = { type }
  argNames.forEach((arg, index) => {
    action[argNames[index]] = args[index]
  })
  return action
}
