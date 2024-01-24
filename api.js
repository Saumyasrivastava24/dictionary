let output = document.getElementById('output');
        let btn = document.getElementById('btn');

        function getMeaning() {
            output.innerHTML = '';
            let wordInput = document.getElementById('searchInput');
       

            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput.value}`)
                .then(response => response.json())
                .then(data => {
                    data.forEach(data => {
                        let item = data.meanings;
                        item.forEach(ele => {
                            let item2 = ele.definitions;
                            item2.forEach(ele2 => {
                                output.innerHTML += `&#8594 ${ele2.definition}<br> <br>`;
                            })
                        })
                    });
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });

            // wordInput.value = '';
        }

        btn.addEventListener('click', (e) => {
            getMeaning();
            e.preventDefault();
        });