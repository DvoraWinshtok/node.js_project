



let data
let url
const getOurData = () => {
 url= 'http://localhost:1234/api/docdorController/GetAllDoctors'

    getTheServer()
}
const GetAllPatients =()=>{
    url='http://localhost:1234/api/patiantsController/GetAllPatients'
    getTheServer()
}

// const getFakeData = () => {
//    url= 'https://fakestoreapi.com/products?limit=5'
//    getTheServer()
// }

const getTheServer = () => {
    fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            data = json
            data.forEach((element, index) => {
                document.write(JSON.stringify((element)))
                // document.write(Object.entries((element)) )
            });
        })
}




