//Function for handling HCP ID input and fetching HCP info
function fetchHCPInfo() {
    //Get HCP ID from input
    const hcpID = document.getElementById('hcpID').value;
    if (!hcpID) {
        return;
    }

    //Fetch HCP info from server
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
            //Populate HCP info in output div(s)
            document.getElementById('hcpIDOutput').textContent = tempRecord.tempId;
            document.getElementById('hcpNameOutput').textContent = tempRecord.firstName;
            document.getElementById('hcpCityOutput').textContent = tempRecord.city;
            document.getElementById('hcpCertOutput').textContent = tempRecord.certification;

            //Store HCP ID in sessionStorage for use in other functions
            sessionStorage.setItem('hcpID', tempRecord.tempId);
        })
        .catch(error => console.error('Error:', error));
}

//Function for handling HCP ID button click
function hcpIdButtonClick(event) {
    event.preventDefault();
    fetchHCPInfo();
}

//Add event listener to HCP ID button
document.getElementById('hcpIdSubmit').addEventListener('click', hcpIdButtonClick);