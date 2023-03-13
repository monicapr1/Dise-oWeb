function convertToKilobytes(number: number): number {
    return number * 1024;
  }
  
  function convertToGigabytes(number: number): number {
    return number / 1024 / 1024;
  }
  
  function convertToPetabytes(number: number): number {
    return number / 1024 / 1024 / 1024 / 1024;
  }
  const inputNumber = document.getElementById("inputNumber") as HTMLInputElement;
  const convertToKB = document.getElementById("convertToKB") as HTMLButtonElement;
  const convertToGB = document.getElementById("convertToGB") as HTMLButtonElement;
  const convertToPB = document.getElementById("convertToPB") as HTMLButtonElement;
  const result = document.getElementById("result") as HTMLParagraphElement;
  
  convertToKB.addEventListener("click", () => {
    const number = parseInt(inputNumber.value);
    const resultKB = convertToKilobytes(number);
    result.textContent = `${resultKB} KB`;
  });
  
  convertToGB.addEventListener("click", () => {
    const number = parseInt(inputNumber.value);
    const resultGB = convertToGigabytes(number);
    result.textContent = `${resultGB} GB`;
  });
  
  convertToPB.addEventListener("click", () => {
    const number = parseInt(inputNumber.value);
    const resultPB = convertToPetabytes(number);
    result.textContent = `${resultPB} PB`;
  });
    