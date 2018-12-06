const actions = {
    Del({commit},val){
        setTimeout(() => {
            commit('DEL1',val)
        },4000)
        console.log("ndddsnsndsnd")
    }
}
export default actions