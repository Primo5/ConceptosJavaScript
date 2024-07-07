// lUXMWxpjBEWasMB5WxyeMrtGEp5IO6Ck
/*const loadData = () => {
  const url =
    'api.giphy.com/v1/gifs/search?api_key=lUXMWxpjBEWasMB5WxyeMrtGEp5IO6Ck&q=cheeseburgers'
  const data = fetch(url)
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
  console.log(data)
}
*/
const loadData = () => {
  const url =
    'https://api.giphy.com/v1/gifs/search?api_key=lUXMWxpjBEWasMB5WxyeMrtGEp5IO6Ck&q=cheeseburgers'
  const data = fetch(url)
    .then((result) => result.json())
    .then(({ data }) => console.log(data))
    .catch((error) => console.log(error))
  console.log(data)
}
loadData()
