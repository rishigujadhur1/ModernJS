function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000); //milliseconds
    });
  }
  
export async function asyncCall() {
    alert('calling');
    const result = await resolveAfter2Seconds();
    alert(result);
    // Expected output: "resolved"
  }
  
  asyncCall();