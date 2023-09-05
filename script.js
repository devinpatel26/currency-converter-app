console.log("main.js is working")

const populate = async (value, currency)=>{
    let mystr = ""
    url = "http://api.currencyapi.com/v3/latest?apikey=cur_live_yAuChjJy4LM0Foz1yxIajgieF84ZZNuhbwgryAG5&base_currency=INR"
    let response = await fetch(url)
    let rJson =  await response.json()

    for (let key of Object.keys(rJson["data"])){
        mystr += `<tr>
                    <td>${key}</td>
                    <td>${rJson["data"][key]["code"]}</td>
                    <td>${rJson["data"][key]["value"] * value}</td>
                </tr>
        `
    }
    const tablebody = document.querySelector("tbody")
    tablebody.innerHTML = mystr;

}

const btn = document.querySelector(".btn1")
btn.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log("Button is been clicked")
    const value = document.querySelector("input[name='quantity']").value
    const currency = document.querySelector("select[name='currency']").value
    populate(value,currency)

})
