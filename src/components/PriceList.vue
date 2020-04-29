<template>
<div>
    <b-jumbotron bg-variant="light" text-variant="dark" style="width: 510px;
    height: 740px;
    margin-top: 2%;
    margin-left: 3%;">
        <template>
            <h2 style="font-size: 3rem;
            font-weight: 300;
            line-height: 1.2;
            margin-bottom: 2rem;
            margin-left: 6%">Create pricelist</h2>
        </template>

        <template>
            <b-form bg-variant="light" @submit="onSubmit">
            <b-form-group
                id="input-group-1"
                label="Workdays price:"
                label-for="input-1"
            >
                <b-form-input
                id="input-1"
                v-model="form.workdaysPrice"
                type="number"
                required
                placeholder="Enter workday price"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Weekend price:" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="form.weekendPrice"
                required
                type="number"
                placeholder="Enter weekend price"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Ads:" label-for="input-3">
                <div class="row">
                    <div>
                        <div style="margin-left: 6%; margin-top:-8%; width:315px">
                            <br>
                            <ejs-multiselect :dataSource='oglasi'
                            :fields='localFields' placeholder="Select an ad">
                            </ejs-multiselect>
                        </div>
                    </div>
                </div>
            </b-form-group>

            <b-form-group id="input-group-4" label="Price per km:" label-for="input-4">
                <b-form-input
                id="input-4"
                v-model="form.pricePerKm"
                required
                placeholder="Enter price per kilometer"
                type="number"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-5" label="Price for Collision Damage Waiver" label-for="input-5" v-if="this.show">
                <b-form-input
                id="input-5"
                v-model="form.priceCDW"
                required
                placeholder="Enter price for Collision Damage Waiver"
                type="number"
                ></b-form-input>
            </b-form-group>

            <b-form-group>
                <b-button type="submit" variant="primary">Create pricelist</b-button>
            </b-form-group>

            </b-form>

        </template>
    </b-jumbotron>
</div>
</template>

<script>
import Vue from 'vue';
import { MultiSelectPlugin } from '@syncfusion/ej2-vue-dropdowns';
Vue.use(MultiSelectPlugin);
  export default {
    name: 'PriceList',
    data() {
      return {
        form: {
          workdaysPrice: '',
          weekendPrice: '',
          ads: '',
          pricePerKm: '',
          priceCDW: '',
        },
        show: true,
        CollisionDamageWaiver: true,
        oglasi: [
            {
                id: 1,
                name: 'PrviOglas'
            },
            {
                id: 2,
                name: 'DrugiOglas'
            },
            {
                id: 3,
                name: 'TreciOglas'
            }

        ],

        localFields: { value: 'id', text: 'name' }
      }
    },
    methods: {
    }
}
</script>

<style>

 .jumbotron {
    padding: 2rem 2rem;
    margin-bottom: 2rem;
} 

@import url(https://cdn.syncfusion.com/ej2/material.css);

</style>