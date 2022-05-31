const sectionElement = function () {
    return `
    <form action="" class="form-container">

        <h1>Visszajelzés</h1>
        <input type="text" placeholder="Tárgy">
        <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Megjegyzés"></textarea>

        <div class="form-group">
            <div>
                <input type="checkbox">
            </div>
            <p>Elolvastam és elfogadom az <a href="#">Adatkezelési Tájékoztatót.</a></p>
        </div>
        <div class="form-group">
            <div>
                <input type="checkbox">
            </div>
            <p>Szeretnék hírlevelet kapni.</a></p>
        </div>

        <button>MENTÉS</button>

    </form>

    `
}

const loadEvent = function () {
    const rootElement = document.getElementById("root")

    rootElement.insertAdjacentHTML("beforeend", sectionElement())
}

window.addEventListener("load", loadEvent)