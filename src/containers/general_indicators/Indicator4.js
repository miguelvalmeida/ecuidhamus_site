import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Pie, Bar } from 'react-chartjs-2';
import { FormattedMessage } from 'react-intl';

import * as actions from '../../store/actions/index';
import Aux from '../../hoc/auxi';
import { barOptions, barOptionsLegend, pieOptions, histogramOptions, bgColors } from '../../utility/chartsOptions';

class indicator4 extends Component {
    fetchData() {
        this.props.fetchMeals(this.props.department, this.props.year);
        this.props.fetchMealsByGender(this.props.department, this.props.year);
        this.props.fetchMealsByAge(this.props.department, this.props.year);
        this.props.fetchBreakfast(this.props.department, this.props.year);
        this.props.fetchBreakfastByGender(this.props.department, this.props.year);
        this.props.fetchBreakfastByAge(this.props.department, this.props.year);
        this.props.fetchFruits(this.props.department, this.props.year);
        this.props.fetchFruitsByGender(this.props.department, this.props.year);
        this.props.fetchFruitsByAge(this.props.department, this.props.year);
        this.props.fetchVegetables(this.props.department, this.props.year);
        this.props.fetchVegetablesByGender(this.props.department, this.props.year);
        this.props.fetchVegetablesByAge(this.props.department, this.props.year);
        this.props.fetchSodas(this.props.department, this.props.year);
        this.props.fetchSodasByGender(this.props.department, this.props.year);
        this.props.fetchSodasByAge(this.props.department, this.props.year);
        this.props.fetchFastFood(this.props.department, this.props.year);
        this.props.fetchFastFoodByGender(this.props.department, this.props.year);
        this.props.fetchFastFoodByAge(this.props.department, this.props.year);
        this.props.fetchAlcohol(this.props.department, this.props.year);
        this.props.fetchAlcoholByGender(this.props.department, this.props.year);
        this.props.fetchAlcoholByAge(this.props.department, this.props.year);
        this.props.fetchBeer(this.props.department, this.props.year);
        this.props.fetchBeerByGender(this.props.department, this.props.year);
        this.props.fetchBeerByAge(this.props.department, this.props.year);
        this.props.fetchWine(this.props.department, this.props.year);
        this.props.fetchWineByGender(this.props.department, this.props.year);
        this.props.fetchWineByAge(this.props.department, this.props.year);
        this.props.fetchSpiritDrinks(this.props.department, this.props.year);
        this.props.fetchSpiritDrinksByGender(this.props.department, this.props.year);
        this.props.fetchSpiritDrinksByAge(this.props.department, this.props.year);
    };

    componentDidUpdate(prevProps) {
        if ((prevProps.isSelected !== this.props.isSelected) && this.props.isSelected) {
            this.fetchData();
            this.props.fetchMealsValues();
            this.props.fetchBreakfastValues();
            this.props.fetchFruitsValues();
            this.props.fetchVegetablesValues();
            this.props.fetchSodasValues();
            this.props.fetchFastFoodValues();
        };
        if (((prevProps.department !== this.props.department) || (prevProps.year !== this.props.year)) && this.props.isSelected) {
            this.fetchData();
        };
    };

