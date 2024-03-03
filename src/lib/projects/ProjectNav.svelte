<script>
  import ProjectSortBy from "./ProjectSortBy.svelte";

</script>

<div class="container">
    <p class="header">Projects</p>
    <div class="nav-items">
        <ProjectSortBy />
    </div>
</div>

<style>
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
    }

    .header {
        font-size: 1.6rem;
        font-weight: 600;
    }
</style>