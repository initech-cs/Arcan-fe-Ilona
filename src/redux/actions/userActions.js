const loginWithEmail = (email, password) => async dispatch => {
    const res = await fetch(`http://localhost:3001/auth/login`, {
        method: "POST",
        header: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
    const body =  await res.json()
    console.log(body)
}

export { loginWithEmail }