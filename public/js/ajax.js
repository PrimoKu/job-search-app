function ajax(url, data = {}, type = "GET") {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: type,
            url: url,
            data: data,
            success: (data) => {
                resolve(data);
            },
            error: (err) => {
                reject(err);
            }
        })
    })
}

function delay(delayInms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
}