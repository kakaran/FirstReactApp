// import Counter from "./Counter.js";

function Logic()
{
    var valueDisplay = document.querySelector(".value").dangerouslySetInnerHTML;
    let ButtonIncrement = document.querySelector(".increment");
    let ButtonDecrement = document.querySelector(".decrement");

    ButtonDecrement.addEventListener("click", ()=>
    {
        valueDisplay--;
    });
    ButtonIncrement.addEventListener("click", ()=>
    {
        valueDisplay++;
    });

}

export default Logic;