const textarea = document.querySelector("textarea");
const countList = document.querySelectorAll(".count");
const reset = document.getElementById("reset");
const download = document.getElementById("download");

let text,
    characterNum,
    spacesNum,
    noSpaceNum,
    paragraphNum,
    manuscriptNum;


// 文字入力された時のイベント
textarea.addEventListener("input", () => {
    text = textarea.value
    spacesNum = countSpace(text);
    characterNum = text.length;
    noSpaceNum = characterNum - spacesNum;
    paragraphNum = countParagraph(text);
    manuscriptNum = manuscriptCount(text);

    countList[0].textContent = characterNum;
    countList[1].textContent = paragraphNum;
    countList[2].textContent = noSpaceNum;
    countList[3].textContent = manuscriptNum;

});

// clearボタンが押された時のイベント
reset.addEventListener("click", () => {
    textarea.value = "";
});

// downloadボタンが押された時のイベント
download.addEventListener("click", () => {
    var text = textarea.value;
    var blob = new Blob([text], { type:  "text/plain" });

    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "myText.txt";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});


// スペースを数える関数
function countSpace(text) {
    var count = 0;
    for (var i = 0; i < text.length; i++) {
        if (text[i] == " " || text[i] == "　") {
            count++;
        }
    }
    return count
};

// 行数える関数
function countParagraph(text) {
    var count = 0;
    for (var i = 0; i < text.length; i++) {
        if (text[i] === "\n") {
            count++;
        }
    }
    return count;
}

// 原用紙何枚文化を数える関数
function manuscriptCount(text) {
    var cnt = Math.ceil(text.length / 400);
    return cnt
}

