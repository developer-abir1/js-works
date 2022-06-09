const computer = {
    name: "abir",
    price: 45644,
    phone: 52455435123,
    gender: "Male"
}

console.log(computer)


computer["phone"] = "+454545411"

const computerPhone = parseFloat(computer.phone)

console.log(computer, computerPhone)