    render() {
        const genderLabels = this.props.genderValues.map(g => g.value);
        const chartAgesLabels = this.props.chartAgesValues.map(g => g.value);
        const mealsLabels = this.props.mealsValues.map(mv => mv.value);
        const breakfastLabels = this.props.breakfastValues.map(bv => bv.value);
        const fruitsLabels = this.props.fruitValues.map(fv => fv.value);
        const vegetablesLabels = this.props.vegetablesValues.map(vv => vv.value);
        const sodasLabels = this.props.sodasValues.map(sv => sv.value);
        const fastFoodLabels = this.props.fastFoodValues.map(ffv => ffv.value);
        const beerDataValues = this.props.beer.map(b => b.value);
        const beerLabels = this.props.beer.map(mn => mn.beer_number);
        let beerTotal = beerDataValues.reduce((a, b) => a + b, 0);
        const wineDataValues = this.props.wine.map(w => w.value);
        const wineLabels = this.props.wine.map(w => w.wine_number);
        let wineTotal = wineDataValues.reduce((a, b) => a + b, 0);
        const spiritDrinksDataValues = this.props.spirit_drinks.map(sd => sd.value);
        const spiritDrinksLabels = this.props.spirit_drinks.map(sd => sd.spirit_drinks_number);
        let spiritDrinksTotal = spiritDrinksDataValues.reduce((a, b) => a + b, 0);

        let yesNoLabels = null;
        if (localStorage.getItem('language') === "pt") {
            yesNoLabels = ["Não", "Sim"]
        } else {
            yesNoLabels = ["No", "Yes"]
        }

        //meals by gender
        const mealsGenderArray = [].concat(...this.props.meals_gender);
        mealsGenderArray.splice(-1, 1);
        const mealsgendermap = mealsGenderArray.map(w => w.total);
        const mealsGenderTotal = mealsgendermap.reduce((a, b) => a + b, 0);
        const mealsIds = mealsGenderArray.map(a => a.id);
        const mealsMax = Math.max(...mealsIds);
        let mealsGenderObject = {};
        for (let i = 1; i <= mealsMax; i++) {
            const filter = mealsGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.meals_value);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            mealsGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const mealsGenderData = Object.keys(mealsGenderObject).map(key => {
            return mealsGenderObject[key];
        });

        //meals by age
        const mealsAgeArray = [].concat(...this.props.meals_age);
        mealsAgeArray.splice(-1, 1);
        const mealsagemap = mealsAgeArray.map(w => w.total);
        const mealsAgeTotal = mealsagemap.reduce((a, b) => a + b, 0);
        const mealsAgeIds = mealsAgeArray.map(a => a.id);
        const mealsAgeMax = Math.max(...mealsAgeIds);
        let mealsAgeObject = {};
        for (let i = 1; i <= mealsAgeMax; i++) {
            const filter = mealsAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.meals_value);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            mealsAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const mealsAgeData = Object.keys(mealsAgeObject).map(key => {
            return mealsAgeObject[key];
        });

        //breakfast by gender
        const breakfastGenderArray = [].concat(...this.props.breakfast_gender);
        breakfastGenderArray.splice(-1, 1);
        const breakfastgendermap = breakfastGenderArray.map(w => w.total);
        const breakfastGenderTotal = breakfastgendermap.reduce((a, b) => a + b, 0);
        const breakfastIds = breakfastGenderArray.map(a => a.id);
        const breakfastMax = Math.max(...breakfastIds);
        let breakfastGenderObject = {};
        for (let i = 1; i <= breakfastMax; i++) {
            const filter = breakfastGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.breakfast_value);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            breakfastGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const breakfastGenderData = Object.keys(breakfastGenderObject).map(key => {
            return breakfastGenderObject[key];
        });

        //breakfast by age
        const breakfastAgeArray = [].concat(...this.props.breakfast_age);
        breakfastAgeArray.splice(-1, 1);
        const breakfastagemap = breakfastAgeArray.map(w => w.total);
        const breakfastAgeTotal = breakfastagemap.reduce((a, b) => a + b, 0);
        const breakfastAgeIds = breakfastAgeArray.map(a => a.id);
        const breakfastAgeMax = Math.max(...breakfastAgeIds);
        let breakfastAgeObject = {};
        for (let i = 1; i <= breakfastAgeMax; i++) {
            const filter = breakfastAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.breakfast_value);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            breakfastAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const breakfastAgeData = Object.keys(breakfastAgeObject).map(key => {
            return breakfastAgeObject[key];
        });

        //fruits by gender
        const fruitsGenderArray = [].concat(...this.props.fruits_gender);
        fruitsGenderArray.splice(-1, 1);
        const fruitsgendermap = fruitsGenderArray.map(w => w.total);
        const fruitsGenderTotal = fruitsgendermap.reduce((a, b) => a + b, 0);
        const fruitsIds = fruitsGenderArray.map(a => a.id);
        const fruitsMax = Math.max(...fruitsIds);
        let fruitsGenderObject = {};
        for (let i = 1; i <= fruitsMax; i++) {
            const filter = fruitsGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.fruits_value);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            fruitsGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const fruitsGenderData = Object.keys(fruitsGenderObject).map(key => {
            return fruitsGenderObject[key];
        });

        //fruits by age
        const fruitsAgeArray = [].concat(...this.props.fruits_age);
        fruitsAgeArray.splice(-1, 1);
        const fruitsagemap = fruitsAgeArray.map(w => w.total);
        const fruitsAgeTotal = fruitsagemap.reduce((a, b) => a + b, 0);
        const fruitsAgeIds = fruitsAgeArray.map(a => a.id);
        const fruitsAgeMax = Math.max(...fruitsAgeIds);
        let fruitsAgeObject = {};
        for (let i = 1; i <= fruitsAgeMax; i++) {
            const filter = fruitsAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.fruits_value);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            fruitsAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const fruitsAgeData = Object.keys(fruitsAgeObject).map(key => {
            return fruitsAgeObject[key];
        });

        //vegetables by gender
        const vegetablesGenderArray = [].concat(...this.props.vegetables_gender);
        vegetablesGenderArray.splice(-1, 1);
        const vegetablesgendermap = vegetablesGenderArray.map(w => w.total);
        const vegetablesGenderTotal = vegetablesgendermap.reduce((a, b) => a + b, 0);
        const vegetablesIds = vegetablesGenderArray.map(a => a.id);
        const vegetablesMax = Math.max(...vegetablesIds);
        let vegetablesGenderObject = {};
        for (let i = 1; i <= vegetablesMax; i++) {
            const filter = vegetablesGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.vegetables_value);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            vegetablesGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const vegetablesGenderData = Object.keys(vegetablesGenderObject).map(key => {
            return vegetablesGenderObject[key];
        });

        //vegetables by age
        const vegetablesAgeArray = [].concat(...this.props.vegetables_age);
        vegetablesAgeArray.splice(-1, 1);
        const vegetablesagemap = vegetablesAgeArray.map(w => w.total);
        const vegetablesAgeTotal = vegetablesagemap.reduce((a, b) => a + b, 0);
        const vegetablesAgeIds = vegetablesAgeArray.map(a => a.id);
        const vegetablesAgeMax = Math.max(...vegetablesAgeIds);
        let vegetablesAgeObject = {};
        for (let i = 1; i <= vegetablesAgeMax; i++) {
            const filter = vegetablesAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.vegetables_value);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            vegetablesAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const vegetablesAgeData = Object.keys(vegetablesAgeObject).map(key => {
            return vegetablesAgeObject[key];
        });

        //sodas by gender
        const sodasGenderArray = [].concat(...this.props.sodas_gender);
        sodasGenderArray.splice(-1, 1);
        const sodasgendermap = sodasGenderArray.map(w => w.total);
        const sodasGenderTotal = sodasgendermap.reduce((a, b) => a + b, 0);
        const sodasIds = sodasGenderArray.map(a => a.id);
        const sodasMax = Math.max(...sodasIds);
        let sodasGenderObject = {};
        for (let i = 1; i <= sodasMax; i++) {
            const filter = sodasGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.sodas_value);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            sodasGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const sodasGenderData = Object.keys(sodasGenderObject).map(key => {
            return sodasGenderObject[key];
        });

        //sodas by age
        const sodasAgeArray = [].concat(...this.props.sodas_age);
        sodasAgeArray.splice(-1, 1);
        const sodasagemap = sodasAgeArray.map(w => w.total);
        const sodasAgeTotal = sodasagemap.reduce((a, b) => a + b, 0);
        const sodasAgeIds = sodasAgeArray.map(a => a.id);
        const sodasAgeMax = Math.max(...sodasAgeIds);
        let sodasAgeObject = {};
        for (let i = 1; i <= sodasAgeMax; i++) {
            const filter = sodasAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.sodas_value);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            sodasAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const sodasAgeData = Object.keys(sodasAgeObject).map(key => {
            return sodasAgeObject[key];
        });

        //fastFood by gender
        const fastFoodGenderArray = [].concat(...this.props.fastFood_gender);
        fastFoodGenderArray.splice(-1, 1);
        const fastfoodgendermap = fastFoodGenderArray.map(w => w.total);
        const fastFoodGenderTotal = fastfoodgendermap.reduce((a, b) => a + b, 0);
        const fastFoodIds = fastFoodGenderArray.map(a => a.id);
        const fastFoodMax = Math.max(...fastFoodIds);
        let fastFoodGenderObject = {};
        for (let i = 1; i <= fastFoodMax; i++) {
            const filter = fastFoodGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.fast_food_value);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            fastFoodGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const fastFoodGenderData = Object.keys(fastFoodGenderObject).map(key => {
            return fastFoodGenderObject[key];
        });

        //fast food by age
        const fastFoodAgeArray = [].concat(...this.props.fastFood_age);
        fastFoodAgeArray.splice(-1, 1);
        const fastfoodagemap = fastFoodAgeArray.map(w => w.total);
        const fastFoodAgeTotal = fastfoodagemap.reduce((a, b) => a + b, 0);
        const fastFoodAgeIds = fastFoodAgeArray.map(a => a.id);
        const fastFoodAgeMax = Math.max(...fastFoodAgeIds);
        let fastFoodAgeObject = {};
        for (let i = 1; i <= fastFoodAgeMax; i++) {
            const filter = fastFoodAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.fast_food_value);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            fastFoodAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const fastFoodAgeData = Object.keys(fastFoodAgeObject).map(key => {
            return fastFoodAgeObject[key];
        });

        //alcohol by gender
        const alcoholGenderArray = [].concat(...this.props.alcohol_gender);
        alcoholGenderArray.splice(-1, 1);
        const alcoholgendermap = alcoholGenderArray.map(w => w.total);
        const alcoholGenderTotal = alcoholgendermap.reduce((a, b) => a + b, 0);
        let alcoholGenderObject = {};
        for (let i = 0; i < 2; i++) {
            const filter = alcoholGenderArray.filter(a => a.alcohol === i);
            const total = filter.map(a => a.total);
            alcoholGenderObject[i] = {
                label: yesNoLabels[i],
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const alcoholGenderData = Object.keys(alcoholGenderObject).map(key => {
            return alcoholGenderObject[key];
        });

        //alcohol by age
        const alcoholAgeArray = [].concat(...this.props.alcohol_age);
        alcoholAgeArray.splice(-1, 1);
        const alcoholagemap = alcoholAgeArray.map(w => w.total);
        const alcoholAgeTotal = alcoholagemap.reduce((a, b) => a + b, 0);
        let alcoholAgeObject = {};
        for (let i = 0; i < 2; i++) {
            const filter = alcoholAgeArray.filter(a => a.alcohol === i);
            const total = filter.map(a => a.total);
            alcoholAgeObject[i] = {
                label: yesNoLabels[i],
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const alcoholAgeData = Object.keys(alcoholAgeObject).map(key => {
            return alcoholAgeObject[key];
        });

        //beer by gender
        const beerGenderArray = [].concat(...this.props.beer_gender);
        beerGenderArray.splice(-1, 1);
        const beergendermap = beerGenderArray.map(w => w.total);
        const beerGenderTotal = beergendermap.reduce((a, b) => a + b, 0);
        const beerIds = beerGenderArray.map(a => a.id);
        const beerMax = Math.max(...beerIds);
        let beerGenderObject = {};
        for (let i = 1; i <= beerMax; i++) {
            const filter = beerGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.beer);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            beerGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const beerGenderData = Object.keys(beerGenderObject).map(key => {
            return beerGenderObject[key];
        });
        beerGenderData.sort((a, b) => {
            return a.label - b.label
        });

        //beer by age
        const beerAgeArray = [].concat(...this.props.beer_age);
        beerAgeArray.splice(-1, 1);
        const beeragemap = beerAgeArray.map(w => w.total);
        const beerAgeTotal = beeragemap.reduce((a, b) => a + b, 0);
        const beerAgeIds = beerAgeArray.map(a => a.id);
        const beerAgeMax = Math.max(...beerAgeIds);
        let beerAgeObject = {};
        for (let i = 1; i <= beerAgeMax; i++) {
            const filter = beerAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.beer);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            beerAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const beerAgeData = Object.keys(beerAgeObject).map(key => {
            return beerAgeObject[key];
        });
        beerAgeData.sort((a, b) => {
            return a.label - b.label
        });

        //wine by gender
        const wineGenderArray = [].concat(...this.props.wine_gender);
        wineGenderArray.splice(-1, 1);
        const winegendermap = wineGenderArray.map(w => w.total);
        const wineGenderTotal = winegendermap.reduce((a, b) => a + b, 0);
        const wineIds = wineGenderArray.map(a => a.id);
        const wineMax = Math.max(...wineIds);
        let wineGenderObject = {};
        for (let i = 1; i <= wineMax; i++) {
            const filter = wineGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.wine);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            wineGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const wineGenderData = Object.keys(wineGenderObject).map(key => {
            return wineGenderObject[key];
        });
        wineGenderData.sort((a, b) => {
            return a.label - b.label
        });

        //wine by age
        const wineAgeArray = [].concat(...this.props.wine_age);
        wineAgeArray.splice(-1, 1);
        const wineagemap = wineAgeArray.map(w => w.total);
        const wineAgeTotal = wineagemap.reduce((a, b) => a + b, 0);
        const wineAgeIds = wineAgeArray.map(a => a.id);
        const wineAgeMax = Math.max(...wineAgeIds);
        let wineAgeObject = {};
        for (let i = 1; i <= wineAgeMax; i++) {
            const filter = wineAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.wine);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            wineAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const wineAgeData = Object.keys(wineAgeObject).map(key => {
            return wineAgeObject[key];
        });
        wineAgeData.sort((a, b) => {
            return a.label - b.label
        });

        //spirit drinks by gender
        const spiritDrinksGenderArray = [].concat(...this.props.spiritDrinks_gender);
        spiritDrinksGenderArray.splice(-1, 1);
        const spiritdrinksgendermap = spiritDrinksGenderArray.map(w => w.total);
        const spiritDrinksGenderTotal = spiritdrinksgendermap.reduce((a, b) => a + b, 0);
        const spiritDrinksIds = spiritDrinksGenderArray.map(a => a.id);
        const spiritDrinksMax = Math.max(...spiritDrinksIds);
        let spiritDrinksGenderObject = {};
        for (let i = 1; i <= spiritDrinksMax; i++) {
            const filter = spiritDrinksGenderArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.spirit_drinks);
            if (labels.length >= 2) {
                labels.splice(-1, 1)
            };
            spiritDrinksGenderObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const spiritDrinksGenderData = Object.keys(spiritDrinksGenderObject).map(key => {
            return spiritDrinksGenderObject[key];
        });
        spiritDrinksGenderData.sort((a, b) => {
            return a.label - b.label
        });

        //spirit drinks by age
        const spiritDrinksAgeArray = [].concat(...this.props.spiritDrinks_age);
        spiritDrinksAgeArray.splice(-1, 1);
        const spiritdrinksagemap = spiritDrinksAgeArray.map(w => w.total);
        const spiritDrinksAgeTotal = spiritdrinksagemap.reduce((a, b) => a + b, 0);
        const spiritDrinksAgeIds = spiritDrinksAgeArray.map(a => a.id);
        const spiritDrinksAgeMax = Math.max(...spiritDrinksAgeIds);
        let spiritDrinksAgeObject = {};
        for (let i = 1; i <= spiritDrinksAgeMax; i++) {
            const filter = spiritDrinksAgeArray.filter(a => a.id === i);
            const total = filter.map(a => a.total);
            const labels = filter.map(a => a.spirit_drinks);
            if (labels.length >= 2) {
                labels.splice(1)
            };
            spiritDrinksAgeObject[i] = {
                label: labels,
                backgroundColor: bgColors[i],
                data: total
            }
        };
        const spiritDrinksAgeData = Object.keys(spiritDrinksAgeObject).map(key => {
            return spiritDrinksAgeObject[key];
        });
        spiritDrinksAgeData.sort((a, b) => {
            return a.label - b.label
        });

        let mealsChart, breakfastChart, fruitsChart, vegetablesChart, sodasChart, fastFoodChart, alcoholChart, beerChart, wineChart, spiritDrinksChart, mealsData, breakfastData, fruitsData, vegetablesData, sodasData, fastFoodData, alcoholData, beerData, wineData, spiritDrinksData = null;
        let mealsTotal = this.props.meals.total;
        let breakfastTotal = this.props.breakfast.total;
        let fruitsTotal = this.props.fruits.total;
        let vegetablesTotal = this.props.vegetables.total;
        let sodasTotal = this.props.sodas.total;
        let fastFoodTotal = this.props.fast_food.total;
        let alcoholTotal = this.props.alcohol.total;

        switch (this.props.selectedOption) {
            case ('option1'):
                mealsData = {
                    labels: mealsLabels,
                    datasets: [
                        {
                            data: [
                                this.props.meals.meals_1_percentage,
                                this.props.meals.meals_2_percentage,
                                this.props.meals.meals_3_percentage,
                                this.props.meals.meals_4_percentage,
                                this.props.meals.meals_5_percentage,
                                this.props.meals.meals_6_percentage,
                                this.props.meals.meals_7_percentage
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                breakfastData = {
                    labels: breakfastLabels,
                    datasets: [
                        {
                            data: [
                                this.props.breakfast.breakfast_1_percentage,
                                this.props.breakfast.breakfast_2_percentage,
                                this.props.breakfast.breakfast_3_percentage,
                                this.props.breakfast.breakfast_4_percentage,
                                this.props.breakfast.breakfast_5_percentage,
                                this.props.breakfast.breakfast_6_percentage,
                                this.props.breakfast.breakfast_7_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                fruitsData = {
                    labels: fruitsLabels,
                    datasets: [
                        {
                            data: [
                                this.props.fruits.fruits_1_percentage,
                                this.props.fruits.fruits_2_percentage,
                                this.props.fruits.fruits_3_percentage,
                                this.props.fruits.fruits_4_percentage,
                                this.props.fruits.fruits_5_percentage,
                                this.props.fruits.fruits_6_percentage,
                                this.props.fruits.fruits_7_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                vegetablesData = {
                    labels: vegetablesLabels,
                    datasets: [
                        {
                            data: [
                                this.props.vegetables.vegetables_1_percentage,
                                this.props.vegetables.vegetables_2_percentage,
                                this.props.vegetables.vegetables_3_percentage,
                                this.props.vegetables.vegetables_4_percentage,
                                this.props.vegetables.vegetables_5_percentage,
                                this.props.vegetables.vegetables_6_percentage,
                                this.props.vegetables.vegetables_7_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                sodasData = {
                    labels: sodasLabels,
                    datasets: [
                        {
                            data: [
                                this.props.sodas.sodas_1_percentage,
                                this.props.sodas.sodas_2_percentage,
                                this.props.sodas.sodas_3_percentage,
                                this.props.sodas.sodas_4_percentage,
                                this.props.sodas.sodas_5_percentage,
                                this.props.sodas.sodas_6_percentage,
                                this.props.sodas.sodas_7_percentage
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                fastFoodData = {
                    labels: fastFoodLabels,
                    datasets: [
                        {
                            data: [
                                this.props.fast_food.fast_food_1_percentage,
                                this.props.fast_food.fast_food_2_percentage,
                                this.props.fast_food.fast_food_3_percentage,
                                this.props.fast_food.fast_food_4_percentage,
                                this.props.fast_food.fast_food_5_percentage,
                                this.props.fast_food.fast_food_6_percentage,
                                this.props.fast_food.fast_food_7_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                alcoholData = {
                    labels: yesNoLabels,
                    datasets: [
                        {
                            data: [
                                this.props.alcohol.alcohol_0_percentage,
                                this.props.alcohol.alcohol_1_percentage,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                beerData = {
                    labels: beerLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: beerDataValues,
                            backgroundColor: "#7394CB",
                            borderColor: "#2f60af",
                            borderWidth: 1,
                            tension: -1,
                        }
                    ]
                };

                wineData = {
                    labels: wineLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: wineDataValues,
                            backgroundColor: "#7394CB",
                            borderColor: "#2f60af",
                            borderWidth: 1,
                            tension: -1,
                        }
                    ]
                };

                spiritDrinksData = {
                    labels: spiritDrinksLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: spiritDrinksDataValues,
                            backgroundColor: "#7394CB",
                            borderColor: "#2f60af",
                            borderWidth: 1,
                            tension: -1,
                        }
                    ]
                };

                mealsChart = (<Pie data={mealsData} width={350} height={350} options={pieOptions} />);
                breakfastChart = (<Pie data={breakfastData} width={350} height={350} options={pieOptions} />);
                fruitsChart = (<Pie data={fruitsData} width={350} height={350} options={pieOptions} />);
                vegetablesChart = (<Pie data={vegetablesData} width={350} height={350} options={pieOptions} />);
                sodasChart = (<Pie data={sodasData} width={350} height={350} options={pieOptions} />);
                fastFoodChart = (<Pie data={fastFoodData} width={350} height={350} options={pieOptions} />);
                alcoholChart = (<Pie data={alcoholData} width={350} height={350} options={pieOptions} />);
                beerChart = (<Bar data={beerData} width={350} height={350} options={histogramOptions} />);
                wineChart = (<Bar data={wineData} width={350} height={350} options={histogramOptions} />);
                spiritDrinksChart = (<Bar data={spiritDrinksData} width={350} height={350} options={histogramOptions} />);
                break;

            case ('option2'):
                mealsData = {
                    labels: mealsLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.meals.meals_1,
                                this.props.meals.meals_2,
                                this.props.meals.meals_3,
                                this.props.meals.meals_4,
                                this.props.meals.meals_5,
                                this.props.meals.meals_6,
                                this.props.meals.meals_7,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                breakfastData = {
                    labels: breakfastLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.breakfast.breakfast_1,
                                this.props.breakfast.breakfast_2,
                                this.props.breakfast.breakfast_3,
                                this.props.breakfast.breakfast_4,
                                this.props.breakfast.breakfast_5,
                                this.props.breakfast.breakfast_6,
                                this.props.breakfast.breakfast_7,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                fruitsData = {
                    labels: fruitsLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.fruits.fruits_1,
                                this.props.fruits.fruits_2,
                                this.props.fruits.fruits_3,
                                this.props.fruits.fruits_4,
                                this.props.fruits.fruits_5,
                                this.props.fruits.fruits_6,
                                this.props.fruits.fruits_7,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                vegetablesData = {
                    labels: vegetablesLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.vegetables.vegetables_1,
                                this.props.vegetables.vegetables_2,
                                this.props.vegetables.vegetables_3,
                                this.props.vegetables.vegetables_4,
                                this.props.vegetables.vegetables_5,
                                this.props.vegetables.vegetables_6,
                                this.props.vegetables.vegetables_7,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                sodasData = {
                    labels: sodasLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.sodas.sodas_1,
                                this.props.sodas.sodas_2,
                                this.props.sodas.sodas_3,
                                this.props.sodas.sodas_4,
                                this.props.sodas.sodas_5,
                                this.props.sodas.sodas_6,
                                this.props.sodas.sodas_7,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                fastFoodData = {
                    labels: fastFoodLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: [
                                this.props.fast_food.fast_food_1,
                                this.props.fast_food.fast_food_2,
                                this.props.fast_food.fast_food_3,
                                this.props.fast_food.fast_food_4,
                                this.props.fast_food.fast_food_5,
                                this.props.fast_food.fast_food_6,
                                this.props.fast_food.fast_food_7,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                alcoholData = {
                    labels: yesNoLabels,
                    datasets: [
                        {
                            data: [
                                this.props.alcohol.alcohol_0,
                                this.props.alcohol.alcohol_1,
                            ],
                            backgroundColor: bgColors
                        }
                    ]
                };

                beerData = {
                    labels: beerLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: beerDataValues,
                            backgroundColor: "#7394CB",
                            borderColor: "#2f60af",
                            borderWidth: 1,
                            tension: -1,
                        }
                    ]
                };

                wineData = {
                    labels: wineLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: wineDataValues,
                            backgroundColor: "#7394CB",
                            borderColor: "#2f60af",
                            borderWidth: 1,
                            tension: -1,
                        }
                    ]
                };

                spiritDrinksData = {
                    labels: spiritDrinksLabels,
                    datasets: [
                        {
                            label: "Total",
                            data: spiritDrinksDataValues,
                            backgroundColor: "#7394CB",
                            borderColor: "#2f60af",
                            borderWidth: 1,
                            tension: -1,
                        }
                    ]
                };

                mealsChart = (<Bar data={mealsData} width={350} height={350} options={barOptions} />);
                breakfastChart = (<Bar data={breakfastData} width={350} height={350} options={barOptions} />);
                fruitsChart = (<Bar data={fruitsData} width={350} height={350} options={barOptions} />);
                vegetablesChart = (<Bar data={vegetablesData} width={350} height={350} options={barOptions} />);
                sodasChart = (<Bar data={sodasData} width={350} height={350} options={barOptions} />);
                fastFoodChart = (<Bar data={fastFoodData} width={350} height={350} options={barOptions} />);
                alcoholChart = (<Bar data={alcoholData} width={350} height={350} options={barOptions} />);
                beerChart = (<Bar data={beerData} width={350} height={350} options={histogramOptions} />);
                wineChart = (<Bar data={wineData} width={350} height={350} options={histogramOptions} />);
                spiritDrinksChart = (<Bar data={spiritDrinksData} width={350} height={350} options={histogramOptions} />);
                break;

            case ('option3'):
                mealsTotal = mealsGenderTotal;
                breakfastTotal = breakfastGenderTotal;
                fruitsTotal = fruitsGenderTotal;
                vegetablesTotal = vegetablesGenderTotal;
                sodasTotal = sodasGenderTotal;
                fastFoodTotal = fastFoodGenderTotal;
                alcoholTotal = alcoholGenderTotal;
                beerTotal = beerGenderTotal;
                wineTotal = wineGenderTotal;
                spiritDrinksTotal = spiritDrinksGenderTotal;

                mealsData = {
                    labels: genderLabels,
                    datasets: mealsGenderData
                };

                breakfastData = {
                    labels: genderLabels,
                    datasets: breakfastGenderData
                };

                fruitsData = {
                    labels: genderLabels,
                    datasets: fruitsGenderData
                };

                vegetablesData = {
                    labels: genderLabels,
                    datasets: vegetablesGenderData
                };

                sodasData = {
                    labels: genderLabels,
                    datasets: sodasGenderData
                };

                fastFoodData = {
                    labels: genderLabels,
                    datasets: fastFoodGenderData
                };

                alcoholData = {
                    labels: genderLabels,
                    datasets: alcoholGenderData
                };

                beerData = {
                    labels: genderLabels,
                    datasets: beerGenderData
                };

                wineData = {
                    labels: genderLabels,
                    datasets: wineGenderData
                };

                spiritDrinksData = {
                    labels: genderLabels,
                    datasets: spiritDrinksGenderData
                };

                mealsChart = (<Bar data={mealsData} width={350} height={350} options={barOptionsLegend} />);
                breakfastChart = (<Bar data={breakfastData} width={350} height={350} options={barOptionsLegend} />);
                fruitsChart = (<Bar data={fruitsData} width={350} height={350} options={barOptionsLegend} />);
                vegetablesChart = (<Bar data={vegetablesData} width={350} height={350} options={barOptionsLegend} />);
                sodasChart = (<Bar data={sodasData} width={350} height={350} options={barOptionsLegend} />);
                fastFoodChart = (<Bar data={fastFoodData} width={350} height={350} options={barOptionsLegend} />);
                alcoholChart = (<Bar data={alcoholData} width={350} height={350} options={barOptionsLegend} />);
                beerChart = (<Bar data={beerData} width={350} height={350} options={histogramOptions} />);
                wineChart = (<Bar data={wineData} width={350} height={350} options={histogramOptions} />);
                spiritDrinksChart = (<Bar data={spiritDrinksData} width={350} height={350} options={histogramOptions} />);
                break;

            case ('option4'):
                mealsTotal = mealsAgeTotal;
                breakfastTotal = breakfastAgeTotal;
                fruitsTotal = fruitsAgeTotal;
                vegetablesTotal = vegetablesAgeTotal;
                sodasTotal = sodasAgeTotal;
                fastFoodTotal = fastFoodAgeTotal;
                alcoholTotal = alcoholAgeTotal;
                beerTotal = beerAgeTotal;
                wineTotal = wineAgeTotal;
                spiritDrinksTotal = spiritDrinksAgeTotal;

                mealsData = {
                    labels: chartAgesLabels,
                    datasets: mealsAgeData
                };

                breakfastData = {
                    labels: chartAgesLabels,
                    datasets: breakfastAgeData
                };

                fruitsData = {
                    labels: chartAgesLabels,
                    datasets: fruitsAgeData
                };

                vegetablesData = {
                    labels: chartAgesLabels,
                    datasets: vegetablesAgeData
                };

                sodasData = {
                    labels: chartAgesLabels,
                    datasets: sodasAgeData
                };

                fastFoodData = {
                    labels: chartAgesLabels,
                    datasets: fastFoodAgeData
                };

                alcoholData = {
                    labels: chartAgesLabels,
                    datasets: alcoholAgeData
                };

                beerData = {
                    labels: chartAgesLabels,
                    datasets: beerAgeData
                };

                wineData = {
                    labels: chartAgesLabels,
                    datasets: wineAgeData
                };

                spiritDrinksData = {
                    labels: chartAgesLabels,
                    datasets: spiritDrinksAgeData
                };

                mealsChart = (<Bar data={mealsData} width={350} height={350} options={barOptionsLegend} />);
                breakfastChart = (<Bar data={breakfastData} width={350} height={350} options={barOptionsLegend} />);
                fruitsChart = (<Bar data={fruitsData} width={350} height={350} options={barOptionsLegend} />);
                vegetablesChart = (<Bar data={vegetablesData} width={350} height={350} options={barOptionsLegend} />);
                sodasChart = (<Bar data={sodasData} width={350} height={350} options={barOptionsLegend} />);
                fastFoodChart = (<Bar data={fastFoodData} width={350} height={350} options={barOptionsLegend} />);
                alcoholChart = (<Bar data={alcoholData} width={350} height={350} options={barOptionsLegend} />);
                beerChart = (<Bar data={beerData} width={350} height={350} options={histogramOptions} />);
                wineChart = (<Bar data={wineData} width={350} height={350} options={histogramOptions} />);
                spiritDrinksChart = (<Bar data={spiritDrinksData} width={350} height={350} options={histogramOptions} />);
                break;
            default:
        };

        return (
            <Aux>
                <div className="row">
                    <div className="mt-2 mx-auto d-block col-md-6">
                        <h4 className="text-center text-secondary"><FormattedMessage id="meals2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {mealsTotal}</small></div>
                        {mealsChart}
                    </div>
                    <div className="mt-2 mx-auto d-block col-md-6">
                        <h4 className="text-center text-secondary"><FormattedMessage id="breakfast2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {breakfastTotal}</small></div>
                        {breakfastChart}
                    </div>
                </div>

                <div className="row">
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="fruit2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {fruitsTotal}</small></div>
                        {fruitsChart}
                    </div>
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="vegetables2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {vegetablesTotal}</small></div>
                        {vegetablesChart}
                    </div>
                </div>

                <div className="row">
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="sodas2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {sodasTotal}</small></div>
                        {sodasChart}
                    </div>
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="fast-food2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {fastFoodTotal}</small></div>
                        {fastFoodChart}
                    </div>
                </div>

                <div className="row">
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="alcohol2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {alcoholTotal}</small></div>
                        {alcoholChart}
                    </div>
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="beers2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {beerTotal}</small></div>
                        {beerChart}
                    </div>
                </div>

                <div className="row">
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="wine2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {wineTotal}</small></div>
                        {wineChart}
                    </div>
                    <div className="mt-4 col-md-6 mx-auto d-block">
                        <h4 className="text-center text-secondary"><FormattedMessage id="spirit_drinks2" /></h4>
                        <div className="text-center"><small><FormattedMessage id="respondents" /> {spiritDrinksTotal}</small></div>
                        {spiritDrinksChart}
                    </div>
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        genderValues: state.fetchRefValues.genderValues,
        chartAgesValues: state.fetchRefValues.chartAgesValues,
        meals: state.general_indicators.meals,
        meals_gender: state.by_gender.meals_gender,
        meals_age: state.by_age.meals_age,
        breakfast: state.general_indicators.breakfast,
        breakfast_gender: state.by_gender.breakfast_gender,
        breakfast_age: state.by_age.breakfast_age,
        fruits: state.general_indicators.fruits,
        fruits_gender: state.by_gender.fruits_gender,
        fruits_age: state.by_age.fruits_age,
        vegetables: state.general_indicators.vegetables,
        vegetables_gender: state.by_gender.vegetables_gender,
        vegetables_age: state.by_age.vegetables_age,
        sodas: state.general_indicators.sodas,
        sodas_gender: state.by_gender.sodas_gender,
        sodas_age: state.by_age.sodas_age,
        fast_food: state.general_indicators.fast_food,
        fastFood_gender: state.by_gender.fastFood_gender,
        fastFood_age: state.by_age.fastFood_age,
        alcohol: state.general_indicators.alcohol,
        alcohol_gender: state.by_gender.alcohol_gender,
        alcohol_age: state.by_age.alcohol_age,
        beer: state.general_indicators.beer,
        beer_gender: state.by_gender.beer_gender,
        beer_age: state.by_age.beer_age,
        wine: state.general_indicators.wine,
        wine_gender: state.by_gender.wine_gender,
        wine_age: state.by_age.wine_age,
        spirit_drinks: state.general_indicators.spirit_drinks,
        spiritDrinks_gender: state.by_gender.spiritDrinks_gender,
        spiritDrinks_age: state.by_age.spiritDrinks_age,
        mealsValues: state.fetchRefValues.mealsValues,
        breakfastValues: state.fetchRefValues.breakfastValues,
        fruitValues: state.fetchRefValues.fruitValues,
        vegetablesValues: state.fetchRefValues.vegetablesValues,
        sodasValues: state.fetchRefValues.sodasValues,
        fastFoodValues: state.fetchRefValues.fastFoodValues
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchMeals: (department, year) => dispatch(actions.fetchMeals(department, year)),
        fetchMealsByGender: (department, year) => dispatch(actions.fetchMealsByGender(department, year)),
        fetchMealsByAge: (department, year) => dispatch(actions.fetchMealsByAge(department, year)),
        fetchBreakfast: (department, year) => dispatch(actions.fetchBreakfast(department, year)),
        fetchBreakfastByGender: (department, year) => dispatch(actions.fetchBreakfastByGender(department, year)),
        fetchBreakfastByAge: (department, year) => dispatch(actions.fetchBreakfastByAge(department, year)),
        fetchFruits: (department, year) => dispatch(actions.fetchFruits(department, year)),
        fetchFruitsByGender: (department, year) => dispatch(actions.fetchFruitsByGender(department, year)),
        fetchFruitsByAge: (department, year) => dispatch(actions.fetchFruitsByAge(department, year)),
        fetchVegetables: (department, year) => dispatch(actions.fetchVegetables(department, year)),
        fetchVegetablesByGender: (department, year) => dispatch(actions.fetchVegetablesByGender(department, year)),
        fetchVegetablesByAge: (department, year) => dispatch(actions.fetchVegetablesByAge(department, year)),
        fetchSodas: (department, year) => dispatch(actions.fetchSodas(department, year)),
        fetchSodasByGender: (department, year) => dispatch(actions.fetchSodasByGender(department, year)),
        fetchSodasByAge: (department, year) => dispatch(actions.fetchSodasByAge(department, year)),
        fetchFastFood: (department, year) => dispatch(actions.fetchFastFood(department, year)),
        fetchFastFoodByGender: (department, year) => dispatch(actions.fetchFastFoodByGender(department, year)),
        fetchFastFoodByAge: (department, year) => dispatch(actions.fetchFastFoodByAge(department, year)),
        fetchAlcohol: (department, year) => dispatch(actions.fetchAlcohol(department, year)),
        fetchAlcoholByGender: (department, year) => dispatch(actions.fetchAlcoholByGender(department, year)),
        fetchAlcoholByAge: (department, year) => dispatch(actions.fetchAlcoholByAge(department, year)),
        fetchBeer: (department, year) => dispatch(actions.fetchBeer(department, year)),
        fetchBeerByGender: (department, year) => dispatch(actions.fetchBeerByGender(department, year)),
        fetchBeerByAge: (department, year) => dispatch(actions.fetchBeerByAge(department, year)),
        fetchWine: (department, year) => dispatch(actions.fetchWine(department, year)),
        fetchWineByGender: (department, year) => dispatch(actions.fetchWineByGender(department, year)),
        fetchWineByAge: (department, year) => dispatch(actions.fetchWineByAge(department, year)),
        fetchSpiritDrinks: (department, year) => dispatch(actions.fetchSpiritDrinks(department, year)),
        fetchSpiritDrinksByGender: (department, year) => dispatch(actions.fetchSpiritDrinksByGender(department, year)),
        fetchSpiritDrinksByAge: (department, year) => dispatch(actions.fetchSpiritDrinksByAge(department, year)),
        fetchMealsValues: () => dispatch(actions.fetchMealsValues()),
        fetchBreakfastValues: () => dispatch(actions.fetchBreakfastValues()),
        fetchFruitsValues: () => dispatch(actions.fetchFruitValues()),
        fetchVegetablesValues: () => dispatch(actions.fetchVegetablesValues()),
        fetchSodasValues: () => dispatch(actions.fetchSodasValues()),
        fetchFastFoodValues: () => dispatch(actions.fetchFastFoodValues()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(indicator4);