export const goToHome = (history) => {
    history.push("/")
}

export const goToLogin = (history) => {
    history.push("/login")
}

export const goToCadastro = (history) => {
    history.push("/cadastro")
}

export const goBack = (history) => {
    history.goBack()
}
