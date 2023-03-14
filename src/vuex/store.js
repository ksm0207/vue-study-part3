// Vuex - stroe 예제코드
import {createStore} from "vuex";

const store = createStore({
    state () {
        return {
            // state 보관장소
            name : "Kimsungmin"
        }
    },
})

export default store;
