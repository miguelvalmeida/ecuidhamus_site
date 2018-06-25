import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import axios from '../../axios';
import EditCode from '../../components/EditCode';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner';
import Aux from '../../hoc/auxi';
import Modal from '../../components/UI/Modal';

class codeEdit extends Component {
    state = {
        gender: null,
        department: null,
        age: null,
        marital: null,
        academic: null,
        smokerStatus: null,
        smokerStatusSelected: null,
        smokerRegularity: null,
        smokerNumber: null,
        healthOpinions: null,
        height: null,
        weight: null,
        hasChronic: null,
        hasChronicSelected: null,
        chronicValues: null,
        takesMeds: null,
        takesMedsSelected: null,
        medsNumber: null,
        medsValues: null,
        painValue: null,
        painValueSelected: null,
        localPain: null,
        painScale: null,
        meals: null,
        breakfast: null,
        fruit: null,
        vegetables: null,
        sodas: null,
        fastFood: null,
        alcohol: null,
        alcoholSelected: null,
        beer: null,
        wine: null,
        spiritDrinks: null,
        physicalActivity: null,
        physicalActivitySelected: null,
        physicalValues: null,
        physicalHours: null,
        walkingCycling: null,
        editRedirect: false,
        editMessage: ''
    };

    componentDidMount() {
        this.props.fetchNullValues(this.props.match.params.code);
        //1
        this.props.fetchGenderValues();
        this.props.fetchAgeValues();
        this.props.fetchAcademicValues();
        this.props.fetchMaritalValues();
        this.props.fetchDepartments();
        //2
        this.props.fetchSmokerStatusValues();
        this.props.fetchSmokerFrequencieValues();
        this.props.fetchSmokerNumberValues();
        this.props.fetchHealthOpinionsValues();
        //3
        this.props.fetchPainScaleValues();
        this.props.fetchPainValueValues();
        this.props.fetchChronicValueValues();
        this.props.fetchLocalPainValues();
        this.props.fetchMedsValueValues();
        //4
        this.props.fetchMealsValues();
        this.props.fetchBreakfastValues();
        this.props.fetchFruitsValues();
        this.props.fetchVegetablesValues();
        this.props.fetchSodasValues();
        this.props.fetchFastFoodValues();
        //5
        this.props.fetchPhysicalHoursValues();
        this.props.fetchWalkingCyclingValues();
        this.props.fetchPhysicalActivityValues();

        const token = 'Bearer ' + localStorage.getItem('token');
        axios.get('forms/nullnumbers/' + this.props.match.params.code, { headers: { "Authorization": token } })
            .then(response => {
                this.setState(
                    {
                        gender: response.data.message[0].ref_id_genders,
                        department: response.data.message[0].ref_id_departments_services_schools,
                        age: response.data.message[0].ref_id_ages,
                        marital: response.data.message[0].ref_id_marital_status,
                        academic: response.data.message[0].ref_id_academic_levels,
                        smokerStatus: response.data.message[0].smoker_value,
                        smokerRegularity: response.data.message[0].smoke_frequencie,
                        smokerNumber: response.data.message[0].weekly_smokes,
                        healthOpinions: response.data.message[0].ref_id_health_opinions,
                        weight: response.data.message[0].weight,
                        height: response.data.message[0].height,
                        hasChronic: response.data.message[0].chronic_disease,
                        chronicValues: response.data.message[0].chronic_diseases,
                        takesMeds: response.data.message[0].takes_meds,
                        medsNumber: response.data.message[0].meds_number,
                        medsValues: response.data.message[0].meds_value,
                        painValue: response.data.message[0].pain_value,
                        localPain: response.data.message[0].local_pain,
                        painScale: response.data.message[0].pain_scale,
                        meals: response.data.message[0].ref_id_meals,
                        breakfast: response.data.message[0].ref_id_breakfast,
                        fruit: response.data.message[0].ref_id_fruits,
                        vegetables: response.data.message[0].ref_id_vegetables,
                        sodas: response.data.message[0].ref_id_sodas,
                        fastFood: response.data.message[0].ref_id_fast_food,
                        alcohol: response.data.message[0].alcohol,
                        beer: response.data.message[0].beers,
                        wine: response.data.message[0].wine,
                        spiritDrinks: response.data.message[0].spirit_drinks,
                        physicalActivity: response.data.message[0].physical_activity,
                        physicalValues: response.data.message[0].physical_activity_value,
                        physicalHours: response.data.message[0].physical_activity_hours,
                        walkingCycling: response.data.message[0].ref_id_walking_cycling
                    });
            })
            .catch(err => {
                console.log(err)
            })
    };

