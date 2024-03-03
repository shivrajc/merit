<script>
    export let project;
</script>

<div class="container">
    <p class="heading">        
        {project.project_name}
    </p>    
    <div class="content">
        <p class="description">{project.project_description}</p>
        <p class="experience content-header">Experience: <span class="value">{project.min_exp_reqd} to {project.max_exp_reqd} yrs</span></p>
        <p class="duration content-header">Duration: <span class="value">{project.duration === "" ? "NA" : project.duration}</span></p>
        <p class="skills content-header">Key Skills:
            {#each (project.skills_required.slice(0, 4)) as skill}
                <span class="skill">{skill}</span>
            {/each}
        </p>
    </div>
</div>

<style>
    .container {
        /* border: 1px solid; */
        background-color: white;
        border-radius: 8px;
        padding: 24px;
        /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
        box-shadow: rgba(29, 31, 32, 0.16) 0px 1px 4px;
        /* box-shadow: rgba(29, 31, 32, 0.25) 0px 2px 5px -1px, rgba(29, 31, 32, 0.3) 0px 1px 3px -1px; */
        color: var(--primary-black);
    }

    .heading {
        font-weight: 600;        
        font-size: 1.2rem;
        text-decoration: underline;
        text-decoration-thickness: 0.8px;
        text-underline-offset: 4px;
        margin-bottom: 12px;
        cursor: pointer;
    }

    .content {
        font-size: 0.9rem;
        color: var(--text-black);
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .description {
        line-height: 1.6;
    }

    .content-header {
        font-weight: 500;
    }

    .value {
        font-weight: 600;        
    }

    .skills {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
    }

    .skill {
        /* border: 1px solid gray; */
        border-radius: 24px;
        padding: 4px 12px;
        font-size: 12px;
        font-weight: 400;
        background-color: var(--skill-background);
        color: var(--primary-black);
        /* font-weight: 500; */
    }
</style>