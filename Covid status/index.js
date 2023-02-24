const APIURL = 'https://api.covidtracking.com/v1/states/current.json'

const main = document.getElementById('main')
const search = document.getElementById('search')

async function getCovidStatus(userInput){
    try {
        const { data } = await axios(APIURL);
        createUserCard(data, userInput);
    } catch (error) {
        if(error.response.status == 404){
            createErrorCard('state code not found');
        }
    }
}
// https://api.covidtracking.com/v1/states/ca/current.json

async function getState(State) {
    try {
        const { data } = await axios(APIURL + State + '')

        // addReposToCard(data)
    } catch (err) {
        createErrorCard('Fetching Problem ')
    }
}


function createUserCard(states, userInput) {
    states.forEach(state=>{
        if(state == userInput){
            console.log();; 
        }
    })
    console.log(`${states}`);
    const State = states.state; 
    let d =  JSON.stringify(states);
    console.log(d);
    d.forEach(console.log(d.state))
    const Positive = states.positive ? `<h5>${states.Positive}</h5>` : ''
    const negative = states.negative ? `<h5>${states.negative}</h5>` : ''
    const totalTestResult = states.totalTestResults ? `<h5>${states.totalTestResult}</h5>` : ''
    const cardHTML = `
    <div class="card">
        <div class="user-info">
            <h2>${State}</h2>
             <ul>
                <li>${Positive} <strong>Positive</strong></li>
                <li>${negative} <strong>Negative</strong></li>
                <li>${totalTestResult} <strong>Total Test Result</strong></li>
            </ul>

        <div id="repos"></div>
    </div>
    </div>
    `
    console.log(cardHTML);
    main.innerHTML = cardHTML

}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `

    main.innerHTML = cardHTML
}

// function addReposToCard(repos) {
//     const reposEl = document.getElementById('repos')

//     repos.slice(0, 5).forEach(repo => {
//         const repoEl = document.createElement('a')
//         repoEl.classList.add('repo')
//         repoEl.href = repo.html_url
//         repoEl.target = '_blank'
//         repoEl.innerText = repo.name

//         reposEl.appendChild(repoEl)
//     })
// }

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const userInput = search.value

    if (userInput) {
        console.log(`input = ${userInput}`);
        getCovidStatus(userInput)

        search.value = ''
    }
})









// const APIURL = 'https://api.covidtracking.com/v1/states/current.json';
// const main = document.getElementById('main')
// const search = document.getElementById('search')

// async function getCovidStatus(userInput) {
//     try {
//         const { data } = await axios(APIURL+username)

//         createUserCard(data,userInput)
//     } catch (error) {
//         if(error.response.status === 404){
//             createErrorCard('Not found');
//         };
//     }
// };


// function createUserCard(states , userInput){
//     states.forEach(state=>{
//         if(userInput == state){
//             console.log(userInput);
//         }
//     })
//     const cardHTML = `
//         <div class="card">
           
//             <ul>
//                 <li><strong>Positive</strong>${Positive}</li>
//                 <li><strong>Negative</strong>${negative} </li>
//                 <li><strong>Total Test Result</strong>${totalTestResult} </li>
//             </ul>
//         </div>

//         `

//         console.log(cardHTML);
//         main.innerHTML = cardHTML;

// }

// function createErrorCard(msg){
//     const cardHTML = `
//         <div>
//             <h3>${msg}</h3>
//         </div>
//     `

//     main.innerHTML = cardHTML
// }


// form.addEventListener('submit', (e) => {
//         e.preventDefault()
    
//         const user = search.value
    
//         if (user) {
//             console.log(`input = ${user}`);
//             getCovidStatus(user)
    
//             search.value = ''
//         }
//     })