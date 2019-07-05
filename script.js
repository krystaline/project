//fetch data
function performGetRequest1() {
    var first = document.getElementById('first');
    first.innerHTML = "";
    var second = document.getElementById('second');
    second.innerHTML = "";
    var third = document.getElementById('third');
    third.innerHTML = "";

    axios.get('http://34.87.123.143/stocks')
        .then(function (response) {
            console.log(response)
            first.innerHTML = generateSuccessHTMLOutput1(response);
            second.innerHTML = generateSuccessHTMLOutput2(response);
            third.innerHTML = generateSuccessHTMLOutput3(response);
        })
        .catch(function (error) {
            console.log(error)
        })
}

//show on html
function generateSuccessHTMLOutput1(response) {
    let output = ``
    for (let i = 0; i < response.data.length; i++) {
        output += `
        <tr>
            <td>${response.data[i].item}</td>
            <td>${response.data[i].stock}</td>
        </tr> 
        `
    }
    return output
}

function generateSuccessHTMLOutput2(response) {
    let output = ``
    for (let i = 0; i < response.data.length; i++) {
        output += `
        <tr>
            <td>${response.data[i].customer}</td>
            <td>${response.data[i].customerQuantity}</td>
            <td>${response.data[i].salesDate}</td>
        </tr> 
        `
    }
    return output
}

function generateSuccessHTMLOutput3(response) {
    let output = ``
    for (let i = 0; i < response.data.length; i++) {
        output += `
        <tr>
            <td>${response.data[i].supplier}</td>
            <td>${response.data[i].supplierQuantity}</td>
            <td>${response.data[i].purchaseDate}</td>
        </tr> 
        `
    }
    return output
}

//buat handle submit
$("#submit-button").click(function () {
    var item = $('#item').val();
    var stock = $("#stock").val();
    var customer = $("#customer").val();
    var customerQuantity = $("#customer-quantity").val();
    var salesDate = $("#sales-date").val();
    var supplier = $("#supplier").val();
    var supplierQuantity = $("#supplier-quantity").val();
    var purchaseDate = $("#purchase-date").val();


    console.log('masok submit', item, stock, customer, customerQuantity, salesDate, supplier, supplierQuantity, purchaseDate)

    axios.post('http://34.87.123.143/stocks', {
        item,
        stock,
        customer,
        customerQuantity,
        salesDate,
        supplier,
        supplierQuantity,
        purchaseDate,
    })
        .then(done => {
            console.log('selesai axios~~')
            performGetRequest1()
        })
        .catch(err => {
            console.log(err)
        })
})