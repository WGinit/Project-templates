function setItem(key, value) {
  if (value) {
    localStorage.setItem(key, JSON.stringify(value))
  } else {
    localStorage.setItem(key, JSON.stringify(null))
  }
}

function getItem(key) {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (err) {
    console.log(err)
  }
}

export default {
  setItem,
  getItem
}