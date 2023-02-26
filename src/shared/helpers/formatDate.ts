export const formatDate = date => {
  const today = new Date(Number(date))
  const yyyy = today.getFullYear()
  let mm: string | number = today.getMonth() + 1
  let dd: string | number = today.getDate()
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }
  return dd + '/' + mm + '/' + yyyy
}
