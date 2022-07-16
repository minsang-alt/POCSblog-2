let table = document.querySelector(".type01");
let thead = document.querySelector(".container .type01 thead");
let tbody = document.querySelector("body .wrapper .section .container .type01 tbody");


fetch("34.64.161.55:8001").then((response) => response.json())
    .then((data) => {
        console.log(data);
        if (data.users == null);
        else {
            const userArray = data.users.map(
                user => {
                    const row_id = user.id;
                    const row_name = user.name;
                    const row_email = user.email;
                    const row_studentId = user.studentId;
                    const row_type = user.type;
                    const row_company = user.company || ""                     ;
                    const row_generation = user.generation;




                    let row = document.createElement('tr');

                    let row_ids = document.createElement('td');
                    row_id.innerHTML = row_id;

                    let row_names = document.createElement('th');
                    row_name.innerHTML = row_name;

                    let row_emails = document.createElement('td');
                    row_email.innerHTML =row_email;

                    let row_studentIds = document.createElement('td');
                    row_studentId.innerHTML = row_studentId;

                    let row_types = document.createElement('td');
                    row_type.innerHTML = row_type;

                    let row_companys = document.createElement('td');
                    row_company.innerHTML = row_company;

                    let row_generations = document.createElement('td');
                    row_generation.innerHTML = row_generation;

                    row.appendChild(row_ids);
                    row.appendChild(row_names);
                    row.appendChild(row_emails);
                    row.appendChild(row_studentIds);
                    row.appendChild(row_types);
                    row.appendChild(row_companys);
                    row.appendChild(row_generations);
                    tbody.appendChild(row);

                }

            )

        }

    })
