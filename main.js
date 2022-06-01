console.log(customers)

const profilegrid = document.querySelector("#profilegrid");

for (let customer of customers) {
    let customerElement = document.createElement('div')
    customerElement.classList.add('customer')

let imageElement = document.createElement('img')
imageElement.src = `${customer.picture.medium}`
imageElement.alt = 'Picture of customer'
imageElement.classList.add("profilepic")
customerElement.appendChild(imageElement)

let nameElement = document.createElement('h2')
nameElement.classList.add("name")
nameElement.innerText = `${customer.name.first}, ${customer.name.last}`
customerElement.appendChild(nameElement)

let emailElement = document.createElement('div')
emailElement.classList.add("email")
emailElement.innerText = `Email: ${customer.email}`
customerElement.appendChild(emailElement)

let addressElement = document.createElement('div')
addressElement.classList.add("address")
addressElement.innerText = `${customer.location.street.number}, ${customer.location.street.name}`
customerElement.appendChild(addressElement)

let cityStateElement = document.createElement('div')
let stateAb = (nameToAbbr (customer.location.state))
cityStateElement.classList.add("cityState")
cityStateElement.innerText = `${customer.location.city}, ${stateAb}, ${customer.location.postcode}`
customerElement.appendChild(cityStateElement)

let dobElement = document.createElement('div')
dobElement.classList.add("dob")
dobElement.innerText = `DOB: ${moment(customer.dob.date).format("MMM Do, YYYY")}`
customerElement.appendChild(dobElement)

let memberElement = document.createElement('div')
memberElement.classList.add("member")
memberElement.innerText = `Member since: ${moment(customer.registered.date).format("MMM Do, YYYY")}`
customerElement.appendChild(memberElement)

profilegrid.appendChild(customerElement)
}