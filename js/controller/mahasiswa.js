import { MhsURL } from "./../config/url.js";
import { generateMhsTable } from "../temp/mahasiswa.js";

function displayMhs(mahasiswaData) {
    const tableBody = document.getElementById('mahasiswaTableBody');
    tableBody.innerHTML = '';

    mahasiswaData.forEach(data => {
        const row = document.createElement('tr');
        row.innerHTML = generateMhsTable(data);
        tableBody.appendChild(row);
    });
}

export function getMahasiswa() {
    console.log('Fetching Mahasiswa Data...');
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(MhsURL, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log('Fetched Mahasiswa Data:', data.data);
            displayMhs(data.data);
        })
        .catch(error => {
            console.error('Fetch Error:', error);
        });
}