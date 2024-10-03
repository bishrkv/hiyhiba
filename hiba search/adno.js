// Sample data
const students = [
    { name: 'Nafih ', rollno: '01', class: '5', div: 'A', adno: '3798', place: 'Nilambur' },
    { name: 'Irfan', rollno: '02', class: '5', div: 'A', adno: '3790', place: 'Thazhekkod' },
    { name: 'Safwan', rollno: '03', class: '5', div: 'A', adno: '3760', place: 'Panthallur' },
    { name: 'Jesil', rollno: '04', class: '5', div: 'A', adno: '3795', place: 'Ponnad' },
    { name: 'Adil', rollno: '05', class: '5', div: 'A', adno: '3739', place: 'Mannarmala' },
    { name: 'Faheem', rollno: '06', class: '5', div: 'A', adno: '3749', place: 'Koduvally' },
    { name: 'Sabiq', rollno: '07', class: '5', div: 'A', adno: '3744', place: 'Kaipuram' },
    { name: 'Sinan', rollno: '08', class: '5', div: 'A', adno: '3792', place: 'Kuzhimanna' },
    { name: 'Aman', rollno: '09', class: '5', div: 'A', adno: '3786', place: 'Valancheri' },
    { name: 'Shaheer', rollno: '10', class: '5', div: 'A', adno: '3801', place: 'Kavannur' },
    { name: 'Muslih', rollno: '11', class: '5', div: 'A', adno: '3747', place: 'Munniyoor' },
    { name: 'Thameem', rollno: '12', class: '5', div: 'A', adno: '3781', place: 'Chelembra' },
    { name: 'Abshar', rollno: '13', class: '5', div: 'A', adno: '3797', place: 'Koduvally' },
    { name: 'Anas', rollno: '14', class: '5', div: 'A', adno: '3759', place: 'Kumbidi' },
    { name: 'Shamil', rollno: '15', class: '5', div: 'A', adno: '3782', place: 'Makkaraparamb' },
    { name: 'Ziyad', rollno: '16', class: '5', div: 'A', adno: '3785', place: 'Kaliyattumukk' },
    { name: 'Vafi', rollno: '17', class: '5', div: 'A', adno: '3733', place: 'Perembra' },
    { name: 'Musthafa', rollno: '18', class: '5', div: 'A', adno: '3804', place: 'Ottappalam' },
    { name: 'Shameemul hasan', rollno: '19', class: '5', div: 'A', adno: '3788', place: 'Thutha' },
    { name: 'Shammas', rollno: '20', class: '5', div: 'A', adno: '3753', place: 'VK padi' },
    { name: 'Raif', rollno: '21', class: '5', div: 'A', adno: '3779', place: 'Koduvally' },
    { name: 'Uvais', rollno: '22', class: '5', div: 'A', adno: '3742', place: 'Wayanad' },
    { name: 'Jalal', rollno: '23', class: '5', div: 'A', adno: '3737', place: 'Nattukall' },
    { name: 'Juman', rollno: '24', class: '5', div: 'A', adno: '3763', place: 'Pathar' },
    { name: 'Nihal MA', rollno: '25', class: '5', div: 'A', adno: '3787', place: 'Karuvampadi' },
    { name: 'Thoyyib', rollno: '26', class: '5', div: 'A', adno: '3789', place: 'Aripra' },



    { name: 'Fahmudheen', rollno: '01', class: '5', div: 'B', adno: '3777', place: 'Puthoormadam' },
    { name: 'Ubaidulla', rollno: '02', class: '5', div: 'B', adno: '3780', place: 'Chemmad' },
    { name: 'Murshid', rollno: '03', class: '5', div: 'B', adno: '3771', place: 'Pukkulathur' },
    { name: 'Ibrahim badusha', rollno: '04', class: '5', div: 'B', adno: '3765', place: 'Muttichira' },
    { name: 'Shamal', rollno: '05', class: '5', div: 'B', adno: '3775', place: 'Valancheri' },
    { name: 'Hanan', rollno: '06', class: '5', div: 'B', adno: '3750', place: 'Padapparamb' },
    { name: 'Nihal', rollno: '07', class: '5', div: 'B', adno: '3754', place: 'Thrthala' },
    { name: 'Ashmil', rollno: '08', class: '5', div: 'B', adno: '3783', place: 'Thuvvakkad' },
    { name: 'Yaseen bishr', rollno: '09', class: '5', div: 'B', adno: '3761', place: 'Thirur' },
    { name: 'Ahmed rabeeh', rollno: '10', class: '5', div: 'B', adno: '3769', place: 'Kulathur' },
    { name: 'Niyas', rollno: '11', class: '5', div: 'B', adno: '3796', place: 'Kulappuram' },
    { name: 'Irafan', rollno: '12', class: '5', div: 'B', adno: '3778', place: 'Nellikkuth' },
    { name: 'Jinan', rollno: '13', class: '5', div: 'B', adno: '3764', place: 'Karippur' },
    { name: 'Bishr', rollno: '14', class: '5', div: 'B', adno: '3740', place: 'Pattikkad' },
    { name: 'Fozan', rollno: '15', class: '5', div: 'B', adno: '3748', place: 'vengara' },
    { name: 'Mujthaba', rollno: '16', class: '5', div: 'B', adno: '3738', place: 'Melmuri' },
    { name: 'Nasim', rollno: '17', class: '5', div: 'B', adno: '3784', place: 'Kodangad' },
    { name: 'Nihad', rollno: '18', class: '5', div: 'B', adno: '3766', place: 'ekkaparamb' },
    { name: 'Arshad', rollno: '19', class: '5', div: 'B', adno: '3736', place: 'kuttilangadi' },
    { name: 'Sabith', rollno: '20', class: '5', div: 'B', adno: '3768', place: 'Maokkod' },
    { name: 'Rabeeh ahmad', rollno: '21', class: '5', div: 'B', adno: '3770', place: 'Koduvalli' },
    { name: 'Hashim', rollno: '22', class: '5', div: 'B', adno: '3802', place: 'Kizhisseri' },
    { name: 'Sayyid sahl', rollno: '23', class: '5', div: 'B', adno: '3807', place: 'Amini' },
    { name: 'Shahan', rollno: '24', class: '5', div: 'B', adno: '3793', place: 'Randathani' },
    { name: 'Shameem', rollno: '25', class: '5', div: 'B', adno: '3791', place: 'Areekkod' },
    { name: 'Anshif', rollno: '26', class: '5', div: 'B', adno: '3734', place: 'Perembra' },
    { name: 'Afnan', rollno: '27', class: '5', div: 'B', adno: '3741', place: 'chembrakattoor' },


];

