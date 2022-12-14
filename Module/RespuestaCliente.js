exports.RespuestaCliente = (vez , mensage) => {
    return new Promise((resolve, reject) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
          });
          switch (vez) {
            case 1:
              setTimeout(() => {
                console.log("Welcome...")
              }, 1000);
              
              setTimeout(() => {
                console.log("desea realizar algo ?...")
              }, 2000);
              
              setTimeout(() => {
                readline.question( mensage , res => {
                  resolve(res)
                  readline.close();
                });
              }, 3000);
              break;

            case 2 :
              readline.question( mensage , res => {
                resolve(res)
                readline.close();
              });
              break;
          }

          

    })
}