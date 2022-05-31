const sectionElement = function () {
    return ``
}

const loadEvent = function () {
    const rootElement = document.getElementById("root")

    rootElement.insertAdjacentHTML("beforeend", sectionElement())
}

window.addEventListener("load", loadEvent)