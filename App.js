const url = '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'
let prompt = document.querySelector("input");
let btn = document.querySelector("button")
let img_taker = document.querySelector(".image-shown")


async function query() {
    img_taker.innerHTML = `<img src="loader.gif">`
    const response = await fetch(
        "https://api-inference.huggingface.co/models/Melonie/text_to_image_finetuned",
        {
            headers: { Authorization: `Bearer ${url}` },
            method: "POST",
            body: JSON.stringify({ inputs: prompt.value }),
        }
    );
    const result = await response.blob();
    return result;
}

btn.addEventListener("click", async function () {
    query().then((response) => {
        let imgurl = URL.createObjectURL(response)
        img_taker.innerHTML = `<img src="${imgurl}" alt="Generated Image"/>`
    })
})