    componentWillUnmount() {
        this.props.nullValuesRemoveMessage()
    };

    genderChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ gender: null });
        } else {
            this.setState({ gender: event.target.value });
        }
    };

    departmentChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ department: null });
        } else {
            this.setState({ department: event.target.value });
        }
    };

    ageChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ age: null });
        } else {
            this.setState({ age: event.target.value });
        }
    };

    maritalChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ marital: null });
        } else {
            this.setState({ marital: event.target.value });
        }
    };

    academicChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ academic: null });
        } else {
            this.setState({ academic: event.target.value });
        }
    };

    smokerStatusChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ smokerStatus: null, smokerStatusSelected: event.target.value });
        } else {
            this.setState({ smokerStatus: event.target.value, smokerStatusSelected: event.target.value });
        };
        if (event.target.value === "3" || event.target.value === "2" || event.target.value === "null") {
            this.setState({ smokerRegularity: null, smokerNumber: null })
        };
    };

    smokerRegularityChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ smokerRegularity: null });
        } else {
            this.setState({ smokerRegularity: event.target.value });
        }
    };

    smokerNumberChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ smokerNumber: null });
        } else {
            this.setState({ smokerNumber: event.target.value });
        }
    };

    healthOpinionsChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ healthOpinions: null });
        } else {
            this.setState({ healthOpinions: event.target.value });
        }
    };

    weightChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ weight: null });
        } else {
            this.setState({ weight: event.target.value });
        }
    };

    heightChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ height: null });
        } else {
            this.setState({ height: event.target.value });
        }
    };

    hasChronicChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ hasChronic: null, hasChronicSelected: event.target.value })
        } else {
            this.setState({ hasChronic: event.target.value, hasChronicSelected: event.target.value })
        }
        if (event.target.value === "0" || event.target.value === "null") {
            this.setState({ chronicValues: null })
        };
    };

    chronicValuesChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ chronicValues: null });
        } else {
            this.setState({ chronicValues: event.target.value });
        }
    };

    takesMedsChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ takesMeds: null, takesMedsSelected: event.target.value });
        } else {
            this.setState({ takesMeds: event.target.value, takesMedsSelected: event.target.value });
        };
        if (event.target.value === "0" || event.target.value === "null") {
            this.setState({ medsNumber: null, medsValues: null });
        }
    };

    medsNumberChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ medsNumber: null });
        } else {
            this.setState({ medsNumber: event.target.value });
        }
    };

    medsValuesChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ medsValues: null });
        } else {
            this.setState({ medsValues: event.target.value });
        }
    };

    painValueChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ painValue: null, painValueSelected: event.target.value });
        } else {
            this.setState({ painValue: event.target.value, painValueSelected: event.target.value });
        };
        if (event.target.value === "1" || event.target.value === "null") {
            this.setState({ localPain: null, painScale: null });
        };
    };

    localPainChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ localPain: null });
        } else {
            this.setState({ localPain: event.target.value });
        }
    };

    painScaleChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ painScale: null });
        } else {
            this.setState({ painScale: event.target.value });
        }
    };

    mealsChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ meals: null });
        } else {
            this.setState({ meals: event.target.value });
        }
    };

    breakfastChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ breakfast: null });
        } else {
            this.setState({ breakfast: event.target.value });
        }
    };

    fruitChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ fruit: null });
        } else {
            this.setState({ fruit: event.target.value });
        }
    };

    vegetablesChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ vegetables: null });
        } else {
            this.setState({ vegetables: event.target.value });
        }
    };

    sodasChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ sodas: null });
        } else {
            this.setState({ sodas: event.target.value });
        }
    };

    fastFoodChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ fastFood: null });
        } else {
            this.setState({ fastFood: event.target.value });
        }
    };

    alcoholChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ alcohol: null, alcoholSelected: event.target.value });
        } else {
            this.setState({ alcohol: event.target.value, alcoholSelected: event.target.value });
        };
        if (event.target.value === "0" || event.target.value === "null") {
            this.setState({ beer: null, wine: null, spiritDrinks: null });
        }
    };

    beerChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ beer: null });
        } else {
            this.setState({ beer: event.target.value });
        }
    };

    wineChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ wine: null });
        } else {
            this.setState({ wine: event.target.value });
        }
    };

    spiritDrinksChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ spiritDrinks: null });
        } else {
            this.setState({ spiritDrinks: event.target.value });
        }
    };

    physicalActivityChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ physicalActivity: null, physicalActivitySelected: event.target.value });
        } else {
            this.setState({ physicalActivity: event.target.value, physicalActivitySelected: event.target.value });
        }
        if (event.target.value === "0" || event.target.value === "null") {
            this.setState({ physicalValues: null, physicalHours: null });
        }
    };

    physicalValuesChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ physicalValues: null });
        } else {
            this.setState({ physicalValues: event.target.value });
        }
    };

    physicalHoursChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ physicalHours: null });
        } else {
            this.setState({ physicalHours: event.target.value });
        }
    };

    walkingCyclingChangeHandler = (event) => {
        if (event.target.value === "null") {
            this.setState({ walkingCycling: null });
        } else {
            this.setState({ walkingCycling: event.target.value });
        }
    };

    onEditHandler = () => {
        let section1_done, section2_done, section3_done, section4_done, section5_done, section6_done, section7_done = false;
        let completed = 0;
        
        if (this.state.gender && this.state.department && this.state.age && this.state.marital && this.state.academic && this.state.healthOpinions && this.state.height && this.state.weight && this.state.meals && this.state.breakfast && this.state.fruit && this.state.vegetables && this.state.sodas && this.state.fastFood && this.state.walkingCycling) {
            section1_done = true;
        } else {
            section1_done = false;
        };
        if ((this.state.smokerStatus == 1 && this.state.smokerNumber && this.state.smokerRegularity) || (this.state.smokerStatus == 2 && !this.state.smokerNumber && !this.state.smokerRegularity) || (this.state.smokerStatus == 3 && !this.state.smokerNumber && !this.state.smokerRegularity)) {
            section2_done = true;
        } else {
            section2_done = false;
        };
        if ((this.state.hasChronic == 1 && this.state.chronicValues) || (this.state.hasChronic == 0 && !this.state.chronicValues)) {
            section3_done = true;
        } else {
            section3_done = false;
        };
        if ((this.state.takesMeds == 1 && this.state.medsNumber && this.state.medsValues) || (this.state.takesMeds == 0 && !this.state.medsNumber && !this.state.medsValues)) {
            section4_done = true;
        } else {
            section4_done = false;
        };
        if ((this.state.painValue == 1 && !this.state.painScale && !this.state.localPain) || (this.state.painValue == 2 && this.state.localPain && this.state.painScale) || (this.state.painValue == 3 && this.state.localPain && this.state.painScale)) {
            section5_done = true;
        } else {
            section5_done = false;
        };
        if ((this.state.alcohol == 0 && !this.state.beer && !this.state.wine && !this.state.spiritDrinks) || (this.state.alcohol == 1 && this.state.beer && this.state.wine && this.state.spiritDrinks)) {
            section6_done = true;
        } else {
            section6_done = false;
        };
        if ((this.state.physicalActivity == 0 && !this.state.physicalValues && !this.state.physicalHours) || (this.state.physicalActivity == 1 && this.state.physicalValues && this.state.physicalHours)) {
            section7_done = true;
        } else {
            section7_done = false;
        };

        if (section1_done && section2_done && section3_done && section4_done && section5_done && section6_done && section7_done) {
            completed = 1;
        } else {
            completed = 0;
        };

        const editCodeData = {
            weight: this.state.weight,
            height: this.state.height,
            hasChronic: this.state.hasChronic,
            takesMeds: this.state.takesMeds,
            alcohol: this.state.alcohol,
            physicalActivity: this.state.physicalActivity,
            ages: this.state.age,
            genders: this.state.gender,
            marital: this.state.marital,
            academic: this.state.academic,
            healthOpinions: this.state.healthOpinions,
            vegetables: this.state.vegetables,
            fruits: this.state.fruit,
            breakfast: this.state.breakfast,
            meals: this.state.meals,
            fastFood: this.state.fastFood,
            sodas: this.state.sodas,
            walkingCycling: this.state.walkingCycling,
            department: this.state.department,
            completed: completed,
            beer: this.state.beer,
            wine: this.state.wine,
            spiritDrinks: this.state.spiritDrinks,
            chronicValues: this.state.chronicValues,
            localPain: this.state.localPain,
            painScale: this.state.painScale,
            painValue: this.state.painValue,
            physicalHours: this.state.physicalHours,
            physicalValues: this.state.physicalValues,
            smokeFrequencies: this.state.smokerRegularity,
            dailySmokes: this.state.smokerNumber,
            smokerValue: this.state.smokerStatus,
            medsNumber: this.state.medsNumber,
            medsValues: this.state.medsValues
        };
        const token = 'Bearer ' + localStorage.getItem('token');
        const language = localStorage.getItem('language');
        axios.post('forms/update_code/' + this.props.match.params.code, editCodeData, { headers: { "Authorization": token, "language": language } })
            .then(response => {
                if (response.data.status === 1) {
                    this.setState({ editRedirect: true, editMessage: response.data.message });
                } else {
                    this.setState({ editRedirect: false, editMessage: response.data.message })
                }
            })
            .catch(err => {
                this.setState({ editRedirect: false });
            });
    };

    render() {
        let genderOptions = null;
        genderOptions = this.props.genderValues.map(gender => {
            return (
                <option value={gender.id_genders} key={gender.id_genders}>{gender.value}</option>
            )
        });

        let departmentOptions = null;
        departmentOptions = this.props.departments.map(department => {
            return (
                <option value={department.id_departments_services_schools} key={department.id_departments_services_schools}>{department.value}</option>
            )
        });

        let ageOptions = null;
        ageOptions = this.props.ageValues.map(age => {
            return (
                <option value={age.id_ages} key={age.id_ages}>{age.value}</option>
            )
        });

        let maritalOptions = null;
        maritalOptions = this.props.maritalValues.map(marital => {
            return (
                <option value={marital.id_marital_status} key={marital.id_marital_status}>{marital.value}</option>
            )
        });

        let academicOptions = null;
        academicOptions = this.props.academicValues.map(academic => {
            return (
                <option value={academic.id_academic_levels} key={academic.id_academic_levels}>{academic.value}</option>
            )
        });

        let smokerStatusOptions = null;
        smokerStatusOptions = this.props.smokerStatusValues.map(ss => {
            return (
                <option value={ss.id_smokers_value} key={ss.id_smokers_value}>{ss.value}</option>
            )
        });

        let regularityOptions = null;
        regularityOptions = this.props.smokerFrequencieValues.map(ss => {
            return (
                <option value={ss.id_frequencies} key={ss.id_frequencies}>{ss.value}</option>
            )
        });

        let weeklyNumberOptions = null;
        weeklyNumberOptions = this.props.smokerNumberValues.map(ss => {
            return (
                <option value={ss.id_average_daily_smokes} key={ss.id_average_daily_smokes}>{ss.value}</option>
            )
        });

        let healthOpinionOptions = null;
        healthOpinionOptions = this.props.healthOpinionsValues.map(ss => {
            return (
                <option value={ss.id_health_opinions} key={ss.id_health_opinions}>{ss.value}</option>
            )
        });

        let chronicValuesOptions = null;
        chronicValuesOptions = this.props.chronicValues.map(ss => {
            return (
                <option value={ss.id_chronic_diseases_value} key={ss.id_chronic_diseases_value}>{ss.value}</option>
            )
        });

        let medsValuesOptions = null;
        medsValuesOptions = this.props.medsValues.map(ss => {
            return (
                <option value={ss.id_takes_meds_value} key={ss.id_takes_meds_value}>{ss.value}</option>
            )
        });

        let painValueOptions = null;
        painValueOptions = this.props.painValues.map(ss => {
            return (
                <option value={ss.id_pain_value} key={ss.id_pain_value}>{ss.value}</option>
            )
        });

        let localPainOptions = null;
        localPainOptions = this.props.localPainValues.map(ss => {
            return (
                <option value={ss.id_local_pain} key={ss.id_local_pain}>{ss.value}</option>
            )
        });

        let painScaleOptions = null;
        painScaleOptions = this.props.painScaleValues.map(ss => {
            return (
                <option value={ss.id_pain_scale} key={ss.id_pain_scale}>{ss.value}</option>
            )
        });

        let mealsOptions = null;
        mealsOptions = this.props.mealsValues.map(ss => {
            return (
                <option value={ss.id_meals} key={ss.id_meals}>{ss.value}</option>
            )
        });

        let breakfastOptions = null;
        breakfastOptions = this.props.breakfastValues.map(ss => {
            return (
                <option value={ss.id_breakfast} key={ss.id_breakfast}>{ss.value}</option>
            )
        });

        let fruitOptions = null;
        fruitOptions = this.props.fruitValues.map(ss => {
            return (
                <option value={ss.id_fruits} key={ss.id_fruits}>{ss.value}</option>
            )
        });

        let vegetablesOptions = null;
        vegetablesOptions = this.props.vegetablesValues.map(ss => {
            return (
                <option value={ss.id_vegetables} key={ss.id_vegetables}>{ss.value}</option>
            )
        });

        let sodasOptions = null;
        sodasOptions = this.props.sodasValues.map(ss => {
            return (
                <option value={ss.id_sodas} key={ss.id_sodas}>{ss.value}</option>
            )
        });

        let fastFoodOptions = null;
        fastFoodOptions = this.props.fastFoodValues.map(ss => {
            return (
                <option value={ss.id_fast_food} key={ss.id_fast_food}>{ss.value}</option>
            )
        });

        let physicalValuesOptions = null;
        physicalValuesOptions = this.props.physicalActivityValues.map(ss => {
            return (
                <option value={ss.id_physical_activity_value} key={ss.id_physical_activity_value}>{ss.value}</option>
            )
        });

        let physicalHoursOptions = null;
        physicalHoursOptions = this.props.physicalHoursValues.map(ss => {
            return (
                <option value={ss.id_physical_activity_hours} key={ss.id_physical_activity_hours}>{ss.value}</option>
            )
        });

        let walkingCyclingOptions = null;
        walkingCyclingOptions = this.props.walkingCyclingValues.map(ss => {
            return (
                <option value={ss.id_walking_cycling} key={ss.id_walking_cycling}>{ss.value}</option>
            )
        });

        let editPage = (
            <Aux>
                <EditCode
                    gender={this.props.nullValues.gender}
                    genderOptions={genderOptions}
                    genderChange={this.genderChangeHandler}

                    department={this.props.nullValues.department}
                    departmentOptions={departmentOptions}
                    departmentChange={this.departmentChangeHandler}

                    age={this.props.nullValues.age}
                    ageOptions={ageOptions}
                    ageChange={this.ageChangeHandler}

                    marital_status={this.props.nullValues.marital_status}
                    maritalOptions={maritalOptions}
                    maritalChange={this.maritalChangeHandler}

                    academic_levels={this.props.nullValues.academic_level}
                    academicOptions={academicOptions}
                    academicChange={this.academicChangeHandler}

                    smoking_status={this.props.nullValues.smoker_value}
                    smokerStatusOptions={smokerStatusOptions}
                    smokerStatusChange={this.smokerStatusChangeHandler}
                    selectedStatus={this.state.smokerStatusSelected}

                    regularity={this.props.nullValues.smoke_frequencie}
                    regularityOptions={regularityOptions}
                    smokerRegularityChange={this.smokerRegularityChangeHandler}

                    weeklyNumber={this.props.nullValues.weekly_smokes}
                    weeklyNumberOptions={weeklyNumberOptions}
                    smokerNumberChange={this.smokerNumberChangeHandler}

                    health_opinion={this.props.nullValues.health_opinion}
                    healthOpinionOptions={healthOpinionOptions}
                    healthOpinionsChange={this.healthOpinionsChangeHandler}

                    weight={this.props.nullValues.weight}
                    weightChange={this.weightChangeHandler}
                    height={this.props.nullValues.height}
                    heightChange={this.heightChangeHandler}

                    has_chronic={this.props.nullValues.chronic_disease}
                    hasChronicChange={this.hasChronicChangeHandler}
                    selectedHasChronic={this.state.hasChronicSelected}

                    chronic_diseases={this.props.nullValues.chronic_diseases}
                    chronicValuesOptions={chronicValuesOptions}
                    chronicValuesChange={this.chronicValuesChangeHandler}

                    takes_meds={this.props.nullValues.takes_meds}
                    takesMedsChange={this.takesMedsChangeHandler}
                    selectedTakesMeds={this.state.takesMedsSelected}

                    meds_number={this.props.nullValues.meds_number}
                    medsNumberChange={this.medsNumberChangeHandler}

                    meds_values={this.props.nullValues.meds_value}
                    medsValuesOptions={medsValuesOptions}
                    medsValuesChange={this.medsValuesChangeHandler}

                    pain_value={this.props.nullValues.pain_value}
                    painValueOptions={painValueOptions}
                    painValueChange={this.painValueChangeHandler}
                    selectedPainValue={this.state.painValueSelected}

                    local_pain={this.props.nullValues.local_pain}
                    localPainOptions={localPainOptions}
                    localPainChange={this.localPainChangeHandler}

                    pain_scale={this.props.nullValues.pain_scale}
                    painScaleOptions={painScaleOptions}
                    painScaleChange={this.painScaleChangeHandler}

                    meals={this.props.nullValues.meals}
                    mealsOptions={mealsOptions}
                    mealsChange={this.mealsChangeHandler}

                    breakfast={this.props.nullValues.breakfast}
                    breakfastOptions={breakfastOptions}
                    breakfastChange={this.breakfastChangeHandler}

                    fruit={this.props.nullValues.fruits}
                    fruitOptions={fruitOptions}
                    fruitChange={this.fruitChangeHandler}

                    vegetables={this.props.nullValues.vegetables}
                    vegetablesOptions={vegetablesOptions}
                    vegetablesChange={this.vegetablesChangeHandler}

                    sodas={this.props.nullValues.sodas}
                    sodasOptions={sodasOptions}
                    sodasChange={this.sodasChangeHandler}

                    fast_food={this.props.nullValues.fast_food}
                    fastFoodOptions={fastFoodOptions}
                    fastFoodChange={this.fastFoodChangeHandler}

                    alcohol={this.props.nullValues.alcohol}
                    alcoholChange={this.alcoholChangeHandler}
                    selectedAlcohol={this.state.alcoholSelected}

                    beer={this.props.nullValues.beers}
                    beerChange={this.beerChangeHandler}

                    wine={this.props.nullValues.wine}
                    wineChange={this.wineChangeHandler}

                    spirit_drinks={this.props.nullValues.spirit_drinks}
                    spiritDrinksChange={this.spiritDrinksChangeHandler}

                    physical_activity={this.props.nullValues.physical_activity}
                    physicalChange={this.physicalActivityChangeHandler}
                    selectedPhysical={this.state.physicalActivitySelected}

                    physical_values={this.props.nullValues.physical_activity_value}
                    physicalValuesOptions={physicalValuesOptions}
                    physicalValuesChange={this.physicalValuesChangeHandler}

                    physical_hours={this.props.nullValues.physical_activity_hours}
                    physicalHoursOptions={physicalHoursOptions}
                    physicalHoursChange={this.physicalHoursChangeHandler}

                    walking_cycling={this.props.nullValues.walking_cycling}
                    walkingCyclingOptions={walkingCyclingOptions}
                    walkingCyclingChange={this.walkingCyclingChangeHandler}

                    goBack={this.props.history.goBack}
                />
                <div className="container mt-3">
                    <Modal
                        class="btn btn-secondary mr-2"
                        btnText={<FormattedMessage id="edit-button" />}
                        title={<FormattedMessage id="edit-form" />}
                        modalText={<FormattedMessage id="edit-modal-text" />}
                        action={<FormattedMessage id="edit-button" />}
                        confirm={this.onEditHandler}
                    />
                    <button type="button" className="btn btn-dark" onClick={this.props.history.goBack}><FormattedMessage id="cancel" /></button>
                </div>
            </Aux>
        );

        if (this.props.loading_null) {
            editPage = <Spinner />
        };

        let redirect = null;
        if (this.props.status_null === 0) {
            redirect = <Redirect to="/" />
        };

        if (this.state.editRedirect) {
            return <Redirect to={{
                pathname: "/codes/" + this.props.match.params.code,
                state: { message: this.state.editMessage }
            }} />
        };

        return (
            <Aux>
                {editPage}
                {redirect}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        nullValues: state.fetchCodeData.nullValues,
        loading_null: state.fetchCodeData.loading_null,
        status_null: state.fetchCodeData.status_null,
        //1
        departments: state.fetchRefValues.departments,
        genderValues: state.fetchRefValues.genderValues,
        ageValues: state.fetchRefValues.ageValues,
        academicValues: state.fetchRefValues.academicValues,
        maritalValues: state.fetchRefValues.maritalValues,
        //2
        smokerStatusValues: state.fetchRefValues.smokerStatusValues,
        smokerFrequencieValues: state.fetchRefValues.smokerFrequencieValues,
        smokerNumberValues: state.fetchRefValues.smokerNumberValues,
        healthOpinionsValues: state.fetchRefValues.healthOpinionsValues,
        //3
        painValues: state.fetchRefValues.painValues,
        painScaleValues: state.fetchRefValues.painScaleValues,
        chronicValues: state.fetchRefValues.chronicValues,
        medsValues: state.fetchRefValues.medsValues,
        localPainValues: state.fetchRefValues.localPainValues,
        //4
        mealsValues: state.fetchRefValues.mealsValues,
        breakfastValues: state.fetchRefValues.breakfastValues,
        fruitValues: state.fetchRefValues.fruitValues,
        vegetablesValues: state.fetchRefValues.vegetablesValues,
        sodasValues: state.fetchRefValues.sodasValues,
        fastFoodValues: state.fetchRefValues.fastFoodValues,
        //5
        physicalHoursValues: state.fetchRefValues.physicalHoursValues,
        walkingCyclingValues: state.fetchRefValues.walkingCyclingValues,
        physicalActivityValues: state.fetchRefValues.physicalActivityValues
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchNullValues: (code) => dispatch(actions.fetchNullValues(code)),
        nullValuesRemoveMessage: () => dispatch(actions.nullValuesMsgRemove()),
        //1
        fetchDepartments: () => dispatch(actions.fetchDepartments()),
        fetchGenderValues: () => dispatch(actions.fetchGenderValues()),
        fetchAgeValues: () => dispatch(actions.fetchAgeValues()),
        fetchAcademicValues: () => dispatch(actions.fetchAcademicValues()),
        fetchMaritalValues: () => dispatch(actions.fetchMaritalValues()),
        //2
        fetchSmokerStatusValues: () => dispatch(actions.fetchSmokerStatusValues()),
        fetchSmokerFrequencieValues: () => dispatch(actions.fetchSmokerFrequencieValues()),
        fetchSmokerNumberValues: () => dispatch(actions.fetchSmokerNumberValues()),
        fetchHealthOpinionsValues: () => dispatch(actions.fetchHealthOpinionsValues()),
        //3
        fetchPainValueValues: () => dispatch(actions.fetchPainValueValues()),
        fetchPainScaleValues: () => dispatch(actions.fetchPainScaleValues()),
        fetchChronicValueValues: () => dispatch(actions.fetchChronicDiseasesValues()),
        fetchMedsValueValues: () => dispatch(actions.fetchTakesMedsValues()),
        fetchLocalPainValues: () => dispatch(actions.fetchLocalPainValues()),
        //4
        fetchMealsValues: () => dispatch(actions.fetchMealsValues()),
        fetchBreakfastValues: () => dispatch(actions.fetchBreakfastValues()),
        fetchFruitsValues: () => dispatch(actions.fetchFruitValues()),
        fetchVegetablesValues: () => dispatch(actions.fetchVegetablesValues()),
        fetchSodasValues: () => dispatch(actions.fetchSodasValues()),
        fetchFastFoodValues: () => dispatch(actions.fetchFastFoodValues()),
        //5
        fetchPhysicalHoursValues: () => dispatch(actions.fetchPhysicalHoursValues()),
        fetchPhysicalActivityValues: () => dispatch(actions.fetchPhysicalValues()),
        fetchWalkingCyclingValues: () => dispatch(actions.fetchWalkingCyclingValues()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(codeEdit);