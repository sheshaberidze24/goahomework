function domainName(url) {
    // ცვლადების ინიციალიზაცია URL-ის ანალიზისთვის
    let startIdx = 0;
    let endIdx = url.length;

    // ვამოწმებთ, თუ "//" არის URL-ში და ვასწორებთ დასაწყისის ინდექსს
    if (url.includes("//")) {
        for (let i = 0; i < url.length - 1; i++) {
            if (url[i] === '/' && url[i + 1] === '/') {
                startIdx = i + 2;
                break;
            }
        }
    }

    // ვამოწმებთ, თუ "www" არის URL-ში და ვასწორებთ დასაწყისის ინდექსს
    if (url.substring(startIdx, startIdx + 4) === "www.") {
        startIdx += 4;
    }

    // ვპოულობთ დასასრულს, ვეძებთ მომდევნო "."
    for (let i = startIdx; i < url.length; i++) {
        if (url[i] === '.') {
            endIdx = i;
            break;
        }
    }

    // ვიღებთ დომენის სახელს
    let domain = "";
    for (let i = startIdx; i < endIdx; i++) {
        domain += url[i];
    }

    return domain;
}

// მაგალითის გამოყენება
console.log(domainName("http://github.com"));  // შედეგი: example
console.log(domainName("http://github.com"));      // შედეგი: example
console.log(domainName("https://www.cnet.com"));  // შედეგი: example

////
let animal = [
    ['lion', '16', '180', 'true'],
    ['hippo', '23', '400', 'false'],
    ['wolf', '10', '45', 'true']
];

// ციკლი მასივის გადახედვისთვის
animal.forEach(row => {
    console.log(row.join(' - '));
});