document.getElementById('searchButton').addEventListener('click', function() {
    const inputName = document.getElementById('searchInput').value.trim();
    const student = students.find(s => s.adno.toLowerCase() === inputName.toLowerCase());

    const nameContainer = document.getElementById('nameContainer');
    const rollnoContainer = document.getElementById('rollnoContainer');
    const classContainer = document.getElementById('classContainer');
    const divContainer = document.getElementById('divContainer');
    const adnoContainer = document.getElementById('adnoContainer');
    const placeContainer = document.getElementById('placeContainer');
    const resultContainer = document.getElementById('resultContainer');

    // Clear previous results
    nameContainer.innerHTML = '';
    rollnoContainer.innerHTML = '';
    classContainer.innerHTML = '';
    divContainer.innerHTML = '';
    adnoContainer.innerHTML = '';
    placeContainer.innerHTML = '';

    if (student) {
        // Display student information
        nameContainer.innerText = `Name: ${student.name}`;
        rollnoContainer.innerText = `Roll No: ${student.rollno}`;
        classContainer.innerText = `Class: ${student.class}`;
        divContainer.innerText = `Division: ${student.div}`;
        adnoContainer.innerText = `Admission Number: ${student.adno}`;
        placeContainer.innerText = `Place: ${student.place}`;
        resultContainer.style.display = 'block'; // Show result container
    } else {
        // Display not found message in all sections
        nameContainer.innerText = 'Student not found';
        rollnoContainer.innerText = '';
        classContainer.innerText = '';
        divContainer.innerText = '';
        adnoContainer.innerText = '';
        placeContainer.innerText = '';
        resultContainer.style.display = 'block'; // Show result container
    }
});

