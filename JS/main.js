var answer;

do {
    answer = prompt("هل صليت على النبي؟");

    if (answer === null) {
        alert("لا يمكن الإلغاء. الرجاء الإجابة.");
    } else if (answer.toLowerCase() !== "نعم") {
        alert("يجب أن تكون الإجابة نعم.");
    }
} while (answer.toLowerCase() !== "نعم");

alert("جزاك الله خيراً");
