function bmiCalc() {
    // Checking and Get From userInput
    var weightInput = document.getElementById("weight").value;
    var heightInput = document.getElementById("height").value;

    // Converting input from string to Decimal
    var height = parseFloat(heightInput);
    if (height <= 0 || height > 300) {
        alert("Please Enter Valid Height Input Between 0 to 300");
        return;
    }
    var weight = parseFloat(weightInput);
    if (weight <= 0 || weight > 300) {
        alert("Please Enter Valid Weight Input Between 0 to 300");
        return;
    }

    //Calculate TotalBmi
    var totalBmi = weight / Math.pow(height / 100, 2);

    // Showing TotalBmi to HTML
    var result = document.getElementById("result");
    result.textContent = "BMI Anda adalah " + totalBmi.toFixed(2);
    console.log(totalBmi);

    // Add Status Paragraph According TO totalBmi and Evaluation
    var statusBMi = document.getElementById("statusBmi");
    var average = document.getElementById("avg-res");
    var explanation = document.getElementById("explanation")

    // Display statusBMI and Evaluation
    if (totalBmi < 18.5) {
        statusBMi.textContent = "Anda Kekurangan Berat Badan."; 
        average.textContent = "Hasil BMI dibawah 18.5"
        explanation.textContent = "Anda Termasuk di dalam kategori Kekurangan berat badan cara terbaik untuk menaikan berat badan adalah mengkonsumsi makanan yang mengandung banyak nutrisi yang dibutuhkan."
    
    } else if (totalBmi < 24.9) {
        statusBMi.textContent = "Anda Memiliki Berat Badan Ideal";
        average.textContent = "Hasil BMI diantara 18.5 dan 24.9";
        explanation.textContent = "Selamat, Anda termasuk memiliki berat badan ideal, untuk menjaga agar badan tetap ideal adalah mengurangi cemilan yang banyak mengandung Garam,Gula,dan Lemak, mengkonsumsi lebih banyak sayur, melakukan olahraga fisik selama 30 menit per hari, dan sebagainya."
    
    } else if (totalBmi < 29.9) {
        statusBMi.textContent = "Anda Kelebihan Berat Badan";
        average.textContent = "Hasil BMI diantara 25.0 dan 29.9";
        explanation.textContent = "Anda Termasuk dalam Kategori Kelebihan berat badan, cara terbaik untuk mengurangi berat badan berlebih adalah, mengkonsumsi sayur dan buah-buahan, membatasi tidur yang berlebihan, memperbanyak aktivitas fisik."
    
    } else if (totalBmi >= 30) {
        statusBMi.textContent = "Anda Obesitas";
        average.textContent = "Hasil BMI Diatas 29.9";
        explanation.textContent = "Anda Termasuk dalam kategori berat badan berlebih (Obesitas). disini cara terbaik yang seharusnya dilakukan adalah mengubah pola hidup anda menjadi lebih sehat, mengurangi makanan berlemak, memperbanyak mengkonsumsi sayuran dan buah buahan dan berkonsultasi dengan dokter"
    
    }

}