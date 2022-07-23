let main = () => {
    $('#btnget').on('click', () => {
        $.ajax({
            type: 'GET',
            url: 'http://127.0.0.1/api/get',
            data: {name: 'hyy', age: 20},
            success: (res) => {
                console.log(res);
            }
        })
    })

    $('#btnpost').on('click', () => {
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1/api/post',
            data: {name: 'hyy', age: 20},
            success: (res) => {
                console.log(res);
            }
        })
    })
}

export {
    main
}