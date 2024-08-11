const anything = async() => {
    try{
    const res = await axios.get('https://icanhazdadjoke.com/')
    console.log(res.data)
    } catch(e){
        console.log("Its a message")
        console.log(e);
    }
}
const similar = async() => {
    const ans = await axios.get('any URL')
    console.log(ans.data)
}
anything()

const theFetchWay = fetch(anyURL)
    .then(res => {
        console.log(res)
        return res.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(e => {
        console.log(e)
    });