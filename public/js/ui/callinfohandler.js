function fetchHCPInfo() {
    const hcpID = document.getElementById('hcpID').value;
    if (!hcpID) {
        return;
    }

    fetch(`/api/temps?tempIdIn=${hcpID}`)
        .then(response => {
            // console.log(response.json());
            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            // const hcpInfoDiv = document.getElementById('hcpInfo');
            const tempRecord = data[0];

            document.getElementById('hcpIDOutput').textContent = tempRecord.tempId;
            document.getElementById('hcpNameOutput').textContent = tempRecord.firstName;
            document.getElementById('hcpCityOutput').textContent = tempRecord.city;
            document.getElementById('hcpCertOutput').textContent = tempRecord.certification;
            // hcpInfoDiv.innerHTML = `
            //     <p>HCP ID: ${tempRecord.tempId}</p>
            //     <p>First Name: ${tempRecord.firstName}</p>
            //     <p>Last Name: ${tempRecord.lastName}</p>
            //     <p>Address: ${tempRecord.address}</p>
            //     <!-- Add more fields as needed -->
            // `;
            // console.log(hcpInfoDiv)
        })
        .catch(error => console.error('Error:', error));
}

function hcpIdButtonClick(event) {
    event.preventDefault();
    fetchHCPInfo();
}

document.getElementById('hcpIdSubmit').addEventListener('click', hcpIdButtonClick);