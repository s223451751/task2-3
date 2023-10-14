<!-- 9. Watchers -->
<template>
    <div>
        <h2>Watcher Example</h2>
        <p>Value to Watch: {{ valueToWatch }}</p>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            valueToWatch: 0,
        };
    },
    watch: {
        valueToWatch(newValue, oldValue) {
            console.log(`New value: ${newValue}`);
            console.log(`Old value: ${oldValue}`);

        },
    },
    created() {
        // Simulate changing the value over time
        setTimeout(() => {
            this.valueToWatch = 50;
        }, 2000);
    },
};
</script>
  