export function search (options) {
  return options ? Object.entries(options).map(item => item.join('=')).join('&') : ''
}
