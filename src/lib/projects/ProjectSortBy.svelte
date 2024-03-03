<script>
    const options = ["Latest to Oldest", "Oldest to Latest", "Exp: High to Low", "Exp: Low to High", "Duration: High to Low", "Duration: Low to High"];
</script>


<label for="sort-by">Sort by</label>
<select id="sort-by" value="Select">
    {#each options as option}
        <option value={option}>{option}</option>
    {/each}

</select>

<style>
    select {
        padding: 4px 8px;
    }
</style>