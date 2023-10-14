<template>
    <!-- 8. Form Input Bindings
        a. v-model with <input type="text">, <input type="checkbox">, <input 
        type="radio">, <select> and <textarea>
        b. v-model modifiers [.lazy , .number, .trim] -->

    <div>
        <h2>Form Input Bindings</h2>

        <!-- Text Input -->
        <input type="text" v-model="textInput" />
        <p>Text Input: {{ textInput }}</p>

        <!-- Checkbox -->
        <input type="checkbox" v-model="isChecked" />
        <p>Checkbox: {{ isChecked }}</p>

        <!-- Radio Buttons -->
        <input type="radio" id="option1" value="Option 1" v-model="selectedOption" />
        <label for="option1">Option 1</label>
        <input type="radio" id="option2" value="Option 2" v-model="selectedOption" />
        <label for="option2">Option 2</label>
        <p>Selected Option: {{ selectedOption }}</p>

        <!-- Select Element -->
        <select v-model="selectedFruit">
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="cherry">Cherry</option>
        </select>
        <p>Selected Fruit: {{ selectedFruit }}</p>

        <!-- Textarea -->
        <textarea v-model="textArea"></textarea>
        <p>Textarea: {{ textArea }}</p>
    </div>

    <!-- #8.b -->
    <div>
        <h2>v-model Modifiers</h2>

        <!-- .lazy modifier -->
        <input type="text" v-model.lazy="lazyInput" />
        <p>Lazy Input: {{ lazyInput }}</p>

        <!-- .number modifier -->
        <input type="text" v-model.number="numberInput" />
        <p>Number Input (type="number"): {{ numberInput }}</p>

        <!-- .trim modifier -->
        <input type="text" v-model.trim="trimmedInput" />
        <p>Trimmed Input: {{ trimmedInput }}</p>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            textInput: '',
            isChecked: false,
            selectedOption: '',
            selectedFruit: '',
            textArea: '',
            lazyInput: '',
            numberInput: 0,
            trimmedInput: '',
        };
    },
};
</script>
  