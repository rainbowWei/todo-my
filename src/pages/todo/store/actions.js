const actions = {
    Del({commit},val){
        setTimeout(() => {
            commit('DEL',val)
        },4000)
    }
}
export default actions