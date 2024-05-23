export function generateMhsTable(data) {
    return `

    <tr>
        <td>${data.namalengkap}</td>
        <td>${data.prodi}</td>
        <td>${data.alamat}</td>
        <td>${data.asalsekolah}</td>
    </tr>
    `;
}