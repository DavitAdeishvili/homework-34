let header = document.getElementsByClassName("heading");
// ვქმნით header-ს
document.querySelector('button').addEventListener('click', () => {
    // ვამატებთ მოვლენის მსმენელს button-ზე
    fetch("https://dog.ceo/api/breeds/image/random")
    // ვუკავშირებთ api-ს
        .then(res => {
            if (!res.ok) {
                // თუ ერორი იყო
                if (res.status === 404) {
                    header[0].style.color = "red";
                    header[0].innerText = "Error 404: Not Found";
                    // 404ის შემთხვევაში წითლად ვუგდებთ "Error 404: Not Found"ს
                } else if ([301, 302, 304].includes(res.status)) {
                    header[0].style.color = "blue";
                    header[0].innerText = `Error ${res.status}: Redirect`;
                    // თუ არის [301, 302, 304] დან რომელიმე ლურჯად ბაგდებთ ერორის სახელს + Redirect
                } else {
                    header[0].style.color = "black";
                    header[0].innerText = `Error ${res.status}: ${res.statusText}`;
                    // სხვა შემთხვევაში შავად ვუგდებთ ერორის სტატუსს
                }
                throw new Error('Network response was not ok');
                // ვაგდებთ ახალ ერორს Network response was not ok
            }

            header[0].style.color = "green";
            // თუ კარგად გაეშვა მწვანე ფერში Status 200: Success გაეშვება
            header[0].innerText = "Status 200: Success";
            return res.json();
        })
        .then(data => {
            document.querySelector('img').src = data.message;
        })
        // და ნუ ფოტოები რო ჩაენაცნლოს ერთმანეთს :)
});