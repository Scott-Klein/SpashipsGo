var app = new Vue(
    {
        el: '#app',
        data:
        {

        }
    }
)


Vue.component('login-form',
{
    template: `
    <div class="login-form">
    <p>UserName</p>
    <p>Password</p>
    </div>
    `
}
)

Vue.component('product-review', {
    template: 
        `
        <form class="review-form" @submit.prevent="onSubmit">

        <p>
            <label for="name">Name:</label>
            <input id="name" v-model="name">
        </P>

        <p>
            <label for="review">Review:</label>
            <textarea id="review" v-model="review"></textarea>
        </p>

        <p>
            <label for="rating">Rating:</label>
            <select id="rating" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>
        <p>
        <p>Would you recommend this product?</p>
        <p>Yes</p>
        <input type="radio" name="recommend" value="yes" checked>
        <p>No</p>
        <input type="radio" name="recommend" value="no">

        <p>
            <input type="submit" value="Submit">
        </p>
        `,
    data() {
        return {
            name: null,
            review: null,
            rating: null,
            
        }
    },
    methods: {
        onSubmit() {
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            }
            this.$emit('review-submitted', productReview)
            this.name = null;
            this.review = null;
            this.rating = null;
        }
    }     
})