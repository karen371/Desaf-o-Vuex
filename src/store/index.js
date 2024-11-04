import axios from "axios";
import { createStore } from "vuex";
import dataApi from "@/assets/data/juegos.json"

export default createStore({
    state:{
        //variables
    },
    mutations:{
        setJuegos(state, juegos) {
            state.juegos = juegos;
        },
        aumentarStock(state, codigo){
            const juego = state.juegos.find(j => j.codigo === codigo);
            if (juego) {
                juego.stock++; 
            }
        },
        disminuirStock(state, codigo){
            const juego = state.juegos.find(j => j.codigo === codigo);
            if (juego) {
                juego.stock--; 
            }
        }
    },
    actions:{
        getJuegos({ commit }) {
            commit("setJuegos", dataApi); // Pasa los datos del JSON directamente a la mutación
        },
        //para aumentar el stock
        aumentarStock({ commit }, codigo) {
            commit("aumentarStock", codigo);
        },
        //disminuir el stock
        disminuirStock({ commit }, codigo) {
            commit("disminuirStock", codigo);
        }
    }
});