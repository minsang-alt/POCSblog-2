let table = document.querySelector(".type01");
let thead = document.querySelector(".container .type01 thead");
let tbody = document.querySelector("body .wrapper .section .container .type01 tbody");


fetch("http://34.64.161.55:8001/users").then((response) => response.json())
    .then((data) => {
        
        
        
            data.forEach(
                (obj) => {
                         
                            
                    const row_id = obj.id || ""; 
                    const row_name = obj.name || "";
                    const row_email = obj.email || "";
                    const row_studentId = obj.studentId || "";
                    const row_type = obj.type || "";
                    const row_company = obj.company || ""                     ;
                    const row_generation = obj.generation || "";




                    let row = document.createElement('tr');

                    let row_ids = document.createElement('td');
                    row_ids.innerHTML = row_id;

                    let row_names = document.createElement('th');
                    row_names.innerHTML = row_name;

                    let row_emails = document.createElement('td');
                    row_emails.innerHTML =row_email;

                    let row_studentIds = document.createElement('td');
                    row_studentIds.innerHTML = row_studentId;

                    let row_types = document.createElement('td');
                    row_types.innerHTML = row_type;

                    let row_companys = document.createElement('td');
                    row_companys.innerHTML = row_company;

                    let row_generations = document.createElement('td');
                    row_generations.innerHTML = row_generation;

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

        

    })
