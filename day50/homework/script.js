function addText() {
    // ვიღებთ ტექსტს პირველ ინფუთიდან და ვამატებთ displayElement-ში
    const text = document.getElementById("textInput").value;
    document.getElementById("displayElement").innerText = text;
}

function changeColor() {
    // ვიღებთ ფერს მეორე ინფუთიდან და ვცვლით displayElement-ის ტექსტის ფერს
    const color = document.getElementById("colorInput").value;
    document.getElementById("displayElement").style.color = color;
}

function changeFontSize() {
    // ვიღებთ ზომას მესამე ინფუთიდან და ვცვლით displayElement-ის ტექსტის ზომას
    const fontSize = document.getElementById("fontSizeInput").value + "px";
    document.getElementById("displayElement").style.fontSize = fontSize;
}