<script>
    import { projectData } from './../../data/projectData';
  import Project from './Project.svelte';
  import ProjectNav from './ProjectNav.svelte';
    
</script>

<div class="navigation">
    <ProjectNav />
</div>

<div class="container">
    {#each $projectData as project}
        <Project {project} />
    {/each}
</div>

<style>
    .navigation {
        margin-bottom: 24px;
    }


    .container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        grid-template-rows: auto;
        gap: 40px;
    }    
</style>



