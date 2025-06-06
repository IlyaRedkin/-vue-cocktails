import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CocktailCard from './CocktailCard.vue'
import type { Drink } from '../model/cocktailStore.ts'

describe('CocktailCard', () => {
  it('отображает название и ингредиенты', () => {
    const drink: Drink = {
      idDrink: 'Test idDrink',
      strDrink: 'Test Cocktail',
      strCategory: 'Test Category',
      strAlcoholic: 'Alcoholic',
      strGlass: 'Glass',
      strInstructions: 'Mix it!',
      strDrinkThumb: '',
      strIngredient1: 'Vodka',
      strMeasure1: '50ml',
      strIngredient2: 'Lime',
      strMeasure2: '1',
    }
    const wrapper = mount(CocktailCard, { props: { drink } })
    expect(wrapper.text()).toContain('Test Cocktail')
    expect(wrapper.text()).toContain('Vodka')
    expect(wrapper.text()).toContain('Lime')
  })
})
