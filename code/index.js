function start()
{
    console.log("Habe gestartet");

    document.getElementById("actionId").addEventListener("click", onClick , true);
}

function onClick(event)
{
     alert("hallo");
}