import { defineStore } from 'pinia'
import axios from 'axios'

interface Drink {
  idDrink: string
  strDrink: string
  strCategory: string
  strAlcoholic: string
  strGlass: string
  strInstructions: string
  strDrinkThumb: string
  [key: string]: any
}

interface CocktailState {
  cocktails: Record<string, Drink[]>
  loading: Record<string, boolean>
  error: Record<string, string | null>
}

export const useCocktailStore = defineStore('cocktail', {
  state: (): CocktailState => ({
    cocktails: {},
    loading: {},
    error: {},
  }),
  actions: {
    async fetchCocktails(code: string) {
      if (this.cocktails[code] || this.loading[code]) return
      this.loading[code] = true
      this.error[code] = null
      try {
        const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${code}`)
        this.cocktails[code] = res.data.drinks || []
      } catch (e: any) {
        this.error[code] = e.message || 'Ошибка загрузки'
      } finally {
        this.loading[code] = false
      }
    },
  },
}) 